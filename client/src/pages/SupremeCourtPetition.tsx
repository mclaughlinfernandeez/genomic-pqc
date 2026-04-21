import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, FileText, Scale, Shield } from "lucide-react";
import { Link } from "wouter";

export default function SupremeCourtPetition() {
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
              <a className="font-semibold text-blue-600 hover:text-blue-700">Petition</a>
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
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">
              Supreme Court Petition
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Petition for Writ of Certiorari: Post-Quantum Cryptography Infrastructure 
              as Critical National Security and Public Health Infrastructure
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href="/SUPREME_COURT_PETITION.md" download>
                  Download Full Petition
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#summary">
                  Read Summary
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Issues */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Questions Presented</h2>
          <div className="space-y-6">
            <Card className="border-slate-200 border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-red-600" />
                  Constitutional Authority for Post-Quantum Cryptography
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Whether the federal government has constitutional duty to protect genomic data 
                against quantum computing threats through post-quantum cryptographic standards, 
                particularly for data used in disability determinations under the Social Security Act.
              </CardContent>
            </Card>

            <Card className="border-slate-200 border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-blue-600" />
                  SSA Regulatory Modernization
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Whether the Social Security Administration's current evidence evaluation framework 
                under SSR 16-4p adequately accommodates emerging genomic technologies and whether 
                regulatory modernization is required to ensure equitable disability adjudication.
              </CardContent>
            </Card>

            <Card className="border-slate-200 border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-green-600" />
                  Advanced Processor Architecture Deployment
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Whether the deployment of advanced processor architectures (such as HSPA) for 
                genomic data analysis constitutes a necessary federal infrastructure investment 
                under the Commerce Clause and Necessary and Proper Clause.
              </CardContent>
            </Card>

            <Card className="border-slate-200 border-l-4 border-l-purple-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-6 h-6 text-purple-600" />
                  Federal Procurement Standards
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Whether existing federal procurement and technology standards adequately address 
                the integration of post-quantum cryptography and semantic processing systems 
                into critical infrastructure.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Arguments */}
      <section id="summary" className="py-16 bg-white border-b border-slate-200">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Legal Arguments</h2>
          
          <Tabs defaultValue="constitutional" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="constitutional">Constitutional</TabsTrigger>
              <TabsTrigger value="statutory">Statutory</TabsTrigger>
              <TabsTrigger value="policy">Policy</TabsTrigger>
              <TabsTrigger value="facts">Facts</TabsTrigger>
            </TabsList>

            <TabsContent value="constitutional" className="mt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Commerce Clause Authority</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  Genomic data flows through interstate commerce in multiple contexts: genetic testing 
                  services, research collaborations, health insurance claims, and disability determinations. 
                  The federal government may regulate this interstate commerce by establishing cryptographic 
                  standards for data protection.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Necessary and Proper Clause</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  Post-quantum cryptographic standards are necessary and proper to execute federal powers 
                  including Social Security administration, healthcare regulation, and national security. 
                  The Supreme Court has consistently upheld broad federal authority to establish technical 
                  standards supporting federal programs.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Spending Clause Authority</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  The federal government may condition receipt of federal funds (including Social Security 
                  benefits, Medicare reimbursement, and research funding) on compliance with post-quantum 
                  cryptographic standards. This approach has been upheld by the Supreme Court as a valid 
                  exercise of federal spending power.
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="statutory" className="mt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Social Security Act Authority</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  The Social Security Act (42 U.S.C. § 405) grants the SSA broad authority to establish 
                  procedures for evaluating medical evidence in disability determinations. This authority 
                  includes the power to adopt new technologies and procedures that improve accuracy, 
                  consistency, and efficiency of disability determinations.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Administrative Procedure Act Compliance</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  The Social Security Administration's failure to update SSR 16-4p to accommodate modern 
                  genomic technologies and automated evidence processing systems violates the Administrative 
                  Procedure Act's requirement that agencies engage in reasoned decision-making. The current 
                  ruling predates most modern genomic analysis techniques.
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="policy" className="mt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>National Security Implications</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  Genomic data represents critical national security infrastructure. Adversaries who gain 
                  access to genomic databases could identify individuals with specific genetic characteristics, 
                  enabling targeted attacks or coercion. The federal government's failure to protect genomic 
                  data with post-quantum cryptography creates an unacceptable national security vulnerability.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Public Health and Research</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  Genomic research is essential to developing treatments for genetic diseases, personalized 
                  medicine, and public health interventions. Researchers are reluctant to share genomic data 
                  without adequate security protections. Post-quantum cryptographic standards would increase 
                  researcher confidence in data security and accelerate genomic research.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Economic Efficiency</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  The current manual process for disability adjudication involving genomic evidence is 
                  economically inefficient. Automating this process through advanced processor architectures 
                  could save millions of dollars annually while improving outcomes for beneficiaries.
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="facts" className="mt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>The Quantum Threat</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  Current encryption standards (RSA and ECC) rely on mathematical problems that are difficult 
                  for classical computers but solvable by sufficiently powerful quantum computers. NIST has 
                  projected that quantum computers capable of breaking current encryption standards will emerge 
                  within 10-15 years. This creates an immediate threat through "harvest now, decrypt later" 
                  attacks, where adversaries collect and store encrypted genomic data today with the intention 
                  of decrypting it after quantum computers become available.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Genomic Data in Disability Adjudication</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  The Social Security Administration processes approximately 3 million disability claims 
                  annually. An increasing number of these claims involve genetic or genomic evidence. Social 
                  Security Ruling 16-4p (2016) explicitly authorizes the use of genetic test results as 
                  "medical evidence" in disability evaluations. However, the current process for translating 
                  genomic data into regulatory evidence is manual, time-consuming, and inconsistent.
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Relief Sought */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Relief Sought</h2>
          <div className="space-y-4">
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <ol className="space-y-3 text-slate-700">
                  <li className="flex gap-4">
                    <span className="font-bold text-blue-600 min-w-fit">1.</span>
                    <span>Grant the petition for writ of certiorari and review the constitutional and statutory authority for post-quantum cryptographic standards in federal systems.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-blue-600 min-w-fit">2.</span>
                    <span>Declare that the federal government has constitutional and statutory authority to establish and enforce post-quantum cryptographic standards for genomic data.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-blue-600 min-w-fit">3.</span>
                    <span>Declare that the Social Security Administration must update SSR 16-4p to accommodate modern genomic analysis technologies.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-blue-600 min-w-fit">4.</span>
                    <span>Authorize federal funding for the development and deployment of post-quantum cryptographic infrastructure.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-blue-600 min-w-fit">5.</span>
                    <span>Declare that the deployment of advanced processor architectures constitutes a necessary federal infrastructure investment.</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Support the Post-Quantum Cryptography Initiative
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            This petition represents a critical step toward protecting genomic data 
            and modernizing federal disability adjudication systems.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
              <a href="/SUPREME_COURT_PETITION.md" download>
                Download Full Document
              </a>
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
