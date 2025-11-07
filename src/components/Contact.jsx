import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! We will reach out within 24 hours.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Speak with an expert</h2>
            <p className="mt-3 text-neutral-600">
              Book a free 30-minute consultation to map your study abroad journey.
            </p>
            <ul className="mt-6 space-y-3 text-neutral-700">
              <li>• Personalized university shortlist</li>
              <li>• Visa eligibility review</li>
              <li>• Scholarship opportunities</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700">Full Name</label>
                <input required type="text" className="mt-1 w-full rounded-xl border-neutral-300 focus:border-red-500 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-xl border-neutral-300 focus:border-red-500 focus:ring-red-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-neutral-700">Study Destination</label>
                <select className="mt-1 w-full rounded-xl border-neutral-300 focus:border-red-500 focus:ring-red-500">
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Germany</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-neutral-700">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-xl border-neutral-300 focus:border-red-500 focus:ring-red-500" placeholder="Tell us about your profile and goals..."></textarea>
              </div>
            </div>
            <button type="submit" className="mt-4 w-full rounded-xl bg-red-600 py-3 text-white font-semibold shadow hover:bg-red-700">Request Free Counseling</button>
            {status && <p className="mt-3 text-sm text-green-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
