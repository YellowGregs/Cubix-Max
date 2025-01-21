import { useState } from 'react';
import { Key, AlertCircle, CheckCircle2, Copy, ArrowRight } from 'lucide-react';

interface KeySystemProps {
  isWIP?: boolean;
}
// for the other developer idk wtf im doing here so i need your help to add or fix this shit :sob:
export default function KeySystem({ 
    isWIP = true // change to false if you dont want to see W.I.P
}: KeySystemProps) { 
  const [key, setKey] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key.trim() === '') {
      setStatus('error');
      setErrorMessage('Please enter a key');
      return;
    }
    setTimeout(() => {
      if (key === 'demo-key') {
        setStatus('success');
        setErrorMessage('');
      } else {
        setStatus('error');
        setErrorMessage('Invalid key');
      }
    }, 1000);
  };

  if (isWIP) {
    return (
      <div className="min-h-screen bg-black text-white pt-24 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-zinc-900/50 backdrop-blur-lg rounded-xl border border-zinc-800 p-8 text-center">
            <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-yellow-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Work in Progress</h2>
            <p className="text-zinc-400">The key system is currently under development. Please check back later.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Key <span className="text-purple-400">System</span>
          </h1>
          <p className="text-zinc-400">Enter your key to activate Cubix Max</p>
        </div>

        <div className="bg-zinc-900/50 backdrop-blur-lg rounded-xl border border-zinc-800 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="key" className="block text-sm font-medium text-zinc-400 mb-2">
                License Key
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="key"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                />
                <button
                  type="button"
                  onClick={() => navigator.clipboard.writeText(key)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
              {status === 'error' && (
                <p className="mt-2 text-sm text-red-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errorMessage}
                </p>
              )}
              {status === 'success' && (
                <p className="mt-2 text-sm text-green-400 flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  Key validated successfully!
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Key className="w-5 h-5" />
              <span>Activate</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}