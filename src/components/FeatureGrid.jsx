import React from 'react';
import { BadgeCheck, CalendarCheck, QrCode, MapPin, Gift, Users } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="h-5 w-5 text-teal-400" />,
    title: 'Discover nearby',
    desc: 'Geo‑search cafés, hotels, pubs and community spaces built for work.'
  },
  {
    icon: <CalendarCheck className="h-5 w-5 text-orange-400" />,
    title: 'Seamless booking',
    desc: 'Reserve time blocks or a day pass with one tap.'
  },
  {
    icon: <QrCode className="h-5 w-5 text-lime-400" />,
    title: 'Digital check‑in',
    desc: 'Instant QR verification on arrival.'
  },
  {
    icon: <BadgeCheck className="h-5 w-5 text-sky-400" />,
    title: 'Wocal+ perks',
    desc: 'Membership perks like discounts, rewards and free coffee.'
  },
  {
    icon: <Users className="h-5 w-5 text-fuchsia-400" />,
    title: 'Community',
    desc: 'Mood/status, AI coffee‑connect and venue feed.'
  },
  {
    icon: <Gift className="h-5 w-5 text-yellow-400" />,
    title: 'Host rewards',
    desc: 'Venues offer perks for social posts and loyalty.'
  },
];

export default function FeatureGrid() {
  return (
    <section className="bg-[#0b0c10] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">Built for modern mobile work</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          The Airbnb for micro‑workspaces. Everything you need to work locally with flow.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-white/5 p-2">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-white/75">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
