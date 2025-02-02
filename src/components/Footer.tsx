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
                href="https://www.tiktok.com/@tmrxtiktok"
                title="TikTok"
                className="group flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/80 
                hover:bg-purple-500/20 border border-zinc-700 hover:border-purple-500/50 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-zinc-400 group-hover:text-purple-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 14.5v-5.3h2.7l.4-2.8h-3.1V7.4c0-.8.3-1.4 1.4-1.4h2.1V3h-2.8c-3.4 0-4.3 2.6-4.3 4.6v2.6H7v2.8h3.2v5.5h2.8z"></path>
                </svg>
              </a>
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
