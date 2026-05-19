import { Paintbrush, Zap, Braces, BrainCircuitIcon } from "lucide-react";

const highlights = [
  {
    icon: BrainCircuitIcon,
    title: "AI-Powered Workflows",
    description: "Building production-ready web experiences by integrating AI-powered workflows — particularly Claude Code — as a collaborative layer throughout my development process.",
  },
  {
    icon: Paintbrush,
    title: "WordPress Development",
    description:
      "Building and maintaining client-facing sites using core plugins such as ACF, Gravity Forms, and WooCommerce on managed hosting like Kinsta.",
  },
  {
    icon: Braces,
    title: "API & Third-Party Integrations",
    description: "Connecting forms, CRMs, payment systems, and external services into cohesive web experiences.",
  },
  {
    icon: Zap,
    title: "Performance & Deployment",
    description:
      "Managing site health, hosting environments, and production deployments with a focus on speed and reliability for service-based clients.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
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
              I craft digital products
              <span className="font-serif italic font-normal text-white">
                {" "}
                that feel natural.
              </span>
            </h2>
            <div className="space-y-6 text-muted-foreground animate-fade-in animation-delay-200 text-lg leading-relaxed">
              <p>
                I bridge the gap between design and engineering.
                I don’t just ship code, I ensure the interfaces I build are technically robust and 
                instinctively easy to use.
              </p>
              <p>
                I focus on creating high-performance solutions across web and mobile. Whether 
                it's a minimalist landing page or a complex application, I prioritize clean 
                architecture and a polished user experience.
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
                <div className="text-primary-foreground bg-primary/10 w-fit p-3 rounded-lg hover:bg-primary/20 transition duration-300 ease-in-out">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
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