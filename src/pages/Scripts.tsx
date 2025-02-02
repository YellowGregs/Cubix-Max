import { useState } from 'react';
import { Search, AlertCircle, CheckCircle2, Copy, Key as KeyIcon, Eye, Clock, Gamepad, ExternalLink } from 'lucide-react';

interface Script {
  _id: string;
  title: string;
  game?: {
    gameId: number;
    name: string;
    imageUrl: string;
  };
  script: string;
  slug: string;
  verified: boolean;
  key: boolean;
  keyLink?: string;
  views: number;
  scriptType: string;
  isUniversal: boolean;
  isPatched: boolean;
  visibility: string;
  createdAt: string;
  updatedAt: string;
}

interface SearchResponse {
  result: {
    totalPages: number;
    scripts: Script[];
  };
}

export default function Scripts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [scripts, setScripts] = useState<Script[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mode, setMode] = useState<'free' | 'paid'>('free');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const searchScripts = async (page = 1) => {
    if (!searchTerm.trim()) {
      setError('Please enter a search term');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://scriptblox-api-proxy.vercel.app/api/search?q=${encodeURIComponent(searchTerm)}&mode=${mode}&page=${page}`
      );
      const data: SearchResponse = await response.json();
      setScripts(data.result.scripts);
      setTotalPages(data.result.totalPages);
      setCurrentPage(page);
    } catch {
      setError('Failed to fetch scripts. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      searchScripts(newPage);
    }
  };

  const copyScript = async (script: string, id: string) => {
    try {
      await navigator.clipboard.writeText(script);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy script:', err);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchScripts(1);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[128px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-purple-400">Search</span> Scripts
          </h1>
          <p className="text-zinc-400 text-lg mb-8">
            Search for scripts to use with Cubix Max
          </p>

          <div className="relative max-w-2xl mx-auto">
            <div className="flex rounded-lg overflow-hidden border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm shadow-lg">
              <div className="relative">
                <select
                  value={mode}
                  onChange={(e) => setMode(e.target.value as 'free' | 'paid')}
                  className="h-full px-6 py-3.5 bg-zinc-800/50 text-white border-r border-zinc-700/50 appearance-none cursor-pointer hover:bg-zinc-700/50 transition-colors min-w-[120px] focus:outline-none"
                >
                  <option value="free">Free</option>
                  <option value="paid">Paid</option>
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search for scripts..."
                className="flex-1 bg-transparent px-6 py-3.5 text-white placeholder-zinc-500 focus:outline-none min-w-0"
              />
              <button
                onClick={() => searchScripts(1)}
                className="px-6 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 transition-colors border-l border-zinc-700/50 flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
{/*                 <span className="hidden sm:inline">Search</span> */}
              </button>
            </div>

            {error && (
              <div className="mt-4 text-red-400 flex items-center justify-center gap-2 bg-red-500/10 py-2 px-4 rounded-lg border border-red-500/20">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {scripts.map((script) => (
            <div
              key={script._id}
              className="bg-zinc-900/50 backdrop-blur-lg rounded-xl border border-zinc-800/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 flex flex-col shadow-lg hover:shadow-purple-500/10"
            >
              <div className="relative">
                <a
                  href={`https://scriptblox.com/script/${script.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-48 bg-zinc-800 overflow-hidden"
                >
                  {script.isUniversal && (
                    <div className="absolute top-3 left-3 z-20 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium border border-blue-500/50">
                      Universal
                    </div>
                  )}
                  {script.game?.imageUrl ? (
                    <div className="w-full h-full transition-all duration-300 group">
                      <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-all duration-300 z-10" />
                      <img
                        src={script.game.imageUrl.startsWith('/') ? `https://scriptblox.com${script.game.imageUrl}` : script.game.imageUrl}
                        alt={script.game.name}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                        onError={(e) => {
                          e.currentTarget.src = 'https://files.catbox.moe/bu8ygj.png';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent group-hover:opacity-0 transition-opacity duration-300" />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src="https://files.catbox.moe/bu8ygj.png"
                        alt="Fallback"
                        className="w-20 h-20 opacity-30"
                      />
                    </div>
                  )}
                  {script.verified && (
                    <div className="absolute top-3 right-3 bg-green-500/20 p-1.5 rounded-full border border-green-500/50">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    </div>
                  )}
                </a>
                {script.isPatched && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-red-500/90 via-red-600/90 to-red-500/90 text-white text-center py-2 text-sm font-medium backdrop-blur-sm border-t border-red-500/50">
                    <div className="flex items-center justify-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>Patched</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <a
                  href={`https://scriptblox.com/script/${script.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-white mb-3 hover:text-purple-400 transition-colors line-clamp-1"
                >
                  {script.title}
                </a>

                {script.game && (
                  <a
                    href={`https://www.roblox.com/games/${script.game.gameId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition-colors mb-4"
                  >
                    <Gamepad className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate text-sm">{script.game.name}</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                )}

                <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    <span>{script.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{formatDate(script.updatedAt)}</span>
                  </div>
                </div>

                {script.key && (
                  <div className="mb-4">
                    <a
                      href={script.keyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gradient-to-r from-amber-500/10 to-yellow-500/10 text-amber-400 text-xs font-medium border border-amber-500/20 hover:border-amber-500/40 hover:from-amber-500/20 hover:to-yellow-500/20 transition-all duration-300 group"
                    >
                      <KeyIcon className="w-3.5 h-3.5" />
                      <span>Get Key</span>
                    </a>
                  </div>
                )}

                <div className="relative bg-black/50 rounded-lg p-4 group">
                  <pre className="text-sm text-zinc-300 overflow-x-auto max-h-16 custom-scrollbar">
                    {script.script}
                  </pre>
                  <button
                    onClick={() => copyScript(script.script, script._id)}
                    className={`absolute top-3 right-3 p-2 rounded-lg transition-all duration-200 ${
                      copiedId === script._id
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-zinc-800/50 text-zinc-400 hover:bg-purple-500/20 hover:text-purple-400'
                    }`}
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                
                <button
                  onClick={() => copyScript(script.script, script._id)}
                  className={`mt-3 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg transition-all duration-200 md:hidden ${
                    copiedId === script._id
                      ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                      : 'bg-purple-500/20 text-purple-400 border border-purple-500/50 hover:bg-purple-500/30'
                  }`}
                >
                  <Copy className="w-4 h-4" />
                  <span>{copiedId === script._id ? 'Copied!' : 'Copy Script'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {scripts.length > 0 && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all ${
                currentPage === 1
                  ? 'bg-zinc-800/50 text-zinc-500 cursor-not-allowed'
                  : 'bg-zinc-800/80 text-white hover:bg-zinc-700/80'
              }`}
            >
              <span>Previous</span>
            </button>
            <span className="text-zinc-400 bg-zinc-900/50 px-4 py-2 rounded-lg border border-zinc-800/50">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all ${
                currentPage === totalPages
                  ? 'bg-zinc-800/50 text-zinc-500 cursor-not-allowed'
                  : 'bg-zinc-800/80 text-white hover:bg-zinc-700/80'
              }`}
            >
              <span>Next</span>
            </button>
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center gap-3 mt-8 bg-zinc-900/50 backdrop-blur-sm px-6 py-4 rounded-lg border border-zinc-800/50 w-fit mx-auto">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-purple-500 border-t-transparent" />
            <span className="text-zinc-400">Searching...</span>
          </div>
        )}
      </div>
    </div>
  );
}
