export function TechnicalSolutionsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Technical Solutions for Energy Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              From concept to commissioning, we provide comprehensive support for critical energy projects across
              Uzbekistan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-card border-2 border-border rounded-xl p-8">
                <div className="text-6xl font-bold text-primary mb-2">01</div>
                <h3 className="text-2xl font-bold mb-3">Equipment Sourcing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access to global manufacturers and suppliers of critical equipment for power generation, water
                  treatment, and industrial facilities.
                </p>
              </div>

              <div className="bg-card border-2 border-border rounded-xl p-8">
                <div className="text-6xl font-bold text-primary mb-2">02</div>
                <h3 className="text-2xl font-bold mb-3">Technical Coordination</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Expert project management and technical coordination to ensure seamless integration and commissioning
                  of complex systems.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card border-2 border-border rounded-xl p-8">
                <div className="text-6xl font-bold text-primary mb-2">03</div>
                <h3 className="text-2xl font-bold mb-3">Local Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  On-ground presence in Uzbekistan with deep understanding of local regulations, logistics, and
                  operational requirements.
                </p>
              </div>

              <div className="bg-card border-2 border-border rounded-xl p-8">
                <div className="text-6xl font-bold text-primary mb-2">04</div>
                <h3 className="text-2xl font-bold mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rigorous quality control and compliance verification to meet international standards and local
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
