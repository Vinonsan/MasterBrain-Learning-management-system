interface ContactTemplateProps {
  name: string;
  email: string;
  phone?: string;
  course?: string;
  message: string;
}

export const contactTemplate = ({
  name,
  email,
  phone,
  course,
  message,
}: ContactTemplateProps) => ({
  subject: "New Contact Form Submission",
  html: `
    <div style="font-family: Arial, sans-serif; background-color: #f6f8fb; padding: 24px;">
      <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 24px; border: 1px solid #e5e7eb;">
        <div style="display: flex; align-items: center; gap: 12px;">
         
          <div>
            <div style="font-size: 18px; font-weight: 700; color: #111827;">New Contact Message</div>
            <div style="font-size: 12px; color: #6b7280;">MasterBrain Contact Form</div>
          </div>
        </div>

        <div style="margin-top: 20px; padding: 16px; background: #f9fafb; border-radius: 10px; border: 1px solid #eef2f7;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #111827;">
            <tr>
              <td style="padding: 6px 0; width: 140px; color: #6b7280;">Name</td>
              <td style="padding: 6px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; width: 140px; color: #6b7280;">Email</td>
              <td style="padding: 6px 0; font-weight: 600;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; width: 140px; color: #6b7280;">Phone / WhatsApp</td>
              <td style="padding: 6px 0; font-weight: 600;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; width: 140px; color: #6b7280;">Interested Course</td>
              <td style="padding: 6px 0; font-weight: 600;">${course || "Not selected"}</td>
            </tr>
          </table>
        </div>

        <div style="margin-top: 20px;">
          <div style="font-size: 13px; font-weight: 700; color: #111827; margin-bottom: 8px;">Message</div>
          <div style="font-size: 14px; line-height: 1.6; color: #111827; background: #ffffff; border-left: 4px solid #0f172a; padding: 12px 14px;">
            ${message}
          </div>
        </div>

        <div style="margin-top: 24px; font-size: 12px; color: #6b7280; text-align: center;">
          Reply directly to this email to reach the sender.
        </div>
      </div>
    </div>
  `,
});
