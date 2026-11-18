import {ArrowUpRight, Check} from 'lucide-react';
import {CORE_SERVICES} from '../data/consultancyData';

interface ServicesSectionProps {
  onSelectService: (serviceValue: string) => void;
}

export function ServicesSection({onSelectService}: ServicesSectionProps) {
  return (
    <section id="services" className="border-b border-slate-200 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#0277BD]">Cyber Security Consultancy Services</p>
          <h2
            className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0B2545] sm:text-3xl"
            style={{textWrap: 'balance'}}
          >
            Information security support designed around software delivery
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Whether a prospective client has asked for Cyber Essentials Plus before contract signature or you are
            building an ISO 27001 ISMS from scratch, every engagement delivers clear, auditable outcomes.
          </p>
        </div>

        {/* Asymmetric Bento Grid: Top marquee accreditations span wider, followed by Audit & DPO */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {CORE_SERVICES.map((service, index) => {
            const colSpanClass = index === 0 || index === 3 ? 'lg:col-span-7' : 'lg:col-span-5';
            const surfaceClass = service.featured
              ? 'bg-slate-50/70 border-slate-200'
              : 'bg-white border-slate-200';

            return (
              <article
                key={service.id}
                className={`flex flex-col justify-between rounded-xl border p-6 sm:p-8 ${colSpanClass} ${surfaceClass}`}
              >
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    <span className="font-mono font-semibold tabular-nums text-[#0E3B6E]">
                      {service.number}.
                    </span>
                    <span aria-hidden="true" className="mx-2 text-slate-300">/</span>
                    <span>{service.metaLine}</span>
                  </p>

                  <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-slate-200/80 pt-5">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0277BD]" aria-hidden="true" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.inquiryValue)}
                    className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#0E3B6E] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#0277BD] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0277BD] cursor-pointer"
                  >
                    <span>Discuss {service.inquiryValue}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
