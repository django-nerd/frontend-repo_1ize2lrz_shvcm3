import React from 'react';
import { MapPin, Mail, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0c10] border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">Wocal</div>
            <p className="mt-2 text-sm text-white/70">
              Work local. Book micro‑workspaces in cafés, hotels, pubs and community spaces.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Product
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white">Discover</a></li>
              <li><a href="#" className="hover:text-white">Wocal+</a></li>
              <li><a href="#" className="hover:text-white">For Hosts</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Connect
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /><a href="#" className="hover:text-white">hello@wocal.app</a></li>
              <li className="flex items-center gap-2"><Twitter className="h-4 w-4" /><a href="#" className="hover:text-white">Twitter</a></li>
              <li className="flex items-center gap-2"><Instagram className="h-4 w-4" /><a href="#" className="hover:text-white">Instagram</a></li>
              <li className="flex items-center gap-2"><Linkedin className="h-4 w-4" /><a href="#" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Wocal. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
