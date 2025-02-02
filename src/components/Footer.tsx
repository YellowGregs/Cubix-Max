import { FaDiscord, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-zinc-800/50">
      <div className="bg-black/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-4">
              <img src="https://files.catbox.moe/bu8ygj.png" alt="Cubix Max Logo" className="w-8 h-8" />
              <span className="text-xl font-bold gradient-text">Cubix Max</span>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://discord.gg/Fwq4EAKsa8"
                title="Discord"
                className="group flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/80 
                hover:bg-[#7289da]/20 border border-zinc-700 hover:border-[#7289da]/50 transition-all duration-200"
              >
                <FaDiscord className="w-5 h-5 text-zinc-400 group-hover:text-[#7289da] transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/@CubixTeam"
                title="YouTube"
                className="group flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/80 
                hover:bg-red-500/20 border border-zinc-700 hover:border-red-500/50 transition-all duration-200"
              >
                <FaYoutube className="w-5 h-5 text-zinc-400 group-hover:text-red-500 transition-colors" />
              </a>
            </div>

            <p className="text-zinc-400 text-sm">
              &copy; {currentYear} Cubix Max. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
