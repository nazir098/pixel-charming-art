// Central contact configuration. Update values here to change them site-wide.
export const CONTACT = {
  // Phone number shown to users (used for display + tel: links)
  phone: "8851930450",
  // International format used for WhatsApp links (no "+" or spaces)
  phoneIntl: "918851930450",
  // Primary contact email (used in mailto: links and display)
  email: "info@wishtek.tech",
  // Email used for legal/policy pages (support inbox)
  supportEmail: "support@wishtek.tech",
} as const;

export const telHref = `tel:${CONTACT.phone}`;
export const mailHref = `mailto:${CONTACT.email}`;
export const supportMailHref = `mailto:${CONTACT.supportEmail}`;

/** Build a wa.me link with an optional pre-filled message. */
export function whatsappHref(message?: string) {
  const base = `https://wa.me/${CONTACT.phoneIntl}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
