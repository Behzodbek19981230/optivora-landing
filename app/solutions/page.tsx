import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Package, Wrench, Network, HeadphonesIcon, Zap, Droplet, Flame, Factory } from "lucide-react"

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Solutions & Services</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive equipment supply and technical coordination for energy infrastructure projects
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Package className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Equipment Supply & Procurement</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Direct sourcing of high-quality equipment from certified international manufacturers for power
                generation, water treatment, and industrial applications.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Wrench className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Technical Coordination</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Expert coordination between manufacturers, contractors, and end-users to ensure seamless project
                execution and technical compliance.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Network className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">System Integration Support</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comprehensive support for integrating control systems, automation equipment, and monitoring solutions
                into existing infrastructure.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <HeadphonesIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Project Support & Consultation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                End-to-end project support including technical specifications, documentation, logistics coordination,
                and post-delivery assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Equipment Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4">Control & Automation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Power electronics & inverters</li>
                <li>• PLC & SCADA systems</li>
                <li>• Motor control centers</li>
                <li>• Variable frequency drives</li>
                <li>• Industrial automation solutions</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4">Rotating Machinery</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Industrial pumps & systems</li>
                <li>• Compressors & blowers</li>
                <li>• Motors & generators</li>
                <li>• Turbines & auxiliaries</li>
                <li>• Mechanical seals & bearings</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4">Safety & Monitoring</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Gas detection systems</li>
                <li>• Fire & safety equipment</li>
                <li>• Environmental monitoring</li>
                <li>• Process instrumentation</li>
                <li>• Condition monitoring systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Power Generation</h3>
              <p className="text-sm text-muted-foreground">Thermal, combined-cycle, and renewable energy plants</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplet className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Water & Wastewater</h3>
              <p className="text-sm text-muted-foreground">
                Treatment plants, pumping stations, and distribution systems
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Oil & Gas</h3>
              <p className="text-sm text-muted-foreground">Upstream, midstream, and downstream operations</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Industrial Manufacturing</h3>
              <p className="text-sm text-muted-foreground">
                Process industries, chemical plants, and heavy manufacturing
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
