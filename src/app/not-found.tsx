import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Signal Lost | BitWizards Clips",
  description: "The page you're looking for has been lost in the digital void. Navigate back to the BitWizards Clips gaming media network.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-space-950 text-soft-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background noise / glitch atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0520] via-space-950 to-[#040508]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(55,223,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,63,157,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glitch orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-magenta/10 blur-[80px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyber-cyan/10 blur-[80px] animate-pulse delay-700" />

      {/* Static noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Error code */}
        <div className="relative mb-6">
          <div
            className="font-display font-black text-[8rem] sm:text-[12rem] leading-none select-none"
            style={{
              background: "linear-gradient(135deg, #FF3F9D 0%, #925BFF 50%, #37DFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 40px rgba(255,63,157,0.4))",
            }}
            aria-label="Error 404"
          >
            404
          </div>
          {/* Glitch underlay */}
          <div
            className="absolute inset-0 font-display font-black text-[8rem] sm:text-[12rem] leading-none opacity-20 blur-[2px] select-none"
            style={{
              color: "#37DFFF",
              transform: "translate(-3px, 2px)",
            }}
            aria-hidden="true"
          >
            404
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-2xl sm:text-3xl text-soft-white mb-3">
          SIGNAL LOST
        </h1>

        {/* Terminal-style subtext */}
        <div className="inline-block mb-6 px-4 py-2 rounded bg-space-800/80 border border-chrome-silver/20 font-mono text-xs text-chrome-dark">
          <span className="text-neon-magenta">ERR_</span>
          <span className="text-cyber-cyan">PAGE_NOT_FOUND</span>
          <span className="text-chrome-dark"> :: bitwizardsclips.com</span>
        </div>

        <p className="text-chrome-silver text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          The page you&apos;re looking for has been lost in the digital void. Perhaps it was vaporised during a neon sunset jump, or maybe it never existed in this timeline.
        </p>

        {/* Gaming flavour stats */}
        <div className="flex justify-center gap-6 mb-10 text-xs font-mono">
          <div className="text-center">
            <div className="text-neon-magenta font-bold text-lg">∞</div>
            <div className="text-chrome-dark">Respawns Left</div>
          </div>
          <div className="text-center">
            <div className="text-cyber-cyan font-bold text-lg">0</div>
            <div className="text-chrome-dark">Pages Found</div>
          </div>
          <div className="text-center">
            <div className="text-electric-purple font-bold text-lg">100%</div>
            <div className="text-chrome-dark">Neon Intact</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 rounded-xl font-display font-bold tracking-wider uppercase text-soft-white bg-gradient-to-r from-neon-magenta via-electric-purple to-cyber-cyan shadow-neon-magenta hover:opacity-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan"
          >
            RETURN HOME
          </Link>
          <Link
            href="/highlights"
            className="px-8 py-4 rounded-xl font-display font-bold tracking-wider uppercase text-soft-white bg-space-800/80 border border-chrome-silver/20 hover:border-cyber-cyan/50 hover:text-cyber-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan"
          >
            EXPLORE HIGHLIGHTS
          </Link>
        </div>

        {/* Bottom breadcrumb */}
        <p className="mt-10 text-xs font-mono text-chrome-dark">
          <Link href="/" className="hover:text-cyber-cyan transition-colors">Home</Link>
          {" · "}
          <Link href="/socials" className="hover:text-cyber-cyan transition-colors">Socials</Link>
          {" · "}
          <Link href="/contact" className="hover:text-cyber-cyan transition-colors">Contact</Link>
        </p>
      </div>
    </main>
  );
}
