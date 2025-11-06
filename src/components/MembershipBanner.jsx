import React from 'react';
import { Crown, Bolt, Coffee } from 'lucide-react';

export default function MembershipBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b0c10] via-[#0b0c10] to-[#121318] py-14">
      <div className="mx-auto max-w-7xl px-6 text-white">
        <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:flex-row md:items-center">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Crown className="h-4 w-4 text-yellow-300" />
              <span className="text-xs font-medium text-white/80">Introducing Wocal+ Membership</span>
            </div>
            <h3 className="text-xl font-semibold sm:text-2xl">Perks that pay for themselves</h3>
            <p className="mt-2 max-w-xl text-sm text-white/75">
              Unlock discounts, free drinks, priority seats, and monthly rewards for working locally.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-white/90"
            >
              Get Wocal+
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 text-white/80 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
            <Bolt className="h-4 w-4 text-teal-300" />
            <span className="text-sm">Priority booking and express check‑in</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
            <Coffee className="h-4 w-4 text-orange-300" />
            <span className="text-sm">Free coffee at partner venues</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
            <Crown className="h-4 w-4 text-yellow-300" />
            <span className="text-sm">Exclusive perks and rewards each month</span>
          </div>
        </div>
      </div>
    </section>
  );
}
