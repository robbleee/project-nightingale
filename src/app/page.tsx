import { ArrowRight, Clock, DollarSign, HandHeart, CheckCircle, Star, Mail, MapPin, Target, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">PN</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-text-dark">Project Nightingale</div>
                  <div className="text-xs text-accent font-medium">MEDTECH COMPLIANCE</div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <button className="inline-flex items-center px-6 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300">
                Book Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 pt-16">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold text-sm mb-8">
            <Zap className="h-4 w-4 mr-2" />
            FASTEST PATH TO NHS COMPLIANCE
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-dark mb-6 leading-tight">
            Stop Wasting Time on
            <span className="block text-gradient">Regulatory Bullsh*t.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-text-light max-w-4xl mx-auto mb-8 leading-relaxed">
            We cut through the red tape so you can focus on what matters: <strong>building life-saving technology</strong>. 
            Get NHS-ready in months, not years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold text-lg rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl group">
              Get Your Free Compliance Roadmap
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold text-lg rounded-lg hover:bg-primary hover:text-white transition-all duration-300 group">
              <Target className="mr-3 h-5 w-5" />
              See Case Study
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-text-light">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-accent mr-2" />
              <span>6-Month NHS Pilot Ready</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-accent mr-2" />
              <span>Zero Regulatory Delays</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-accent mr-2" />
              <span>Founder-Led Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-text-dark mb-6">
              Your Competitors Are Moving.
              <span className="block text-gradient">You&apos;re Stuck in Compliance Hell.</span>
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              While you&apos;re drowning in paperwork, they&apos;re capturing market share. Every day you delay is money lost and lives not saved.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl border-l-4 border-red-500 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-4">18+ Months Wasted</h3>
              <p className="text-gray-700">
                                 The average medtech startup spends 18+ months navigating regulatory requirements. 
                 <strong className="text-red-600"> That&apos;s 18 months your competitors are ahead.</strong>
              </p>
            </div>
            
            <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-orange-700 mb-4">£500K+ Burned</h3>
              <p className="text-gray-700">
                Failed compliance attempts drain runway fast. Legal fees, consultant costs, and opportunity cost add up to 
                <strong className="text-orange-600"> startup-killing amounts.</strong>
              </p>
            </div>
            
            <div className="relative bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl border-l-4 border-red-500 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <HandHeart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-4">Investors Walk Away</h3>
              <p className="text-gray-700">
                No clear regulatory path = no funding. Period. 
                <strong className="text-red-600"> 73% of medtech startups fail due to regulatory roadblocks.</strong>
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-red-100 border border-red-200 rounded-lg text-red-700 font-semibold">
              <Shield className="h-5 w-5 mr-2" />
              Stop the bleeding. There&apos;s a better way.
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold mb-6">
              PROJECT NIGHTINGALE SOLUTION
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-dark mb-6">
              We Don&apos;t Just Consult.
              <span className="block text-gradient">We Guarantee Results.</span>
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
                               <strong>6-month NHS pilot guarantee</strong> or your money back. We&apos;ve cracked the code on rapid medtech compliance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white p-6 rounded-xl border-2 border-transparent hover:border-accent hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <div className="h-3 w-16 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                <div className="text-2xl font-bold text-accent">01</div>
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">Pilot-Ready Blitz</h3>
              <p className="text-text-light mb-4">
                <strong>6-month guarantee</strong> to NHS pilot-ready status. Complete regulatory package, QMS, and approval pathway.
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="h-5 w-5 text-accent" />
              </div>
            </div>
            
            <div className="group bg-white p-6 rounded-xl border-2 border-transparent hover:border-accent hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <div className="h-3 w-16 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                <div className="text-2xl font-bold text-accent">02</div>
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">Lean QMS Build</h3>
              <p className="text-text-light mb-4">
                <strong>Startup-sized</strong> Quality Management System. No enterprise bloat. Just what you need to pass audits.
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="h-5 w-5 text-accent" />
              </div>
            </div>
            
            <div className="group bg-white p-6 rounded-xl border-2 border-transparent hover:border-accent hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <div className="h-3 w-16 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                <div className="text-2xl font-bold text-accent">03</div>
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">Fractional CSO</h3>
              <p className="text-text-light mb-4">
                <strong>On-demand</strong> Clinical Safety Officer access. Senior expertise without the £120K+ salary.
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="h-5 w-5 text-accent" />
              </div>
            </div>
            
            <div className="group bg-white p-6 rounded-xl border-2 border-transparent hover:border-accent hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <div className="h-3 w-16 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                <div className="text-2xl font-bold text-accent">04</div>
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">ISO 13485 Fast-Track</h3>
              <p className="text-text-light mb-4">
                <strong>Accelerated</strong> ISO 13485 certification with ongoing compliance monitoring. Stay audit-ready 24/7.
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="h-5 w-5 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full text-white text-sm font-semibold mb-6">
              PROOF OF CONCEPT: HAEM.IO
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              From Zero to NHS Pilot in 6 Months.
              <span className="block text-accent">No Bullsh*t.</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">The Challenge</h3>
                <p className="text-lg text-gray-200">
                  Haem.io had revolutionary blood analysis tech but <strong>zero regulatory knowledge</strong>. 
                  Previous consultants burned through £200K with no results. They came to us 3 months from running out of cash.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">The Nightingale Method</h3>
                <div className="space-y-3">
                  {[
                    "Week 1-2: Rapid regulatory assessment & gap analysis",
                    "Month 1-3: Lean QMS development & documentation",
                    "Month 3-5: DTAC, DSPT, and HRA approval navigation",
                    "Month 6: NHS pilot approval & market entry"
                  ].map((step, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                      <span className="text-gray-200">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">The Results That Matter</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="bg-white/10 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent">6</div>
                    <div className="text-sm text-gray-200">Months to Pilot</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent">£2.1M</div>
                    <div className="text-sm text-gray-200">Series A Raised</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent">100%</div>
                    <div className="text-sm text-gray-200">Compliance Rate</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <div className="flex items-start mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
                             <blockquote className="text-xl font-medium mb-6">
                 &ldquo;Project Nightingale saved our company. Period. While other consultants talked in circles, 
                 they delivered results. <strong>6 months from compliance chaos to NHS pilot approval.</strong> 
                 Our Series A investors were blown away by our regulatory readiness.&rdquo;
               </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">R</span>
                </div>
                <div>
                  <div className="font-bold">Robert Lee</div>
                  <div className="text-sm text-gray-300">Founder & CEO, Haem.io</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              THE PROJECT NIGHTINGALE FOUNDERS
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-dark mb-6">
              Built by Founders.
              <span className="block text-gradient">For Founders.</span>
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
                             We&apos;ve been exactly where you are. <strong>No ivory tower consultants here.</strong>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl border-2 border-transparent hover:border-accent transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-white">R</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-dark">Robert</h3>
                  <div className="text-accent font-bold">The Battle-Tested Founder</div>
                </div>
              </div>
              <p className="text-text-light mb-4">
                <strong>Built Haem.io from zero to NHS pilot.</strong> Knows every regulatory trap, every bureaucratic dead-end, 
                every shortcut that actually works. Been through 3 funding rounds, 2 pivots, and 1 near-death experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Medtech Founder</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">NHS Navigator</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Fundraising Veteran</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl border-2 border-transparent hover:border-accent transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-white">D</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-dark">Donaldo</h3>
                  <div className="text-accent font-bold">The Regulatory Assassin</div>
                </div>
              </div>
              <p className="text-text-light mb-4">
                <strong>10+ years dismantling regulatory roadblocks.</strong> Former NHS insider who knows where all the bodies are buried. 
                Turned compliance from a 2-year nightmare into a 6-month sprint for dozens of medtech startups.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Regulatory Expert</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Former NHS</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Compliance Strategist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Stop F*cking Around.
            <span className="block">Start Moving Forward.</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
                         <strong>Free 30-minute strategy call.</strong> We&apos;ll audit your current position and show you exactly how to get NHS-ready in 6 months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group">
              Book Your Strategy Call Now
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-sm opacity-75">
              ⚡ Usually £500/hour. Free for the next 10 founders.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">PN</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient">Project Nightingale</h3>
                  <p className="text-gray-400 text-sm">Cut Through. Move Fast. Launch Strong.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent" />
                <span className="text-gray-300">hello@projectnightingale.co.uk</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-accent" />
                <span className="text-gray-300">United Kingdom</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 sm:mb-0">
              <span>&copy; 2024 Project Nightingale. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
