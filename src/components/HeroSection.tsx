import {useState} from 'react';
import {ArrowRight, Check} from 'lucide-react';
import {CONTACT_INFO, HERO_METRICS, PDCA_STAGES, type PdcaStage} from '../data/consultancyData';

interface HeroSectionProps {
  onPrimaryCta: () => void;
}

export function HeroSection({onPrimaryCta}: HeroSectionProps) {
  const [activeStageId, setActiveStageId] = useState<PdcaStage['id']>('plan');
  const [logoError, setLogoError] = useState(false);

  const activeStage = PDCA_STAGES.find((stage) => stage.id === activeStageId) ?? PDCA_STAGES[0];

  return (
    <section id="top" className="border-b border-slate-200 bg-slate-50/70">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Core Proposition & Primary CTA */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="text-sm font-medium text-slate-600">
                UK Information Security Consultancy
                <span aria-hidden="true" className="mx-2 text-slate-400">·</span>
                Built for Small Software Companies
              </p>

              <h1
                className="mt-4 font-display font-bold tracking-tight text-[#0B2545]"
                style={{
                  fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                  lineHeight: 1.08,
                  textWrap: 'balance',
                }}
              >
                Practical cyber security accreditations that win enterprise deals.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                ISM360 Ltd helps growing UK software and SaaS teams achieve{' '}
                <strong className="font-semibold text-slate-900">Cyber Essentials</strong>,{' '}
                <strong className="font-semibold text-slate-900">Cyber Essentials Plus (CE+)</strong>, and{' '}
                <strong className="font-semibold text-slate-900">ISO 27001:2022</strong> certification, alongside
                independent internal audits and external DPO representation.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onPrimaryCta}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0277BD] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#0E3B6E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0277BD] cursor-pointer"
                >
                  <span>Book Free 20-Min Discovery Call</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <a
                  href="#accreditations"
                  className="inline-flex min-h-[44px] items-center px-3 py-2 text-sm font-semibold text-[#0E3B6E] whitespace-nowrap shrink-0 hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0277BD]"
                >
                  Compare Accreditations
                </a>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-5 text-sm text-slate-600">
              <span>Direct consultation with Thomas Jones</span>
              <span aria-hidden="true" className="mx-2 text-slate-400">·</span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="font-medium text-slate-800 hover:text-[#0277BD] hover:underline"
              >
                {CONTACT_INFO.email}
              </a>
              <span aria-hidden="true" className="mx-2 text-slate-400">·</span>
              <a
                href={CONTACT_INFO.phoneHref}
                className="font-mono font-medium tabular-nums text-slate-800 hover:text-[#0277BD] hover:underline"
              >
                {CONTACT_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right Column: ISM360 PDCA Logo & Interactive Methodology Panel */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 sm:p-7 lg:col-span-5">
            <div className="flex flex-col items-center border-b border-slate-100 pb-5">
              {!logoError ? (
                <img
                  src={CONTACT_INFO.logoSrc}
                  alt="ISM360 Plan Do Check Act Information Security Lifecycle"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                  className="h-40 w-auto object-contain sm:h-44"
                />
              ) : (
                <div className="flex h-40 w-full items-center justify-center rounded-lg bg-slate-50 text-center">
                  <span className="font-display text-2xl font-bold tracking-tight text-[#0E3B6E]">
                    ISM360 Ltd
                  </span>
                </div>
              )}
              <p className="mt-2 text-xs font-medium text-slate-500">
                Select a lifecycle stage to inspect deliverables
              </p>
            </div>

            <div className="mt-5">
              <div
                role="tablist"
                aria-label="ISM360 PDCA Lifecycle Stages"
                className="grid grid-cols-4 gap-1 rounded-lg bg-slate-100 p-1"
              >
                {PDCA_STAGES.map((stage) => {
                  const isActive = stage.id === activeStage.id;
                  return (
                    <button
                      key={stage.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveStageId(stage.id)}
                      className={`min-h-[40px] rounded-md px-2 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#0277BD] ${
                        isActive
                          ? 'bg-white text-[#0E3B6E] shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {stage.label}
                    </button>
                  );
                })}
              </div>

              <div role="tabpanel" className="mt-4">
                <h2 className="font-display text-base font-bold text-slate-900">
                  {activeStage.headline}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {activeStage.summary}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {activeStage.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-slate-700">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0277BD]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Summary Strip Below Hero Split */}
        <div className="mt-12 grid grid-cols-1 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="p-5 sm:p-6">
              <div className="font-mono text-xl font-semibold tabular-nums text-[#0E3B6E]">
                {metric.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900">{metric.label}</div>
              <div className="mt-0.5 text-xs text-slate-500">{metric.context}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
