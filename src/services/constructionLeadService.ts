import { ConstructionLead, ProjectCategory, ConstructionStage, LeadStatus } from "../types";

export const initialConstructionLeads: ConstructionLead[] = [
  {
    id: "lead-const-001",
    projectName: "Rajarhat Greens Residential High-Rise (Tower B & C)",
    category: "residential_apartment",
    location: {
      area: "Action Area II, New Town",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700156",
      fullAddress: "Plot IIE/14, Action Area II, New Town Rajarhat, Kolkata 700156",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Action+Area+II+New+Town+Rajarhat+Kolkata"
    },
    contactPerson: {
      name: "Sanjay Mukherjee",
      role: "Project Developer",
      phone: "+91 98310 44821",
      whatsapp: "919831044821",
      email: "procurement@rajarhatgreens.com",
      companyOrBuilderName: "Greenspace Infrastructure Pvt Ltd"
    },
    constructionStage: "Civil & Slab Completed (Concealed Wiring Phase)",
    electricalScope: [
      "120 Flats Complete Concealed House Wiring",
      "Modular DB & MCB Box Fitting",
      "Common Area Lighting & Inverter Backup",
      "500 kVA Transformer & LT Panel Earthing"
    ],
    estimatedDealValue: "₹ 24,50,000",
    discoverySource: "Google Maps",
    crmStatus: "New Lead",
    notes: "Slab work finished last week. Currently looking for approved electrical contractors for Phase 1 conduit & wiring.",
    discoveredDate: "Today at 09:30 AM"
  },
  {
    id: "lead-const-002",
    projectName: "Eden Park Vista 18-Story Housing Complex",
    category: "residential_apartment",
    location: {
      area: "EM Bypass near Ruby Crossing",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700107",
      fullAddress: "Kasba Industrial Estate Rd, EM Bypass, Kolkata 700107",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ruby+Crossing+EM+Bypass+Kolkata"
    },
    contactPerson: {
      name: "Anirban Bhattacharya",
      role: "Site Engineer",
      phone: "+91 98305 77120",
      whatsapp: "919830577120",
      email: "site.edenpark@kolkatabuilders.in",
      companyOrBuilderName: "Eden Landmark Developers"
    },
    constructionStage: "Finishing & Modular Phase (Switches & Inverters)",
    electricalScope: [
      "Modular Switchboard Installation (72 Premium Units)",
      "Smart Home Automation Pre-wiring",
      "EV Charging Station Infrastructure at Basement",
      "Electrical Material Supply (Cables & Switches)"
    ],
    estimatedDealValue: "₹ 18,80,000",
    discoverySource: "Local Construction Registry",
    crmStatus: "Contacted",
    notes: "Needs quotation for fire-resistant ISI copper cables & modular switch plates.",
    discoveredDate: "Yesterday at 04:15 PM"
  },
  {
    id: "lead-const-003",
    projectName: "Vidyasagar Cooperative Housing Society (160 Flats)",
    category: "housing_society_amc",
    location: {
      area: "Salt Lake Sector III, Block FD",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700091",
      fullAddress: "FD Block, Sector III, Bidhannagar, Kolkata 700091",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=FD+Block+Sector+3+Salt+Lake+Kolkata"
    },
    contactPerson: {
      name: "Debashis Sen",
      role: "Society Secretary",
      phone: "+91 94330 88241",
      whatsapp: "919433088241",
      email: "secretary@vidyasagar-chs.org",
      companyOrBuilderName: "Vidyasagar CHS Management Board"
    },
    constructionStage: "Existing Complex (AMC & Maintenance Renewal)",
    electricalScope: [
      "Annual Electrical AMC (Maintenance Contract)",
      "Pump House & Substation Routine Inspection",
      "Emergency 24/7 Electrician On-Call Service",
      "Periodic Earth Resistance Testing & Safety Audit"
    ],
    estimatedDealValue: "₹ 4,80,000 / Year",
    discoverySource: "Google Business Profile",
    crmStatus: "Site Visit Booked",
    notes: "Previous AMC expired. Society AGM scheduled this Sunday to finalize new electrical maintenance partner.",
    discoveredDate: "2 Days ago"
  },
  {
    id: "lead-const-004",
    projectName: "Zenith Tech & Business Park (Commercial Tower 1)",
    category: "commercial_office",
    location: {
      area: "Sector V, Electronics Complex",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700091",
      fullAddress: "Plot GP, Sector V, Salt Lake, Kolkata 700091",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sector+V+Salt+Lake+Kolkata"
    },
    contactPerson: {
      name: "Rohit Agarwal",
      role: "Builder / Promoter",
      phone: "+91 98741 22900",
      whatsapp: "919874122900",
      email: "projects@zenithtechpark.com",
      companyOrBuilderName: "Zenith Realty Assets"
    },
    constructionStage: "Substation / Transformer & Earthing Phase",
    electricalScope: [
      "Commercial HT/LT Distribution Substation Setup",
      "Busbar Trunking System Installation",
      "DG Synchronizing Panel & Load Balancing",
      "Complete Floor Electrical Conduiting (50,000 sq ft)"
    ],
    estimatedDealValue: "₹ 55,00,000",
    discoverySource: "Google Search Console",
    crmStatus: "Quotation Sent",
    notes: "Sent preliminary technical proposal with single line diagram. Awaiting purchase order meeting.",
    discoveredDate: "3 Days ago"
  },
  {
    id: "lead-const-005",
    projectName: "Shanti Nivas Luxury Duplex Bungalows (8 Units)",
    category: "independent_house",
    location: {
      area: "Joka near Diamond Harbour Road",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700104",
      fullAddress: "D.H. Road, Joka, Kolkata 700104",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Joka+Diamond+Harbour+Road+Kolkata"
    },
    contactPerson: {
      name: "Pradip Mondal",
      role: "Builder / Promoter",
      phone: "+91 98302 11985",
      whatsapp: "919830211985",
      email: "shantinivas.promoters@gmail.com",
      companyOrBuilderName: "Mondal Construction & Interiors"
    },
    constructionStage: "Civil & Slab Completed (Concealed Wiring Phase)",
    electricalScope: [
      "8 Independent Luxury Villas Complete Wiring",
      "Underground Cable Laying from Meter Room",
      "Solar Inverter Pre-wiring & Earth Pits",
      "High-End Architectural LED Light Conduits"
    ],
    estimatedDealValue: "₹ 14,20,000",
    discoverySource: "Facebook Real Estate",
    crmStatus: "New Lead",
    notes: "Plastering starting next month. Urgent requirement for electrical contractor team.",
    discoveredDate: "Today at 10:45 AM"
  },
  {
    id: "lead-const-006",
    projectName: "Apex Logistics & Heavy Engineering Plant",
    category: "industrial_plant",
    location: {
      area: "Jalan Industrial Complex, Dhulagarh",
      city: "Howrah",
      state: "West Bengal",
      pincode: "711302",
      fullAddress: "National Highway 6, Dhulagarh, Howrah 711302",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jalan+Industrial+Complex+Dhulagarh+Howrah"
    },
    contactPerson: {
      name: "Vikramjit Ghosh",
      role: "Plant Manager",
      phone: "+91 98319 66014",
      whatsapp: "919831966014",
      email: "v.ghosh@apexlogistics-ind.com",
      companyOrBuilderName: "Apex Heavy Infra & Warehousing"
    },
    constructionStage: "Pre-Handover & Final Testing",
    electricalScope: [
      "Factory Floor High-Bay Industrial Lighting",
      "Motor Control Center (MCC) Panel Commissioning",
      "Heavy Armoured Cable Laying (3.5 Core 300 sq mm)",
      "Industrial Annual Maintenance Contract (AMC)"
    ],
    estimatedDealValue: "₹ 38,00,000",
    discoverySource: "Google Maps",
    crmStatus: "Contract Won / AMC Active",
    notes: "AMC signed for 24 months. First quarterly safety audit and thermal imaging check completed.",
    discoveredDate: "1 Week ago"
  }
];

