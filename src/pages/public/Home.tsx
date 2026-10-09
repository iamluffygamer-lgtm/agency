import { ArrowRight, Layers, Workflow, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

function RevealStagger({ items }: { items: React.ReactNode[] }) {
  const reduce = useReducedMotion();
  return (
    <ul className="flex flex-col gap-6">
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: i * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  );
}

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background selection:bg-primary selection:text-primary-foreground">
      
      {/* Refined Asymmetric Hero */}
      <section className="relative px-4 pt-32 pb-24 md:pt-40 md:pb-32 container mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-6 flex flex-col justify-center relative z-10">
            <motion.h1 
              initial={reduce ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-medium tracking-tighter leading-[1.02]"
            >
              Digital <br />
              <span className="italic font-serif pr-2 text-muted-foreground">Craftsmanship.</span>
            </motion.h1>
            
            <motion.p 
              initial={reduce ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-[40ch] leading-relaxed"
            >
              We partner with ambitious companies to design and engineer premium web applications. Rigorous architecture meets uncompromising aesthetics.
            </motion.p>
            
            <motion.div 
              initial={reduce ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex items-center gap-6"
            >
              <Link to="/contact">
                <Button size="lg" className="h-14 px-8 text-base group">
                  Start your project <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-secondary"
          >
            {/* Elegant, abstract structural image instead of gimmicks */}
            <img 
              src="https://picsum.photos/seed/minimalist-architecture/1000/1200" 
              alt="Abstract structural design" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-90"
            />
            {/* Subtle glass overlay to make it feel premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>

        </div>
      </section>

      {/* The "Building Experience" - Reimagined as Process/Craft */}
      <section className="py-32 px-4 container mx-auto max-w-[1400px]">
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6">How we build.</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            True premium experiences aren't templated. They are forged through a meticulous process of strategic design and uncompromising engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Layers,
              step: "01",
              title: "Strategic Foundation",
              desc: "Every pixel must have a purpose. We begin by defining the architectural and visual constraints that will guide the entire platform."
            },
            {
              icon: Workflow,
              step: "02",
              title: "Interface Design",
              desc: "We craft typographic systems and fluid layouts that feel native, intuitive, and relentlessly focused on conversion."
            },
            {
              icon: Cpu,
              step: "03",
              title: "Precision Engineering",
              desc: "React and Node.js infrastructure built for sub-second render times. Absolute performance, entirely custom-built."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative pt-8 border-t border-border"
            >
              <div className="flex justify-between items-start mb-16">
                <item.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                <span className="text-sm font-medium text-muted-foreground">{item.step}</span>
              </div>
              <h3 className="text-2xl font-medium mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Selected Work - Refined Minimalist List */}
      <section className="py-32 px-4 container mx-auto max-w-[1400px] border-t border-border">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6">Selected Work</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-sm">A curated archive of our recent digital products and platforms.</p>
            <Link to="/portfolio">
              <Button variant="outline" className="h-12 px-6">Explore Archive</Button>
            </Link>
          </div>
          
          <div className="lg:col-span-7 mt-12 lg:mt-0">
            <RevealStagger items={[
              <Link to="/portfolio" className="group block pb-12 border-b border-border">
                <div className="w-full aspect-[16/9] mb-8 bg-secondary overflow-hidden relative">
                   <img src="https://picsum.photos/seed/acme-brand/800/450" alt="Acme preview" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl font-medium tracking-tight mb-2">Acme Corporation</h3>
                    <p className="text-muted-foreground text-lg">E-commerce replatforming</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-500" />
                </div>
              </Link>,
              <Link to="/portfolio" className="group block pb-12 border-b border-border">
                <div className="w-full aspect-[16/9] mb-8 bg-secondary overflow-hidden relative">
                   <img src="https://picsum.photos/seed/xyz-platform/800/450" alt="XYZ preview" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl font-medium tracking-tight mb-2">XYZ Logistics</h3>
                    <p className="text-muted-foreground text-lg">Client portal dashboard</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-500" />
                </div>
              </Link>
            ]} />
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="bg-primary text-primary-foreground py-32 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8 leading-[1.1]">
            Ready to build something exceptional?
          </h2>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="h-14 px-10 text-lg hover:scale-105 transition-transform duration-300">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
