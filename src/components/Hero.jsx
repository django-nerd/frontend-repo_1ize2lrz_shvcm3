import React from 'react';
import Spline from '@splinetool/react-spline';
import { MapPin, Rocket, Coffee } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[560px] overflow-hidden bg-[#0b0c10] text-white">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for readability (won't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur-sm">
          <Rocket className="h-4 w-4 text-orange-400" />
          <span className="text-xs font-medium tracking-wide text-white/80">
            Wocal — Work Local. Your first workspace, everywhere.
          </span>
        </div>

        <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Book micro‑workspaces near you
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
          Discover cafés, hotels, pubs, and community spaces with reliable Wi‑Fi,
          power, and perks. Seamless booking, instant check‑in, local rewards.
        </p>

        <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-[1.2fr_1fr_auto]">
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
            <MapPin className="h-5 w-5 text-teal-300" />
            <input
              type="text"
              placeholder="Search city, area, or venue"
              className="w-full bg-transparent text-sm text-white placeholder-white/50 outline-none"
              aria-label="Search location"
            />
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
            <Coffee className="h-5 w-5 text-orange-300" />
            <select
              aria-label="Space type filter"
              className="w-full bg-transparent text-sm text-white/90 outline-none"
              defaultValue="any"
            >
              <option value="any" className="bg-gray-900">Any space</option>
              <option value="coffee" className="bg-gray-900">Coffee shop</option>
              <option value="pub" className="bg-gray-900">Pub</option>
              <option value="hotel" className="bg-gray-900">Hotel</option>
              <option value="silent" className="bg-gray-900">Silent zone</option>
              <option value="creative" className="bg-gray-900">Creative space</option>
            </select>
          </div>
          <button className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-white/90">
            Find spaces
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-white/70">
          <span>Instant booking</span>
          <span>•</span>
          <span>QR check‑in</span>
          <span>•</span>
          <span>Wocal+ perks</span>
        </div>
      </div>
    </section>
  );
}