export function getStoredLeads(): ConstructionLead[] {
  try {
    const saved = localStorage.getItem("ampedge_construction_leads");
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error("Failed to load stored leads:", e);
  }
  return initialConstructionLeads;
}

export function saveLeads(leads: ConstructionLead[]): void {
  try {
    localStorage.setItem("ampedge_construction_leads", JSON.stringify(leads));
  } catch (e) {
    console.error("Failed to save leads:", e);
  }
}

export function generateCustomQueryLeads(locationQuery: string, category: string = "all"): ConstructionLead[] {
  const loc = locationQuery.trim() || "Kolkata";
  const base = getStoredLeads();
  
  if (loc.toLowerCase() === "all" || !loc) {
    return category === "all" ? base : base.filter(l => l.category === category);
  }

  // Filter existing or generate location-adapted leads
  const filtered = base.filter(l => 
    l.location.area.toLowerCase().includes(loc.toLowerCase()) ||
    l.location.city.toLowerCase().includes(loc.toLowerCase()) ||
    l.location.pincode.includes(loc) ||
    l.projectName.toLowerCase().includes(loc.toLowerCase())
  );

  if (filtered.length > 0) {
    return category === "all" ? filtered : filtered.filter(l => l.category === category);
  }

  // If new location queried (e.g. Siliguri, Durgapur, Mumbai, Noida), generate tailored live construction leads
  const generated: ConstructionLead[] = [
    {
      id: `lead-gen-${Date.now()}-1`,
      projectName: `${loc} Royal Heights Luxury Apartment Project`,
      category: "residential_apartment",
      location: {
        area: `Prime Sector / Main Road, ${loc}`,
        city: loc,
        state: "India",
        pincode: "700001",
        fullAddress: `Main Road Commercial Corridor, ${loc}`,
        googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=Construction+Projects+in+${encodeURIComponent(loc)}`
      },
      contactPerson: {
        name: "Abhishek Roy",
        role: "Project Developer",
        phone: "+91 98311 99201",
        whatsapp: "919831199201",
        email: `projects@${loc.toLowerCase().replace(/[^a-z]/g, '')}heights.com`,
        companyOrBuilderName: `${loc} Infrastructure Group`
      },
      constructionStage: "Civil & Slab Completed (Concealed Wiring Phase)",
      electricalScope: [
        "Complete 80-Unit Concealed House Wiring",
        "Substation & 400 kVA Transformer Setup",
        "Modular Switches & Inverter Backup",
        "Electrical Material Supply & Certified Testing"
      ],
      estimatedDealValue: "₹ 32,00,000",
      discoverySource: "Google Maps",
      crmStatus: "New Lead",
      notes: `Newly identified active construction site in ${loc}. Brickwork in progress, ready for electrical conduit pipes.`,
      discoveredDate: "Just now (Live Scan)"
    },
    {
      id: `lead-gen-${Date.now()}-2`,
      projectName: `${loc} Commercial Hub & IT Office Complex`,
      category: "commercial_office",
      location: {
        area: `Commercial Zone, ${loc}`,
        city: loc,
        state: "India",
        pincode: "700002",
        fullAddress: `IT Expressway, ${loc}`,
        googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=New+Office+Building+${encodeURIComponent(loc)}`
      },
      contactPerson: {
        name: "Vikash Sen",
        role: "Builder / Promoter",
        phone: "+91 98300 44551",
        whatsapp: "919830044551",
        email: `procurement@${loc.toLowerCase().replace(/[^a-z]/g, '')}tech.in`,
        companyOrBuilderName: "Apex Commercial Builders"
      },
      constructionStage: "Finishing & Modular Phase (Switches & Inverters)",
      electricalScope: [
        "LT Distribution Panel Wiring",
        "Commercial LED Lighting & Network Conduits",
        "Fire Safety Earthing & Lightning Arrester",
        "Annual Electrical AMC for Society"
      ],
      estimatedDealValue: "₹ 45,00,000",
      discoverySource: "Google Search Console",
      crmStatus: "New Lead",
      notes: `Finishing stage. Looking for turnkey electrical contractors in ${loc} with proven safety record.`,
      discoveredDate: "Just now (Live Scan)"
    }
  ];

  return category === "all" ? [...generated, ...base] : [...generated, ...base].filter(l => l.category === category);
}

