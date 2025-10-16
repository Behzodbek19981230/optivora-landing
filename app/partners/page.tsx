import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PartnersPage() {
  const partnerCategories = [
    {
      category: "Power & Control Systems",
      partners: [
        { name: "Statron", description: "Power electronics and inverters" },
        { name: "Siemens", description: "Industrial automation and control" },
        { name: "ABB", description: "Power and automation technologies" },
        { name: "Schneider Electric", description: "Energy management solutions" },
      ],
    },
    {
      category: "Rotating Equipment & Pumps",
      partners: [
        { name: "KSB", description: "Industrial pumps and valves" },
        { name: "Grundfos", description: "Advanced pump solutions" },
        { name: "Sulzer", description: "Pumping and rotating equipment" },
        { name: "Flowserve", description: "Flow control products" },
      ],
    },
    {
      category: "Safety & Monitoring",
      partners: [
        { name: "Honeywell", description: "Safety and monitoring systems" },
        { name: "Dräger", description: "Gas detection equipment" },
        { name: "MSA Safety", description: "Safety instruments" },
        { name: "Emerson", description: "Process automation" },
      ],
    },
    {
      category: "Specialized Systems",
      partners: [
        { name: "Endress+Hauser", description: "Process instrumentation" },
        { name: "WIKA", description: "Pressure and temperature measurement" },
        { name: "Yokogawa", description: "Industrial automation" },
        { name: "Rockwell Automation", description: "Industrial automation solutions" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Partners</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trusted relationships with world-leading manufacturers of energy infrastructure equipment
            </p>
          </div>
        </div>
      </section>

      {/* Partners by Category */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {partnerCategories.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-6 text-center md:text-left">{category.category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.partners.map((partner, i) => (
                    <div
                      key={i}
                      className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
                    >
                      <div className="h-16 flex items-center justify-center mb-4 bg-muted/30 rounded">
                        <span className="text-xl font-bold text-primary">{partner.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">{partner.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Our Partnerships Matter</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Certified Quality</h3>
              <p className="text-sm text-muted-foreground">
                All equipment comes directly from authorized manufacturers with full certification and warranties
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Technical Support</h3>
              <p className="text-sm text-muted-foreground">
                Direct access to manufacturer technical expertise and engineering support
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-sm text-muted-foreground">
                Long-term partnerships enable us to offer competitive pricing and favorable terms
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
