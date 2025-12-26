import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scaleable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing code to deliver lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Creating new features on the web with emerging, industry standard technologies.",
  },
];

export const About = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Developing digital products
              <span className="font-serif italic font-normal text-white">
                {" "}
                that feel natural.
              </span>
            </h2>
            <div className="space-y-6 text-muted-foreground animate-fade-in animation-delay-200 text-lg leading-relaxed">
              <p>
                I bridge the gap between design and engineering. With a background in graphic design, 
                I don’t just write code—I build interfaces that are technically robust and 
                instinctively easy to use.
              </p>
              <p>
                I focus on creating high-performance solutions across web and mobile. Whether 
                it's a minimalist landing page or a complex application, I prioritize clean 
                architecture and a polished user experience.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground/90">
                "Functionality is the baseline; meaningful engagement is the goal."
              </p>
            </div>
          </div>

          {/* Right Column: Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="glass p-6 rounded-2xl animate-fade-in flex flex-col gap-4" 
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="text-primary-foreground bg-primary/10 w-fit p-3 rounded-lg">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};