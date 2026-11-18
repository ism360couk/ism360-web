import {useState} from 'react';
import {ArrowRight, Check} from 'lucide-react';
import {ACCREDITATION_TRACKS, type AccreditationTrack} from '../data/consultancyData';

interface AccreditationSelectorProps {
  onRequestProposal: (serviceValue: string) => void;
}

export function AccreditationSelector({onRequestProposal}: AccreditationSelectorProps) {
  const [selectedId, setSelectedId] = useState<AccreditationTrack['id']>('ce');

  const activeTrack =
    ACCREDITATION_TRACKS.find((track) => track.id === selectedId) ?? ACCREDITATION_TRACKS[0];

  return (
    <section id="accreditations" className="border-b border-slate-200 bg-slate-50/70 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#0277BD]">Accreditation Roadmap</p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0B2545] sm:text-3xl"
              style={{textWrap: 'balance'}}
            >
              Choose the right security milestone for your stage of growth
            </h2>
          </div>

          {/* Interactive Filter / Segmented Tabs */}
          <div
            role="tablist"
            aria-label="Accreditation Tracks"
            className="flex flex-wrap gap-1 rounded-lg border border-slate-200 bg-white p-1"
          >
            {ACCREDITATION_TRACKS.map((track) => {
              const isSelected = track.id === activeTrack.id;
              return (
                <button
                  key={track.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(track.id)}
                  className={`min-h-[40px] rounded-md px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#0277BD] sm:text-sm ${
                    isSelected
                      ? 'bg-[#0E3B6E] text-white'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {track.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Accreditation Details Panel */}
        <div
          role="tabpanel"
          className="mt-8 rounded-xl border border-slate-200 bg-white p-6 sm:p-10"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <div className="text-xs font-medium text-slate-500">
                <span>Typical Timeline: </span>
                <span className="font-mono font-semibold tabular-nums text-[#0E3B6E]">
                  {activeTrack.typicalTimeline}
                </span>
              </div>

              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900">
                {activeTrack.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {activeTrack.overview}
              </p>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <div className="text-xs font-semibold text-slate-500">Best suited for</div>
                <p className="mt-1 text-sm font-medium text-slate-900">{activeTrack.idealFor}</p>
              </div>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => onRequestProposal(activeTrack.inquiryValue)}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0277BD] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#0E3B6E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0277BD] cursor-pointer"
                >
                  <span>Request Fixed-Scope Proposal</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
              <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
                <h4 className="font-display text-sm font-bold text-slate-900">
                  Software Team Focus Areas
                </h4>
                <ul className="mt-4 space-y-3">
                  {activeTrack.softwareFocus.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0277BD]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
                <h4 className="font-display text-sm font-bold text-slate-900">
                  What ISM360 Ltd Delivers
                </h4>
                <ul className="mt-4 space-y-3">
                  {activeTrack.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0E3B6E]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
