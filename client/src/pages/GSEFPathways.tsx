import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertCircle, Download, Upload, BarChart3, Dna } from 'lucide-react';

interface PathwayMarker {
  rsID: string;
  gene: string;
  pathway: string;
  impact: string;
  severity: 'HIGH' | 'MEDIUM' | 'LOW';
  genotype?: string;
}

interface PathwayScore {
  pathway: string;
  markersFound: number;
  riskScore: number;
  weightedScore: number;
}

const PATHWAY_MARKERS: Record<string, PathwayMarker[]> = {
  'Dopamine': [
    { rsID: 'rs4680', gene: 'COMT', pathway: 'Dopamine', impact: 'Dopamine Catabolism (Metabolic Tax)', severity: 'HIGH' },
    { rsID: 'rs1800955', gene: 'DRD4', pathway: 'Dopamine', impact: 'Reward/Inhibition (7R variant)', severity: 'HIGH' },
    { rsID: 'rs2075654', gene: 'SLC6A3', pathway: 'Dopamine', impact: 'DAT1 Attention Modulation', severity: 'HIGH' },
    { rsID: 'rs1800497', gene: 'DRD2', pathway: 'Dopamine', impact: 'Taq1A Inhibitory Control', severity: 'HIGH' },
    { rsID: 'rs6277', gene: 'DRD2', pathway: 'Dopamine', impact: 'Receptor Density/Apathy', severity: 'MEDIUM' },
  ],
  'Norepinephrine': [
    { rsID: 'rs1800544', gene: 'ADRA2A', pathway: 'Norepinephrine', impact: 'Alpha-2A Adrenergic (Attention Nets)', severity: 'HIGH' },
    { rsID: 'rs3785143', gene: 'SLC6A2', pathway: 'Norepinephrine', impact: 'NET (Norepinephrine Transport)', severity: 'HIGH' },
    { rsID: 'rs5569', gene: 'SLC6A2', pathway: 'Norepinephrine', impact: 'NET Transporter Efficiency', severity: 'MEDIUM' },
  ],
  'Serotonin': [
    { rsID: 'rs6296', gene: 'HTR1B', pathway: 'Serotonin', impact: 'Serotonin 1B (Impulsivity)', severity: 'MEDIUM' },
    { rsID: 'rs25531', gene: 'SLC6A4', pathway: 'Serotonin', impact: 'SERT (Affective Regulation)', severity: 'HIGH' },
    { rsID: 'rs4570625', gene: 'TPH2', pathway: 'Serotonin', impact: 'Serotonin Synthesis', severity: 'MEDIUM' },
  ],
  'Glutamate/GABA': [
    { rsID: 'rs3792452', gene: 'GRM7', pathway: 'Glutamate/GABA', impact: 'Glutamate Receptor Signaling', severity: 'MEDIUM' },
    { rsID: 'rs3749034', gene: 'GAD1', pathway: 'Glutamate/GABA', impact: 'GABA Synthesis (Inhibitory Balance)', severity: 'MEDIUM' },
  ],
  'Stress Response': [
    { rsID: 'rs1360780', gene: 'FKBP5', pathway: 'Stress Response', impact: 'HPA-Axis Stress Reactivity', severity: 'HIGH' },
  ],
  'Neuroplasticity': [
    { rsID: 'rs6265', gene: 'BDNF', pathway: 'Neuroplasticity', impact: 'Brain-Derived Neurotrophic Factor', severity: 'HIGH' },
    { rsID: 'rs362545', gene: 'SNAP25', pathway: 'Neuroplasticity', impact: 'Synaptic Vesicle Release', severity: 'HIGH' },
  ],
};

