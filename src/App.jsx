import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import MembershipBanner from './components/MembershipBanner';
import Footer from './components/Footer';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0c10]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-md bg-white" />
          <span className="text-sm font-semibold tracking-wide">Wocal</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#" className="hover:text-white">Discover</a>
          <a href="#" className="hover:text-white">Wocal+</a>
          <a href="#" className="hover:text-white">For Hosts</a>
          <a href="#" className="hover:text-white">Community</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="rounded-lg border border-white/15 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10">Sign in</button>
          <button className="rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-white/90">Get the app</button>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10] font-inter">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <FeatureGrid />
        <MembershipBanner />
      </main>
      <Footer />
    </div>
  );
}
