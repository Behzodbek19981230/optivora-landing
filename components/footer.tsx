import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Optivora</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Powering Uzbekistan's energy infrastructure with advanced technical solutions.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@optivora.uz</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+998 71 123 45 67</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Tashkent, Uzbekistan</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/solutions#equipment" className="hover:text-primary transition-colors">
                  Equipment Supply
                </Link>
              </li>
              <li>
                <Link href="/solutions#technical" className="hover:text-primary transition-colors">
                  Technical Coordination
                </Link>
              </li>
              <li>
                <Link href="/solutions#integration" className="hover:text-primary transition-colors">
                  System Integration
                </Link>
              </li>
              <li>
                <Link href="/solutions#support" className="hover:text-primary transition-colors">
                  Project Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/solutions#power" className="hover:text-primary transition-colors">
                  Power Generation
                </Link>
              </li>
              <li>
                <Link href="/solutions#water" className="hover:text-primary transition-colors">
                  Water & Wastewater
                </Link>
              </li>
              <li>
                <Link href="/solutions#oil-gas" className="hover:text-primary transition-colors">
                  Oil & Gas
                </Link>
              </li>
              <li>
                <Link href="/solutions#renewable" className="hover:text-primary transition-colors">
                  Renewable Energy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-primary transition-colors">
                  Our Partners
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Optivora. All rights reserved. | Tashkent, Uzbekistan</p>
        </div>
      </div>
    </footer>
  )
}
