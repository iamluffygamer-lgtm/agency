import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    client: "XYZ Cafe",
    industry: "Restaurant",
    services: ["UI/UX", "Development", "SEO"],
    problem: "Outdated website that didn't work on mobile devices and lacked online ordering capabilities, leading to lost revenue.",
    solution: "Designed and built a mobile-first experience with integrated ordering and localized SEO optimization.",
    results: "+45% increase in online orders, 2x mobile conversion rate.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    color: "bg-orange-500/10"
  },
  {
    client: "Acme Corporate",
    industry: "B2B Software",
    services: ["Web Application", "Authentication", "Database"],
    problem: "Client data was scattered across spreadsheets, making reporting impossible and increasing manual data entry errors.",
    solution: "Developed a custom SaaS portal for client management, automated reporting, and role-based access control.",
    results: "Saved 20 hours/week in manual entry, 100% data accuracy.",
    tech: ["React", "Node.js", "PostgreSQL"],
    color: "bg-blue-500/10"
  }
]

export default function Portfolio() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our Work</h1>
        <p className="mt-4 text-xl text-muted-foreground">Case studies of projects we've shipped.</p>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className={`aspect-[4/3] rounded-2xl border ${project.color} flex items-center justify-center p-8`}>
               <span className="text-muted-foreground font-medium">Project Preview</span>
            </div>
            
            {/* Case Study Details */}
            <div>
              <div className="mb-6 flex gap-2 flex-wrap">
                {project.services.map(s => (
                  <span key={s} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    {s}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl font-bold mb-2">{project.client}</h2>
              <p className="text-muted-foreground mb-8">Industry: {project.industry}</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">The Problem</h3>
                  <p className="text-muted-foreground">{project.problem}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">The Solution</h3>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">The Results</h3>
                  <p className="text-primary font-medium">{project.results}</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t flex items-center justify-between">
                <div className="flex gap-2 text-sm text-muted-foreground">
                  {project.tech.join(" • ")}
                </div>
                <Button variant="outline" className="gap-2">
                  Visit Website <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
