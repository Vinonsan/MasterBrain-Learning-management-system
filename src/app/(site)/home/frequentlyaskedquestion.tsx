"use client"

import React, { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import SectionHeading from "@/src/components/layouts/SectionHeading"
import Image from "next/image"

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What courses do you offer?",
    answer:
      "We offer comprehensive courses in React JS, JavaScript, Next.js, Node.js, and .NET. All courses are designed for Tamil medium learners and focus on practical, industry-relevant skills.",
  },
  {
    id: 2,
    question: "How long does it take to complete a course?",
    answer:
      "Most courses range from 3 to 6 months with flexible schedules. You’ll retain lifetime access to all learning materials.",
  },
  {
    id: 3,
    question: "Do I need prior programming experience?",
    answer:
      "No prior experience is required. We also provide foundation programs for complete beginners.",
  },
  {
    id: 4,
    question: "Are the classes conducted in Tamil?",
    answer:
      "Yes, all courses are conducted in Tamil for better understanding and comfort.",
  },
]

export default function Frequentlyaskedquestion() {
  const [openItems, setOpenItems] = useState<number[]>([1])

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <section className="relative overflow-hidden py-24">
      <div className="container mx-auto">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our courses and learning experience"
          align="center"
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="relative lg:col-span-1 flex flex-col items-center lg:items-start gap-6">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/faq.png"
                alt="Learning Support"
                fill
                className="object-cover"
              />

              <div className="absolute top-4 left-4 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white shadow-lg">
                Student Support
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq) => {
              const isOpen = openItems.includes(faq.id)

              return (
                <div
                  key={faq.id}
                  className={`group relative rounded-2xl border bg-white transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-primary border-2 shadow-lg"
                      : "border-gray-200 hover:shadow-lg"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                          isOpen
                            ? "bg-primary text-white rotate-180"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <HelpCircle size={20} />
                      </div>

                      <h2
                        className={`text-lg font-semibold transition-colors ${
                          isOpen ? "text-primary" : "text-dark"
                        }`}
                      >
                        {faq.question}
                      </h2>
                    </div>

                    <ChevronDown
                      size={24}
                      className={`text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pl-20 text-dark/80 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
