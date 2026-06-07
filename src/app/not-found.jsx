import Link from 'next/link';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { TbError404, TbCompass } from 'react-icons/tb';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col justify-between items-center px-6 py-12 relative overflow-hidden font-sans">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Top Navbar Brand (Optional/Clean look) */}
      <div className="w-full max-w-6xl mx-auto flex justify-start z-10">
        <span className="text-sm font-semibold tracking-widest text-blue-500 uppercase">
          System Error
        </span>
      </div>

      {/* Main Content Area */}
      <div className="max-w-xl text-center space-y-10 z-10 my-auto">
        
        {/* Modern Icon Grid */}
        <div className="relative flex justify-center items-center">
          <div className="p-5 bg-slate-800/40 border border-slate-700/50 backdrop-blur-md rounded-2xl shadow-xl">
            <TbCompass className="h-16 w-16 text-blue-400 animate-[spin_8s_linear_infinite]" />
          </div>
          <div className="absolute -bottom-4 -right-2 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono px-2.5 py-1 rounded-md backdrop-blur-sm">
            STATUS_404
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-7xl sm:text-8xl font-black tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Lost in Space?
          </h1>
          <p className="text-lg text-gray-400 max-w-md mx-auto font-light leading-relaxed">
            The page you are looking for doesn't exist or has been moved to another coordinate.
          </p>
        </div>

        {/* Modern Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          <Link 
            href="/"
            className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all duration-200 gap-2 hover:-translate-y-0.5"
          >
            <HiOutlineArrowNarrowLeft className="text-lg transition-transform group-hover:-translate-x-1" />
            Back to Dashboard
          </Link>
          
          <Link 
            href="/support"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl text-gray-300 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-all duration-200 gap-2 hover:-translate-y-0.5"
          >
            Report an Issue
          </Link>
        </div>

      </div>

      {/* Minimal Footer */}
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 border-t border-slate-800/60 pt-6 z-10">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300 transition-colors">Status Page</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Contact Support</a>
        </div>
      </div>
    </div>
  );
}