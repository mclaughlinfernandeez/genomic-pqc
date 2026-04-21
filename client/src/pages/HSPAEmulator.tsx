import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Cpu, GitBranch, Zap } from "lucide-react";
import { Link } from "wouter";

export default function HSPAEmulator() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Navigation */}
      <nav className="border-b border-slate-200 bg-white shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="text-2xl font-bold text-slate-900 hover:text-slate-700">
              Genomic PQC
            </a>
          </Link>
          <div className="flex gap-6">
            <Link href="/hspa">
              <a className="font-semibold text-blue-600 hover:text-blue-700">HSPA</a>
            </Link>
            <Link href="/petition">
              <a className="text-slate-700 hover:text-slate-900">Petition</a>
            </Link>
            <Link href="/jobs">
              <a className="text-slate-700 hover:text-slate-900">Careers</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-white py-16">
        <div className="container">
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-slate-900 mb-4">
                HSPA Emulator
              </h1>
              <p className="text-xl text-slate-600 mb-6">
                Pure Rust implementation of the Heterogeneous Semantic Processing Architecture. 
                A production-ready processor for genomic data analysis with post-quantum cryptography support.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="https://github.com/mclaughlinfernandeez/genomic-pqc" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#documentation">
                    Documentation
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex-1 bg-slate-900 rounded-lg p-8 text-white font-mono text-sm">
              <div className="mb-4 text-green-400">$ cargo build --release</div>
              <div className="text-slate-300 mb-2">Compiling hspa_emu v1.0.0</div>
              <div className="text-slate-300 mb-2">Finished release [optimized]</div>
              <div className="text-green-400">✓ Ready for deployment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Core Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-slate-200">
              <CardHeader>
                <Cpu className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Semantic Execution Graph (SEG)</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                JSON-based representation of computation tasks with dependencies, confidence scores, and semantic metadata. Enables graph-based computation with full provenance tracking.
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <Zap className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Probabilistic Microcontroller (PMCU)</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Intelligent scheduler that selects execution order based on confidence scores and telemetry bias. Enables probabilistic execution strategies beyond deterministic scheduling.
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <Code2 className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Reconfigurable Logic Cells (RLC)</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Four independent execution units with load balancing and performance monitoring. Each RLC tracks execution count and latency for adaptive optimization.
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <GitBranch className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Unified Memory Lattice (UML)</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Tagged memory system where each location carries both data and semantic metadata. Enables efficient tracking of data lineage and semantic relationships.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="documentation" className="py-16 bg-white border-b border-slate-200">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Technical Specifications</h2>
          
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="seg">SEG Format</TabsTrigger>
              <TabsTrigger value="build">Building</TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase mb-2">Language</p>
                      <p className="text-lg text-slate-900">Rust 2021 Edition</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase mb-2">Memory</p>
                      <p className="text-lg text-slate-900">4 MB UML (Configurable)</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase mb-2">Execution Units</p>
                      <p className="text-lg text-slate-900">4 RLCs</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase mb-2">Max Cycles</p>
                      <p className="text-lg text-slate-900">10,000 (Configurable)</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase mb-2">Supported Opcodes</p>
                      <p className="text-lg text-slate-900">ADD, MUL, LOAD, STORE, NOP</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase mb-2">Optimization</p>
                      <p className="text-lg text-slate-900">SOML (Every 8 cycles)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="seg" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-slate-600 mb-4">
                    Semantic Execution Graphs are defined in JSON format:
                  </p>
                  <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
{`[
  {
    "id": 0,
    "opcode": "STORE",
    "operand_a": 100,
    "operand_b": 10,
    "semantic_tag": 1,
    "confidence": 0.9,
    "latency": 1,
    "depends_on": []
  },
  {
    "id": 1,
    "opcode": "LOAD",
    "operand_a": 100,
    "operand_b": 0,
    "semantic_tag": 2,
    "confidence": 0.8,
    "latency": 1,
    "depends_on": [0]
  }
]`}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="build" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Prerequisites</p>
                      <p className="text-slate-600">Rust 1.56+ (install from https://rustup.rs/)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Build Command</p>
                      <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm">
                        cargo build --release
                      </pre>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Run Command</p>
                      <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm">
                        cargo run --release -- example_seg.json
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Architecture</h2>
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <pre className="text-sm text-slate-700 overflow-x-auto">
{`┌─────────────────────────────────────────────────────────┐
│                   HSPA Emulator                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   PMCU       │  │   RLC 0-3    │  │   SOML       │  │
│  │ (Scheduler)  │  │ (Execution)  │  │(Optimization)│  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│         │                  │                 │          │
│         └──────────────────┼─────────────────┘          │
│                            │                           │
│                    ┌───────▼────────┐                  │
│                    │  UML Memory    │                  │
│                    │  (4 MB tagged) │                  │
│                    └────────────────┘                  │
│                                                         │
└─────────────────────────────────────────────────────────┘`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join the Post-Quantum Cryptography Revolution
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're building the future of secure genomic data processing. 
            Explore our Supreme Court petition, review our research, and join our team.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
              <Link href="/petition">
                <a>Read the Petition</a>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              <Link href="/jobs">
                <a>View Careers</a>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 border-t border-slate-800">
        <div className="container text-center">
          <p className="mb-2">© 2026 Manus AI. Post-Quantum Cryptography for Genomic Security.</p>
          <p className="text-sm text-slate-500">
            <a href="https://github.com/mclaughlinfernandeez/genomic-pqc" className="hover:text-slate-300">
              GitHub Repository
            </a>
            {" | "}
            <a href="mailto:careers@manus.ai" className="hover:text-slate-300">
              Contact Us
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
