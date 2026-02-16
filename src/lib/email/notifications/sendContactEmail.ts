import mailer from "../client/mailer";
import { contactTemplate } from "../templates/contact.template";
import { EMAIL_FROM, ADMIN_EMAIL } from "../constants";

interface SendContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail({
  name,
  email,
  message,
}: SendContactEmailProps) {
  const { subject, html } = contactTemplate({ name, email, message });

  await mailer.sendMail({
    from: EMAIL_FROM,
    to: ADMIN_EMAIL,
    replyTo: email,
    subject,
    html,
  });
}
