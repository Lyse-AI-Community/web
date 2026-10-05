import { useState } from "react";
import type { ImageMetadata } from "astro";

import howItWorksImage1 from "../assets/images/howitworks1.jpg";
import howItWorksImage2 from "../assets/images/feature1.jpg";
import howItWorksImage3 from "../assets/images/howitworks3.jpg";
import { useTranslations, type Lang } from "@/i18n/ui";

export default function HowItWorksTab({ lang }: { lang: Lang }) {
  const t = useTranslations(lang);
  const howitworks: {
    title: string;
    description: string;
    logo: number;
    image: ImageMetadata;
  }[] = [
    {
      title: t("comp_howitworks.howitworks1Title"),
      description: t("comp_howitworks.howitworks1Desc"),
      logo: 0,
      image: howItWorksImage1,
    },
    {
      title: t("comp_howitworks.howitworks2Title"),
      description: t("comp_howitworks.howitworks2Desc"),
      logo: 1,
      image: howItWorksImage2,
    },
    {
      title: t("comp_howitworks.howitworks3Title"),
      description: t("comp_howitworks.howitworks3Desc"),
      logo: 2,
      image: howItWorksImage3,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const howitworksLogo = [
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
    >
      <path
        d="M 6.85 13.5 L 8.35 16.125 C 8.484 16.359 8.732 16.504 9.002 16.504 C 9.271 16.504 9.52 16.359 9.653 16.125 L 11.153 13.5 L 17.25 13.5 C 17.664 13.5 18 13.164 18 12.75 L 18 0.75 C 18 0.336 17.664 0 17.25 0 L 0.75 0 C 0.336 0 0 0.336 0 0.75 L 0 12.75 C 0 13.164 0.336 13.5 0.75 13.5 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 4.5)"
      />

      <circle cx="10.875" cy="11.25" r="1.125" fill="currentColor" />
      <circle cx="6.75" cy="11.25" r="1.125" fill="currentColor" />
      <circle cx="15" cy="11.25" r="1.125" fill="currentColor" />
    </svg>,

    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
    >
      <path
        d="M 5.65 10.849 L 0.485 8.946 C 0.194 8.839 0 8.561 0 8.25 C 0 7.939 0.194 7.661 0.485 7.553 L 5.65 5.65 L 7.553 0.485 C 7.661 0.194 7.939 0 8.25 0 C 8.561 0 8.839 0.194 8.946 0.485 L 10.849 5.65 L 16.014 7.553 C 16.306 7.661 16.5 7.939 16.5 8.25 C 16.5 8.561 16.306 8.839 16.014 8.946 L 10.849 10.849 L 8.946 16.014 C 8.839 16.306 8.561 16.5 8.25 16.5 C 7.939 16.306 7.661 16.014 7.553 16.014 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2.25 5.25)"
      />

      <path
        d="M 0 0 L 0 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        transform="translate(16.5 1.5)"
      />

      <path
        d="M 0 0 L 0 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        transform="translate(21 6.75)"
      />

      <path
        d="M 0 0 L 4.5 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        transform="translate(14.25 3.75)"
      />

      <path
        d="M 0 0 L 3 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        transform="translate(19.5 8.25)"
      />
    </svg>,

    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M8.25 12.75L10.5 15L15.75 9.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
  ];

  return (
    <div
      className="
        flex
        w-full
        flex-col
        gap-6
        md:flex-row
        md:items-center
        md:gap-8
      "
    >
      <div
        className="
          order-1
          w-full
          min-w-0
          md:order-1
          md:flex-1
        "
      >
        <div className="w-full overflow-hidden rounded-lg">
          {howitworks.map((feat, idx) => (
            <img
              key={feat.title}
              src={feat.image.src}
              alt={feat.title}
              width={516}
              height={396.8}
              hidden={idx !== activeTab}
              className="
                block
                h-auto
                w-full
                rounded-lg
                object-cover
              "
            />
          ))}
        </div>
      </div>
      <div
        className="
          order-2
          flex
          w-full
          flex-col
          p-0
          md:w-[320px]
          md:shrink-0
          md:p-4
          lg:w-95
          lg:p-6
        "
      >
        {howitworks.map((feat, idx) => {
          const isActive = idx === activeTab;

          return (
            <button
              key={feat.title}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`
                group
                w-full
                cursor-pointer
                border-l-2
                px-4
                py-4
                text-left
                transition-all
                duration-200

                ${
                  isActive
                    ? "border-white text-white"
                    : "border-white/20 text-white/70 hover:border-white/60 hover:text-white"
                }

                sm:px-5
                sm:py-5
              `}
              aria-current={isActive ? "step" : undefined}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    transition-opacity
                    ${
                      isActive
                        ? "opacity-100"
                        : "opacity-60 group-hover:opacity-100"
                    }
                  `}
                >
                  {howitworksLogo[feat.logo]}
                </span>

                <span
                  className="
                    text-base
                    font-medium
                    sm:text-lg
                    lg:text-xl
                  "
                >
                  {feat.title}
                </span>
              </div>

              <p
                className="
                  mt-2
                  pl-10
                  text-sm
                  leading-relaxed
                  text-white/45
                  sm:text-base
                "
              >
                {feat.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
