import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building2, Target, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About Optivora</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Leading provider of advanced energy infrastructure equipment and technical solutions in Uzbekistan
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Optivora is a specialized supplier of high-quality energy infrastructure equipment, serving Uzbekistan's
                power generation, water treatment, oil & gas, and industrial sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 10 years of experience, we bridge the gap between international manufacturers and local energy
                projects, providing comprehensive technical coordination and integration services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our expertise spans control systems, rotating machinery, safety equipment, and specialized industrial
                solutions from world-leading manufacturers.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/power-plant-control-room.png"
                alt="Modern control room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower Uzbekistan's energy infrastructure by delivering cutting-edge equipment and technical
                solutions that ensure reliability, efficiency, and sustainability for critical industrial projects.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted partner for energy infrastructure equipment in Central Asia, recognized for
                technical excellence, reliable delivery, and comprehensive project support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Quality First</h3>
              <p className="text-sm text-muted-foreground">Only world-class equipment from certified manufacturers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Technical Expertise</h3>
              <p className="text-sm text-muted-foreground">Deep understanding of energy infrastructure requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Reliability</h3>
              <p className="text-sm text-muted-foreground">On-time delivery and comprehensive project support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Partnership</h3>
              <p className="text-sm text-muted-foreground">Long-term relationships with clients and manufacturers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-sm opacity-90">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">Global Manufacturers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">120+</div>
              <div className="text-sm opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
