"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";

const links = [
  { href: "/jobs", label: "Browse Jobs" },
  { href: "/guides", label: "Guides" },
  { href: "/salary-calculator", label: "Salary Calculator" },
];

const categoryLinks = [
  { href: "/fractional-coo-jobs", label: "Fractional COO" },
  { href: "/fractional-cmo-jobs", label: "Fractional CMO" },
  { href: "/fractional-cfo-jobs", label: "Fractional CFO" },
  { href: "/fractional-cto-jobs", label: "Fractional CTO" },
  { href: "/fractional-cos-jobs", label: "Chief of Staff" },
  { href: "/fractional-cro-jobs", label: "Fractional CRO" },
  { href: "/head-of-ops-jobs", label: "Head of Ops" },
];

const HeaderInner = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header className="bg-base-100 border-b border-base-300">
      <nav
        className="container flex items-center justify-between px-8 py-4 mx-auto"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            className="flex items-center gap-2 shrink-0"
            href="/"
            title={`${config.appName} homepage`}
          >
            <Image
              src={logo}
              alt={`${config.appName} logo`}
              className="w-8"
              placeholder="blur"
              priority={true}
              width={32}
              height={32}
            />
            <span className="font-extrabold text-lg">
              HireA<span className="text-primary">Fractional</span>Exec
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-base-content">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:justify-center lg:gap-8 lg:items-center">
          {links.map((link) => (
            <Link href={link.href} key={link.href} className="link link-hover text-base-content/70 hover:text-base-content transition-colors" title={link.label}>
              {link.label}
            </Link>
          ))}
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="link link-hover text-base-content/70 hover:text-base-content transition-colors flex items-center gap-1">
              Categories
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-50 w-56 p-2 shadow-lg border border-base-300">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden lg:flex lg:justify-end lg:flex-1">
          <Link href="/post-a-job" className="btn btn-secondary btn-sm">
            Post a Job
          </Link>
        </div>
      </nav>

      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div className="fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-base-100 sm:max-w-sm sm:ring-1 sm:ring-base-300 transform origin-right transition ease-in-out duration-300">
          <div className="flex items-center justify-between">
            <Link className="flex items-center gap-2 shrink-0" title={`${config.appName} homepage`} href="/">
              <Image src={logo} alt={`${config.appName} logo`} className="w-8" placeholder="blur" priority={true} width={32} height={32} />
              <span className="font-extrabold text-lg">HireA<span className="text-primary">Fractional</span>Exec</span>
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5" onClick={() => setIsOpen(false)}>
              <span className="sr-only">Close menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="py-4">
              <div className="flex flex-col gap-y-4 items-start">
                {links.map((link) => (
                  <Link href={link.href} key={link.href} className="link link-hover" title={link.label}>{link.label}</Link>
                ))}
                <div className="divider my-0"></div>
                <p className="text-sm font-semibold text-base-content/50 uppercase tracking-wider">Categories</p>
                {categoryLinks.map((link) => (
                  <Link href={link.href} key={link.href} className="link link-hover text-sm" title={link.label}>{link.label}</Link>
                ))}
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col">
              <Link href="/post-a-job" className="btn btn-secondary">Post a Job</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Header = () => (
  <Suspense>
    <HeaderInner />
  </Suspense>
);

export default Header;
