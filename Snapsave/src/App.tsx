import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { DownloadSection } from './components/DownloadSection/DownloadSection';
import { FeaturesSection } from './components/Features/FeaturesSection';
import { Footer } from './components/Layout/Footer';
import { TermsOfService } from './components/Legal/TermsOfService';
import { PrivacyPolicy } from './components/Legal/PrivacyPolicy';
import { YouTubeGuidelines } from './components/Guidelines/YouTubeGuidelines';
import { InstagramGuidelines } from './components/Guidelines/InstagramGuidelines';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = React.useState('youtube');

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navbar 
          isDark={isDark} 
          toggleTheme={toggleTheme}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        
        <Routes>
          <Route path="/" element={
            <main className="flex-1">
              <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Download Instagram & YouTube Videos
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    Download videos, reels, stories, and IGTV from Instagram and YouTube for free
                  </p>
                </div>

                <div className="max-w-3xl mx-auto">
                  <DownloadSection
                    title={activeSection === 'youtube' ? "YouTube Downloader" : "Instagram Downloader"}
                    placeholder={`Paste ${activeSection === 'youtube' ? 'YouTube' : 'Instagram'} URL here...`}
                  />
                </div>
              </div>

              <FeaturesSection />
            </main>
          } />
          
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/youtube-guidelines" element={<YouTubeGuidelines />} />
          <Route path="/instagram-guidelines" element={<InstagramGuidelines />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}