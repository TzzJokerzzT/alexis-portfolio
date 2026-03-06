import { motion } from "motion/react";
import { Container } from "@/shared/components/ui";
import { features } from "../utils/constants/AboutData";

export function AboutSection() {
  return (
    <section id="about" className="introduction py-20 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Section Heading (col-3 = 33.33%) */}
          <motion.div
            className="lg:w-1/3 lg:pr-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-heading">
              <h3 className="text-text-light text-sm tracking-[0.3em] uppercase mb-2">ABOUT ME</h3>
              <h2 className="text-[34px] font-bold text-text-primary leading-tight mb-4">
                HOW IS ALEXIS APART FROM BE FRONTEND DEVELOPER?
              </h2>
              <p className="text-text-subtle text-base font-light leading-relaxed">
                I am a passionate for learn something about new cultures, for that reason I always
                try to learn something about diferent cultures and languages, also I like to be in
                contact with people from diferent culture.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Icon Blocks (col-2-3 = 66.66%) */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="icon-block flex flex-col items-center text-center p-5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <motion.div
                    className="icon mb-6 text-primary"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon size={48} strokeWidth={1.5} />
                  </motion.div>
                  <div className="icon-block-description">
                    <h4 className="text-lg font-normal text-text-primary mb-3">{feature.title}</h4>
                    <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
