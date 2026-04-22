import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">T.R.I.K.S.</h3>
            <p className="text-stone-400 leading-relaxed">
              Trinity River International Kayak School. Professional whitewater instruction on
              Northern California&apos;s Trinity River.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/trips', label: 'View Trips' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-emerald-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="mailto:gemerick@trinityriverkayakschool.com" className="hover:text-emerald-400 transition-colors">
                  gemerick@trinityriverkayakschool.com
                </a>
              </li>
              <li>
                <a href="tel:9063605136" className="hover:text-emerald-400 transition-colors">
                  (906) 360-5136
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 text-center text-stone-500 text-sm">
          &copy; {new Date().getFullYear()} Trinity River International Kayak School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
