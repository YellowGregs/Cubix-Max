import { useState } from 'react';
import { Monitor, Smartphone, Apple, ChevronDown, AlertCircle, Clock, Download } from 'lucide-react';

const downloads = [
  {
    platform: 'Windows',
    icon: Monitor,
    version: '1.0.0',
    description: 'The Description.',
    status: 'W.I.P.',
    statusIcon: Clock,
    statusColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
    screenshot: 'black'
  },
  {
    platform: 'Android',
    icon: Smartphone,
    version: '1.0.0',
    description: 'The Description.',
    status: 'Available',
    variants: ['64-bit', '32-bit'],
    statusColor: 'bg-green-500/20 text-green-400 border-green-500/50',
    screenshot: 'https://files.catbox.moe/46jwm5.png'
  },
  {
    platform: 'iOS',
    icon: Apple,
    version: '1.0.0',
    description: 'The Description.',
    status: 'Discontinued',
    statusIcon: AlertCircle,
    statusColor: 'bg-red-500/20 text-red-400 border-red-500/50',
    screenshot: 'black'
  },
];

export default function DownloadPage() {
  const [selectedVariant, setSelectedVariant] = useState('64-bit');

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Download <span className="text-purple-400">Cubix Max</span>
        </h1>
        <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto animate-fade-in delay-100">
          Choose your platform and get started with Cubix Max today.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {downloads.map((download, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/50 backdrop-blur-lg rounded-xl border border-zinc-800 transform transition-all hover:scale-105 animate-fade-in overflow-hidden flex flex-col min-h-[520px]" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-black">
                {download.screenshot !== 'black' ? (
                  <img
                    src={download.screenshot}
                    alt={`${download.platform} UI`}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <download.icon className="w-16 h-16 text-zinc-700" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <div className="absolute top-4 right-4 z-20">
                  <div className={`px-3 py-1.5 rounded-full text-sm font-medium border flex items-center justify-center space-x-1.5 ${download.statusColor}`}>
                    {download.statusIcon && <download.statusIcon className="w-4 h-4" />}
                    <span>{download.status}</span>
                  </div>
                </div>
                <download.icon className="absolute bottom-4 left-4 w-8 h-8 text-purple-400 z-20" />
              </div>

              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold text-center mb-4">{download.platform}</h2>
                <div className="border-t border-zinc-700 my-4"></div>
                <p className="text-zinc-400 text-center mb-6">{download.description}</p>
              </div>

              {download.platform === 'Android' && (
                <div className="p-6 mt-auto flex items-center justify-between"> 
                  <div className="flex-1 mr-2">
                    <button
                      className="font-bold py-3 px-6 rounded-lg transform transition-all flex items-center justify-center space-x-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:shadow-lg hover:shadow-purple-500/10 w-full"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download</span>
                    </button>
                  </div>

                  <div className="flex-1 ml-2">
                    <select
                      value={selectedVariant}
                      onChange={(e) => setSelectedVariant(e.target.value)}
                      className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all appearance-none cursor-pointer hover:bg-zinc-700 w-full"
                    >
                      {download.variants.map((variant) => (
                        <option key={variant} value={variant}>{variant}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {download.platform !== 'Android' && (
                <div className="p-6 mt-auto">
                  <button
                    className="w-full font-bold py-3 px-6 rounded-lg transform transition-all relative z-10 flex items-center justify-center space-x-2 bg-zinc-800/50 border border-zinc-800 cursor-not-allowed opacity-50"
                    disabled
                  >
                    <Download className="w-5 h-5" />
                    <span>Coming Soon</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
