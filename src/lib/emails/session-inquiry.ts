import { formatAddress, site } from "@/lib/site";

export type SessionInquiryFields = {
  name: string;
  email: string;
  phone: string;
  sessionType: string;
  preferredDate?: string;
  message: string;
};

const INK = "#0A0A0A";
const IVORY = "#F7F3ED";
const GOLD = "#B3A38B";
const GOLD_PALE = "#E2D8C6";
const SEAL = "#9E2A2B";
const MUTED = "#616161";

function siteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ninhstudio.ca").replace(/\/$/, "");
}

function logoUrl() {
  return `${siteUrl()}${site.images.logo}`;
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fieldRow(label: string, value: string, last = false) {
  const border = last ? "none" : `1px solid ${GOLD_PALE}`;
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:${border};vertical-align:top;width:140px;">
        <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${GOLD};">${escapeHtml(label)}</p>
      </td>
      <td style="padding:14px 0;border-bottom:${border};vertical-align:top;">
        <p style="margin:0;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5;color:${INK};">${value}</p>
      </td>
    </tr>`;
}

function emailShell(options: { eyebrow: string; intro: string; bodyRows: string }) {
  const { eyebrow, intro, bodyRows } = options;
  const address = formatAddress();

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ninh Studio</title>
  </head>
  <body style="margin:0;padding:0;background-color:${IVORY};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${IVORY};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border:1px solid ${GOLD_PALE};">
            <tr>
              <td style="background-color:${INK};padding:28px 36px 24px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="vertical-align:middle;padding-right:14px;">
                      <img src="${escapeHtml(logoUrl())}" alt="Ninh Studio" width="56" height="56" style="display:block;width:56px;height:56px;object-fit:cover;border:1px solid ${GOLD};" />
                    </td>
                    <td style="vertical-align:middle;">
                      <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:26px;letter-spacing:0.28em;color:${GOLD_PALE};">NINH</p>
                      <p style="margin:6px 0 0;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:10px;letter-spacing:0.38em;text-transform:uppercase;color:${GOLD};">Photography Studio</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="height:3px;background-color:${SEAL};font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:36px 36px 12px;">
                <p style="margin:0 0 10px;display:inline-block;padding:6px 10px;border:1px solid ${GOLD};font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:${GOLD};">${escapeHtml(eyebrow)}</p>
                <p style="margin:16px 0 0;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:${MUTED};">${intro}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 36px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${bodyRows}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 36px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="height:1px;background-color:${GOLD_PALE};font-size:0;line-height:0;">&nbsp;</td>
                  </tr>
                </table>
                <p style="margin:18px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:14px;color:${INK};">${escapeHtml(site.name)}</p>
                <p style="margin:6px 0 0;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:13px;line-height:1.6;color:${MUTED};">
                  ${escapeHtml(address)}<br />
                  ${escapeHtml(site.phoneDisplay)} · <a href="mailto:${escapeHtml(site.email)}" style="color:${GOLD};text-decoration:none;">${escapeHtml(site.email)}</a><br />
                  <a href="${escapeHtml(site.instagram)}" style="color:${GOLD};text-decoration:none;">${escapeHtml(site.instagramHandle)}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function nl2br(value: string) {
  return escapeHtml(value).replace(/\r\n|\r|\n/g, "<br />");
}

export function sessionInquiryStudioEmail(values: SessionInquiryFields) {
  const preferred = values.preferredDate?.trim() ? values.preferredDate : "Not specified";
  const html = emailShell({
    eyebrow: "New session inquiry",
    intro: `A new inquiry arrived from the Ninh Studio website. Reply directly to this email to reach ${escapeHtml(values.name)}.`,
    bodyRows: [
      fieldRow("Name", escapeHtml(values.name)),
      fieldRow("Email", `<a href="mailto:${escapeHtml(values.email)}" style="color:${INK};text-decoration:none;">${escapeHtml(values.email)}</a>`),
      fieldRow("Phone", `<a href="tel:${escapeHtml(values.phone)}" style="color:${INK};text-decoration:none;">${escapeHtml(values.phone)}</a>`),
      fieldRow("Session", escapeHtml(values.sessionType)),
      fieldRow("Preferred date", escapeHtml(preferred)),
      fieldRow("Message", nl2br(values.message), true),
    ].join(""),
  });

  const text = [
    "New session inquiry — Ninh Studio",
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    `Session: ${values.sessionType}`,
    `Preferred date: ${preferred}`,
    "",
    values.message,
    "",
    `${site.name}`,
    formatAddress(),
    `${site.phoneDisplay} · ${site.email}`,
    site.instagramHandle,
  ].join("\n");

  return {
    subject: `Session inquiry: ${values.sessionType} — ${values.name}`,
    html,
    text,
  };
}

export function sessionInquiryConfirmationEmail(values: SessionInquiryFields) {
  const preferred = values.preferredDate?.trim() ? values.preferredDate : "Not specified";
  const html = emailShell({
    eyebrow: "Inquiry received",
    intro: `Thank you, ${escapeHtml(values.name)}. We received your inquiry — Michelle will be in touch soon.`,
    bodyRows: [
      fieldRow("Session", escapeHtml(values.sessionType)),
      fieldRow("Preferred date", escapeHtml(preferred)),
      fieldRow("Your message", nl2br(values.message), true),
    ].join(""),
  });

  const text = [
    "We received your inquiry — Ninh Studio",
    "",
    `Thank you, ${values.name}. Michelle will be in touch soon.`,
    "",
    `Session: ${values.sessionType}`,
    `Preferred date: ${preferred}`,
    "",
    values.message,
    "",
    `${site.name}`,
    formatAddress(),
    `${site.phoneDisplay} · ${site.email}`,
    site.instagramHandle,
  ].join("\n");

  return {
    subject: "We received your inquiry — Ninh Studio",
    html,
    text,
  };
}
