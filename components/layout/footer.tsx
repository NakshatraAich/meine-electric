import Link from 'next/link'
import { Linkedin, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-padding py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4">
          {/* Left side - Copyright and links */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 text-sm">
            <span className="text-white/70">© Copyright 2025</span>
            <div className="hidden md:block text-white/30">|</div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <Link
                href="#privacy"
                className="text-white/70 hover:text-white transition-colors"
              >
                Privacy Notice
              </Link>
              <div className="hidden sm:block text-white/30">|</div>
              <Link
                href="#vendor-code"
                className="text-white/70 hover:text-white transition-colors"
              >
                Vendor Code of Conduct
              </Link>
            </div>
          </div>
          
          {/* Right side - Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all duration-200"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all duration-200"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}