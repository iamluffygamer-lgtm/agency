import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Link } from "react-router-dom"

const plans = [
  {
    name: "STARTER",
    price: "₹15,000",
    description: "Perfect for small businesses starting their digital journey.",
    features: [
      "5 pages",
      "Responsive design",
      "Basic SEO optimization",
      "Contact form",
      "Hosting & Deployment"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "BUSINESS",
    price: "₹30,000",
    description: "For growing companies that need a premium digital presence.",
    features: [
      "10 pages",
      "Custom UI & Animations",
      "Advanced SEO",
      "Analytics integration",
      "CMS integration"
    ],
    buttonText: "Get Started",
    popular: true
  },
  {
    name: "CUSTOM",
    price: "Let's Talk",
    description: "Complex requirements requiring custom engineering.",
    features: [
      "Web applications",
      "Dashboards & Portals",
      "Authentication",
      "Database architecture",
      "Custom APIs"
    ],
    buttonText: "Get Quote",
    popular: false
  }
]

export default function Pricing() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Simple, transparent pricing</h1>
        <p className="mt-4 text-xl text-muted-foreground">Choose the plan that's right for your business.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative flex flex-col ${plan.popular ? 'border-primary shadow-lg scale-105 z-10' : ''}`}>
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                MOST POPULAR
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription className="mt-2">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="my-4">
                <span className="text-4xl font-extrabold">{plan.price}</span>
              </div>
              <ul className="space-y-3 mt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link to="/contact" className="w-full">
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  {plan.buttonText}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