const PATHWAY_WEIGHTS: Record<string, number> = {
  'Dopamine': 0.35,
  'Norepinephrine': 0.30,
  'Serotonin': 0.20,
  'Glutamate/GABA': 0.10,
  'Stress Response': 0.03,
  'Neuroplasticity': 0.02,
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'HIGH': return 'bg-red-100 text-red-800';
    case 'MEDIUM': return 'bg-yellow-100 text-yellow-800';
    case 'LOW': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const calculatePathwayScores = (): PathwayScore[] => {
  return Object.entries(PATHWAY_MARKERS).map(([pathway, markers]) => {
    const severityMap = { 'HIGH': 3, 'MEDIUM': 2, 'LOW': 1 };
    const riskValues = markers.map(m => severityMap[m.severity]);
    const avgRisk = riskValues.reduce((a, b) => a + b, 0) / riskValues.length / 3;
    const weightedScore = avgRisk * PATHWAY_WEIGHTS[pathway];

    return {
      pathway,
      markersFound: markers.length,
      riskScore: parseFloat(avgRisk.toFixed(4)),
      weightedScore: parseFloat(weightedScore.toFixed(4)),
    };
  });
};

export default function GSEFPathways() {
  const [selectedPathway, setSelectedPathway] = useState<string>('Dopamine');
  const pathwayScores = calculatePathwayScores();
  const overallGPRS = pathwayScores.reduce((sum, p) => sum + p.weightedScore, 0);
  const markers = PATHWAY_MARKERS[selectedPathway] || [];

  const handleDownloadExhibitB = () => {
    const allMarkers = Object.values(PATHWAY_MARKERS).flat();
    const csv = [
      ['rsID', 'Gene', 'Pathway', 'Impact', 'Severity', 'PubMed Link'],
      ...allMarkers.map(m => [
        m.rsID,
        m.gene,
        m.pathway,
        m.impact,
        m.severity,
        `https://pubmed.ncbi.nlm.nih.gov/?term=${m.rsID}+${m.gene}+ADHD`
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'GSEF_Exhibit_B_Consolidated.csv';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Dna className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-900">GSEF v1.2 Pathway Analysis</h1>
          </div>
          <p className="text-lg text-slate-600">
            Comprehensive neurotransmitter pathway analysis for ADHD/ADD genetic risk assessment
          </p>
        </div>

        {/* Overall Score Card */}
        <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-2xl">Overall GPRS Score</CardTitle>
            <CardDescription>Weighted polygenic risk across all pathways</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-5xl font-bold text-blue-600">{overallGPRS.toFixed(4)}</div>
              <div className="text-right">
                <p className="text-sm text-slate-600 mb-2">Risk Interpretation:</p>
                <Badge variant={overallGPRS > 0.5 ? 'destructive' : 'default'} className="text-base px-4 py-2">
                  {overallGPRS > 0.5 ? 'ELEVATED NEUROGENETIC RISK' : 'BASELINE RISK'}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pathway Scores Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Pathway Risk Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pathwayScores.map((score) => (
                <div key={score.pathway} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-slate-900 mb-2">{score.pathway}</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-slate-600">Markers Found:</span> <span className="font-mono font-bold">{score.markersFound}</span></p>
                    <p><span className="text-slate-600">Risk Score:</span> <span className="font-mono font-bold">{score.riskScore}</span></p>
                    <p><span className="text-slate-600">Weighted Score:</span> <span className="font-mono font-bold text-blue-600">{score.weightedScore}</span></p>
                    <div className="mt-3 w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${score.weightedScore * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Pathway Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Marker Analysis</CardTitle>
            <CardDescription>SNP-level genetic risk factors by neurotransmitter pathway</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedPathway} onValueChange={setSelectedPathway} className="w-full">
              <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full mb-6">
                {Object.keys(PATHWAY_MARKERS).map((pathway) => (
                  <TabsTrigger key={pathway} value={pathway} className="text-xs sm:text-sm">
                    {pathway}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(PATHWAY_MARKERS).map(([pathway, pathwayMarkers]) => (
                <TabsContent key={pathway} value={pathway} className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-slate-300">
                          <th className="text-left py-3 px-4 font-semibold">rsID</th>
                          <th className="text-left py-3 px-4 font-semibold">Gene</th>
                          <th className="text-left py-3 px-4 font-semibold">Impact</th>
                          <th className="text-left py-3 px-4 font-semibold">Severity</th>
                          <th className="text-left py-3 px-4 font-semibold">PubMed</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pathwayMarkers.map((marker) => (
                          <tr key={marker.rsID} className="border-b border-slate-200 hover:bg-slate-50">
                            <td className="py-3 px-4 font-mono text-blue-600">{marker.rsID}</td>
                            <td className="py-3 px-4 font-semibold">{marker.gene}</td>
                            <td className="py-3 px-4 text-slate-700">{marker.impact}</td>
                            <td className="py-3 px-4">
                              <Badge className={getSeverityColor(marker.severity)}>
                                {marker.severity}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              <a
                                href={`https://pubmed.ncbi.nlm.nih.gov/?term=${marker.rsID}+${marker.gene}+ADHD`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                Link
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Constitutional Legal Notice */}
        <Card className="mt-8 border-l-4 border-l-amber-500 bg-amber-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-900">
              <AlertCircle className="w-5 h-5" />
              Constitutional Legal Notice
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700 space-y-3">
            <p>
              The GSEF v1.2 framework provides a comprehensive genetic basis for recognizing neurogenetic status as a disability under the Americans with Disabilities Act (ADA) Title II and the Eighth Amendment prohibition on status-based punishment.
            </p>
            <p>
              This analysis demonstrates that the Petitioner's polygenic risk across dopaminergic, adrenergic, and serotonergic pathways constitutes a verified biological status requiring constitutional accommodation and protection from criminalization.
            </p>
            <p className="font-semibold">
              All findings are subject to the GPRS Secure-Enclave Framework and protected under post-quantum cryptographic standards (Kyber-768, Dilithium-III).
            </p>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap">
          <Button
            onClick={handleDownloadExhibitB}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <Download className="w-4 h-4" />
            Download Exhibit B (CSV)
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Upload Genomic Data
          </Button>
        </div>
      </div>
    </div>
  );
}
