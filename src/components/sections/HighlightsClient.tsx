"use client";

import React, { useState } from "react";
import { sampleHighlights } from "@/data/highlights";
import { HighlightCard } from "@/components/cards/HighlightCard";
import { Gamepad2, Flame, Smile, Film, TrendingUp, Compass, Grid3X3, AlertCircle } from "lucide-react";
import Link from "next/link";

type FilterCategory = "All" | "GTA VI" | "Epic Gameplay" | "Funny Moments" | "Cinematic" | "Viral" | "Discoveries";

const filterTabs: { label: FilterCategory; icon: React.ComponentType<{ className?: string }> }[] = [
  { label: "All", icon: Grid3X3 },
  { label: "GTA VI", icon: Gamepad2 },
  { label: "Epic Gameplay", icon: Flame },
  { label: "Funny Moments", icon: Smile },
  { label: "Cinematic", icon: Film },
  { label: "Viral", icon: TrendingUp },
  { label: "Discoveries", icon: Compass },
];

const categoryToFilter: Record<string, FilterCategory> = {
  "GTA VI": "GTA VI",
  "Epic Gameplay": "Epic Gameplay",
  "Funny Moments": "Funny Moments",
  "Cinematic": "Cinematic",
  "Viral": "Viral",
  "Discoveries": "Discoveries",
};

export function HighlightsClient() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filtered =
    activeFilter === "All"
      ? sampleHighlights
      : sampleHighlights.filter((h) => categoryToFilter[h.category] === activeFilter);

  return (
    <>
      {/* Demo Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-start gap-3 p-4 rounded-xl bg-space-800/80 border border-sunset-orange/30">
          <AlertCircle className="w-5 h-5 text-sunset-orange shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-chrome-silver leading-relaxed">
            <span className="font-bold text-sunset-orange">DEMONSTRATION CONTENT</span>
            {" — "}The clips shown below are sample data for preview purposes only. Real BitWizards Clips highlights will be published as creator partnerships are established and permissions are verified.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto" aria-label="Filter highlights by category">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Highlight categories">
          {filterTabs.map(({ label, icon: Icon }) => (
            <button
              key={label}
              role="tab"
              aria-selected={activeFilter === label}
              onClick={() => setActiveFilter(label)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan ${
                activeFilter === label
                  ? "bg-gradient-to-r from-neon-magenta via-electric-purple to-cyber-cyan text-soft-white shadow-neon-magenta"
                  : "bg-space-800/80 border border-chrome-silver/20 text-chrome-silver hover:text-soft-white hover:border-chrome-silver/40"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="pb-24 px-4 sm:px-6 max-w-7xl mx-auto" aria-label="Highlight video cards">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((h) => (
              <HighlightCard key={h.id} highlight={h} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Gamepad2 className="w-12 h-12 text-chrome-dark mb-4" />
            <h3 className="font-display font-bold text-xl text-soft-white mb-2">No Highlights Yet</h3>
            <p className="text-chrome-silver text-sm max-w-sm">
              No sample clips match this filter. Creator content will populate this section as partnerships launch.
            </p>
          </div>
        )}
      </section>

      {/* Creator CTA */}
      <section className="py-20 px-6 relative overflow-hidden border-t border-chrome-silver/10">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta/8 via-transparent to-cyber-cyan/8" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-soft-white mb-5">GOT AN EPIC CLIP?</h2>
          <p className="text-chrome-silver mb-8 leading-relaxed">
            Submit your gaming highlights to be featured across our 8-platform network with full creator credit.
          </p>
          <Link
            href="/creators"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display font-bold tracking-wider uppercase text-soft-white bg-gradient-to-r from-neon-magenta via-electric-purple to-cyber-cyan shadow-neon-magenta hover:opacity-90 transition-all"
          >
            <Flame className="w-4 h-4" />
            Join as a Creator
          </Link>
        </div>
      </section>
    </>
  );
}