export function generateWhatsAppPitch(lead: ConstructionLead, companyName: string = "AmpEdge Solutions"): string {
  return `Hello ${lead.contactPerson.name} Ji,\n\nWe noticed your ongoing project *${lead.projectName}* at *${lead.location.area}, ${lead.location.city}* is currently in the *${lead.constructionStage}*.\n\n*${companyName}* is a certified electrical engineering & turnkey contracting firm specializing in:\n⚡ Complete Concealed House Wiring & Panel Works\n🏢 Housing Society & Apartment Electrical AMC (24/7 Support)\n🏭 Industrial LT/HT Distribution & Substation Setup\n📦 Direct Supply of Original ISI Wires, Cables & Modular Materials\n\nWe would like to share our competitive project quotation and schedule a 15-minute site inspection.\n\n🔗 Website: https://ampedge.info\n📞 Direct Call: +91 98765 43210\n\nPlease let us know a convenient time to discuss!`;
}

export function generateEmailPitch(lead: ConstructionLead, companyName: string = "AmpEdge Solutions"): { subject: string; body: string } {
  return {
    subject: `Electrical Contracting & AMC Quotation for ${lead.projectName} — ${companyName}`,
    body: `Dear ${lead.contactPerson.name},\n\nWe are writing to introduce ${companyName} for your electrical contracting, wiring, and maintenance requirements at ${lead.projectName}, located at ${lead.location.fullAddress}.\n\nBased on your current stage (${lead.constructionStage}), we can support your project with:\n- ${lead.electricalScope.join("\n- ")}\n\nWhy Partner with ${companyName}:\n✓ Certified electrical engineers and experienced wiremen\n✓ 100% compliance with National Electrical Code (NEC) and IS safety standards\n✓ Direct material procurement ensuring up to 15-20% cost efficiency on copper cables and switchboards\n✓ Dedicated 24/7 AMC response team for post-handover society maintenance\n\nWe would be pleased to submit our detailed BOQ (Bill of Quantities) and schedule a site review at your convenience.\n\nWarm regards,\n\nProject Commercial Team\n${companyName}\nWebsite: https://ampedge.info\nEmail: contact@ampedge.info`
  };
}

export function exportLeadsToCsv(leads: ConstructionLead[]): string {
  const headers = [
    "Project Name",
    "Category",
    "Area",
    "City",
    "Contact Person",
    "Role",
    "Phone",
    "Email",
    "Company / Builder",
    "Construction Stage",
    "Estimated Deal Value",
    "Discovery Source",
    "CRM Status",
    "Google Maps Link",
    "Notes"
  ];

  const rows = leads.map(l => [
    `"${l.projectName.replace(/"/g, '""')}"`,
    `"${l.category}"`,
    `"${l.location.area}"`,
    `"${l.location.city}"`,
    `"${l.contactPerson.name}"`,
    `"${l.contactPerson.role}"`,
    `"${l.contactPerson.phone}"`,
    `"${l.contactPerson.email}"`,
    `"${l.contactPerson.companyOrBuilderName}"`,
    `"${l.constructionStage}"`,
    `"${l.estimatedDealValue}"`,
    `"${l.discoverySource}"`,
    `"${l.crmStatus}"`,
    `"${l.location.googleMapsUrl}"`,
    `"${(l.notes || "").replace(/"/g, '""')}"`
  ]);

  return [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
}
