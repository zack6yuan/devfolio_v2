import { useMemo } from "react";
import { Button } from "@/components/Button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Flask",
  "MySQL",
  "Google Firebase",
  "TailwindCSS",
  "Bootstrap",
  "HTML",
  "CSS",
  "jQuery",
  "Expo",
  "Vite",
  "Figma"
];

export const Hero = () => {
  const dots = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero-bg.jpg"
          alt="hero-image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* Green Dots Layer */}
      <div className="absolute inset-0 pointer-events-none -z-5">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              top: dot.top,
              left: dot.left,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-10 relative z-10 flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer + Full Stack Web Developer
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Zack Yuan - a Full-Stack Web Developer from Tulsa,
                Oklahoma. I specialize in React and React Native. I build
                scalable, performant web applications that users love.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <AnimatedBorderButton />
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://www.github.com/zack6yuan" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/zack6yuan/" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300 hidden lg:block">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"></div>
              <div className="relative glass rounded-3xl p-2 glow-border overflow-visible">
                <img
                  src="/profile-photo.png"
                  alt="Zack Yuan"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 glass rounded-xl px-4 py-3 animate-float z-20 shadow-xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                    <span className="text-sm font-medium whitespace-nowrap">Available for work</span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">Tulsa</div>
                  <div className="text-xs text-muted-foreground">Oklahoma</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto py-5 relative z-20 animate-fade-in animation-delay-600 bg-background/40 backdrop-blur-xs border-t border-white/5">
        <p className="text-xs uppercase tracking-widest text-muted-foreground/60 mb-8 text-center font-medium">
          Tools + Technologies I work with
        </p>
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[...skills, ...skills].map((skill, idx) => (
              <div key={idx} className="mx-8 flex items-center">
                <span className="text-xl md:text-2xl font-semibold text-white/30 hover:text-primary transition-colors duration-300 tracking-tighter">
                  {skill}
                </span>
                <span className="ml-16 w-1.5 h-1.5 bg-primary/20 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};