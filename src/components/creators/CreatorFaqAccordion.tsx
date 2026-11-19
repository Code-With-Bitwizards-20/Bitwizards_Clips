"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { creatorFaqs } from "@/data/creators";

export function CreatorFaqAccordion() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {creatorFaqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl bg-space-800/80 border border-chrome-silver/10 overflow-hidden"
        >
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-display font-bold text-soft-white hover:text-cyber-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan"
            aria-expanded={openFaq === i}
            aria-controls={`faq-answer-${i}`}
          >
            <span className="text-sm sm:text-base">{faq.question}</span>
            {openFaq === i ? (
              <ChevronUp className="w-5 h-5 shrink-0 text-cyber-cyan" />
            ) : (
              <ChevronDown className="w-5 h-5 shrink-0 text-chrome-dark" />
            )}
          </button>
          {openFaq === i && (
            <div
              id={`faq-answer-${i}`}
              className="px-6 pb-5 text-chrome-silver text-sm leading-relaxed border-t border-chrome-silver/10 pt-4"
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
