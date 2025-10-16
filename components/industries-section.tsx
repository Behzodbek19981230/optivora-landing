import { Zap, Droplet, Fuel, Factory, Wind, Building } from "lucide-react"

export function IndustriesSection() {
  const industries = [
    { icon: Zap, label: "Power Generation" },
    { icon: Droplet, label: "Water & Wastewater" },
    { icon: Fuel, label: "Oil & Gas Processing" },
    { icon: Factory, label: "Industrial Manufacturing" },
    { icon: Wind, label: "Renewable Energy" },
    { icon: Building, label: "Infrastructure Development" },
  ]

  return (
    <section id="industries" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Industries We Serve</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card hover:bg-accent/10 transition-colors cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <industry.icon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm font-medium text-center leading-snug">{industry.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
