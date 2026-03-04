"use server";

import sendEmail from "@/utils/sendemail";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(
  data: ContactFormData,
): Promise<{ success: boolean; error?: string }> {
  const { name, email, subject, message } = data;

  if (!name || !email || !subject || !message) {
    return { success: false, error: "All fields are required." };
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #111; margin-bottom: 8px;">New Contact Form Submission</h2>
      <p style="color: #666; margin-bottom: 24px; font-size: 14px;">You have received a new message from your portfolio contact form.</p>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; width: 120px;">Name</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 14px;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Email</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 14px;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Subject</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 14px;">${subject}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Message</td>
          <td style="padding: 10px 0; color: #111; font-size: 14px; white-space: pre-wrap;">${message}</td>
        </tr>
      </table>

      <p style="margin-top: 24px; font-size: 12px; color: #aaa;">This email was sent from your portfolio contact form at elhassan.dahmouchi.pro@gmail.com</p>
    </div>
  `;

  try {
    await sendEmail("elhassan.dahmouchi.pro@gmail.com", subject, html);
    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, error: "Failed to send email. Please try again." };
  }
}
