import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary via-accent to-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              Let's Discuss Your Project
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Contact us to learn how we can support your energy infrastructure needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">Email</h3>
                  <p className="text-primary-foreground/80">info@optivora.uz</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">Phone</h3>
                  <p className="text-primary-foreground/80">+998 71 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">Location</h3>
                  <p className="text-primary-foreground/80">Tashkent, Uzbekistan</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <Input placeholder="Your Name" className="bg-background" />
                </div>
                <div>
                  <Input type="email" placeholder="Email Address" className="bg-background" />
                </div>
                <div>
                  <Input placeholder="Company" className="bg-background" />
                </div>
                <div>
                  <Textarea placeholder="Tell us about your project..." className="bg-background min-h-32" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
