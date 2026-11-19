"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle, Sparkles, Mail, RefreshCw, ExternalLink } from "lucide-react";
import { contactFormSchema, ContactFormValues } from "@/lib/validation";
import { siteConfig } from "@/config/site";
import { emailjsConfig } from "@/config/emailjs";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormValues | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      category: "Partnership",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Spam bot check
    if (data.honeypot && data.honeypot.length > 0) {
      setSubmissionError("Automated bot submission detected.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    // Template parameters mapped to EmailJS variables
    const templateParams = {
      title: data.subject,
      subject: data.subject,
      name: data.name,
      email: data.email,
      category: data.category,
      creatorHandle: data.creatorHandle?.trim() || "Not Provided",
      handle: data.creatorHandle?.trim() || "Not Provided",
      message: data.message,
      time: new Date().toLocaleString("en-US", {
        timeZone: "UTC",
        dateStyle: "full",
        timeStyle: "medium",
      }),
      to_email: emailjsConfig.toEmail,
      site_name: siteConfig.name,
    };

    try {
      // Send directly via EmailJS SDK:
      // 1. Admin Notification (dispatched to bitwizardsclips@gmail.com)
      // 2. Sender Auto-Reply (confirmation receipt dispatched to sender)
      const [adminResponse] = await Promise.all([
        emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          templateParams,
          emailjsConfig.publicKey
        ),
        emailjsConfig.autoReplyTemplateId
          ? emailjs
              .send(
                emailjsConfig.serviceId,
                emailjsConfig.autoReplyTemplateId,
                templateParams,
                emailjsConfig.publicKey
              )
              .catch((autoErr) => {
                console.warn("Auto-reply transmission skipped or failed:", autoErr);
                return null;
              })
          : Promise.resolve(null),
      ]);

      if (adminResponse && adminResponse.status === 200) {
        setSubmittedData(data);
        setSubmissionSuccess(true);
        reset();
      } else {
        throw new Error(`EmailJS responded with status ${adminResponse?.status}: ${adminResponse?.text}`);
      }
    } catch (err: unknown) {
      console.error("EmailJS submission raw error:", err);

      const errObj = err as { status?: number; text?: string; message?: string };
      const status = errObj?.status;
      const text = errObj?.text || (err instanceof Error ? err.message : "") || JSON.stringify(err);

      if (text.toLowerCase().includes("template id not found") || text.toLowerCase().includes("template")) {
        setSubmissionError(
          `Template ID Mismatch: EmailJS says "Template ID not found". Please check your EmailJS dashboard (dashboard.emailjs.com/admin/templates) for your exact Template ID (e.g. template_xxxxxxx) and set it in .env.local or rename the template ID to "template_contact" in the template Settings tab.`
        );
      } else if (status === 412 || text.toLowerCase().includes("gmail")) {
        setSubmissionError(
          `Gmail Authorization Needed: Please go to EmailJS Dashboard > Email Services > Gmail, and click "Connect Account" / "Sign in with Google" to authorize sending.`
        );
      } else if (text && text !== "{}") {
        setSubmissionError(`EmailJS Error (${status || "Failed"}): ${text}`);
      } else {
        setSubmissionError(
          `Unable to dispatch message via EmailJS. Please verify that your template is Saved in EmailJS and your Template ID matches. You can also dispatch directly to ${siteConfig.email}.`
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative p-6 sm:p-10 rounded-2xl bg-space-800/80 border border-chrome-silver/15 backdrop-blur-xl shadow-glass-lg">
      {/* Background glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-neon-magenta/10 blur-3xl pointer-events-none" />

      {submissionSuccess && submittedData ? (
        <div className="flex flex-col items-center text-center py-8">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(16,185,129,0.3)] animate-pulse">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 className="font-display font-black text-2xl sm:text-3xl text-soft-white mb-2">
            Transmission Received & Dispatched!
          </h3>
          <p className="text-chrome-silver text-sm max-w-md mb-6 leading-relaxed">
            Thank you, <span className="text-soft-white font-bold">{submittedData.name}</span>. Your {submittedData.category.toLowerCase()} inquiry has been sent directly to{" "}
            <span className="text-cyber-cyan font-mono">{siteConfig.email}</span>.
          </p>

          <div className="w-full max-w-lg p-5 rounded-2xl bg-space-900/90 border border-chrome-silver/15 text-left mb-6 text-xs text-chrome-silver flex flex-col gap-3 shadow-inner">
            <div className="flex items-center justify-between border-b border-chrome-silver/10 pb-2">
              <span className="text-cyber-cyan font-mono font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
                TRANSMISSION RECEIPT
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                STATUS: DELIVERED
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-chrome-dark block text-[10px] uppercase font-mono">From</span>
                <span className="text-soft-white font-medium">{submittedData.name}</span>
              </div>
              <div>
                <span className="text-chrome-dark block text-[10px] uppercase font-mono">Reply-To</span>
                <span className="text-soft-white font-mono">{submittedData.email}</span>
              </div>
              <div>
                <span className="text-chrome-dark block text-[10px] uppercase font-mono">Category</span>
                <span className="text-neon-magenta font-semibold">{submittedData.category}</span>
              </div>
              <div>
                <span className="text-chrome-dark block text-[10px] uppercase font-mono">Handle</span>
                <span className="text-soft-white font-mono">{submittedData.creatorHandle || "N/A"}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-chrome-silver/10">
              <span className="text-chrome-dark block text-[10px] uppercase font-mono mb-1">Subject</span>
              <span className="text-soft-white font-medium">{submittedData.subject}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setSubmissionSuccess(false);
              setSubmittedData(null);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-space-900 border border-chrome-silver/20 text-chrome-silver hover:text-soft-white hover:border-cyber-cyan transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Send Another Message</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {submissionError && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex flex-col gap-2">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{submissionError}</span>
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1.5 text-cyber-cyan hover:underline font-mono text-[11px] ml-6"
              >
                <span>Direct Mail Fallback: {siteConfig.email}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}

          {/* Anti-spam Honeypot (hidden from humans) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp_check">Leave this field blank</label>
            <input
              id="hp_check"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("honeypot")}
            />
          </div>

          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono uppercase tracking-wider text-chrome-silver mb-2"
              >
                Full Name / Studio <span className="text-neon-magenta">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="e.g. Alex Mercer"
                className={`w-full px-4 py-3 rounded-xl bg-space-900 border text-soft-white text-sm placeholder:text-chrome-dark/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan transition-colors ${
                  errors.name ? "border-red-500/60" : "border-chrome-silver/20 hover:border-chrome-silver/40"
                }`}
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-wider text-chrome-silver mb-2"
              >
                Official Email <span className="text-neon-magenta">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@domain.com"
                className={`w-full px-4 py-3 rounded-xl bg-space-900 border text-soft-white text-sm placeholder:text-chrome-dark/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan transition-colors ${
                  errors.email ? "border-red-500/60" : "border-chrome-silver/20 hover:border-chrome-silver/40"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Row 2: Category & Creator Handle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="category"
                className="block text-xs font-mono uppercase tracking-wider text-chrome-silver mb-2"
              >
                Inquiry Category <span className="text-neon-magenta">*</span>
              </label>
              <select
                id="category"
                className="w-full px-4 py-3 rounded-xl bg-space-900 border border-chrome-silver/20 text-soft-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan hover:border-chrome-silver/40 transition-colors"
                {...register("category")}
              >
                <option value="Partnership">Creator Partnership & Syndication</option>
                <option value="Licensing">Clip Licensing & Permissions</option>
                <option value="Business">Brand Sponsorship & Advertising</option>
                <option value="General">General Media Inquiry</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="creatorHandle"
                className="block text-xs font-mono uppercase tracking-wider text-chrome-silver mb-2"
              >
                Social / Channel Handle <span className="text-chrome-dark">(Optional)</span>
              </label>
              <input
                id="creatorHandle"
                type="text"
                placeholder="@YourChannel"
                className="w-full px-4 py-3 rounded-xl bg-space-900 border border-chrome-silver/20 text-soft-white text-sm placeholder:text-chrome-dark/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan hover:border-chrome-silver/40 transition-colors"
                {...register("creatorHandle")}
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-mono uppercase tracking-wider text-chrome-silver mb-2"
            >
              Inquiry Subject <span className="text-neon-magenta">*</span>
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Brief summary of your proposal..."
              className={`w-full px-4 py-3 rounded-xl bg-space-900 border text-soft-white text-sm placeholder:text-chrome-dark/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan transition-colors ${
                errors.subject ? "border-red-500/60" : "border-chrome-silver/20 hover:border-chrome-silver/40"
              }`}
              {...register("subject")}
            />
            {errors.subject && (
              <p className="mt-1.5 text-xs text-red-400">{errors.subject.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono uppercase tracking-wider text-chrome-silver mb-2"
            >
              Message Details <span className="text-neon-magenta">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us about your content, channels, broadcast permissions, or campaign goals..."
              className={`w-full px-4 py-3 rounded-xl bg-space-900 border text-soft-white text-sm placeholder:text-chrome-dark/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan transition-colors resize-none ${
                errors.message ? "border-red-500/60" : "border-chrome-silver/20 hover:border-chrome-silver/40"
              }`}
              {...register("message")}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-xl font-display font-extrabold tracking-wider uppercase bg-gradient-to-r from-neon-magenta via-electric-purple to-cyber-cyan text-soft-white shadow-neon-magenta hover:opacity-95 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan text-sm sm:text-base cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Dispatching via EmailJS...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Transmission</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}