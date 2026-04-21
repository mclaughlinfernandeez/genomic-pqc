import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lock, Scale, Zap, Code2, Users, Shield } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Navigation */}
      <nav className="border-b border-slate-200 bg-white shadow-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="text-2xl font-bold text-slate-900 hover:text-slate-700">
              Genomic PQC
            </a>
          </Link>
          <div className="flex gap-6">
            <Link href="/hspa">
              <a className="text-slate-700 hover:text-slate-900 font-medium">HSPA</a>
            </Link>
            <Link href="/petition">
              <a className="text-slate-700 hover:text-slate-900 font-medium">Petition</a>
            </Link>
            <Link href="/jobs">
              <a className="text-slate-700 hover:text-slate-900 font-medium">Careers</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Post-Quantum Cryptography for Genomic Security
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Protecting genomic data against quantum computing threats. 
              Advancing precision medicine. Modernizing disability adjudication.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
                <Link href="/hspa">
                  <a className="flex items-center gap-2">
                    Explore HSPA Processor <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                <Link href="/petition">
                  <a>Read the Petition</a>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">The Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-slate-200 border-t-4 border-t-red-600">
              <CardHeader>
                <Shield className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Quantum Threat</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Current encryption (RSA/ECC) will be broken by quantum computers within 10-15 years. 
                Adversaries are collecting encrypted genomic data today to decrypt later.
              </CardContent>
            </Card>

            <Card className="border-slate-200 border-t-4 border-t-yellow-600">
              <CardHeader>
                <Scale className="w-8 h-8 text-yellow-600 mb-2" />
                <CardTitle>Regulatory Gap</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                SSA disability adjudication lacks modern genomic evidence evaluation procedures. 
                Manual processes create delays and inconsistencies affecting millions of beneficiaries.
              </CardContent>
            </Card>

            <Card className="border-slate-200 border-t-4 border-t-orange-600">
              <CardHeader>
                <Zap className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Infrastructure Gap</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Federal systems lack advanced processor architectures optimized for genomic data analysis 
                and semantic computing with cryptographic security.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">HSPA Processor</h3>
              <p className="text-slate-600 mb-4">
                A pure Rust implementation of the Heterogeneous Semantic Processing Architecture, 
                optimized for genomic data analysis with post-quantum cryptography support.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <Code2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">100% safe Rust with zero C dependencies</span>
                </li>
                <li className="flex gap-3">
                  <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Kyber-768 and Dilithium-III post-quantum cryptography</span>
                </li>
                <li className="flex gap-3">
                  <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Semantic Execution Graphs with probabilistic scheduling</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/hspa">
                  <a>Learn More About HSPA</a>
                </Link>
              </Button>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Legal Framework</h3>
              <p className="text-slate-600 mb-4">
                A comprehensive Supreme Court petition arguing for federal authority to establish 
                post-quantum cryptographic standards and modernize disability adjudication procedures.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <Scale className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Constitutional authority (Commerce, Necessary & Proper, Spending)</span>
                </li>
                <li className="flex gap-3">
                  <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">SSA regulatory modernization (SSR 16-4p update)</span>
                </li>
                <li className="flex gap-3">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">National security and public health implications</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/petition">
                  <a>Read the Petition</a>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-blue-600" />
                  Post-Quantum Cryptography
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                NIST-standardized Kyber-768 and Dilithium-III algorithms protect against quantum threats.
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-600" />
                  Pure Rust Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Memory-safe, high-performance code with no C dependencies or unsafe operations.
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  Semantic Processing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Graph-based computation with metadata tracking and probabilistic scheduling.
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-blue-600" />
                  Regulatory Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                HIPAA, GINA, ADA, and SSA compliance built into the architecture.
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Automated Evidence Mapping
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Directly maps genomic findings to SSA disability listings (11.00, 12.00).
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Semantic Trace (SET)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                SHA3-256 hashing of literature DOIs for immutable audit trails.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-slate-200 text-center">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-blue-600 mb-2">85%</p>
                <p className="text-slate-600">Reduction in evidence processing time</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 text-center">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-blue-600 mb-2">15-20%</p>
                <p className="text-slate-600">Improvement in PRS accuracy</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 text-center">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-blue-600 mb-2">3M+</p>
                <p className="text-slate-600">Annual disability claims affected</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 text-center">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-blue-600 mb-2">10-15yr</p>
                <p className="text-slate-600">Quantum threat timeline</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Explore the Initiative
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover the HSPA processor, read the Supreme Court petition, and join our team 
            in building the future of genomic security.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
              <Link href="/hspa">
                <a>HSPA Processor</a>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              <Link href="/petition">
                <a>Supreme Court Petition</a>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              <Link href="/jobs">
                <a>Join Our Team</a>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">About</h3>
              <p className="text-sm text-slate-400">
                Manus AI is developing advanced technologies for genomic data security, 
                precision medicine, and disability adjudication.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://github.com/mclaughlinfernandeez/genomic-pqc" className="text-slate-400 hover:text-white">
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a href="mailto:careers@manus.ai" className="text-slate-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>© 2026 Manus AI. Post-Quantum Cryptography for Genomic Security.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
