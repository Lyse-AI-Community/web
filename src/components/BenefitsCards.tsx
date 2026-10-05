import { motion, type Variants } from "framer-motion";

export default function BenefitsCards({
  benefits,
}: {
  benefits: {
    title: string;
    description: string;
    logo: number;
  }[];
}) {
  const benefitsLogo = [
    <svg
      display="block"
      role="presentation"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 6 6 L 0.3 1.725 C 0.111 1.583 0 1.361 0 1.125 L 0 0 L 12 0 L 12 1.091 C 11.999 1.326 11.889 1.546 11.702 1.688 L 6 6 L 6 6"
        fillOpacity="0"
        fill="currentColor"
        height="6px"
        transform="translate(6 6)"
        width="12px"
      />
      <path
        d="M 0 0 L 12 0"
        fill="transparent"
        height="1px"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(6 6)"
        width="12px"
      />
      <path
        d="M 6 9 L 0.3 4.725 C 0.111 4.583 0 4.361 0 4.125 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 11.25 0 C 11.664 0 12 0.336 12 0.75 L 12 4.091 C 11.999 4.326 11.889 4.546 11.702 4.688 L 6 9 L 6 9"
        fill="transparent"
        height="9px"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(6 3)"
        width="12px"
      />
      <path
        d="M 6 0 L 0.3 4.275 C 0.111 4.417 0 4.639 0 4.875 L 0 8.25 C 0 8.664 0.336 9 0.75 9 L 11.25 9 C 11.664 9 12 8.664 12 8.25 L 12 4.909 C 12 4.674 11.889 4.452 11.702 4.311 L 6 0 L 6 0"
        fill="transparent"
        height="9px"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(6 12)"
        width="12px"
      />
    </svg>,
    <svg
      display="block"
      role="presentation"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 6.75 5.201 L 4.5 7.451 L 4.5 0 L 0.219 4.232 C 0.079 4.372 0 4.563 0 4.762 L 0 11.951 L 7.19 11.951 C 7.388 11.951 7.579 11.872 7.719 11.732 L 14.213 5.164 Z"
        fillOpacity="0"
        fill="currentColor"
        height="11.951250000000002px"
        id="pzs8kyRI3"
        transform="translate(6 6.049)"
        width="14.212500000000006px"
      />
      <path
        d="M 14.25 0 L 0 14.25"
        fill="transparent"
        height="14.25px"
        id="gQPbmYmeM"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(3 6.75)"
        width="14.25px"
      />
      <path
        d="M 7.719 15.531 C 7.579 15.671 7.388 15.75 7.19 15.75 L 0 15.75 L 0 8.561 C 0 8.362 0.079 8.171 0.219 8.031 L 6.788 1.538 C 8.838 -0.513 12.162 -0.513 14.213 1.538 C 16.263 3.588 16.263 6.912 14.213 8.963 Z"
        fill="transparent"
        height="15.750267850310113px"
        id="PKSsd1BJ9"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(6 2.25)"
        width="15.75026785031011px"
      />
      <path
        d="M 0 0 L 0 7.451"
        fill="transparent"
        height="7.451250000000002px"
        id="Y9FnsRAz_"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(10.5 6.049)"
        width="1px"
      />
      <path
        d="M 0 0 L 7.425 0"
        fill="transparent"
        height="1px"
        id="RWnHzlDSJ"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(12.75 11.25)"
        width="7.424999999999997px"
      />
    </svg>,
    <svg
      display="block"
      role="presentation"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 0 4.5 C 0 2.015 2.015 0 4.5 0 C 6.985 0 9 2.015 9 4.5 C 9 6.985 6.985 9 4.5 9 C 2.015 9 0 6.985 0 4.5 Z"
        fillOpacity="0"
        fill="currentColor"
        height="9px"
        id="H1R4C0x9Q"
        transform="translate(7.5 7.5)"
        width="9px"
      />
      <path
        d="M 0 9 L 9 0"
        fill="transparent"
        height="9px"
        id="bUAtlYSSu"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(12 3)"
        width="9px"
      />
      <path
        d="M 15.338 2.625 C 12.033 -0.672 6.754 -0.89 3.188 2.123 C -0.378 5.135 -1.044 10.377 1.655 14.186 C 4.354 17.995 9.519 19.104 13.544 16.738 C 17.569 14.372 19.112 9.32 17.097 5.109"
        fill="transparent"
        height="17.97837613750978px"
        id="j5LOquzhO"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(3.026 3.011)"
        width="17.979200387801164px"
      />
      <path
        d="M 7.68 1.316 C 6.144 -0.218 3.732 -0.437 1.945 0.796 C 0.158 2.029 -0.494 4.362 0.395 6.342 C 1.284 8.323 3.46 9.387 5.569 8.871 C 7.678 8.356 9.118 6.409 8.993 4.241"
        fill="transparent"
        height="9.000613277709206px"
        id="KXYJT1ORo"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(7.501 7.502)"
        width="9.000523854961273px"
      />
    </svg>,
    <svg
      display="block"
      role="presentation"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 12.75 0 C 11.093 0 9.75 1.343 9.75 3 C 9.75 1.343 8.407 0 6.75 0 L 0 0 L 0 13.5 L 6.75 13.5 C 8.407 13.5 9.75 14.843 9.75 16.5 C 9.75 14.843 11.093 13.5 12.75 13.5 L 19.5 13.5 L 19.5 0 Z"
        fillOpacity="0"
        fill="currentColor"
        height="16.5px"
        id="VaJ0SXoYw"
        transform="translate(2.25 5.25)"
        width="19.5px"
      />
      <path
        d="M 0 3 C 0 1.343 1.343 0 3 0 L 9.75 0 L 9.75 13.5 L 3 13.5 C 1.343 13.5 0 14.843 0 16.5"
        fill="transparent"
        height="16.5px"
        id="oAakIlfTx"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(12 5.25)"
        width="9.75px"
      />
      <path
        d="M 0 13.5 L 6.75 13.5 C 8.407 13.5 9.75 14.843 9.75 16.5 L 9.75 3 C 9.75 1.343 8.407 0 6.75 0 L 0 0 Z"
        fill="transparent"
        height="16.5px"
        id="imv5_mFb8"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(2.25 5.25)"
        width="9.75px"
      />
    </svg>,
    <svg
      display="block"
      role="presentation"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 5.599 6.817 C 5.406 6.695 5.279 6.492 5.254 6.265 C 5.229 6.039 5.308 5.813 5.469 5.652 L 9.75 1.5 L 13.462 1.5 L 13.436 1.372 L 8.25 0 L 3.064 1.372 L 0 7.5 L 5.25 11.25 L 11.25 12.75 L 15 9 L 11.25 6 C 9.469 7.793 7.24 7.866 5.599 6.817 Z"
        fillOpacity="0"
        fill="currentColor"
        height="12.75px"
        id="STPphmIs1"
        transform="translate(3.75 5.25)"
        width="15px"
      />
      <path
        d="M 15 1.5 L 11.25 5.25 L 5.25 3.75 L 0 0"
        fill="transparent"
        height="5.25px"
        id="s2UlGIQsD"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(3.75 12.75)"
        width="15px"
      />
      <path
        d="M 0 1.372 L 5.186 0 L 10.373 1.372"
        fill="transparent"
        height="1.371562499999996px"
        id="G7qRvgQXA"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(6.814 5.25)"
        width="10.372500000000002px"
      />
      <path
        d="M 2.472 0.414 L 0.079 5.201 C -0.106 5.571 0.044 6.022 0.414 6.207 L 3 7.5 L 6.063 1.371 L 3.479 0.08 C 3.301 -0.01 3.095 -0.024 2.906 0.038 C 2.717 0.101 2.561 0.236 2.472 0.414 Z"
        fill="transparent"
        height="7.499895614211489px"
        id="NSMDpsBS0"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(0.75 5.25)"
        width="6.0634330695530725px"
      />
      <path
        d="M 3.064 7.5 L 5.649 6.207 C 6.019 6.022 6.169 5.571 5.984 5.201 L 3.592 0.414 C 3.502 0.236 3.346 0.101 3.157 0.038 C 2.969 -0.024 2.763 -0.01 2.585 0.08 L 0 1.371 Z"
        fill="transparent"
        height="7.499895614211496px"
        id="Q4stJJpxq"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(17.186 5.25)"
        width="6.063433069553071px"
      />
      <path
        d="M 8.25 0 L 4.5 0 L 0.22 4.152 C 0.059 4.313 -0.021 4.539 0.005 4.765 C 0.03 4.992 0.157 5.195 0.349 5.317 C 1.991 6.366 4.219 6.293 6 4.5 L 9.75 7.5 L 11.25 6"
        fill="transparent"
        height="7.5px"
        id="V8C7CgGuv"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(9 6.75)"
        width="11.250434208778643px"
      />
      <path
        d="M 6.381 2.742 L 2.469 1.764 L 0 0"
        fill="transparent"
        height="2.7421875px"
        id="JmxDCNKU_"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(5.25 17.508)"
        width="6.380625000000002px"
      />
    </svg>,
    <svg
      display="block"
      role="presentation"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 13.875 4.854 L 6.938 0 L 0 4.854 C 2.332 9.244 6.938 10.5 6.938 10.5 C 6.938 10.5 11.543 9.244 13.875 4.854 Z"
        fillOpacity="0"
        fill="currentColor"
        height="10.5px"
        id="Ry7_qXQF8"
        transform="translate(5.063 11.25)"
        width="13.875px"
      />
      <path
        d="M 16.5 6 L 16.5 0.75 C 16.5 0.336 16.164 0 15.75 0 L 0.75 0 C 0.336 0 0 0.336 0 0.75 L 0 6 C 0 15 8.25 17.25 8.25 17.25 C 8.25 17.25 16.5 15 16.5 6 Z"
        fill="transparent"
        height="17.25px"
        id="NCXYaGStM"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(3.75 4.5)"
        width="16.5px"
      />
      <path
        d="M 13.869 4.854 L 6.935 0 L 0 4.854"
        fill="transparent"
        height="4.8543750000000045px"
        id="T7_AMnENs"
        strokeDasharray=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="var(--pgex8v, 1.5)"
        stroke="currentColor"
        transform="translate(5.065 11.25)"
        width="13.869374999999998px"
      />
    </svg>,
  ];

  const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const wordVariants: Variants = {
        hidden: {
            y: "10%",
            opacity: 0,
        },
        visible: {
            y: '0%',
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {benefits.map((feat, idx) => (
        <motion.article key={`${feat.title}`} variants={wordVariants}>
          <div className="pb-5.25 pt-5.25 pl-5 pr-5 bg-[#121212] border" style={{ borderColor: "rgba(255, 255, 255, 0.12)" }}>
            <div className="border w-16 h-16 rounded-full text-white flex items-center justify-center" style={{ borderColor: "rgba(255, 255, 255, 0.16)" }}>
              <p className="w-6 h-6 flex items-center justify-center">
                {benefitsLogo[feat.logo]}
              </p>
            </div>
            <p className="mb-3 text-lg text-white">{feat.title}</p>
            <p className="text-sm leading-7 text-white/45">
              {feat.description}
            </p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
