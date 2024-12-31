import React from 'react';
import { Video, Image, Play, Instagram } from 'lucide-react';
import { Feature } from './Feature';

export function FeatureGrid() {
  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
      <Feature icon={<Video />} title="Videos" />
      <Feature icon={<Image />} title="Photos" />
      <Feature icon={<Play />} title="Stories" />
      <Feature icon={<Instagram />} title="Reels" />
    </div>
  );
}