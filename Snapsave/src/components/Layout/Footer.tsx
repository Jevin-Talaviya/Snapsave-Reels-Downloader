import React from 'react';
import { Download } from 'lucide-react';
import { FooterLink } from './FooterLink';
import { FooterSection } from './FooterSection';

export function Footer() {
  return (
    <footer className="mt-16 py-12 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Download className="w-6 h-6 text-purple-600" />
              <span className="text-xl font-bold text-purple-600">SnapSave</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Download your favorite videos from YouTube and Instagram easily and safely.
            </p>
          </div>

          {/* Legal Section */}
          <FooterSection title="Legal">
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/disclaimer">Disclaimer</FooterLink>
            <FooterLink href="/dmca">DMCA</FooterLink>
          </FooterSection>

          {/* YouTube Section */}
          <FooterSection title="YouTube Guidelines">
            <FooterLink href="/youtube-terms">YouTube Terms</FooterLink>
            <FooterLink href="/youtube-fair-use">Fair Use Policy</FooterLink>
            <FooterLink href="/youtube-copyright">Copyright Information</FooterLink>
            <FooterLink href="/youtube-community">Community Guidelines</FooterLink>
          </FooterSection>

          {/* Instagram Section */}
          <FooterSection title="Instagram Guidelines">
            <FooterLink href="/instagram-terms">Instagram Terms</FooterLink>
            <FooterLink href="/instagram-privacy">Data Privacy</FooterLink>
            <FooterLink href="/instagram-usage">Usage Rights</FooterLink>
            <FooterLink href="/instagram-community">Community Standards</FooterLink>
          </FooterSection>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © 2024 SnapSave. All rights reserved. This service is not affiliated with YouTube or Instagram.
            </p>
            <div className="flex gap-6">
              <FooterLink href="/help">Help Center</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}