export const platformTimingData: { [key: string]: any } = {
  youtube: {
    name: "YouTube & Shorts",
    bestDays: ["Thursday", "Friday", "Saturday", "Sunday"],
    bestSlots: [
      { time: "14:00 - 16:00", reason: "Afternoon indexing before prime evening viewing", score: 96 },
      { time: "18:00 - 21:00", reason: "Peak evening leisure and entertainment window", score: 98 },
      { time: "12:00 - 14:00 (Shorts)", reason: "Lunchtime mobile scroll spike for Shorts", score: 92 }
    ],
    algoSecret: "YouTube algorithm indexes long videos for 2-3 hours before serving them to the main feed. For Shorts, publish 30-45 mins before peak hours.",
    heatmap: {
      Monday: [20, 25, 40, 60, 75, 80, 85, 70],
      Tuesday: [25, 30, 45, 65, 80, 85, 90, 75],
      Wednesday: [30, 35, 50, 70, 85, 88, 92, 78],
      Thursday: [35, 45, 60, 80, 92, 96, 98, 85],
      Friday: [40, 50, 70, 85, 95, 98, 99, 90],
      Saturday: [60, 75, 88, 95, 98, 99, 96, 88],
      Sunday: [65, 80, 92, 96, 97, 95, 90, 80]
    }
  },
  instagram: {
    name: "Instagram (Reels & Carousels)",
    bestDays: ["Monday", "Wednesday", "Thursday", "Sunday"],
    bestSlots: [
      { time: "07:00 - 09:00", reason: "Morning commute wake-up routine", score: 91 },
      { time: "12:30 - 14:30", reason: "Lunchtime dopamine scroll break", score: 95 },
      { time: "19:30 - 22:30", reason: "High-engagement bedtime entertainment window", score: 99 }
    ],
    algoSecret: "First 45 minutes saves & shares trigger the Explore page distribution multiplier. Always reply to comments within 15 minutes of posting.",
    heatmap: {
      Monday: [45, 60, 75, 88, 90, 94, 98, 80],
      Tuesday: [40, 55, 70, 82, 85, 90, 92, 75],
      Wednesday: [50, 65, 80, 92, 94, 96, 99, 85],
      Thursday: [48, 62, 78, 90, 93, 95, 97, 82],
      Friday: [45, 58, 72, 85, 88, 92, 94, 78],
      Saturday: [55, 70, 82, 88, 90, 92, 95, 80],
      Sunday: [60, 75, 85, 92, 96, 98, 99, 88]
    }
  },
  facebook: {
    name: "Facebook (Posts & Watch)",
    bestDays: ["Wednesday", "Thursday", "Friday", "Saturday"],
    bestSlots: [
      { time: "09:00 - 11:00", reason: "Mid-morning work break browsing", score: 89 },
      { time: "13:00 - 15:00", reason: "Post-lunch social media check-in", score: 93 },
      { time: "20:00 - 22:00", reason: "Family & community leisure time", score: 96 }
    ],
    algoSecret: "Facebook prioritizes content that sparks meaningful conversations between real friends. Prompt opinion polls and polarizing yet safe debates in comments.",
    heatmap: {
      Monday: [30, 45, 60, 75, 80, 85, 88, 65],
      Tuesday: [35, 50, 65, 78, 82, 86, 90, 70],
      Wednesday: [40, 60, 75, 88, 92, 95, 96, 75],
      Thursday: [45, 65, 80, 90, 94, 97, 98, 80],
      Friday: [50, 70, 82, 92, 95, 98, 99, 85],
      Saturday: [55, 72, 85, 90, 92, 95, 96, 78],
      Sunday: [50, 68, 80, 85, 88, 92, 94, 72]
    }
  },
  twitter: {
    name: "Twitter / X (Threads & Takes)",
    bestDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    bestSlots: [
      { time: "08:00 - 10:00", reason: "Morning news and industry tech pulse", score: 97 },
      { time: "12:00 - 13:30", reason: "Lunchtime hot-takes & trending debates", score: 94 },
      { time: "17:00 - 19:00", reason: "Evening wrap-up and analysis threads", score: 92 }
    ],
    algoSecret: "Retweets/Reposts within 10 minutes give exponential reach. Formatted threads with bookmark hooks get 4x more visibility on 'For You' algorithm.",
    heatmap: {
      Monday: [60, 85, 95, 90, 88, 92, 80, 50],
      Tuesday: [65, 90, 98, 92, 90, 94, 82, 55],
      Wednesday: [62, 88, 97, 94, 91, 95, 85, 58],
      Thursday: [60, 85, 96, 91, 89, 93, 84, 52],
      Friday: [55, 78, 90, 85, 82, 88, 75, 45],
      Saturday: [40, 50, 65, 70, 72, 75, 68, 40],
      Sunday: [45, 55, 70, 78, 80, 82, 75, 42]
    }
  },
  google_business: {
    name: "Google Business Profile (Updates & Offers)",
    bestDays: ["Monday", "Tuesday", "Thursday", "Friday"],
    bestSlots: [
      { time: "09:00 - 11:00", reason: "Local discovery when businesses start operating", score: 95 },
      { time: "14:00 - 16:00", reason: "Afternoon service bookings & queries", score: 91 },
      { time: "18:00 - 19:30", reason: "Evening planning for next day visits/orders", score: 88 }
    ],
    algoSecret: "Google local SEO rewards regular photo uploads with geo-tags and keyword-rich updates every 3 to 7 days.",
    heatmap: {
      Monday: [50, 88, 95, 92, 85, 80, 60, 30],
      Tuesday: [52, 90, 96, 94, 88, 82, 62, 32],
      Wednesday: [48, 85, 92, 90, 84, 78, 58, 28],
      Thursday: [54, 92, 97, 95, 90, 85, 65, 35],
      Friday: [58, 95, 99, 97, 92, 88, 70, 40],
      Saturday: [45, 75, 85, 88, 80, 72, 50, 25],
      Sunday: [35, 60, 70, 75, 68, 60, 40, 20]
    }
  }
};

export function getOptimalSchedule(platform: string, timezone: string = "Asia/Kolkata") {
  const data = platformTimingData[platform] || platformTimingData.instagram;
  return {
    platform: data.name,
    timezone,
    bestDays: data.bestDays,
    bestSlots: data.bestSlots,
    algoSecret: data.algoSecret,
    heatmap: data.heatmap,
    recommendedNextSlot: `${data.bestDays[0]} at ${data.bestSlots[0].time}`
  };
}
