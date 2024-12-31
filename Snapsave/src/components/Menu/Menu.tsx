import React from 'react';
import { Youtube, Instagram } from 'lucide-react';
import { MenuItem } from './MenuItem';

interface MenuProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Menu({ activeSection, onSectionChange }: MenuProps) {
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm p-3 sticky top-4">
      <MenuItem
        icon={Youtube}
        label="YouTube Downloader"
        isActive={activeSection === 'youtube'}
        onClick={() => onSectionChange('youtube')}
      />
      <MenuItem
        icon={Instagram}
        label="Instagram Downloader"
        isActive={activeSection === 'instagram'}
        onClick={() => onSectionChange('instagram')}
      />
    </div>
  );
}