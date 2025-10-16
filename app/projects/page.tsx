import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Calendar, CheckCircle } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Tashkent Combined-Cycle Power Plant Modernization",
      location: "Tashkent, Uzbekistan",
      year: 2024,
      scope: "Supply of advanced power electronics and control systems",
      image: "/power-plant-control-room.png",
      deliverables: [
        "High-capacity inverter systems",
        "SCADA integration modules",
        "Motor control centers",
        "Safety monitoring equipment",
      ],
    },
    {
      title: "Samarkand Water Treatment Facility Upgrade",
      location: "Samarkand Region",
      year: 2023,
      scope: "Industrial pumps and automation systems for water treatment",
      image: "/industrial-pumps-facility.jpg",
      deliverables: [
        "High-efficiency centrifugal pumps",
        "Variable frequency drives",
        "Process control systems",
        "Flow monitoring equipment",
      ],
    },
    {
      title: "Bukhara Gas Processing Plant Equipment Supply",
      location: "Bukhara, Uzbekistan",
      year: 2023,
      scope: "Safety systems and process control equipment",
      image: "/industrial-automation-control-panel.jpg",
      deliverables: [
        "Gas detection systems",
        "Emergency shutdown systems",
        "Process analyzers",
        "Control valves and actuators",
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Projects & Experience</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Proven track record of successful equipment supply and technical coordination across Uzbekistan's energy
              infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-[300px] md:h-auto">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      <strong>Scope:</strong> {project.scope}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3">Key Deliverables:</h4>
                      <ul className="space-y-2">
                        {project.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 opacity-90">Let's discuss how we can support your energy infrastructure needs</p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
