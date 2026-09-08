"use client";

import { FormEvent, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/nav";

const REASONS = [
  "General Question",
  "Gathering or Meditation",
  "Retreat",
  "Prayer Request",
  "Spiritual Support",
  "Ceremony",
  "Youth or Community Partnership",
  "Volunteering",
  "Donation or Support",
  "Other",
];

export function ContactForm({ initialReason }: { initialReason?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState(
    initialReason && REASONS.includes(initialReason) ? initialReason : REASONS[0]
  );
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`ADK LAMP inquiry: ${reason}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "(not provided)"}\nReason: ${reason}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="contact-name">
          <input
            id="contact-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
          />
        </Field>
        <Field label="Email" htmlFor="contact-email">
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClasses}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone — Optional" htmlFor="contact-phone">
          <input
            id="contact-phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClasses}
          />
        </Field>
        <Field label="I'm contacting ADK LAMP about" htmlFor="contact-reason">
          <select
            id="contact-reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className={inputClasses}
          >
            {REASONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="contact-message">
        <textarea
          id="contact-message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClasses}
        />
      </Field>

      <button
        type="submit"
        className="mt-1 w-full rounded-sm border border-maroon bg-maroon px-6 py-3 text-sm uppercase tracking-[0.08em] text-cream transition-colors hover:bg-maroon-dark sm:w-auto sm:self-start"
      >
        Send
      </button>

      {sent && (
        <p className="font-body text-sm text-navy">
          Thank you — your email app should now be open with your message ready to send to Davis.
        </p>
      )}

      <p className="font-body text-xs text-ink/60">
        Prayer and spiritual-support requests will be treated with care and discretion.
      </p>
    </form>
  );
}

const inputClasses =
  "w-full rounded-sm border border-navy/25 bg-white/70 px-4 py-3 font-body text-sm text-ink placeholder:text-ink/40 focus:border-maroon focus:outline-none";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="font-body text-sm text-navy">
        {label}
      </label>
      {children}
    </div>
  );
}
