import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] pt-16">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-red-700 ring-1 ring-red-200">
              Red Globe • Interactive • Futuristic
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900">
              Study abroad, simplified.
            </h1>
            <p className="mt-4 text-neutral-700 text-lg">
              We help ambitious students secure admissions, visas, and scholarships at top universities around the world.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-white font-semibold shadow hover:bg-red-700">
                Get Free Counseling
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur px-6 py-3 text-neutral-900 ring-1 ring-neutral-200 hover:bg-white">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
