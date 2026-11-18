import {useState} from 'react';
import {ChevronDown} from 'lucide-react';
import {FAQ_ITEMS} from '../data/consultancyData';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="border-b border-slate-200 bg-slate-50/70 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#0277BD]">Common Questions</p>
          <h2
            className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0B2545] sm:text-3xl"
            style={{textWrap: 'balance'}}
          >
            Practical answers on timelines, scoping, and audits
          </h2>
        </div>

        <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="px-6 py-2">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-panel`}
                    onClick={() => toggleItem(item.id)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 py-3 text-left font-display text-base font-semibold text-slate-900 hover:text-[#0277BD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0277BD] cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-[#0277BD]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={`${item.id}-panel`}
                    className="pb-5 pr-8 text-sm leading-relaxed text-slate-600 sm:text-base"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
