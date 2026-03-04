"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "react-hot-toast";

import SectionHeading from "@/src/components/layouts/SectionHeading";
import Button from "@/src/components/base/Button";
import Input from "@/src/components/base/Input";
import Select from "@/src/components/base/Select";
import Textarea from "@/src/components/base/TextArea";

import { COURSE_OPTIONS } from "../_utils/components/constants/courseOptions";

const CONTACT_EMAIL = "support@masterbrain.site";

const ContactForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Contact Form: ${form.fullName || "Website Visitor"}`;
    const body = [
      `Name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Phone / WhatsApp: ${form.phone || "Not provided"}`,
      `Interested Course: ${form.course || "Not selected"}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    toast.success("Opening your email app...");

    setForm({
      fullName: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
  }

  return (
    <section className="py-8">
      <SectionHeading
        title="Send a message"
        subtitle="Fill out the form below and your email app will open with the message pre-filled."
        align="center"
      />

      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <Input
            id="fullName"
            label="Full Name"
            type="text"
            value={form.fullName}
            placeholder="Your name"
            required
            onChange={(value) =>
              setForm((prev) => ({ ...prev, fullName: String(value) }))
            }
          />

          <Input
            id="email"
            label="Email Address"
            type="email"
            value={form.email}
            placeholder="you@example.com"
            required
            onChange={(value) =>
              setForm((prev) => ({ ...prev, email: String(value) }))
            }
          />

          <Input
            id="phone"
            label="Phone / WhatsApp"
            type="text"
            value={form.phone}
            placeholder="+94 7X XXX XXXX"
            onChange={(value) =>
              setForm((prev) => ({ ...prev, phone: String(value) }))
            }
          />

          <Select
            label="Interested Course"
            labelKey="label"
            valueKey="value"
            value={form.course}
            options={[
              { label: "Select a course", value: "", disabled: true },
              ...COURSE_OPTIONS,
            ]}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, course: value as string }))
            }
          />

          <Textarea
            label="Message"
            value={form.message}
            rows={5}
            placeholder="Tell us about your goals or questions..."
            onChange={(value) =>
              setForm((prev) => ({ ...prev, message: String(value) }))
            }
          />

          <div className="text-center">
            <Button type="submit" variant="rounded" size="lg">
              Send Message
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
