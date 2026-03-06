import { Container } from "@/shared/components/ui";
import { basics } from "@/shared/data/data.json";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/banner-images/banner-image-1.jpg')",
      }}
    >
      <Container className="relative z-10 py-20">
        <div className="max-w-[38.2%] max-lg:max-w-full">
          {/* Section Heading */}
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {/* Golden line decorator */}
            <motion.div
              className="w-12 h-0.5 bg-primary mb-6"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />

            <h1 className="text-4xl md:text-5xl lg:text-[62px] font-extrabold leading-tight text-text-primary mb-6">
              {`HI, I'M ${basics.name.toUpperCase()} FRONTEND DEVELOPER `}
            </h1>

            <h2 className="text-base md:text-lg font-light text-text-primary mb-10 leading-relaxed">
              {basics.summary}
            </h2>
          </motion.div>

          {/* Call to Action */}
          {/* <motion.div */}
          {/*   initial={{ opacity: 0, y: 30 }} */}
          {/*   animate={{ opacity: 1, y: 0 }} */}
          {/*   transition={{ duration: 0.7, delay: 0.9 }} */}
          {/* > */}
          {/*   <Button as="a" href="#about"> */}
          {/*     START CREATING TODAY */}
          {/*   </Button> */}
          {/* </motion.div> */}
        </div>
      </Container>
    </section>
  );
}
