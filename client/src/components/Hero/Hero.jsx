import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import heroImage from "./hero-illustration.png";

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen pt-40 pb-24">

      <HeroBackground />

      <div className="relative mx-auto flex max-w-[1380px] items-center justify-between gap-14 px-12">

        {/* LEFT CONTENT */}
        <div className="w-[46%]">

          <HeroContent />

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[54%] flex justify-end relative">

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
              },
              x: {
                duration: 0.8,
              },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative flex items-center justify-center left-10"
          >

            {/* BIG BLUE GLOW */}
            <div className="absolute h-[760px] w-[760px] rounded-full bg-cyan-300/20 blur-[120px]" />

            {/* INNER GLOW */}
            <div className="absolute h-[520px] w-[520px] rounded-full bg-blue-400/15 blur-[90px]" />

            {/* IMAGE */}
            <img
                  src={heroImage}
                  alt="LegalEase AI Illustration"
                  draggable={false}
                  className="relative z-10 w-[860px] max-w-none object-contain select-none translate-x-10 drop-shadow-[0_45px_100px_rgba(59,130,246,.30)]"
                />

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;