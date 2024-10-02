"use client";
// import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navigation = [
    { name: 'Features', href: '#features-section' },
    { name: 'Testimonials', href: '#testimoni-section' },
  ];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
<>
  <header className="absolute inset-x-0 top-0 z-50">
    <nav
      aria-label="Global"
      className="flex items-center justify-between p-6 lg:px-8"
    >
      <div className="flex lg:flex-1 items-center">
        <a href="#" className="-m-1.5 p-1.5 flex items-center">
          <span className="sr-only">Stocku</span>
          <img
            alt="Stocku Logo"
            src="/images/boxes.png"
            className="h-8 w-auto"
          />
          <span className="ml-2 text-xl font-semibold text-gray-900">Stocku</span>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="#"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>

    {/* Modal for Mobile Menu */}
    {mobileMenuOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
        <div className="bg-white rounded-lg p-6 w-11/12 max-w-sm transform transition-all duration-300 ease-out scale-100 opacity-100 animate-zoomIn">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold text-gray-900">Menu</span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200 rounded-lg px-3 py-2"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-4">
            <a
              href="#"
              className="block text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200 rounded-lg px-3 py-2"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    )}
  </header>

</>

  );
}
