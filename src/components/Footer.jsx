export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} GlobalEd Consultancy. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
            <a href="#home" className="hover:text-neutral-900">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
