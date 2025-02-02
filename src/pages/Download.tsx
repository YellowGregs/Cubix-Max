import { useState, useEffect } from 'react';
import { Monitor, Smartphone, Apple, AlertCircle, Download } from 'lucide-react';

export default function DownloadPage() {
  const [downloads, setDownloads] = useState<any[]>([]);
  const [selectedVariant, setSelectedVariant] = useState('64-bit');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [isDownloadAvailable, setIsDownloadAvailable] = useState(true);

  useEffect(() => {
    async function fetchDownloadData() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/YellowGregs/Test/refs/heads/main/Cubix.json');
        const data = await response.json();

        const mappedDownloads = [
          {
            platform: 'Windows',
            icon: Monitor,
            version: data.versionName,
            description: data.WindowsLink ? "Available" : "Not in development",
            status: data.WindowsLink ? "Available" : "NID",
            statusIcon: data.WindowsLink ? null : AlertCircle,
            statusColor: data.WindowsLink ? 'bg-green-500/20 text-green-400 border-green-500/50' : 'bg-red-500/20 text-red-400 border-red-500/50',
            screenshot: 'black'
          },
          {
            platform: 'Android',
            icon: Smartphone,
            version: "v1.4",
            description: 'Android Version',
            status: 'Available',
            statusColor: 'bg-green-500/20 text-green-400 border-green-500/50',
            variants: ['64-bit', '32-bit'],
            screenshot: 'https://files.catbox.moe/46jwm5.png',
            tempDownloadUrl: 'https://www.mediafire.com/file/oiyas8q83d21iiz/Cubix_.apk/file'
          },
          {
            platform: 'iOS',
            icon: Apple,
            version: data.versionName,
            description: 'iOS Version in W.I.P.',
            status: 'W.I.P',
            statusIcon: AlertCircle,
            statusColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
            screenshot: 'black'
          }
        ];

        setDownloads(mappedDownloads);
      } catch (error) {
        console.error('Error fetching download data:', error);
      }
    }

    fetchDownloadData();
  }, []);

  const VariantChange = (variant: string) => {
    setSelectedVariant(variant);
    if (variant === '64-bit') {
      setDownloadUrl(downloads[1].tempDownloadUrl);
      setIsDownloadAvailable(true);
    } else if (variant === '32-bit') {
      setDownloadUrl('');
      setIsDownloadAvailable(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 sm:pt-24">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[128px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Download <span className="text-purple-400">Cubix Max</span>
        </h1>
        <p className="text-zinc-400 text-center mb-12 sm:mb-16 max-w-2xl mx-auto animate-fade-in delay-100 text-sm sm:text-base">
          Choose your platform and get started with Cubix Max today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {downloads.map((download, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 backdrop-blur-lg rounded-xl border border-zinc-800/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 flex flex-col shadow-lg hover:shadow-purple-500/10"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden bg-black">
                {download.screenshot !== 'black' ? (
                  <div className="relative w-full h-full group">
                    <img
                      src={download.screenshot}
                      alt={`${download.platform} UI`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-40" />
                    <div className="absolute inset-0 shadow-[inset_0_-20px_60px_-20px_rgba(0,0,0,0.5)] pointer-events-none" />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <download.icon className="w-12 h-12 sm:w-16 sm:h-16 text-zinc-700" />
                  </div>
                )}
                <div className="absolute top-4 right-4 z-20">
                  <div className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border flex items-center justify-center space-x-1.5 ${download.statusColor}`}>
                    {download.statusIcon && <download.statusIcon className="w-3 h-3 sm:w-4 sm:h-4" />}
                    <span>{download.status}</span>
                  </div>
                </div>
                <download.icon className="absolute bottom-4 left-4 w-6 h-6 sm:w-8 sm:h-8 text-purple-400 z-20" />
              </div>

              <div className="p-4 sm:p-6 flex-grow">
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">{download.platform}</h2>
                <div className="border-t border-zinc-700 my-4"></div>
                <p className="text-zinc-400 text-center mb-6 text-sm sm:text-base">{download.description}</p>
              </div>

              {download.platform === 'Android' && (
                <div className="p-4 sm:p-6 space-y-4">
                  <div className="relative">
                    <select
                      value={selectedVariant}
                      onChange={(e) => VariantChange(e.target.value)}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all hover:bg-zinc-700"
                    >
                      {download.variants && download.variants.map((variant) => (
                        <option key={variant} value={variant}>{variant}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <button
                    className="w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-400 font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 border border-purple-500/30 hover:border-purple-500/50"
                    onClick={() => window.location.href = download.tempDownloadUrl}
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Download {download.version}</span>
                  </button>
                </div>
              )}

              {download.platform !== 'Android' && (
                <div className="p-4 sm:p-6">
                  <button
                    className="w-full font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transform transition-all relative z-10 flex items-center justify-center space-x-2 bg-zinc-800/50 border border-zinc-800 cursor-not-allowed opacity-50 text-sm sm:text-base"
                    disabled
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
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
