import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container, Button } from "@/shared/components/ui";
import { useRandomQuote } from "@/shared/hooks";
import { Play, X } from "lucide-react";
import { Link } from "react-router-dom";

export function ServicesSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { quote } = useRandomQuote(10000);

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Testimonial */}
            <motion.div
              className="lg:text-right"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <blockquote className="testimonial bigtest">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={quote.key}
                    className="text-xl md:text-[22px] font-light text-text-primary leading-relaxed italic mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    "{quote.text}"
                  </motion.p>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.footer
                    key={quote.key}
                    className="text-text-muted text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    — <span className="text-primary">{quote.author}</span>
                  </motion.footer>
                </AnimatePresence>
              </blockquote>
            </motion.div>

            {/* Center Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="section-heading mb-6">
                <h3 className="text-text-light text-sm tracking-[0.3em] uppercase mb-2">
                  EXPERIENCE
                </h3>
                <h2 className="text-[34px] font-bold text-text-primary leading-tight mb-4">
                  Focusing on delivering all my knowledge and experience to the
                  companies
                </h2>
                <p className="text-text-subtle text-base font-light leading-relaxed">
                  As Frontend Developer I have experience in creating responsive
                  and user-friendly web applications using modern technologies
                  like Angular, React, Next.js, Vue Tailwind CSS, and
                  TypeScript. I am passionate about crafting seamless user
                  experiences and writing clean, maintainable code.
                </p>
              </div>

              <p className="text-text-muted leading-relaxed mb-4">
                Also I work creating mobile apliccations using React Native and
                Ionic (Angular).
              </p>

              <p className="text-text-muted leading-relaxed mb-4">
                I would like to share with you all my personal project is a
                component library for React and Next.JS, which is open source
                and available on GitHub. You can clik on "MY LIBRARY" button to
                check the the library
              </p>

              {/* Video Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  to="/docs"
                  className="inline-block mb-4 text-primary font-medium hover:underline transition-colors"
                >
                  <Button
                    onClick={() => setIsVideoOpen(true)}
                    className="group"
                  >
                    MY LIBRARY
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src="/images/dancer.jpg"
                alt="Dancer"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
            >
              <X size={32} />
            </motion.button>
            <motion.div
              className="w-full max-w-4xl aspect-video"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/UYJ5IjBRlW8?autoplay=1"
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
