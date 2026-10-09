import { CheckCircle2, Circle, Clock, ExternalLink, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ClientDashboard() {
  // In a real app, this data would come from Firestore based on the user's ID
  const project = {
    name: "Acme Corporation Platform",
    progress: 82,
    currentStage: "Development",
    nextStage: "QA & Testing",
    expectedLaunch: "14 October 2026",
    previewUrl: "https://preview.acme.corp",
  }

  const milestones = [
    { name: "Project Started", status: "completed", date: "01 Sep" },
    { name: "Discovery & Strategy", status: "completed", date: "05 Sep" },
    { name: "Information Architecture", status: "completed", date: "12 Sep" },
    { name: "UI Design & Prototyping", status: "completed", date: "24 Sep" },
    { name: "Design Approval", status: "completed", date: "26 Sep" },
    { name: "Platform Engineering", status: "current", date: "Present" },
    { name: "QA & Testing", status: "upcoming", date: "Oct 10" },
    { name: "Client UAT Approval", status: "upcoming", date: "Oct 12" },
    { name: "Production Launch", status: "upcoming", date: "Oct 14" },
  ]

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">Project Overview</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight">{project.name}</h1>
        </div>
        <Button variant="outline" className="shrink-0" asChild>
          <a href={project.previewUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Preview
          </a>
        </Button>
      </div>

      {/* Main Status Card */}
      <Card className="border-border bg-background shadow-sm rounded-none">
        <CardContent className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <div className="text-4xl font-medium tracking-tighter mb-1">{project.progress}%</div>
              <div className="text-muted-foreground">Overall Completion</div>
            </div>
            
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Current Stage</div>
                <div className="font-medium flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {project.currentStage}
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Next Phase</div>
                <div className="font-medium text-muted-foreground">{project.nextStage}</div>
              </div>
              <div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Expected Launch</div>
                <div className="font-medium">{project.expectedLaunch}</div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-3 w-full bg-secondary overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-1000 ease-out"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-12 gap-8">
        
        {/* Timeline */}
        <div className="md:col-span-7">
          <h2 className="text-xl font-medium mb-6">Delivery Timeline</h2>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {milestones.map((milestone, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-background border border-border shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                  {milestone.status === 'completed' ? (
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  ) : milestone.status === 'current' ? (
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  ) : (
                    <Circle className="w-3 h-3 text-muted-foreground/30" />
                  )}
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 bg-background border border-border">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-medium ${milestone.status === 'upcoming' ? 'text-muted-foreground' : ''}`}>
                      {milestone.name}
                    </span>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {milestone.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Required & Recent Activity */}
        <div className="md:col-span-5 space-y-8">
          
          <Card className="border-border bg-secondary/30 rounded-none shadow-none">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                Action Required
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                We need a few assets from your team to proceed with the next milestone.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-sm text-muted-foreground line-through opacity-70">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Brand Guidelines
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground line-through opacity-70">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> High-res Logos
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <Circle className="h-4 w-4 text-muted-foreground" /> About Us Copy
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <Circle className="h-4 w-4 text-muted-foreground" /> Team Headshots
                </li>
              </ul>
              <Button className="w-full h-10 group rounded-none">
                Upload Assets <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border rounded-none shadow-none">
            <CardHeader className="pb-4 border-b border-border">
              <CardTitle className="text-lg">Recent Updates</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 p-0">
              <div className="divide-y divide-border">
                <div className="p-4">
                  <div className="text-sm font-medium mb-1">Development environment provisioned</div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase">2 hours ago • System</div>
                </div>
                <div className="p-4">
                  <div className="text-sm font-medium mb-1">Design System finalized & approved</div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase">Yesterday • Smit</div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}
