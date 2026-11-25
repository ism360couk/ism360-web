import {CONTACT_INFO} from '../data/consultancyData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <img
                src={CONTACT_INFO.logoSrc}
                alt="ISM360 Ltd logo"
                referrerPolicy="no-referrer"
                className="h-8 w-8 object-contain"
              />
              <span className="font-display text-base font-bold text-[#0E3B6E]">
                {CONTACT_INFO.company}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Information security &amp; cyber security consultancy for software companies in Newbury, Reading,
              Oxford, Berkshire, Oxfordshire, Hampshire &amp; Wiltshire. Cyber Essentials, CE+, ISO 27001, internal
              audits, and external DPO support.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            <div>
              <div className="text-xs font-semibold text-slate-900">Services</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#services" className="hover:text-[#0E3B6E] hover:underline">
                    Cyber Essentials &amp; CE+
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#0E3B6E] hover:underline">
                    ISO 27001:2022 ISMS
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#0E3B6E] hover:underline">
                    Internal Audits
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#0E3B6E] hover:underline">
                    External DPO Role
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold text-slate-900">Contact</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#0E3B6E] hover:underline">
                    {CONTACT_INFO.email}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT_INFO.phoneHref}
                    className="font-mono tabular-nums hover:text-[#0E3B6E] hover:underline"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0E3B6E] hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {currentYear} {CONTACT_INFO.company}. All rights reserved.
          </p>
          <p>
            Static site hosted without third-party tracking cookies.
          </p>
        </div>
      </div>
    </footer>
  );
}
