import React from 'react';
import { Download, Shield, Zap, Smartphone, Video, Image, Play, Instagram } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    icon: <Download className="w-6 h-6" />,
    title: "Fast Downloads",
    description: "Download videos in seconds with our optimized download engine",
    image: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Safe & Secure",
    description: "100% safe downloads without any third-party software or plugins",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Multiple Formats",
    description: "Download in various formats and qualities to suit your needs",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Friendly",
    description: "Works perfectly on all devices - desktop, tablet, and mobile",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&q=80&w=800"
  }
];

const platforms = [
  {
    icon: <Video className="w-6 h-6" />,
    title: "YouTube Videos",
    description: "Download any YouTube video in HD quality",
    image: "https://images.unsplash.com/photo-1610152271585-d5aa72aa0135?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    title: "Instagram Reels",
    description: "Save Instagram reels directly to your device",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Image className="w-6 h-6" />,
    title: "Instagram Photos",
    description: "Download Instagram photos in original quality",
    image: "https://images.unsplash.com/photo-1585247226801-bc613c441316?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Play className="w-6 h-6" />,
    title: "Instagram Stories",
    description: "Save Instagram stories before they disappear",
    image: "https://images.unsplash.com/photo-1611162617263-4ec3060a058e?auto=format&fit=crop&q=80&w=800"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Main Features */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose SnapSave?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The fastest and most secure way to download your favorite content
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-purple-600">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Supported Platforms */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What You Can Download
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Download content from your favorite social media platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src={platform.image}
                  alt={platform.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-purple-600">{platform.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {platform.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {platform.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}