import {useEffect, useState, type FormEvent} from 'react';
import {Check, Copy, Mail, Phone, Send} from 'lucide-react';
import {CONTACT_INFO} from '../data/consultancyData';

interface ContactSectionProps {
  preselectedService: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

const SERVICE_OPTIONS = [
  'Cyber Essentials & CE+',
  'ISO 27001:2022 Implementation',
  'Internal Audits',
  'External DPO Service',
  'General Security Posture Review',
];

export function ContactSection({preselectedService}: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(preselectedService || SERVICE_OPTIONS[0]);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | 'summary' | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
      setSubmitted(false);
    }
  }, [preselectedService]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name = 'Please enter your name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      nextErrors.email = 'Please enter a valid work email address.';
    }
    if (!company.trim()) {
      nextErrors.company = 'Please enter your company name.';
    }
    if (!message.trim() || message.trim().length < 10) {
      nextErrors.message = 'Please share a brief note on your goals or target timeline.';
    }
    return nextErrors;
  };

  const buildSummaryText = () => {
    return [
      `Name: ${name.trim()}`,
      `Company: ${company.trim()}`,
      `Work Email: ${email.trim()}`,
      phone.trim() ? `Phone: ${phone.trim()}` : null,
      `Primary Interest: ${service}`,
      '',
      'Project Notes:',
      message.trim(),
    ]
      .filter((line): line is string => line !== null)
      .join('\n');
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(`ISM360 Enquiry: ${service} — ${company.trim()}`);
    const body = encodeURIComponent(buildSummaryText());
    return `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleCopy = async (text: string, field: 'email' | 'phone' | 'summary') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(null);
    }
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-[#0277BD]">Start a Conversation</p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0B2545] sm:text-3xl"
              style={{textWrap: 'balance'}}
            >
              Speak directly with Thomas Jones about your security goals
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Tell us which accreditation or governance support your software team needs. Available on-site across
              Newbury, Reading, Oxford, Berkshire, Oxfordshire, Hampshire, and Wiltshire, or remotely UK-wide—expect
              a straightforward reply within one business day.
            </p>

            <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">
              <div className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-slate-50/70 p-4">
                <div className="min-w-0">
                  <div className="text-xs font-medium text-slate-500">Email</div>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="mt-0.5 flex items-center gap-2 truncate text-sm font-semibold text-slate-900 hover:text-[#0277BD]"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[#0277BD]" aria-hidden="true" />
                    <span className="truncate">{CONTACT_INFO.email}</span>
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT_INFO.email, 'email')}
                  aria-label="Copy email address"
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 whitespace-nowrap shrink-0 hover:bg-slate-50 cursor-pointer"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-slate-50/70 p-4">
                <div className="min-w-0">
                  <div className="text-xs font-medium text-slate-500">Telephone</div>
                  <a
                    href={CONTACT_INFO.phoneHref}
                    className="mt-0.5 flex items-center gap-2 font-mono text-sm font-semibold tabular-nums text-slate-900 hover:text-[#0277BD]"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-[#0277BD]" aria-hidden="true" />
                    <span>{CONTACT_INFO.phoneDisplay}</span>
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT_INFO.phoneDisplay, 'phone')}
                  aria-label="Copy telephone number"
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 whitespace-nowrap shrink-0 hover:bg-slate-50 cursor-pointer"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-800">
                        Full Name <span className="text-[#0277BD]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        placeholder="Jane Smith"
                        className="mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0277BD] focus:outline-2 focus:outline-offset-0 focus:outline-[#0277BD]/20"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-semibold text-slate-800">
                        Company Name <span className="text-[#0277BD]">*</span>
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        aria-invalid={Boolean(errors.company)}
                        placeholder="Acme Software Ltd"
                        className="mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0277BD] focus:outline-2 focus:outline-offset-0 focus:outline-[#0277BD]/20"
                      />
                      {errors.company && (
                        <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
                          {errors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-800">
                        Work Email <span className="text-[#0277BD]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        placeholder="jane@acmesoftware.co.uk"
                        className="mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0277BD] focus:outline-2 focus:outline-offset-0 focus:outline-[#0277BD]/20"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-800">
                        Phone Number <span className="text-xs font-normal text-slate-500">(Optional)</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="07700 900123"
                        className="mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0277BD] focus:outline-2 focus:outline-offset-0 focus:outline-[#0277BD]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-semibold text-slate-800">
                      Primary Focus
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0277BD] focus:outline-2 focus:outline-offset-0 focus:outline-[#0277BD]/20"
                    >
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-800">
                      Team Size, Deadline &amp; Goals <span className="text-[#0277BD]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      placeholder="E.g. 18-person SaaS team looking to complete Cyber Essentials Plus in the next 6 weeks for an upcoming NHS/enterprise contract."
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0277BD] focus:outline-2 focus:outline-offset-0 focus:outline-[#0277BD]/20"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#0277BD] px-6 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#0E3B6E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0277BD] cursor-pointer"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>Prepare Consultation Enquiry</span>
                    </button>
                    <span className="text-xs text-slate-500">
                      No tracking cookies or third-party data sharing.
                    </span>
                  </div>
                </form>
              ) : (
                <div className="space-y-5 bg-white rounded-lg border border-slate-200 p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                      <Check className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900">
                        Enquiry Ready to Send
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        Your details have been formatted for {CONTACT_INFO.consultant} at{' '}
                        <span className="font-semibold text-slate-800">{CONTACT_INFO.email}</span>. Click below
                        to open your email client with everything pre-filled, or copy the summary directly.
                      </p>
                    </div>
                  </div>

                  <pre className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 font-mono text-xs leading-relaxed text-slate-700 whitespace-pre-wrap">
                    {buildSummaryText()}
                  </pre>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={buildMailtoHref()}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0277BD] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#0E3B6E]"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>Open in Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCopy(buildSummaryText(), 'summary')}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 whitespace-nowrap shrink-0 hover:bg-slate-50 cursor-pointer"
                    >
                      {copiedField === 'summary' ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                          <span>Summary Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" aria-hidden="true" />
                          <span>Copy Enquiry Text</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex min-h-[44px] items-center px-3 py-2 text-sm font-medium text-slate-600 whitespace-nowrap hover:text-slate-900 cursor-pointer"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
