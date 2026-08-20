export type PlatformType = "youtube" | "instagram" | "facebook" | "twitter" | "google_business";
export type ContentFormat = "video" | "photo";

export interface ThreeDateComparisonMetric {
  metricName: string;
  date1Value: number | string;
  date2Value: number | string;
  date3Value: number | string;
  unit?: string;
  growthPercentage: string;
  status: "surging" | "steady" | "needs_attention";
}

export interface ThreeDateAuditData {
  platform: PlatformType;
  platformName: string;
  handleOrUrl: string;
  dates: {
    date1: string;
    date2: string;
    date3: string;
  };
  metricsComparison: ThreeDateComparisonMetric[];
  aiEvolutionReport: {
    growthSummary: string;
    biggestWin: string;
    criticalDropOrBottleneck: string;
    immediateActionForNext30Days: string[];
  };
  profileOptimizationChecks: Array<{
    item: string;
    score: number;
    recommendation: string;
  }>;
}

export interface HookItem {
  id: string;
  type: string;
  headline: string;
  visualCue: string;
  audioCue: string;
  subconsciousImpact: string;
  viralityRating: number;
}

export interface VideoScene {
  timestamp: string;
  sceneTitle: string;
  visual: string;
  audioSFX: string;
  spokenLine: string;
}

export interface CarouselSlide {
  slideNumber: number;
  title: string;
  content: string;
  visualDesign: string;
  psychologicalPurpose: string;
}

export interface ScriptData {
  type: string;
  duration?: string;
  slidesCount?: number;
  scenes?: VideoScene[];
  slides?: CarouselSlide[];
}

export interface ViralStep {
  stepNumber: number;
  name: string;
  action: string;
  impact: string;
}

export interface PlatformOutputData {
  youtube?: {
    platform: string;
    titleVariations: string[];
    description: string;
    tags: string[];
  };
  instagram?: {
    platform: string;
    caption: string;
    hashtags: string;
  };
  facebook?: {
    platform: string;
    postCopy: string;
    hashtags: string;
  };
  twitter?: {
    platform: string;
    threadHook: string;
    threadTweets: string[];
  };
  google_business?: {
    platform: string;
    title: string;
    body: string;
    callToAction: string;
    keywords: string[];
  };
}

export interface ViralBlueprint {
  topic: string;
  format: ContentFormat;
  viralityScore: number;
  confidenceScore: string;
  stepByStepBlueprint: ViralStep[];
  hooks: HookItem[];
  scriptContent: ScriptData;
  platformOutputs: PlatformOutputData;
  geminiLiveInsight?: string;
}

export interface PsychTrigger {
  name: string;
  score: number;
  status: string;
  explanation: string;
  recommendation: string;
}

export interface PsychologyData {
  overallPsychologyScore: number;
  triggers: PsychTrigger[];
  storytellingCritique: {
    narrativeArcRating: string;
    flawsIdentified: string[];
    psychologicalRewriteFramework: {
      stage1_PatternInterrupt: string;
      stage2_Agitation: string;
      stage3_TheSecretMechanism: string;
      stage4_TransformationProof: string;
      stage5_SubconsciousCTA: string;
    };
  };
}

export interface ProfileAuditData {
  url: string;
  platform: string;
  platformName: string;
  icon: string;
  auditDate: string;
  overallScore: number;
  status: string;
  metrics: {
    seoScore: number;
    brandingScore: number;
    retentionPotential: number;
    thumbnailImpactScore: number;
    uploadConsistencyScore: number;
  };
  currentBottlenecks: string[];
  psychologicalAnalysis: string;
  bioRecommendation: {
    currentStyle: string;
    optimizedBio: string;
    keyChanges: string[];
  };
  keywordOptimization: string[];
  growthPlan30Days: Array<{
    week: string;
    action: string;
  }>;
}

export interface TrendItem {
  id: string;
  title: string;
  category: string;
  growthVelocity: string;
  viralityPotential: number;
  sentiment: string;
  targetPlatforms: PlatformType[];
  recommendedFormat: ContentFormat;
  hookIdea: string;
  subconsciousTrigger: string;
  hashtags: string[];
}

export interface CompanyProfile {
  name: string;
  industry: string;
  targetAudience: string;
  brandVoice: string;
  apiKey?: string;
}
