import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroCard from "./HeroCard";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-36 pb-20">
      <HeroBackground />

      <div className="relative mx-auto max-w-7xl px-10">

        <div className="grid grid-cols-2 items-center gap-10">

          {/* Left */}
          <div className="flex justify-center">
            <div className="w-full max-w-[560px]">
              <HeroContent />
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[430px]">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-[110px] scale-110" />

              <HeroCard />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;