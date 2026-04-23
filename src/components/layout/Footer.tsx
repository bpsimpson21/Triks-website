import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#faf6ef] text-stone-700 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Home" className="inline-block mb-4">
              <Image
                src="/logo/triks-logo.svg"
                alt="Trinity River International Kayak School"
                width={96}
                height={96}
                className="h-16 w-16 md:h-20 md:w-20 object-contain"
              />
            </Link>
            <p className="text-stone-700 leading-relaxed">
              Trinity River International Kayak School. Professional whitewater instruction on
              Northern California&apos;s Trinity River.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-stone-900 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/trips', label: 'View Trips' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-700 hover:text-emerald-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-stone-900 font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:gemerick@trinityriverkayakschool.com"
                  className="text-stone-700 hover:text-emerald-700 transition-colors"
                >
                  gemerick@trinityriverkayakschool.com
                </a>
              </li>
              <li>
                <a
                  href="tel:9063605136"
                  className="text-stone-700 hover:text-emerald-700 transition-colors"
                >
                  (906) 360-5136
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200 text-center text-stone-600 text-sm">
          &copy; {new Date().getFullYear()} Trinity River International Kayak School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
