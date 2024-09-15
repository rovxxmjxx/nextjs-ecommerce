import React from 'react';
import siteMetaData from '@/data/siteMetaData';
import headerNavLinks from '@/data/headerNavLinks';
import Link from 'next/link';

export default function GNB() {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetaData.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">{/* <Logo /> */}</div>
            {typeof siteMetaData.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">{siteMetaData.headerTitle}</div>
            ) : (
              siteMetaData.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href} className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">
              {link.title}
            </Link>
          ))}
        </div>
        <label className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>

        {/* <ThemeSwitch /> */}
        {/* <MobileNav /> */}
      </div>
    </header>
  );
}
