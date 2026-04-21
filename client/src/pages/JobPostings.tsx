import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, DollarSign, MapPin, Users } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Senior Cryptography Engineer",
    department: "Security",
    salary: "$180,000 - $240,000",
    level: "Senior",
    type: "Full-time",
    description: "Lead the design and implementation of post-quantum cryptographic systems for genomic data protection.",
    skills: ["Cryptography", "Rust", "Post-Quantum Crypto", "Systems Programming"],
    highlights: [
      "Implement NIST-standardized post-quantum algorithms (Kyber-768, Dilithium-III)",
      "Design secure key management systems",
      "Conduct rigorous security audits",
      "Provide technical guidance to junior engineers"
    ]
  },
  {
    id: 2,
    title: "Genomic Data Security Architect",
    department: "Infrastructure",
    salary: "$170,000 - $230,000",
    level: "Senior",
    type: "Full-time",
    description: "Design and implement secure systems for managing and analyzing genomic data.",
    skills: ["Healthcare IT", "Security Architecture", "HIPAA", "Data Privacy"],
    highlights: [
      "Design secure data pipelines for genomic data",
      "Develop threat models specific to genomic data",
      "Implement audit logging and monitoring systems",
      "Ensure HIPAA, GINA, and ADA compliance"
    ]
  },
  {
    id: 3,
    title: "Rust Systems Engineer",
    department: "Engineering",
    salary: "$160,000 - $220,000",
    level: "Mid-level",
    type: "Full-time",
    description: "Develop high-performance, secure systems for genomic data processing and cryptographic operations.",
    skills: ["Rust", "Systems Programming", "Performance Optimization", "Concurrency"],
    highlights: [
      "Implement core HSPA processor components",
      "Write efficient, safe Rust code",
      "Optimize performance-critical code paths",
      "Conduct thorough code reviews"
    ]
  },
  {
    id: 4,
    title: "Regulatory Compliance Specialist",
    department: "Legal & Compliance",
    salary: "$140,000 - $190,000",
    level: "Mid-level",
    type: "Full-time",
    description: "Ensure genomic data systems comply with all applicable federal and state regulations.",
    skills: ["Healthcare Law", "HIPAA", "Compliance", "Regulatory Affairs"],
    highlights: [
      "Develop compliance documentation and policies",
      "Conduct compliance assessments of new features",
      "Maintain compliance calendars and manage audits",
      "Monitor regulatory developments"
    ]
  },
  {
    id: 5,
    title: "Bioinformatics Research Scientist",
    department: "Research",
    salary: "$130,000 - $180,000",
    level: "Mid-level",
    type: "Full-time",
    description: "Lead research and development of genomic analysis algorithms and pipelines.",
    skills: ["Bioinformatics", "Python/R", "Genomics", "Statistical Analysis"],
    highlights: [
      "Design polygenic risk score algorithms",
      "Develop genomic analysis pipelines",
      "Conduct research on emerging genomic techniques",
      "Publish research findings"
    ]
  }
];

export default function JobPostings() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

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
              <a className="text-slate-700 hover:text-slate-900">HSPA</a>
            </Link>
            <Link href="/petition">
              <a className="text-slate-700 hover:text-slate-900">Petition</a>
            </Link>
            <Link href="/jobs">
              <a className="font-semibold text-blue-600 hover:text-blue-700">Careers</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-white py-16">
        <div className="container">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-slate-600 mb-6 max-w-2xl">
            We're building the future of post-quantum cryptography and genomic security. 
            Help us protect sensitive health information and advance precision medicine.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-2xl">
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase mb-2">Open Positions</p>
              <p className="text-3xl font-bold text-slate-900">{jobs.length}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase mb-2">Avg. Salary</p>
              <p className="text-3xl font-bold text-slate-900">$165K+</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase mb-2">Remote</p>
              <p className="text-3xl font-bold text-slate-900">100%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Job List */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Open Positions</h2>
              <div className="space-y-3">
                {jobs.map((job) => (
                  <button
                    key={job.id}
                    onClick={() => setSelectedJob(job.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedJob === job.id
                        ? "border-blue-600 bg-blue-50"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <p className="font-semibold text-slate-900">{job.title}</p>
                    <p className="text-sm text-slate-600">{job.department}</p>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">{job.level}</Badge>
                      <Badge variant="outline" className="text-xs">{job.type}</Badge>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Job Details */}
            <div className="lg:col-span-2">
              {selectedJob ? (
                (() => {
                  const job = jobs.find(j => j.id === selectedJob);
                  return job ? (
                    <Card className="border-slate-200">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <CardTitle className="text-3xl mb-2">{job.title}</CardTitle>
                            <CardDescription className="text-base">{job.description}</CardDescription>
                          </div>
                          <Badge className="bg-blue-600">{job.level}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Compensation */}
                        <div className="border-t border-slate-200 pt-6">
                          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <DollarSign className="w-5 h-5 text-green-600" />
                            Compensation & Benefits
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-slate-600">Salary Range</p>
                              <p className="font-semibold text-slate-900">{job.salary}</p>
                            </div>
                            <div>
                              <p className="text-sm text-slate-600">Employment Type</p>
                              <p className="font-semibold text-slate-900">{job.type}</p>
                            </div>
                          </div>
                          <div className="mt-4 p-4 bg-slate-50 rounded-lg text-sm text-slate-700">
                            <p className="font-semibold mb-2">Includes:</p>
                            <ul className="space-y-1">
                              <li>• Comprehensive health insurance (medical, dental, vision)</li>
                              <li>• 401(k) matching</li>
                              <li>• Unlimited paid time off</li>
                              <li>• Professional development funding</li>
                              <li>• Flexible work arrangements</li>
                            </ul>
                          </div>
                        </div>

                        {/* Key Responsibilities */}
                        <div className="border-t border-slate-200 pt-6">
                          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-blue-600" />
                            Key Responsibilities
                          </h3>
                          <ul className="space-y-2">
                            {job.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex gap-3 text-slate-700">
                                <span className="text-blue-600 font-bold">✓</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        <div className="border-t border-slate-200 pt-6">
                          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-purple-600" />
                            Required Skills
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Apply Button */}
                        <div className="border-t border-slate-200 pt-6">
                          <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                            <a href="mailto:careers@manus.ai?subject=Application: {job.title}">
                              Apply Now
                            </a>
                          </Button>
                          <p className="text-sm text-slate-600 text-center mt-3">
                            Send resume and portfolio to: careers@manus.ai
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ) : null;
                })()
              ) : (
                <Card className="border-slate-200 bg-slate-50">
                  <CardContent className="pt-12 pb-12 text-center">
                    <Briefcase className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-600 text-lg">
                      Select a position to view details
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Why Join Manus AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Mission-Driven Work</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Work on cutting-edge technologies that protect genomic privacy, advance scientific research, 
                and improve outcomes for individuals with genetic conditions.
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Innovative Team</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Collaborate with experts in cryptography, bioinformatics, systems engineering, and healthcare law. 
                Your contributions directly impact critical infrastructure.
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Inclusive Culture</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                We're committed to building a diverse and inclusive workforce where all employees feel valued 
                and supported in their professional growth.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in building the future of post-quantum cryptography and genomic security.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
            <a href="mailto:careers@manus.ai">
              Get in Touch
            </a>
          </Button>
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
