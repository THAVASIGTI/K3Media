/**
 * Google Form that receives /contact enquiries; its responses are linked to a Google Sheet.
 *
 * Fill these in from the form's pre-filled link (see the setup steps):
 *   formId  - the long id in https://docs.google.com/forms/d/e/<formId>/viewform
 *   entries - the `entry.<number>` names of each question
 *
 * While `formId` is empty the contact form falls back to opening an email.
 */
export const GOOGLE_FORM = {
  formId: "1FAIpQLSc5GkHSfpmNCcRSYp3DO3TgEj6f2P2UCE8dG2D4reSBWoOoUg",
  entries: {
    services: "393373599", // Checkboxes: "What do you need?"
    name: "916334147", // Short answer: Name
    phone: "198239529", // Short answer: Phone
    company: "745839576", // Short answer: Company
    message: "784497447", // Paragraph: Tell us a little more
  },
};

export const googleFormReady = () => GOOGLE_FORM.formId !== "" && Object.values(GOOGLE_FORM.entries).every(Boolean);

/** Posts one response to the Google Form. The response is opaque (no-cors), so success means "sent". */
export async function submitToGoogleForm(data: { services: string[]; name: string; phone: string; company: string; message: string }) {
  const { formId, entries } = GOOGLE_FORM;
  const body = new URLSearchParams();
  // Checkbox questions take one value per ticked option; text must match the option labels exactly.
  data.services.forEach((s) => body.append(`entry.${entries.services}`, s));
  body.append(`entry.${entries.name}`, data.name);
  body.append(`entry.${entries.phone}`, data.phone);
  body.append(`entry.${entries.company}`, data.company);
  body.append(`entry.${entries.message}`, data.message);
  await fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse`, { method: "POST", mode: "no-cors", body });
}
