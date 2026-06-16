import { usePersonalInformation } from "@/shared/api/hooks/usePersonalInformation";
import { Container } from "@/shared/components/ui";
import { motion } from "motion/react";
import { ContactIcon } from "../utils/helpers/ContactIcon";

export function PricingSection() {
  const { data } = usePersonalInformation();
  return (
    <section id="contact" className="py-20 bg-secondary text-center">
      <Container>
        {/* Section Heading */}
        <motion.div
          className="section-heading mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-text-light text-sm tracking-[0.3em] uppercase mb-2">
            GET IN TOUCH
          </h3>
          <h2 className="text-[34px] font-bold text-text-primary leading-tight">
            Let's work together
          </h2>
          <p className="text-text-muted mt-4 max-w-md mx-auto">
            Feel free to reach out through any of the following channels
          </p>
        </motion.div>

        {/* Contact Icons */}
        <div className="flex flex-wrap justify-center gap-8">
          {data?.contact?.map((contact, index) => (
            <motion.a
              key={contact?.id}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-text-muted group-hover:text-primary transition-colors">
                <ContactIcon icon={contact.icon || ""} />
              </div>
              <span className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
                {contact.name}
              </span>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
