import { motion, type Variants } from 'framer-motion';
import type { CSSProperties, ElementType } from 'react';

export interface TextSegment {
  text: string;
  className?: string;
  style?: CSSProperties;
}

interface FadeInBlurWordProps {
  content: string | TextSegment[];
  as?: ElementType;
  className?: string;
  id?: string
}

export default function FadeInBlurWord({
  content = "",
  id,
  as: Component = "p",
  className = "",
}: FadeInBlurWordProps) {
  const segments: TextSegment[] = typeof content === "string"
    ? [{ text: content }]
    : content;

  const wordsWithStyles = segments.flatMap((segment) =>
    segment.text.split(" ").filter(Boolean).map((word) => ({
      word,
      className: segment.className,
      style: segment.style,
    }))
  );

  const MotionComponent = motion.create(Component);

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
      y: '100%',
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      y: '0%',
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <MotionComponent
      className={`flex flex-wrap gap-x-[0.25em] gap-y-1 ${className}`} // justify-center
      id={id}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {wordsWithStyles.map((item, index) => (
        <span key={index} className="inline-block overflow-hidden p-4 -m-4">
          <motion.span
            variants={wordVariants}
            className={`inline-block ${item.className || ''}`}
            style={item.style}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </MotionComponent>
  );
}