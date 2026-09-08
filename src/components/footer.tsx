import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, NAV_LINKS } from "@/lib/nav";

const FOOTER_LINKS = [{ href: "/", label: "Home" }, ...NAV_LINKS, { href: "/support", label: "Donate" }];

export function Footer() {
  return (
    <footer className="border-t border-maroon/15 bg-navy text-cream">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <div className="mb-4 flex items-center gap-3">
              <Image src="/logo.png" alt="ADK LAMP" width={413} height={364} className="h-14 w-auto shrink-0" />
              <span className="font-display text-lg">ADK LAMP</span>
            </div>
            <p className="font-body text-sm leading-relaxed text-cream/75">
              A Non-Denominational Church &amp; Retreat Center, dedicated to meditation,
              contemplative practice, compassionate service, and connection.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cream/50">Explore</p>
            <ul className="flex flex-col gap-2 font-body text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/85 hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cream/50">Connect</p>
            <ul className="flex flex-col gap-2 font-body text-sm text-cream/85">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-cream">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_PHONE_TEL}`} className="hover:text-cream">
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li className="pt-2">
                <Link href="/contact#connected" className="hover:text-cream">
                  Stay Connected
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/15 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} ADK Loving Awareness Meditation Project.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-cream">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cream">
              Website Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
