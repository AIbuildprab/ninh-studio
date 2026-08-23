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
const SERIF = "Georgia,'Times New Roman',serif";
const SANS = "'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

function logoUrl() {
  return `${site.origin}${site.images.logo}`;
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
      <td style="padding:10px 0;border-bottom:${border};vertical-align:top;width:132px;">
        <p style="margin:0;font-family:${SERIF};font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${GOLD};">${escapeHtml(label)}</p>
      </td>
      <td style="padding:10px 0;border-bottom:${border};vertical-align:top;">
        <p style="margin:0;font-family:${SANS};font-size:15px;line-height:1.5;color:${INK};">${value}</p>
      </td>
    </tr>`;
}

function ctaButton(href: string, label: string) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 4px;">
      <tr>
        <td style="border:1px solid ${GOLD};">
          <a href="${escapeHtml(href)}" style="display:inline-block;padding:12px 22px;font-family:${SANS};font-size:12px;letter-spacing:0.16em;text-transform:uppercase;text-decoration:none;color:${INK};">${escapeHtml(label)}</a>
        </td>
      </tr>
    </table>`;
}

function emailShell(options: {
  eyebrow: string;
  intro: string;
  bodyRows: string;
  cta?: { href: string; label: string };
}) {
  const { eyebrow, intro, bodyRows, cta } = options;
  const address = formatAddress();

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ninh Studio</title>
  </head>
  <body style="margin:0;padding:0;background-color:${IVORY};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${IVORY};padding:28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border:1px solid ${GOLD_PALE};">
            <tr>
              <td style="background-color:${INK};padding:26px 32px 22px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="vertical-align:middle;padding-right:16px;">
                      <img src="${escapeHtml(logoUrl())}" alt="Ninh Studio" width="56" height="56" style="display:block;width:56px;height:56px;object-fit:cover;border:1px solid ${GOLD};" />
                    </td>
                    <td style="vertical-align:middle;">
                      <table role="presentation" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="vertical-align:bottom;padding-right:8px;">
                            <p style="margin:0;font-family:${SERIF};font-size:26px;letter-spacing:0.26em;line-height:1;color:${GOLD_PALE};">NINH</p>
                          </td>
                          <td style="vertical-align:bottom;">
                            <span style="display:inline-block;width:18px;height:18px;background-color:${SEAL};color:#ffffff;font-family:${SERIF};font-size:11px;line-height:18px;text-align:center;">寧</span>
                          </td>
                        </tr>
                      </table>
                      <p style="margin:8px 0 0;font-family:${SANS};font-size:10px;letter-spacing:0.38em;text-transform:uppercase;color:${GOLD};">Photography Studio</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="height:3px;background-color:${SEAL};font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:28px 32px 8px;">
                <p style="margin:0 0 12px;display:inline-block;padding:5px 10px;border:1px solid ${GOLD};font-family:${SANS};font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:${GOLD};">${escapeHtml(eyebrow)}</p>
                <p style="margin:0;font-family:${SANS};font-size:16px;line-height:1.6;color:${MUTED};">${intro}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${bodyRows}
                </table>
              </td>
            </tr>
            ${
              cta
                ? `<tr>
              <td style="padding:16px 32px 8px;">
                ${ctaButton(cta.href, cta.label)}
              </td>
            </tr>`
                : ""
            }
            <tr>
              <td style="background-color:${INK};padding:24px 32px;">
                <p style="margin:0;font-family:${SERIF};font-size:15px;letter-spacing:0.12em;color:${GOLD_PALE};">${escapeHtml(site.name)}</p>
                <p style="margin:10px 0 0;font-family:${SANS};font-size:13px;line-height:1.65;color:${GOLD};">
                  ${escapeHtml(address)}<br />
                  <a href="${escapeHtml(site.phoneHref)}" style="color:${GOLD_PALE};text-decoration:none;">${escapeHtml(site.phoneDisplay)}</a>
                  &nbsp;·&nbsp;
                  <a href="mailto:${escapeHtml(site.email)}" style="color:${GOLD_PALE};text-decoration:none;">${escapeHtml(site.email)}</a><br />
                  <a href="${escapeHtml(site.instagram)}" style="color:${GOLD_PALE};text-decoration:none;">${escapeHtml(site.instagramHandle)}</a>
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
    cta: { href: site.origin, label: "Visit Ninh Studio" },
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
    site.origin,
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
