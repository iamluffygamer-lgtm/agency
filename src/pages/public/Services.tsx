import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "framer-motion"

const services = [
  {
    title: "Platform Engineering",
    description: "Scalable React & Node.js architecture. We build robust, accessible web applications engineered for performance and long-term maintainability.",
  },
  {
    title: "E-commerce Systems",
    description: "High-conversion storefronts and custom checkout flows. We architect secure, lightning-fast digital retail experiences.",
  },
  {
    title: "Interface Design",
    description: "Conversion-focused UI systems. We design intuitive, accessible interfaces that remove friction and elevate brand perception.",
  },
  {
    title: "Technical SEO",
    description: "Sub-second render times and semantic HTML structure designed to dominate search rankings and capture organic intent.",
  }
]

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="pt-32 pb-24 px-4 container mx-auto max-w-[1400px]">
        <div className="max-w-3xl mb-24">
          <motion.h1 
            initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-[5rem] font-medium tracking-tighter leading-[1.05]"
          >
            Capabilities.
          </motion.h1>
          <motion.p 
            initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-xl text-muted-foreground leading-relaxed"
          >
            We operate at the intersection of rigorous technical architecture and refined visual design. No bloat, no templates—just purposeful engineering.
          </motion.p>
        </div>

        <div className="border-t border-border">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={reduce ? false : { opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-12 gap-8 py-12 border-b border-border group"
            >
              <div className="md:col-span-4">
                <h2 className="text-2xl font-medium group-hover:pl-4 transition-all duration-300">
                  {String(index + 1).padStart(2, '0')} / {service.title}
                </h2>
              </div>
              <div className="md:col-span-8 lg:col-span-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 container mx-auto max-w-[1400px]">
        <div className="bg-secondary p-12 md:p-24 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-6">Require custom architecture?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
            We partner with internal engineering teams to build complex software that standard agencies cannot handle.
          </p>
          <Link to="/contact" className="inline-flex h-12 items-center justify-center bg-primary text-primary-foreground px-8 font-medium hover:bg-primary/90 transition-colors">
            Discuss Requirements
          </Link>
        </div>
      </section>
    </div>
  )
}
