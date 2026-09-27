import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "À quoi sert cette plateforme d'IA ?",
    answer: "Il vous aide à générer, tester et déployer des idées grâce à des modèles d'IA avancés, le tout dans un espace de travail simple."
  },
  {
    id: 2,
    question: "Existe-t-il une formule gratuite ?",
    answer: "Le site est actuellement présenté comme gratuit et open-source. Les limites éventuelles du service et de l'API doivent être vérifiées avant toute promesse d'accès illimité."
  },
  {
    id: 3,
    question: "Ai-je besoin de connaissances techniques pour l'utiliser ?",
    answer: "Absolument pas. La plateforme est conçue pour tous, des débutants qui découvrant l'IA aux professionnels qui élaborant des flux de travail complexes."
  },
  {
    id: 4,
    question: "Puis-je utiliser ceci à des fins professionnelles ?",
    answer: "Absolument. Notre intelligence artificiel est conçus pour les indépendants, les startups et les équipes qui développent des projets d'IA."
  },
  {
    id: 5,
    question: "Quels modèles d'IA alimentent cet outil ?",
    answer: "Nous intégrons des LLM de pointe et des assistants optimisés, garantissant précision, rapidité et adaptabilité à de multiples cas d'utilisation."
  },
  {
    id: 6,
    question: "Comment puis-je obtenir de l'aide en cas de problème ?",
    answer: "Vous pourrais nous contactez directement sur discord avec le lien tout en bas du site, sur github si cela vous convient ou alors directement sur notre discord."
  }
];

export default function FAQ() {
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggleFAQ = (id: number) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
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
              className="border overflow-hidden transition-colors duration-200" style={{ borderColor: "rgba(255, 255, 255, 0.12)" }}
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
                    isOpen ? 'rotate-180 text-white' : ''
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