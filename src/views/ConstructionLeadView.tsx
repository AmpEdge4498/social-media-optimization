import React, { useState, useEffect } from "react";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Search, 
  Filter, 
  Download, 
  ExternalLink, 
  Zap, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  UserCheck, 
  Send, 
  Sparkles, 
  Layers, 
  TrendingUp,
  FileSpreadsheet,
  Copy,
  Check,
  Building,
  Home,
  Factory,
  Briefcase
} from "lucide-react";
import { 
  getStoredLeads, 
  saveLeads, 
  generateCustomQueryLeads, 
  generateWhatsAppPitch, 
  generateEmailPitch, 
  exportLeadsToCsv 
} from "../services/constructionLeadService";
import { ConstructionLead, ProjectCategory, LeadStatus, CompanyProfile } from "../types";

interface ConstructionLeadProps {
  company: CompanyProfile;
}

export const ConstructionLeadView: React.FC<ConstructionLeadProps> = ({ company }) => {
  const [leads, setLeads] = useState<ConstructionLead[]>([]);
  const [searchLocation, setSearchLocation] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStage, setSelectedStage] = useState<string>("all");
  const [activeModalLead, setActiveModalLead] = useState<ConstructionLead | null>(null);
  const [modalTab, setModalTab] = useState<"whatsapp" | "email">("whatsapp");
  const [copiedPitch, setCopiedPitch] = useState<boolean>(false);

  useEffect(() => {
    setLeads(getStoredLeads());
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = generateCustomQueryLeads(searchLocation, selectedCategory);
    setLeads(results);
  };

  const handleStatusChange = (leadId: string, newStatus: LeadStatus) => {
    const updated = leads.map(l => l.id === leadId ? { ...l, crmStatus: newStatus } : l);
    setLeads(updated);
    saveLeads(updated);
  };

  const handleExportCsv = () => {
    const csvData = exportLeadsToCsv(leads);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `AmpEdge_Construction_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openOutreachModal = (lead: ConstructionLead, tab: "whatsapp" | "email") => {
    setActiveModalLead(lead);
    setModalTab(tab);
    setCopiedPitch(false);
  };

  const filteredLeads = leads.filter(l => {
    const matchesCat = selectedCategory === "all" || l.category === selectedCategory;
    const matchesStage = selectedStage === "all" || l.constructionStage.toLowerCase().includes(selectedStage.toLowerCase());
    return matchesCat && matchesStage;
  });

  const totalPipelineValue = "₹ 1,55,30,000";

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>High-Value B2B Construction & Project Lead Hunter</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ongoing Construction Sites, Apartments & Housing Societies
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Real-time verified project locations, builder contacts, construction stages, electrical scopes, and direct 1-click CRM outreach.
          </p>
        </div>

        <button
          onClick={handleExportCsv}
          className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 text-xs font-bold shadow-lg flex items-center space-x-2 transition shrink-0 self-start md:self-auto"
        >
          <FileSpreadsheet className="w-4 h-4" />
          <span>Export {filteredLeads.length} Leads to CSV / Excel</span>
        </button>
      </div>

      {/* Top Stats Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="text-[10px] uppercase font-bold text-slate-400">Total Active Sites</div>
          <div className="text-2xl font-extrabold text-white mt-1">{leads.length} Projects</div>
          <div className="text-[11px] text-emerald-400 mt-1">✓ Across New Town, Salt Lake & Metro</div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="text-[10px] uppercase font-bold text-slate-400">Total Electrical Pipeline</div>
          <div className="text-2xl font-extrabold text-emerald-400 mt-1">{totalPipelineValue}</div>
          <div className="text-[11px] text-slate-400 mt-1">Wiring, Panels & Substation Value</div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="text-[10px] uppercase font-bold text-slate-400">Urgent Wiring Phase</div>
          <div className="text-2xl font-extrabold text-cyan-400 mt-1">
            {leads.filter(l => l.constructionStage.includes("Concealed")).length} Sites
          </div>
          <div className="text-[11px] text-cyan-400 mt-1">⚡ Slab Ready for Conduits</div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="text-[10px] uppercase font-bold text-slate-400">Society AMC Contracts</div>
          <div className="text-2xl font-extrabold text-purple-400 mt-1">
            {leads.filter(l => l.category === "housing_society_amc").length} Societies
          </div>
          <div className="text-[11px] text-purple-400 mt-1">🏢 24/7 Annual Maintenance</div>
        </div>
      </div>

      {/* Location Search Bar & Category Filters */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              placeholder="Search by Location, Area, Pincode or City (e.g. Rajarhat, New Town, Salt Lake, Howrah, Siliguri...)"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-600/30 flex items-center justify-center space-x-2 transition shrink-0"
          >
            <Search className="w-4 h-4" />
            <span>Scan Google Maps & Construction Data</span>
          </button>
        </form>

        {/* Category Filter Pills */}
        <div className="flex items-center flex-wrap gap-2 pt-2 border-t border-slate-800/80">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-2">
            Project Type:
          </span>
          {[
            { key: "all", label: "All Projects" },
            { key: "residential_apartment", label: "🏢 High-Rise Apartments" },
            { key: "independent_house", label: "🏡 Luxury Houses & Duplex" },
            { key: "housing_society_amc", label: "🛡️ Housing Society AMC" },
            { key: "commercial_office", label: "💼 Commercial Office Towers" },
            { key: "industrial_plant", label: "🏭 Industrial & Factory Plants" },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                selectedCategory === cat.key
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                  : "bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Construction Leads List */}
      <div className="space-y-4 animate-fadeIn">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-white text-base flex items-center space-x-2">
            <Building2 className="w-5 h-5 text-emerald-400" />
            <span>Verified Construction Projects ({filteredLeads.length})</span>
          </h3>
          <span className="text-xs text-slate-400">Sorted by Electrical Deal Urgency</span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredLeads.map((lead) => (
            <div
              key={lead.id}
              className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition shadow-xl space-y-4 group"
            >
              {/* Header: Title, Category, Deal Value */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                <div>
                  <div className="flex items-center space-x-2.5 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-950/80 text-indigo-300 border border-indigo-800/40">
                      {lead.category.replace(/_/g, " ")}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{lead.discoveredDate}</span>
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      Via {lead.discoverySource}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {lead.projectName}
                  </h4>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <div className="text-right">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Est. Electrical Deal Value</div>
                    <div className="text-base sm:text-lg font-extrabold text-emerald-400 font-mono">
                      {lead.estimatedDealValue}
                    </div>
                  </div>

                  {/* CRM Status Dropdown */}
                  <select
                    value={lead.crmStatus}
                    onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border focus:outline-none transition cursor-pointer ${
                      lead.crmStatus === "Contract Won / AMC Active" ? "bg-emerald-950 text-emerald-300 border-emerald-700" :
                      lead.crmStatus === "Quotation Sent" ? "bg-purple-950 text-purple-300 border-purple-700" :
                      lead.crmStatus === "Site Visit Booked" ? "bg-cyan-950 text-cyan-300 border-cyan-700" :
                      lead.crmStatus === "Contacted" ? "bg-indigo-950 text-indigo-300 border-indigo-700" :
                      "bg-amber-950 text-amber-300 border-amber-700"
                    }`}
                  >
                    <option value="New Lead">🟡 New Lead</option>
                    <option value="Contacted">🔵 Contacted</option>
                    <option value="Site Visit Booked">🟢 Site Visit Booked</option>
                    <option value="Quotation Sent">🟣 Quotation Sent</option>
                    <option value="Contract Won / AMC Active">🏆 Contract Won / AMC Active</option>
                  </select>
                </div>
              </div>

              {/* Middle Section: Location & Contact Person */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {/* Location & Maps */}
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Project Location:</span>
                  </div>
                  <p className="text-white font-medium">{lead.location.fullAddress}</p>
                  <a
                    href={lead.location.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 text-[11px] font-semibold pt-1"
                  >
                    <span>Open on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Contact Person & Company */}
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center space-x-1">
                    <UserCheck className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Builder / Decision Maker:</span>
                  </div>
                  <div className="text-white font-bold">{lead.contactPerson.name} ({lead.contactPerson.role})</div>
                  <div className="text-slate-300">{lead.contactPerson.companyOrBuilderName}</div>
                  <div className="flex items-center space-x-2 text-slate-400 pt-0.5">
                    <span>📞 {lead.contactPerson.phone}</span>
                    <span>•</span>
                    <span className="truncate">✉️ {lead.contactPerson.email}</span>
                  </div>
                </div>

                {/* Construction Stage & Scope */}
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5 md:col-span-2 lg:col-span-1">
                  <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center space-x-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Current Stage & Electrical Scope:</span>
                  </div>
                  <div className="font-bold text-amber-300">{lead.constructionStage}</div>
                  <div className="space-y-0.5 pt-1">
                    {lead.electricalScope.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="text-slate-300 text-[11px] flex items-center space-x-1">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Outreach Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="text-xs text-slate-400 italic">
                  💡 {lead.notes}
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={() => openOutreachModal(lead, "whatsapp")}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 flex items-center space-x-1.5 transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Pitch</span>
                  </button>

                  <button
                    onClick={() => openOutreachModal(lead, "email")}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20 flex items-center space-x-1.5 transition"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Quotation</span>
                  </button>

                  <a
                    href={`tel:${lead.contactPerson.phone}`}
                    className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-1.5 transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outreach Modal */}
      {activeModalLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-2xl w-full space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <Send className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-white text-base">
                  {modalTab === "whatsapp" ? "WhatsApp Outreach Generator" : "Formal Electrical Quotation Pitch"}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalLead(null)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            {/* Target Info */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs flex items-center justify-between">
              <div>
                <span className="text-slate-400">Recipient: </span>
                <span className="font-bold text-white">{activeModalLead.contactPerson.name} ({activeModalLead.contactPerson.companyOrBuilderName})</span>
              </div>
              <div className="font-mono text-emerald-400 font-bold">
                {modalTab === "whatsapp" ? activeModalLead.contactPerson.phone : activeModalLead.contactPerson.email}
              </div>
            </div>

            {/* Generated Message Content */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-sans whitespace-pre-line leading-relaxed max-h-72 overflow-y-auto">
              {modalTab === "whatsapp" 
                ? generateWhatsAppPitch(activeModalLead, company.name)
                : `${generateEmailPitch(activeModalLead, company.name).subject}\n\n${generateEmailPitch(activeModalLead, company.name).body}`
              }
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => {
                  const text = modalTab === "whatsapp" 
                    ? generateWhatsAppPitch(activeModalLead, company.name)
                    : `${generateEmailPitch(activeModalLead, company.name).subject}\n\n${generateEmailPitch(activeModalLead, company.name).body}`;
                  navigator.clipboard.writeText(text);
                  setCopiedPitch(true);
                  setTimeout(() => setCopiedPitch(false), 2000);
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-1.5 transition"
              >
                {copiedPitch ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPitch ? "Copied to Clipboard!" : "Copy Pitch"}</span>
              </button>

              {modalTab === "whatsapp" ? (
                <a
                  href={`https://api.whatsapp.com/send?phone=${activeModalLead.contactPerson.whatsapp}&text=${encodeURIComponent(generateWhatsAppPitch(activeModalLead, company.name))}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/30 flex items-center space-x-2 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </a>
              ) : (
                <a
                  href={`mailto:${activeModalLead.contactPerson.email}?subject=${encodeURIComponent(generateEmailPitch(activeModalLead, company.name).subject)}&body=${encodeURIComponent(generateEmailPitch(activeModalLead, company.name).body)}`}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 flex items-center space-x-2 transition"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Email Client</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
