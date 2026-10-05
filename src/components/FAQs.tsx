import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations, type Lang } from "@/i18n/ui";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ({ lang }: { lang: Lang }) {
  const [openIds, setOpenIds] = useState<number[]>([]);
  const t = useTranslations(lang);

  const FAQS: FAQItem[] = [
    {
      id: 1,
      question: t("comp_faq.faq1Q"),
      answer: t("comp_faq.faq1A"),
    },
    {
      id: 2,
      question: t("comp_faq.faq2Q"),
      answer: t("comp_faq.faq2A"),
    },
    {
      id: 3,
      question: t("comp_faq.faq3Q"),
      answer: t("comp_faq.faq3A"),
    },
    {
      id: 4,
      question: t("comp_faq.faq4Q"),
      answer: t("comp_faq.faq4A"),
    },
    {
      id: 5,
      question: t("comp_faq.faq5Q"),
      answer: t("comp_faq.faq5A"),
    },
    {
      id: 6,
      question: t("comp_faq.faq6A"),
      answer: t("comp_faq.faq6A"),
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {FAQS.map((faq) => {
          const isOpen = openIds.includes(faq.id);

          return (
            <div
              key={faq.id}
              className="border overflow-hidden transition-colors duration-200"
              style={{ borderColor: "rgba(255, 255, 255, 0.12)" }}
            >
              <button
                id={`faq-question-${faq.id}`}
                type="button"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full flex items-center justify-between p-4 text-left text-[16px] font-medium text-white gap-3 cursor-pointer select-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-white shrink-0 transition-transform duration-300 ease-out ${
                    isOpen ? "rotate-180 text-white" : ""
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${faq.id}`}
                role="region"
                aria-labelledby={`faq-question-${faq.id}`}
                hidden={!isOpen}
                className="px-4 pb-4"
              >
                <p className="text-sm text-white/45 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
