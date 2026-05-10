import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { RefreshCw, Scale, ShieldCheck, FileText } from 'lucide-react';

export default function Legal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="legal" ref={ref} className="relative py-24 lg:py-40 bg-cream-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-12 gap-6 lg:gap-12 mb-16 lg:mb-24"
        >
          <div className="col-span-12 lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] tracking-widest uppercase text-gold-500 font-mono">
                05 / Legal & Protection
              </span>
            </div>
            <div className="text-[10px] tracking-widest uppercase text-ink-400 font-mono">
              Patient Rights
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.05] tracking-tightest text-ink-900 mb-8">
              Your rights, clearly<br />
              <span className="italic text-gold-500">stated and protected</span>.
            </h2>
            <p className="text-[16px] lg:text-[17px] leading-relaxed text-ink-600 max-w-2xl font-light">
              We believe transparency is the foundation of trust. Below you will find our
              refund policy and the legal frameworks that govern your rights as an
              international patient engaging our services.
            </p>
          </div>
        </motion.div>

        {/* Refund Policy */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-16 lg:mb-24">
          <div className="col-span-12 lg:col-span-3">
            <div className="text-[10px] tracking-widest uppercase text-ink-400 font-mono mb-6">
              Refund Policy
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <div className="border-t border-ink-900/[0.08]">
              {refundTerms.map((term, i) => (
                <motion.div
                  key={term.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                  className="border-b border-ink-900/[0.08] py-8 lg:py-10"
                >
                  <div className="grid grid-cols-12 gap-4 lg:gap-8 items-start">
                    <div className="col-span-2 lg:col-span-1">
                      <span className="font-mono text-[11px] text-ink-400 tracking-wider">
                        {term.id}
                      </span>
                    </div>
                    <div className="col-span-10 lg:col-span-4">
                      <h3 className="font-serif text-[20px] lg:text-[24px] text-ink-900 leading-tight mb-1">
                        {term.title}
                      </h3>
                      <span className="text-[11px] tracking-widest uppercase font-mono text-gold-500">
                        {term.tag}
                      </span>
                    </div>
                    <div className="col-span-12 lg:col-span-7">
                      <p className="text-[14px] lg:text-[15px] leading-relaxed text-ink-600 font-light">
                        {term.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Refund note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 p-8 border border-gold-500/30 bg-gold-500/[0.04]"
            >
              <div className="flex items-start gap-4">
                <RefreshCw size={18} strokeWidth={1.25} className="text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] tracking-widest uppercase font-mono text-gold-500 mb-2">
                    Important note
                  </div>
                  <p className="text-[14px] leading-relaxed text-ink-600 font-light">
                    BeyondMed Group acts as a facilitator, not a medical provider. Our refund
                    policy covers facilitation fees only. Medical procedure fees paid directly
                    to partner clinics are governed by each clinic's own refund terms, which
                    are disclosed to you in writing prior to any booking. We act as your
                    advocate in any dispute with a partner provider.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Legal Framework */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-3">
            <div className="text-[10px] tracking-widest uppercase text-ink-400 font-mono mb-6">
              Legal Framework
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-900/[0.08]">
              {legalFrameworks.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="bg-cream-50 p-8 lg:p-10 group hover:bg-ink-900 transition-colors duration-500 cursor-default"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-10 h-10 border border-ink-900/20 flex items-center justify-center text-gold-500 group-hover:border-gold-400 group-hover:text-gold-400 transition-colors duration-500">
                      <item.icon size={18} strokeWidth={1.25} />
                    </div>
                    <span className="text-[10px] tracking-widest uppercase font-mono text-ink-400 group-hover:text-cream-50/40 transition-colors duration-500">
                      {item.code}
                    </span>
                  </div>
                  <h3 className="font-serif text-[20px] lg:text-[24px] leading-tight text-ink-900 group-hover:text-cream-50 transition-colors duration-500 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-ink-600 group-hover:text-cream-50/70 transition-colors duration-500 font-light mb-4">
                    {item.description}
                  </p>
                  <div className="pt-4 border-t border-ink-900/[0.08] group-hover:border-cream-50/10 transition-colors duration-500">
                    <span className="text-[11px] tracking-widest uppercase font-mono text-gold-500 group-hover:text-gold-400 transition-colors duration-500">
                      {item.tag}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const refundTerms = [
  {
    id: 'R.01',
    title: 'Cooling-off period',
    tag: '100% refund',
    description:
      'Under the UK Consumer Contracts Regulations 2013, you have the right to cancel any distance service contract within 14 days of agreement without giving a reason. A full refund of all facilitation fees will be issued within 14 business days.',
  },
  {
    id: 'R.02',
    title: 'Cancellation 30+ days before procedure',
    tag: '100% refund of facilitation fee',
    description:
      'If you cancel your booking 30 or more days before your scheduled procedure date, we will refund your facilitation fee in full. Any amounts held by partner clinics are subject to their own cancellation terms, disclosed at booking.',
  },
  {
    id: 'R.03',
    title: 'Cancellation 15–29 days before procedure',
    tag: '50% refund of facilitation fee',
    description:
      'Cancellations made between 15 and 29 days before the scheduled procedure date are eligible for a 50% refund of the facilitation fee. This reflects operational costs already incurred on your behalf, including clinic coordination and logistics.',
  },
  {
    id: 'R.04',
    title: 'Cancellation within 14 days of procedure',
    tag: 'Non-refundable facilitation fee',
    description:
      'Facilitation fees are non-refundable for cancellations made within 14 days of the scheduled procedure. At this stage, all coordination, scheduling, and logistical commitments have been fully deployed on your behalf.',
  },
  {
    id: 'R.05',
    title: 'Provider-initiated cancellation',
    tag: 'Full refund guaranteed',
    description:
      'In the event that a procedure is cancelled by our partner clinic or provider for any reason, you are entitled to a full refund of all amounts paid to BeyondMed Group — facilitation fees and any payments held in trust on your behalf. We will also advocate for recovery of medical fees paid directly to the clinic.',
  },
];

const legalFrameworks = [
  {
    code: 'L.01',
    icon: Scale,
    title: 'UK Consumer Rights Act 2015',
    description:
      'All services provided by BeyondMed Group must be performed with reasonable care and skill, within a reasonable time, and at a reasonable price. You have full statutory rights to redress if these standards are not met.',
    tag: 'Statutory protection',
  },
  {
    code: 'L.02',
    icon: FileText,
    title: 'EU Directive 2011/24/EU',
    description:
      'Patients from EU member states benefit from rights under the Cross-Border Healthcare Directive, including the right to seek treatment abroad, receive reimbursement from their home insurer, and obtain clear information before treatment.',
    tag: 'Cross-border patient rights',
  },
  {
    code: 'L.03',
    icon: ShieldCheck,
    title: 'UK Consumer Contracts Regulations 2013',
    description:
      'As a distance service provider, we are bound by regulations requiring full pre-contractual disclosure, written confirmation of terms, and a statutory 14-day cooling-off period for all service agreements entered into remotely.',
    tag: 'Distance selling rights',
  },
  {
    code: 'L.04',
    icon: ShieldCheck,
    title: 'GDPR & UK Data Protection Act 2018',
    description:
      'Your personal and medical data is processed lawfully under GDPR and the UK Data Protection Act 2018. You have the right to access, correct, and erase your data at any time. We never share patient data with third parties without explicit consent.',
    tag: 'Data & privacy rights',
  },
];
