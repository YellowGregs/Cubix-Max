import { FaGithub, FaDiscord, FaYoutube } from 'react-icons/fa';
// import { Logo } from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-zinc-800/50">
      <div className="bg-black/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                <img src="https://files.catbox.moe/bu8ygj.png" alt="Cubix Max Logo" className="w-8 h-8" />
                <span className="text-xl font-bold gradient-text">Cubix Max</span>
                </div>
              <p className="text-zinc-400 max-w-md">
                A Executor that can execute scripts.
              </p>
            </div>

            {/* Quick Links */}
{/*             <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-zinc-400 hover:text-purple-400 transition-colors">Features</a>
                </li>
                <li>
                  <a href="#faq" className="text-zinc-400 hover:text-purple-400 transition-colors">FAQ</a>
                </li>
                <li>
                  <a href="#support" className="text-zinc-400 hover:text-purple-400 transition-colors">Support</a>
                </li>
              </ul>
            </div> */}

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Social Account</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="group flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/80 
                  hover:bg-purple-500/20 border border-zinc-700 hover:border-purple-500/50 transition-all duration-200"
                >
                  <FaGithub className="w-5 h-5 text-zinc-400 group-hover:text-purple-400 transition-colors" />
                </a>
                <a
                  href="#"
                  className="group flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/80 
                  hover:bg-[#7289da]/20 border border-zinc-700 hover:border-[#7289da]/50 transition-all duration-200"
                >
                  <FaDiscord className="w-5 h-5 text-zinc-400 group-hover:text-[#7289da] transition-colors" />
                </a>
                <a
                  href="#"
                  className="group flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/80 
                  hover:bg-red-500/20 border border-zinc-700 hover:border-red-500/50 transition-all duration-200"
                >
                  <FaYoutube className="w-5 h-5 text-zinc-400 group-hover:text-red-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-800/50">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <p className="text-zinc-400 text-sm text-center">
                &copy; {currentYear} Cubix Max. All rights reserved.
              </p>
{/*               <div className="flex space-x-6">
                <a href="#" className="text-zinc-400 hover:text-purple-400 text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-zinc-400 hover:text-purple-400 text-sm transition-colors">
                  Terms of Service
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
