"use server";

import { z } from "zod";
import { site } from "@/lib/site";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(7, { message: "Phone number is required" }),
  sessionType: z.enum(site.sessionTypes as unknown as [string, ...string[]]),
  preferredDate: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export type ContactFormValues = z.infer<typeof formSchema>;

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string; mailto?: string };

function buildMailto(values: ContactFormValues) {
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const subject = `Session inquiry: ${values.sessionType} — ${values.name}`;
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    `Session: ${values.sessionType}`,
    values.preferredDate ? `Preferred date: ${values.preferredDate}` : null,
    "",
    values.message,
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function submitSessionInquiry(
  raw: unknown,
): Promise<ContactResult> {
  const parsed = formSchema.safeParse(raw);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Please check the form and try again.";
    return { ok: false, error: first };
  }

  const values = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Ninh Studio Website <noreply@${to.split("@")[1] ?? "ninhstudio.ca"}>`,
        to: [to],
        reply_to: values.email,
        subject: `Session inquiry: ${values.sessionType} — ${values.name}`,
        text: [
          `Name: ${values.name}`,
          `Email: ${values.email}`,
          `Phone: ${values.phone}`,
          `Session: ${values.sessionType}`,
          values.preferredDate ? `Preferred date: ${values.preferredDate}` : null,
          "",
          values.message,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (!res.ok) {
      return {
        ok: false,
        error: `Could not send automatically. Email ${site.email} or call ${site.phoneDisplay}.`,
        mailto: buildMailto(values),
      };
    }

    return { ok: true };
  }

  return {
    ok: false,
    error: "Opening your email app to send this inquiry.",
    mailto: buildMailto(values),
  };
}
