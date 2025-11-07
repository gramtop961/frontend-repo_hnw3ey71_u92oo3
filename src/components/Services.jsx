import { GraduationCap, Globe2, FileCheck2, BookOpenCheck } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'Admissions Guidance',
    desc: 'Course and university shortlisting, application strategy, SOP/LOR support.',
  },
  {
    icon: Globe2,
    title: 'Test Prep & Coaching',
    desc: 'IELTS, TOEFL, GRE essentials with personalized study plans.',
  },
  {
    icon: FileCheck2,
    title: 'Visa & Compliance',
    desc: 'End-to-end visa documentation, mock interviews, financial guidance.',
  },
  {
    icon: BookOpenCheck,
    title: 'Scholarships & Funding',
    desc: 'Targeted scholarship discovery and application support.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">What we do</h2>
          <p className="mt-3 text-neutral-600">End-to-end guidance tailored to your dream destination and program.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 ring-1 ring-red-100">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
