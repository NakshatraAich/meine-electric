"use client";

import React from "react";
import { Mail, MapPin, Phone, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";

const contactItems = [
  {
    icon: Mail,
    title: "Email Us",
    value: "contact@meineelectric.com",
    href: "mailto:contact@meineelectric.com",
    color: "text-stone-400",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (234) 567-8900",
    href: "tel:+1234567890",
    color: "text-stone-400",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: (
      <>
        1st floor, 44, 3rd Cross St, <br />
        Kamaraj Nagar, Korattur, Chennai,
        <br />
        Tamil Nadu 600050
      </>
    ),
    href: "#",
    color: "text-stone-400",
    isAddress: true,
  },
];

const socialIcons = {
  twitter: <Twitter className="w-5 h-5 text-white" />,
  linkedin: <Linkedin className="w-5 h-5 text-white" />,
  github: <Github className="w-5 h-5 text-white" />,
};

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white font-sans">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/logo-white.svg"
                alt="Meine Electric Logo"
                width={144} // example size
                height={48} 
                className="mr-4"
              />

            </div>
            <p className="mb-8 font-semibold text-lg text-stone-300">
              Empowering sustainable energy solutions with 
              innovation, reliability, and cutting-edge technology.
            </p>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-stone-700/50 bg-stone-800/30 p-8 backdrop-blur-sm">
              <h3 className="mb-8 text-2xl font-semibold bg-gradient-to-r from-white to-stone-300 bg-clip-text text-transparent">
                Get in Touch
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {contactItems.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-stone-500/20 to-stone-600/20 transition-all duration-300 group-hover:from-stone-500/30 group-hover:to-stone-600/30">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium text-white">{item.title}</h4>
                      {item.isAddress ? (
                        <address className="not-italic leading-relaxed text-stone-300">
                          {item.value}
                        </address>
                      ) : (
                        <a
                          href={item.href}
                          className={`transition-colors duration-200 text-stone-300 hover:${item.color}`}
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-stone-700/50 pt-8 md:flex-row md:space-y-0">
          <p className="text-sm text-stone-400">
            © 2025 Meine Electric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
