"use client";

import { FormEvent, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/nav";

export function NewsletterForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Add me to the ADK LAMP email list");
    const body = encodeURIComponent(
      `First name: ${firstName}\nEmail: ${email}\n\nPlease add me to the ADK LAMP mailing list.`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-first-name">
          First name
        </label>
        <input
          id="newsletter-first-name"
          type="text"
          required
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full flex-1 rounded-sm border border-navy/25 bg-white/70 px-4 py-3 font-body text-sm text-ink placeholder:text-ink/40 focus:border-maroon focus:outline-none"
        />
        <label className="sr-only" htmlFor="newsletter-email">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full flex-1 rounded-sm border border-navy/25 bg-white/70 px-4 py-3 font-body text-sm text-ink placeholder:text-ink/40 focus:border-maroon focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="mt-3 w-full rounded-sm border border-maroon bg-maroon px-6 py-3 text-sm uppercase tracking-[0.08em] text-cream transition-colors hover:bg-maroon-dark sm:w-auto"
      >
        Stay Connected
      </button>
      {sent && (
        <p className="mt-3 font-body text-sm text-navy">
          Thank you — your email app should now be open so you can send your request to join the
          list.
        </p>
      )}
    </form>
  );
}
