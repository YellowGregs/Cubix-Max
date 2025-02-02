import { useState, useEffect } from 'react';
import { Shield, Zap, Cloud, Key, Cpu, Smartphone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Shield,
    title: 'Secure & Safe',
    description: 'Safe to use & little to none vulnerability.',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    icon: Zap,
    title: 'Luarmor',
    description: 'Enjoy luarmor scripts without any issues.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Cloud,
    title: 'Script Hub',
    description: 'Search scripts with ease.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Key,
    title: 'Key System',
    description: 'Has a easy Key System.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Cpu,
    title: 'Execution',
    description: 'Fast Execution.',
    gradient: 'from-red-500 to-rose-500'
  },
  {
    icon: Smartphone,
    title: 'Device',
    description: 'Currently Supports Android.',
    gradient: 'from-indigo-500 to-violet-500'
  }
];

const faqs = [
  {
    question: 'What is Cubix Max?',
    answer: 'Cubix Max is a Roblox executor designed to provide you to execute scripts.'
  },
  {
    question: 'Is Cubix Max safe to use?',
    answer: 'Yes, Cubix Max is safe.'
  },
  {
    question: 'Which device are supported?',
    answer: 'Currently, Cubix Max is available for Android devices.'
  },
  {
    question: 'How do I get started?',
    answer: "Simply download Cubix Max for your device from the download page, install it, and you're ready to go."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-6 flex items-center justify-between text-left focus:outline-none group px-4"
      >
        <span className="text-base sm:text-lg font-medium text-white group-hover:text-purple-400 transition-colors truncate pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-purple-400 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed px-4 py-3 border-t border-zinc-700">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [version, setVersion] = useState<string>('');

  useEffect(() => {
    async function fetchVersion() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/YellowGregs/Test/refs/heads/main/Cubix.json');
        const data = await response.json();
        setVersion(data.versionName);
      } catch (error) {
        console.error('Error fetching version data:', error);
      }
    }

    fetchVersion();
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-50" />

      {/* Main */}
      <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden px-4 py-20 sm:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full filter blur-[128px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full filter blur-[128px] animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        </div>

        <div className="relative z-10 text-center">
          <div className="flex justify-center items-center mb-6">
            <img
              src="https://files.catbox.moe/bu8ygj.png"
              alt="Cubix"
              className="w-24 h-24 sm:w-32 sm:h-32 animate-pulse"
            />
          </div>
{/*           {version && (
      <p className="text-sm sm:text-base text-zinc-300 mb-6 sm:mb-8 animate-fade-in delay-100">
        Version {version}
      </p>
    )} */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in">
            Cubix <span className="text-purple-400">Max</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in delay-100 px-4">
            A Roblox Executor to execute scripts.
          </p>
          <Link
            to="/download"
            className="inline-block bg-purple-500/30 hover:bg-purple-500/40 text-purple-300 hover:text-white font-normal py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in border border-purple-500"
          >
            Download
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="relative py-16 sm:py-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full filter blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full filter blur-[128px] animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 animate-fade-in">
            Powerful <span className="text-purple-400">Features</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-zinc-900/50 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-zinc-800/50 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${feature.gradient?.split(' ')[0] || 'blue'}, ${feature.gradient?.split(' ')[2] || 'purple'})`,
                  }}
                />
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-30 blur-xl transform -rotate-12 translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
                </div>

                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-purple-400/30 rounded-full blur-sm"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${2 + i}s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-500" />
                    <div className="relative w-full h-full bg-zinc-900/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-white group-hover:text-purple-400 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 group-hover:text-zinc-300 transition-colors duration-500 relative">
                    {feature.description}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="relative py-16 sm:py-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full filter blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full filter blur-[128px] animate-pulse delay-500" />
        </div>

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 animate-fade-in">
            Frequently Asked <span className="text-purple-400">Questions</span>
          </h2>
          <div className="bg-zinc-900/50 backdrop-blur-lg rounded-xl border border-zinc-800/50 divide-y divide-zinc-800">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
