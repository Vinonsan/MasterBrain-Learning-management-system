import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { EMAIL_FROM, ADMIN_EMAIL } from "@/src/lib/email/constants";
import { contactTemplate } from "@/src/lib/email/templates/contact.template";

type ContactPayload = {
  fullName: string;
  email: string;
  phone?: string;
  course?: string;
  message: string;
};

const isNonEmpty = (value?: string) => Boolean(value && value.trim().length > 0);

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    if (!isNonEmpty(body.fullName) || !isNonEmpty(body.email) || !isNonEmpty(body.message)) {
      return NextResponse.json(
        { error: "Full name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass || !ADMIN_EMAIL) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const { subject, html } = contactTemplate({
      name: body.fullName.trim(),
      email: body.email.trim(),
      phone: body.phone?.trim(),
      course: body.course?.trim(),
      message: body.message.trim(),
    });

    await transporter.sendMail({
      from: EMAIL_FROM,
      to: ADMIN_EMAIL,
      replyTo: body.email.trim(),
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
