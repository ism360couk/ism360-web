import {ArrowUpRight, Mail, Phone} from 'lucide-react';
import {CONTACT_INFO, SOFTWARE_PROOF_POINTS} from '../data/consultancyData';

interface AboutAndProofSectionProps {
  onBookClick: () => void;
}

export function AboutAndProofSection({onBookClick}: AboutAndProofSectionProps) {
  return (
    <section id="approach" className="border-b border-slate-200 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Claim-to-Proof Evidence Grid */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#0277BD]">Why Small Software Companies Choose ISM360</p>
          <h2
            className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0B2545] sm:text-3xl"
            style={{textWrap: 'balance'}}
          >
            Built to pass real audits and speed up B2B sales cycles
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SOFTWARE_PROOF_POINTS.map((point, index) => (
            <div
              key={point.title}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 sm:p-7"
            >
              <div>
                <div className="font-mono text-2xl font-semibold tabular-nums text-[#0E3B6E]">
                  {point.metric}
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500">{point.metricLabel}</div>

                <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-slate-900">
                  {`0${index + 1}. ${point.title}`}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{point.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Principal Consultant Bio Section */}
        <div
          id="about"
          className="mt-14 rounded-xl bg-[#0B2545] p-8 text-white sm:p-12"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <p className="text-sm font-medium text-sky-300">
                Principal Consultant · {CONTACT_INFO.company}
              </p>
              <h2
                className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
                style={{textWrap: 'balance'}}
              >
                Direct senior guidance from Thomas Jones—no junior hand-offs
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200">
                When you appoint ISM360 Ltd, you work directly with {CONTACT_INFO.consultant}. With hands-on
                experience guiding UK software businesses through Cyber Essentials, CE+, ISO 27001
                certifications, internal audit programmes, and GDPR Data Protection Officer responsibilities,
                every control is explained in plain English and tailored to your commercial goals.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-5 text-sm">
                <a
                  href={CONTACT_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-1.5 font-semibold text-sky-300 whitespace-nowrap shrink-0 hover:text-white hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
                >
                  <span>View Thomas Jones on LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <span aria-hidden="true" className="hidden text-slate-500 sm:inline">·</span>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex min-h-[40px] items-center gap-1.5 font-medium text-slate-200 whitespace-nowrap shrink-0 hover:text-white hover:underline"
                >
                  <Mail className="h-4 w-4 text-sky-300" aria-hidden="true" />
                  <span>{CONTACT_INFO.email}</span>
                </a>

                <span aria-hidden="true" className="hidden text-slate-500 sm:inline">·</span>

                <a
                  href={CONTACT_INFO.phoneHref}
                  className="inline-flex min-h-[40px] items-center gap-1.5 font-mono font-medium tabular-nums text-slate-200 whitespace-nowrap shrink-0 hover:text-white hover:underline"
                >
                  <Phone className="h-4 w-4 text-sky-300" aria-hidden="true" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start lg:col-span-4 lg:items-end">
              <div className="w-full rounded-lg border border-slate-700 bg-slate-900/50 p-6">
                <div className="text-sm font-semibold text-white">Ready to scope your accreditation?</div>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                  Book a 20-minute call to review your current posture, target deadline, and fixed-fee options.
                </p>
                <button
                  type="button"
                  onClick={onBookClick}
                  className="mt-5 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#0284C7] px-4 py-2.5 text-sm font-semibold text-white whitespace-nowrap transition-colors duration-150 hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 cursor-pointer"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
