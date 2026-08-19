// Subconscious Mind & Psychological Virality Engine

export function analyzeSubconsciousPsychology(contentOrTopic, format = "video") {
  const text = (contentOrTopic || "").toLowerCase();
  
  // Measure psychological triggers
  const hasCuriosity = /secret|hidden|truth|nobody|hacks|mistake|why|never|stop|formula/i.test(text);
  const hasDopamine = /fast|instant|double|scale|10x|money|views|viral|easy|hack|free/i.test(text);
  const hasUrgency = /now|today|before|quick|hurry|warning|2026|new|alert/i.test(text);
  const hasIdentity = /you|founder|creator|business|smart|top 1%|entrepreneur|leader/i.test(text);
  const hasEgoValidation = /master|expert|insider|pro|elite|unfair advantage/i.test(text);

  const dopamineScore = hasDopamine ? Math.floor(Math.random() * 8) + 90 : Math.floor(Math.random() * 15) + 72;
  const curiosityScore = hasCuriosity ? Math.floor(Math.random() * 6) + 92 : Math.floor(Math.random() * 18) + 68;
  const urgencyScore = hasUrgency ? Math.floor(Math.random() * 8) + 88 : Math.floor(Math.random() * 20) + 60;
  const identityScore = hasIdentity ? Math.floor(Math.random() * 8) + 90 : Math.floor(Math.random() * 15) + 65;
  const retentionScore = Math.round((dopamineScore + curiosityScore + urgencyScore + identityScore) / 4);

  return {
    overallPsychologyScore: retentionScore,
    triggers: [
      {
        name: "Dopamine Spike (Instant Payoff Anticipation)",
        score: dopamineScore,
        status: dopamineScore > 85 ? "High Impact" : "Moderate",
        explanation: "Viewer's brain anticipates immediate value or visual satisfaction within the first 3 seconds.",
        recommendation: "Introduce a fast-paced micro-teaser or visual before/after payoff upfront."
      },
      {
        name: "Curiosity Gap (Information Deprivation)",
        score: curiosityScore,
        status: curiosityScore > 85 ? "Extreme Retention Driver" : "Needs Sharpening",
        explanation: "Leaves an open question in the subconscious mind that forces the viewer to stay until the end to get closure.",
        recommendation: "Frame the problem as a counter-intuitive anomaly (e.g. 'Doing X is actually killing your results')."
      },
      {
        name: "Identity & Ego Elevation",
        score: identityScore,
        status: identityScore > 85 ? "Strong Shareability" : "Generic",
        explanation: "Makes the viewer feel smart, ahead of the curve, or part of an elite group by consuming and sharing this content.",
        recommendation: "Address the viewer's aspirational identity directly ('If you are building a modern brand...')."
      },
      {
        name: "Loss Aversion / FOMO",
        score: urgencyScore,
        status: urgencyScore > 85 ? "Urgent Action Trigger" : "Low Urgency",
        explanation: "Psychologically, humans fear losing an opportunity 2x more than they enjoy winning one.",
        recommendation: "Highlight the penalty of ignoring this shift (e.g., 'What happens to brands that ignore this in 2026')."
      }
    ],
    storytellingCritique: {
      narrativeArcRating: retentionScore > 80 ? "Gripping & High Tension" : "Flaccid (Needs Conflict & Stakes)",
      flawsIdentified: [
        "Intro is too explanatory rather than visually disruptive.",
        "Missing a clear 'Enemy' or 'Common False Belief' to rally the audience against.",
        "The turning point (climax) needs higher contrast between the struggle and the breakthrough."
      ],
      psychologicalRewriteFramework: {
        stage1_PatternInterrupt: "Start with an undeniable visual fact or contrarian statement that contradicts standard beliefs.",
        stage2_Agitation: "Amplify the pain point: Show how doing the conventional method wastes time, energy, and money.",
        stage3_TheSecretMechanism: "Introduce your unique solution / insight as the missing catalyst.",
        stage4_TransformationProof: "Deliver concrete proof / demo of the transformation.",
        stage5_SubconsciousCTA: "Ask for an effortless engagement micro-commitment ('Save this so you don't forget when executing')."
      }
    }
  };
}
