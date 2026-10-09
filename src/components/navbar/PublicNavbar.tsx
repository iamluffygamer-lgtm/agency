import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function PublicNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">AGENCY.</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to="/services" className="transition-colors hover:text-foreground/80 text-foreground/60">Services</Link>
            <Link to="/pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Pricing</Link>
            <Link to="/portfolio" className="transition-colors hover:text-foreground/80 text-foreground/60">Portfolio</Link>
            <Link to="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="hidden sm:inline-flex">Client Login</Button>
          </Link>
          <Link to="/contact">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
