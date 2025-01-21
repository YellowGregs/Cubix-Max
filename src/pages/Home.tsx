import { useState } from 'react';
import { Shield, Zap, Cloud, Lock, Cpu, Smartphone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Shield,
    title: 'Title',
    description: 'Description',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    icon: Zap,
    title: 'Title',
    description: 'Description',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Cloud,
    title: 'Title',
    description: 'Description',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Lock,
    title: 'Title',
    description: 'Description',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Cpu,
    title: 'Title',
    description: 'Description',
    gradient: 'from-red-500 to-rose-500'
  },
  {
    icon: Smartphone,
    title: 'Title',
    description: 'Description',
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
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors truncate pl-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-purple-400 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'transform rotate-180 translate-x-[-25px]' : 'translate-x-[-25px]'
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-40 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-zinc-400 text-base leading-relaxed px-4 py-3 border-t border-zinc-700">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-50" />

      {/* Main */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black z-0" />
        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center items-center mb-6">
            <img
              src="https://files.catbox.moe/bu8ygj.png"
              alt="Cubix"
              className="w-32 h-32 animate-pulse"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Cubix <span className="text-purple-400">Max</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
            A Roblox Executor to execute scripts.
          </p>
          <Link
            to="/download"
            className="inline-block bg-purple-500/30 hover:bg-purple-500/40 text-purple-300 hover:text-white font-normal py-3 px-8 rounded-full transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in border border-purple-500"
          >
            Download
          </Link>
        </div>
      </div>

     {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in">
          Powerful <span className="text-purple-400">Features</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-zinc-900/50 backdrop-blur-lg rounded-xl p-8 border border-zinc-800/50 transform transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/5 animate-fade-in relative overflow-hidden feature-card feature-card-${index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-zinc-800/80 rounded-xl flex items-center justify-center mb-6 group-hover:bg-zinc-800 transition-colors">
                  <feature.icon className="w-8 h-8 text-purple-400 transform transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{feature.title}</h3>
                <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 py-24 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in">
          Frequently Asked <span className="text-purple-400">Questions</span>
        </h2>
        <div className="bg-zinc-900/50 backdrop-blur-lg rounded-xl border border-zinc-800/50 divide-y divide-zinc-800">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
