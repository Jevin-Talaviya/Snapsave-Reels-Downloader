import React from 'react';
import { Download, Youtube, Instagram } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { NavButton } from './NavButton';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navbar({ isDark, toggleTheme, activeSection, onSectionChange }: NavbarProps) {
  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Download className="w-6 h-6 text-purple-600" />
            <span className="text-xl font-bold text-purple-600">SnapSave</span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <NavButton
              icon={Youtube}
              label="YouTube"
              isActive={activeSection === 'youtube'}
              onClick={() => onSectionChange('youtube')}
            />
            <NavButton
              icon={Instagram}
              label="Instagram"
              isActive={activeSection === 'instagram'}
              onClick={() => onSectionChange('instagram')}
            />
          </div>

          <div className="flex items-center gap-4">
            <select className="bg-gray-100 dark:bg-gray-700 border-0 rounded-lg px-3 py-1.5 text-gray-700 dark:text-gray-200">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex gap-2 py-3 border-t border-gray-100 dark:border-gray-700">
          <NavButton
            icon={Youtube}
            label="YouTube"
            isActive={activeSection === 'youtube'}
            onClick={() => onSectionChange('youtube')}
            fullWidth
          />
          <NavButton
            icon={Instagram}
            label="Instagram"
            isActive={activeSection === 'instagram'}
            onClick={() => onSectionChange('instagram')}
            fullWidth
          />
        </div>
      </div>
    </nav>
  );
}