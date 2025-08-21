"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  link?: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 9000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  const handleProjectClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-2 md:px-8 lg:px-12 py-10 md:py-20", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
        <div>
          <div className="relative h-60 sm:h-72 md:h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom overflow-hidden rounded-[12px] flex items-center justify-center"
                  onClick={() => handleProjectClick(testimonial.link)}
                  style={{ 
                    cursor: testimonial.link ? 'pointer' : 'default',
                    borderRadius: '12px' 
                  }}
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="object-contain object-center rounded-[12px] max-w-full max-h-full"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-2 md:py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            onClick={() => handleProjectClick(testimonials[active].link)}
            style={{ cursor: testimonials[active].link ? 'pointer' : 'default' }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              {testimonials[active].name}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-base md:text-lg text-muted-foreground mt-4 md:mt-8">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex items-center pt-6 md:pt-12">
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
              >
                <IconArrowLeft className="h-4 w-4 md:h-5 md:w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
              >
                <IconArrowRight className="h-4 w-4 md:h-5 md:w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
            {testimonials[active].link && (
              <a
                href={testimonials[active].link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button transition-colors"
                aria-label="View project repository on GitHub"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
                onClick={e => e.stopPropagation()}
              >
                <ArrowUpRight size={20} className="text-foreground" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}