import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Download, Upload, Play, Pause, RotateCcw, BookOpen, Wrench, 
  Lock, CheckCircle2, AlertCircle, FileJson, Database, Zap 
} from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

interface PipelineStep {
  id: string;
  name: string;
  status: "pending" | "running" | "completed" | "error";
  progress: number;
  icon: React.ReactNode;
}

interface PipelineResult {
  step: string;
  data: Record<string, unknown>;
  timestamp: string;
}

export default function PipelineDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [steps, setSteps] = useState<PipelineStep[]>([
    { id: "literature", name: "Literature Mining", status: "pending", progress: 0, icon: <BookOpen className="w-5 h-5" /> },
    { id: "discovery", name: "Tool Discovery", status: "pending", progress: 0, icon: <Wrench className="w-5 h-5" /> },
    { id: "license", name: "License Validation", status: "pending", progress: 0, icon: <Lock className="w-5 h-5" /> },
    { id: "pqc", name: "PQC Evidence Trace", status: "pending", progress: 0, icon: <CheckCircle2 className="w-5 h-5" /> },
    { id: "synthesis", name: "Data Synthesis", status: "pending", progress: 0, icon: <Database className="w-5 h-5" /> },
    { id: "prs", name: "PRS Calculation", status: "pending", progress: 0, icon: <Zap className="w-5 h-5" /> },
  ]);
  const [results, setResults] = useState<PipelineResult[]>([]);
  const [importedData, setImportedData] = useState<Record<string, unknown> | null>(null);
  const [selectedExample, setSelectedExample] = useState<string | null>(null);

  const runPipeline = async () => {
    setIsRunning(true);
    setResults([]);
    const newSteps = [...steps];

    for (let i = 0; i < newSteps.length; i++) {
      newSteps[i].status = "running";
      setSteps([...newSteps]);

      // Simulate step execution
      await new Promise(resolve => setTimeout(resolve, 1500));

      for (let j = 0; j <= 100; j += 20) {
        newSteps[i].progress = j;
        setSteps([...newSteps]);
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      newSteps[i].status = "completed";
      newSteps[i].progress = 100;
      setSteps([...newSteps]);

      // Add result
      const stepResults: Record<string, PipelineResult> = {
        literature: {
          step: "Literature Mining",
          data: {
            articlesFound: 1247,
            toolMentions: 89,
            repositories: ["github.com/sdv-dev/SDV", "github.com/sdv-dev/CTGAN"],
            topTools: ["SDV", "CTGAN", "XGBoost", "scikit-learn"],
          },
          timestamp: new Date().toISOString(),
        },
        discovery: {
          step: "Tool Discovery",
          data: {
            toolsDiscovered: 12,
            validatedTools: 11,
            failedValidation: 1,
            tools: [
              { name: "SDV", version: "1.0.0", stars: 2500, license: "MIT" },
              { name: "CTGAN", version: "0.8.0", stars: 1800, license: "MIT" },
              { name: "XGBoost", version: "2.0.0", stars: 25000, license: "Apache-2.0" },
            ],
          },
          timestamp: new Date().toISOString(),
        },
        license: {
          step: "License Validation",
          data: {
            validated: 11,
            compatible: 11,
            incompatible: 0,
            licenses: { MIT: 6, "Apache-2.0": 3, BSD: 2 },
          },
          timestamp: new Date().toISOString(),
        },
        pqc: {
          step: "PQC Evidence Trace",
          data: {
            entriesRecorded: 34,
            kyber768Hash: "a3f5e2d1c9b4f7e8a1d3c5b9f2e4a7d1",
            dilithiumSignature: "sig_2026_04_21_pqc_trace_001",
            setLedgerSize: "2.4 MB",
          },
          timestamp: new Date().toISOString(),
        },
        synthesis: {
          step: "Data Synthesis",
          data: {
            syntheticSamples: 5000,
            fastaSequences: 5000,
            fastqReads: 50000,
            qualityScore: 0.94,
          },
          timestamp: new Date().toISOString(),
        },
        prs: {
          step: "PRS Calculation",
          data: {
            samplesProcessed: 5000,
            avgPRS: 0.62,
            prsRange: [0.12, 0.98],
            pubmedWeights: { recent: 0.45, established: 0.35, emerging: 0.20 },
          },
          timestamp: new Date().toISOString(),
        },
      };

      setResults(prev => [...prev, stepResults[newSteps[i].id]]);
    }

    setIsRunning(false);
  };

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const data = JSON.parse(content);
        setImportedData(data);
        setSelectedExample(null);
      } catch (error) {
        alert("Error parsing JSON file");
      }
    };
    reader.readAsText(file);
  };

  const loadExample = async (exampleName: string) => {
    try {
      const response = await fetch("/caustin-17-traits.json");
      const data = await response.json();
      setImportedData(data);
      setSelectedExample(exampleName);
    } catch (error) {
      alert("Error loading example data");
    }
  };

  const exportResults = (format: "json" | "csv") => {
    let content = "";
    let filename = `pipeline-results-${new Date().toISOString().split("T")[0]}`;

    if (format === "json") {
      content = JSON.stringify(results, null, 2);
      filename += ".json";
    } else {
      const headers = ["Step", "Key", "Value"];
      const rows = results.flatMap(r =>
        Object.entries(r.data).map(([key, value]) => [
          r.step,
          key,
          typeof value === "object" ? JSON.stringify(value) : String(value),
        ])
      );
      content = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(",")).join("\n");
      filename += ".csv";
    }

    const blob = new Blob([content], { type: format === "json" ? "application/json" : "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  };

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
            <Link href="/demo">
              <a className="font-semibold text-blue-600 hover:text-blue-700">Demo</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Pipeline Demo
          </h1>
          <p className="text-xl text-slate-600 mb-6 max-w-2xl">
            Interactive demonstration of the autonomous genomic intelligence platform. 
            Watch as the system discovers tools, validates licenses, and generates synthetic genomic data 
            with post-quantum cryptographic verification.
          </p>
        </div>
      </section>

      {/* Main Demo Section */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="pipeline" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="pipeline">Pipeline Execution</TabsTrigger>
              <TabsTrigger value="data">Data Management</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>

            {/* Pipeline Execution Tab */}
            <TabsContent value="pipeline" className="mt-6 space-y-6">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle>Pipeline Control</CardTitle>
                  <CardDescription>
                    Execute the full autonomous genomic intelligence pipeline
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <Button
                      onClick={runPipeline}
                      disabled={isRunning}
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {isRunning ? "Running..." : "Run Pipeline"}
                    </Button>
                    <Button
                      onClick={() => {
                        setSteps(steps.map(s => ({ ...s, status: "pending", progress: 0 })));
                        setResults([]);
                      }}
                      variant="outline"
                      size="lg"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Pipeline Steps */}
              <div className="space-y-4">
                {steps.map((step, idx) => (
                  <Card key={step.id} className="border-slate-200">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-2 rounded-lg ${
                          step.status === "completed" ? "bg-green-100 text-green-600" :
                          step.status === "running" ? "bg-blue-100 text-blue-600" :
                          step.status === "error" ? "bg-red-100 text-red-600" :
                          "bg-slate-100 text-slate-600"
                        }`}>
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-slate-900">{step.name}</p>
                          <p className="text-sm text-slate-600">
                            {step.status === "completed" && "✓ Completed"}
                            {step.status === "running" && "⟳ Running..."}
                            {step.status === "pending" && "○ Pending"}
                            {step.status === "error" && "✕ Error"}
                          </p>
                        </div>
                        <Badge variant={
                          step.status === "completed" ? "default" :
                          step.status === "running" ? "secondary" :
                          "outline"
                        }>
                          {step.progress}%
                        </Badge>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            step.status === "completed" ? "bg-green-600" :
                            step.status === "running" ? "bg-blue-600" :
                            "bg-slate-300"
                          }`}
                          style={{ width: `${step.progress}%` }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Data Management Tab */}
            <TabsContent value="data" className="mt-6 space-y-6">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle>Data Import</CardTitle>
                  <CardDescription>
                    Import genomic data or pipeline configuration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 mb-4">
                      Drag and drop JSON, CSV, FASTA, or FASTQ files here
                    </p>
                    <input
                      type="file"
                      accept=".json,.csv,.fasta,.fastq,.fa,.fq"
                      onChange={handleFileImport}
                      className="hidden"
                      id="file-import"
                    />
                    <Button asChild variant="outline">
                      <label htmlFor="file-import" className="cursor-pointer">
                        <Upload className="w-4 h-4 mr-2" />
                        Select File
                      </label>
                    </Button>
                    <p className="text-sm text-slate-500 mt-2">or</p>
                    <Button
                      onClick={() => loadExample("Caustin's 17-Trait Report")}
                      variant="secondary"
                      className="mt-2"
                    >
                      Load Example: Caustin's Report
                    </Button>
                    {importedData && (
                      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-700 font-semibold">✓ Data loaded successfully</p>
                        <p className="text-sm text-green-600 mt-1">
                          {selectedExample ? selectedExample : "Custom file"} - {Object.keys(importedData).length} fields
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle>Data Export</CardTitle>
                  <CardDescription>
                    Export pipeline results in multiple formats
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      onClick={() => exportResults("json")}
                      disabled={results.length === 0}
                      variant="outline"
                      className="w-full"
                    >
                      <FileJson className="w-4 h-4 mr-2" />
                      Export as JSON
                    </Button>
                    <Button
                      onClick={() => exportResults("csv")}
                      disabled={results.length === 0}
                      variant="outline"
                      className="w-full"
                    >
                      <Database className="w-4 h-4 mr-2" />
                      Export as CSV
                    </Button>
                  </div>
                  <p className="text-sm text-slate-600 mt-4">
                    {results.length === 0
                      ? "Run the pipeline to generate exportable results"
                      : `${results.length} results ready for export`}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Results Tab */}
            <TabsContent value="results" className="mt-6 space-y-6">
              {importedData && (importedData as Record<string, unknown>).traits && Array.isArray((importedData as Record<string, unknown>).traits) && (
                <Card className="border-blue-300 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-blue-900">Caustin's 17-Trait Genomic Report</CardTitle>
                    <CardDescription className="text-blue-700">
                      Subject: {((importedData as Record<string, unknown>).subject as Record<string, unknown>)?.name || "Unknown"} | Analysis Date: {((importedData as Record<string, unknown>).subject as Record<string, unknown>)?.reportDate}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {((importedData as Record<string, unknown>).traits as Record<string, unknown>[]).map((trait: Record<string, unknown>, idx: number) => (
                        <div key={idx} className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-400 transition">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p className="font-semibold text-slate-900">{trait.name}</p>
                              <p className="text-xs text-slate-500">{trait.category}</p>
                            </div>
                            <Badge variant={(trait.percentile as number) > 60 ? "default" : (trait.percentile as number) < 40 ? "secondary" : "outline"}>
                              {trait.percentile}th
                            </Badge>
                          </div>
                          <div className="space-y-1 text-sm">
                            <p className="text-slate-700">
                              <span className="font-medium">PRS:</span> {Number(trait.prs).toFixed(2)}
                            </p>
                            {trait.riskCategory && (
                              <p className="text-slate-700">
                                <span className="font-medium">Risk:</span> {String(trait.riskCategory)}
                              </p>
                            )}
                            {trait.predictedValue && (
                              <p className="text-slate-700">
                                <span className="font-medium">Value:</span> {String(trait.predictedValue)}
                              </p>
                            )}
                            {trait.metabolizerType && (
                              <p className="text-slate-700">
                                <span className="font-medium">Type:</span> {String(trait.metabolizerType)}
                              </p>
                            )}
                            <p className="text-slate-600 mt-2">
                              <span className="font-medium">Confidence:</span> {Number(trait.confidence).toFixed(0)}%
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
              {results.length === 0 && !importedData ? (
                <Card className="border-slate-200 bg-slate-50">
                  <CardContent className="pt-12 pb-12 text-center">
                    <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600">
                      No results yet. Run the pipeline to generate results.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                results.map((result, idx) => (
                  <Card key={idx} className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        {result.step}
                      </CardTitle>
                      <CardDescription>
                        Completed at {new Date(result.timestamp).toLocaleTimeString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(result.data).map(([key, value]) => (
                          <div key={key} className="p-3 bg-slate-50 rounded-lg">
                            <p className="text-sm font-semibold text-slate-600 uppercase mb-1">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </p>
                            <p className="text-slate-900 font-mono text-sm">
                              {typeof value === "object"
                                ? JSON.stringify(value).substring(0, 50) + "..."
                                : String(value)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Pipeline Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-slate-200">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Literature Mining</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Automatically discovers and retrieves computational tools from PubMed, arXiv, and GitHub repositories.
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <Lock className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>PQC Evidence Tracing</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Records all decisions and data transformations with post-quantum cryptographic signatures for immutable audit trails.
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <Database className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Synthetic Data Generation</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Generates realistic synthetic genomic data (FASTA/FASTQ) using SDV and CTGAN with quality validation.
              </CardContent>
            </Card>
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
