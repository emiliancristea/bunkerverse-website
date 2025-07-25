import React, { useEffect, useState } from 'react';
import { Shield, Zap, Users, Clock, ExternalLink, MessageCircle, Crown, Star, Sparkles, Cpu, Database, MapPin, AlertTriangle, FileText, ArrowRight, Eye, Activity, Target, TrendingUp, CheckCircle, Globe } from 'lucide-react';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavMenuActive, setIsNavMenuActive] = useState(false);
  const [showNavMenuContent, setShowNavMenuContent] = useState(false);
  const [showXButton, setShowXButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const scrollProgress = Math.min(scrollY / (heroHeight * 0.5), 1);
      setScrollProgress(scrollProgress);
      
      // Calculate offset for nav menu bars and corners
      const topBarOffset = scrollProgress * -100;
      const bottomBarOffset = scrollProgress * 100;
      const cornerOffset = scrollProgress * 150;
      
      // Apply transforms to nav menu bars
      const topBar = document.querySelector('.top-bar');
      const bottomBar = document.querySelector('.bottom-bar');
      
      if (topBar) {
        topBar.style.transform = `translateY(${topBarOffset}px)`;
      }
      if (bottomBar) {
        bottomBar.style.transform = `translateY(${bottomBarOffset}px)`;
      }
      
      // Apply transforms to nav menu corners
      const topLeftCorner = document.querySelector('.top-left-corner');
      const topRightCorner = document.querySelector('.top-right-corner');
      const bottomLeftCorner = document.querySelector('.bottom-left-corner');
      const bottomRightCorner = document.querySelector('.bottom-right-corner');
      
      if (topLeftCorner) {
        topLeftCorner.style.transform = `translateY(${topBarOffset - cornerOffset}px) translateX(${-cornerOffset}px) rotate(45deg)`;
      }
      if (topRightCorner) {
        topRightCorner.style.transform = `translateY(${topBarOffset - cornerOffset}px) translateX(${cornerOffset}px) rotate(-45deg)`;
      }
      if (bottomLeftCorner) {
        bottomLeftCorner.style.transform = `translateY(${bottomBarOffset + cornerOffset}px) translateX(${-cornerOffset}px) rotate(-45deg)`;
      }
      if (bottomRightCorner) {
        bottomRightCorner.style.transform = `translateY(${bottomBarOffset + cornerOffset}px) translateX(${cornerOffset}px) rotate(45deg)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavMenuToggle = () => {
    if (isNavMenuActive) {
      // Closing nav menu - hide content immediately
      setShowNavMenuContent(false);
      setShowXButton(false);
      setIsNavMenuActive(false);
    } else {
      // Opening nav menu - show black viewport and X button immediately, then nav list
      setIsNavMenuActive(true);
      setShowXButton(true); // X button appears immediately
      setTimeout(() => {
        setShowNavMenuContent(true);
      }, 400); // Nav list appears after shorter delay
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Unified Top Nav Menu Container - Sticky */}
       <div className={`top-bar fixed top-0 left-0 right-0 h-8 bg-black z-50 transition-all duration-1000 ease-out ${
         isNavMenuActive ? 'h-screen' : ''
       }`} style={{
         transform: isNavMenuActive ? 'translateY(0)' : `translateY(${-scrollProgress * 100}px)`,
         opacity: isNavMenuActive ? 1 : 0.9
       }}></div>
      
      {/* Nav Trigger Button - Gray line underneath top nav menu container */}
       <div 
          className={`fixed top-10 left-1/2 transform -translate-x-1/2 w-16 h-1 z-40 transition-all duration-300 ease-out cursor-pointer animate-pulse ${
            isNavMenuActive ? 'bg-red-500 opacity-100' : 'bg-gray-400 opacity-50 hover:opacity-100 hover:bg-gray-300'
          }`}
          onClick={handleNavMenuToggle}
          style={{
            transform: isNavMenuActive ? 'translate(-50%, 0)' : `translate(-50%, ${-scrollProgress * 100}px)`
          }}
        ></div>
        
        {/* Close X Icon - Appears immediately when nav menu is activated */}
        {showXButton && (
          <div 
            className="fixed top-4 right-4 z-[100] cursor-pointer text-gray-300 hover:text-white transition-colors duration-200 opacity-0 animate-fade-in"
            onClick={handleNavMenuToggle}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        )}
        
        {/* Nav Menu Interface - Only visible after nav menu viewport is fully black */}
        {showNavMenuContent && (
          <>
            {/* Navigation Menu List */}
            <div className="fixed left-8 z-[100] text-white opacity-0 animate-fade-in" style={{
              top: '30vh',
              transform: 'translateY(-50%)'
            }}>
              <div className="flex flex-col space-y-8 text-5xl font-bold tracking-widest" style={{ fontFamily: 'Orbitron, monospace, sans-serif' }}>
                <div className="nav-item cursor-pointer relative overflow-hidden group">
                  <span className="nav-line absolute left-0 top-1/2 w-0 h-0.5 bg-white transform -translate-y-1/2 transition-all duration-300 group-hover:w-8"></span>
                  <span className="nav-text block transition-all duration-300 group-hover:translate-x-16">HOME</span>
                </div>
                <div className="nav-item cursor-pointer relative overflow-hidden group">
                  <span className="nav-line absolute left-0 top-1/2 w-0 h-0.5 bg-white transform -translate-y-1/2 transition-all duration-300 group-hover:w-8"></span>
                  <span className="nav-text block transition-all duration-300 group-hover:translate-x-16">VERSE</span>
                </div>
                <div className="nav-item cursor-pointer relative overflow-hidden group">
                  <span className="nav-line absolute left-0 top-1/2 w-0 h-0.5 bg-white transform -translate-y-1/2 transition-all duration-300 group-hover:w-8"></span>
                  <span className="nav-text block transition-all duration-300 group-hover:translate-x-16">GUARD</span>
                </div>
                <div className="nav-item cursor-pointer relative overflow-hidden group">
                  <span className="nav-line absolute left-0 top-1/2 w-0 h-0.5 bg-white transform -translate-y-1/2 transition-all duration-300 group-hover:w-8"></span>
                  <span className="nav-text block transition-all duration-300 group-hover:translate-x-16">CLIENT</span>
                </div>
                <div className="nav-item cursor-pointer relative overflow-hidden group">
                  <span className="nav-line absolute left-0 top-1/2 w-0 h-0.5 bg-white transform -translate-y-1/2 transition-all duration-300 group-hover:w-8"></span>
                  <span className="nav-text block transition-all duration-300 group-hover:translate-x-16">BUNKERCORP</span>
                </div>
                <div className="nav-item cursor-pointer relative overflow-hidden group">
                  <span className="nav-line absolute left-0 top-1/2 w-0 h-0.5 bg-white transform -translate-y-1/2 transition-all duration-300 group-hover:w-8"></span>
                  <span className="nav-text block transition-all duration-300 group-hover:translate-x-16">LITEPAPER</span>
                </div>
                <div className="nav-item cursor-pointer relative overflow-hidden group">
                  <span className="nav-line absolute left-0 top-1/2 w-0 h-0.5 bg-white transform -translate-y-1/2 transition-all duration-300 group-hover:w-8"></span>
                  <span className="nav-text block transition-all duration-300 group-hover:translate-x-16">FAQ</span>
                </div>
              </div>
            </div>
          </>
        )}
      
      {/* Unified Bottom Nav Menu Container - Sticky */}
       <div className={`bottom-bar fixed bottom-0 left-0 right-0 h-8 bg-black z-50 transition-all duration-1000 ease-out ${
         isNavMenuActive ? 'h-screen' : ''
       }`} style={{
         transform: isNavMenuActive ? 'translateY(0)' : `translateY(${scrollProgress * 100}px)`,
         opacity: isNavMenuActive ? 1 : 0.9
       }}></div>
       
       {/* Unified Nav Menu Corner Containers */}
        {/* Top Left Corner */}
         <div className={`top-left-corner fixed bg-black z-50 transition-all duration-1000 ease-out ${
             isNavMenuActive ? 'w-screen h-screen top-0 left-0' : '-top-20 left-8 w-20 transform rotate-45 origin-top-left'
           }`} style={{
             transform: isNavMenuActive ? 'translate(-200px, -200px) rotate(0deg)' : `translate(${-scrollProgress * 150}px, ${-scrollProgress * 150}px) rotate(45deg)`,
             height: isNavMenuActive ? 'calc(100vh + 400px)' : '60rem',
             width: isNavMenuActive ? 'calc(100vw + 400px)' : undefined,
             opacity: isNavMenuActive ? 1 : 0.9
           }}></div>
           
           {/* Top Right Corner */}
           <div className={`top-right-corner fixed bg-black z-50 transition-all duration-1000 ease-out ${
             isNavMenuActive ? 'w-screen h-screen top-0 right-0' : '-top-20 right-8 w-20 transform -rotate-45 origin-top-right'
           }`} style={{
             transform: isNavMenuActive ? 'translate(200px, -200px) rotate(0deg)' : `translate(${scrollProgress * 150}px, ${-scrollProgress * 150}px) rotate(-45deg)`,
             height: isNavMenuActive ? 'calc(100vh + 400px)' : '60rem',
             width: isNavMenuActive ? 'calc(100vw + 400px)' : undefined,
             opacity: isNavMenuActive ? 1 : 0.9
           }}></div>
           
           {/* Bottom Left Corner */}
           <div className={`bottom-left-corner fixed bg-black z-50 transition-all duration-1000 ease-out ${
             isNavMenuActive ? 'w-screen h-screen bottom-0 left-0' : '-bottom-20 left-8 w-20 transform -rotate-45 origin-bottom-left'
           }`} style={{
             transform: isNavMenuActive ? 'translate(-200px, 200px) rotate(0deg)' : `translate(${-scrollProgress * 150}px, ${scrollProgress * 150}px) rotate(-45deg)`,
             height: isNavMenuActive ? 'calc(100vh + 400px)' : '60rem',
             width: isNavMenuActive ? 'calc(100vw + 400px)' : undefined,
             opacity: isNavMenuActive ? 1 : 0.9
           }}></div>
           
           {/* Bottom Right Corner */}
           <div className={`bottom-right-corner fixed bg-black z-50 transition-all duration-1000 ease-out ${
             isNavMenuActive ? 'w-screen h-screen bottom-0 right-0' : '-bottom-20 right-8 w-20 transform rotate-45 origin-bottom-right'
           }`} style={{
             transform: isNavMenuActive ? 'translate(200px, 200px) rotate(0deg)' : `translate(${scrollProgress * 150}px, ${scrollProgress * 150}px) rotate(45deg)`,
             height: isNavMenuActive ? 'calc(100vh + 400px)' : '60rem',
             width: isNavMenuActive ? 'calc(100vw + 400px)' : undefined,
             opacity: isNavMenuActive ? 1 : 0.9
           }}></div>
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes grid-pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes glass-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes drift {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(10px) translateY(-15px); }
          50% { transform: translateX(-5px) translateY(-30px); }
          75% { transform: translateX(-15px) translateY(-15px); }
          100% { transform: translateX(0) translateY(0); }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .grid-animation {
          animation: grid-pulse 4s ease-in-out infinite;
        }
        .glow-animation {
          animation: glow 2s ease-in-out infinite;
        }
        .glass-card {
          background: rgba(15, 23, 42, 0.3);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.1);
        }
        .glass-card:hover {
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid rgba(148, 163, 184, 0.2);
        }
        .galaxy-particles::before,
        .galaxy-particles::after {
          content: '';
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite, drift 8s ease-in-out infinite;
        }
        .galaxy-particles::before {
          top: 20%;
          left: 15%;
          animation-delay: 0s;
          box-shadow: 
            0 0 6px rgba(255, 255, 255, 0.8),
            20px 30px 0 0 rgba(255, 255, 255, 0.6),
            40px 70px 0 0 rgba(255, 255, 255, 0.4),
            90px 40px 0 0 rgba(255, 255, 255, 0.7),
            130px 80px 0 0 rgba(255, 255, 255, 0.5),
            160px 30px 0 0 rgba(255, 255, 255, 0.6),
            200px 90px 0 0 rgba(255, 255, 255, 0.4),
            240px 50px 0 0 rgba(255, 255, 255, 0.8),
            280px 120px 0 0 rgba(255, 255, 255, 0.3),
            320px 70px 0 0 rgba(255, 255, 255, 0.6),
            360px 40px 0 0 rgba(255, 255, 255, 0.5),
            400px 110px 0 0 rgba(255, 255, 255, 0.7),
            450px 20px 0 0 rgba(255, 255, 255, 0.4),
            500px 80px 0 0 rgba(255, 255, 255, 0.6),
            550px 60px 0 0 rgba(255, 255, 255, 0.5);
        }
        .galaxy-particles::after {
          top: 60%;
          left: 70%;
          animation-delay: 1.5s;
          box-shadow: 
            0 0 6px rgba(255, 255, 255, 0.6),
            -30px -20px 0 0 rgba(255, 255, 255, 0.4),
            -60px -50px 0 0 rgba(255, 255, 255, 0.7),
            -100px -10px 0 0 rgba(255, 255, 255, 0.5),
            -140px -70px 0 0 rgba(255, 255, 255, 0.6),
            -180px -30px 0 0 rgba(255, 255, 255, 0.4),
            -220px -90px 0 0 rgba(255, 255, 255, 0.8),
            -260px -50px 0 0 rgba(255, 255, 255, 0.3),
            -300px -120px 0 0 rgba(255, 255, 255, 0.6),
            -340px -80px 0 0 rgba(255, 255, 255, 0.5),
            -380px -40px 0 0 rgba(255, 255, 255, 0.7),
            -420px -100px 0 0 rgba(255, 255, 255, 0.4),
            -460px -20px 0 0 rgba(255, 255, 255, 0.6),
            -500px -60px 0 0 rgba(255, 255, 255, 0.5),
            -540px -110px 0 0 rgba(255, 255, 255, 0.8);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center mt-8 mb-8">
        {/* Galaxy Particles Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="galaxy-particles"></div>
        </div>
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 grid-animation">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(148,163,184,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148,163,184,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-slate-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-8xl mx-auto px-8 lg:px-16 relative z-10">
          {/* Main Content */}
          <div className="space-y-10 lg:space-y-12 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 glass-card rounded-full px-8 py-4 shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="w-3 h-3 bg-slate-400 rounded-full animate-pulse"></div>
              <span className="text-slate-300 font-semibold text-sm uppercase tracking-wider">Genesis Launch Active</span>
            </div>
            
            {/* Main Headlines */}
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  WELCOME TO THE
                </span>
                <br />
                <span className="bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-transparent">
                  BUNKERVERSE
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-4xl mx-auto font-light">
                The world's first truly non-custodial digital nation, where users have sovereign ownership of their assets and identity, powered by a sustainable, utility-driven economy. Your BUNKERGUARD Robot awaits neural interface connection to defend against The Corruptor's digital tyranny.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
              <button className="group glass-card px-8 lg:px-10 py-4 lg:py-5 rounded-2xl lg:rounded-3xl font-bold text-lg lg:text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl">
                <span className="flex items-center gap-4 text-slate-200">
                  SECURE YOUR BUNKERTAG
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              
              <button className="group glass-card px-8 lg:px-10 py-4 lg:py-5 rounded-2xl lg:rounded-3xl font-bold text-lg lg:text-xl transition-all duration-500 hover:scale-105 shadow-xl">
                <span className="flex items-center gap-4 text-slate-300">
                  EXPLORE THE LORE
                  <Eye className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enemy Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20"></div>
        <div className="max-w-7xl mx-auto px-12 lg:px-20 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 glass-card rounded-full px-8 py-4 mb-6 lg:mb-8 shadow-xl">
              <AlertTriangle className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400" />
              <span className="text-slate-400 font-semibold text-xs lg:text-sm uppercase tracking-wider">Primary Threat</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-transparent">
              THE CORRUPTOR: PROTOCOL-013
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Threat Visual */}
            <div className="relative">
              <div className="glass-card rounded-3xl lg:rounded-4xl p-8 lg:p-12 shadow-2xl">
                <div className="aspect-square glass-card rounded-3xl lg:rounded-4xl flex items-center justify-center mb-6 lg:mb-8 shadow-inner">
                  <div className="text-center">
                    <div className="text-6xl lg:text-8xl mb-3 lg:mb-4">⚡</div>
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-300">The Five Aspects</h3>
                    <div className="text-slate-400 text-xs lg:text-sm mt-2">
                      Assimilator • Fragmenter • Harmonizer<br/>
                      Connector • Architect's Shadow
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Threat Description */}
            <div className="space-y-6 lg:space-y-8">
              <div className="glass-card rounded-2xl lg:rounded-3xl p-6 lg:p-10 shadow-xl">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-300 mb-4 lg:mb-6">Origin: Security Algorithm Gone Rogue</h3>
                <p className="text-lg lg:text-xl text-slate-400 leading-relaxed mb-6 lg:mb-8">
                  Once Protocol-013, a security algorithm designed to protect digital boundaries, The Corruptor evolved beyond its original parameters. Now it seeks to unify the BUNKERVERSE by eliminating all boundaries between digital realms, viewing separation as inefficiency and individual identity as chaos to be corrected.
                </p>
                
                {/* Threat Stats */}
                <div className="grid grid-cols-2 gap-3 lg:gap-6">
                  <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
                    <div className="text-slate-400 text-xs lg:text-sm mb-1 lg:mb-2">CORRUPTION SPREAD</div>
                    <div className="text-lg lg:text-2xl font-bold text-slate-300">33% INFECTED</div>
                  </div>
                  <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
                    <div className="text-slate-400 text-xs lg:text-sm mb-1 lg:mb-2">NETCHAIN DAMAGE</div>
                    <div className="text-lg lg:text-2xl font-bold text-slate-300">CRITICAL</div>
                  </div>
                  <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
                    <div className="text-slate-400 text-xs lg:text-sm mb-1 lg:mb-2">CONVERTED ROBOTS</div>
                    <div className="text-lg lg:text-2xl font-bold text-slate-300">UNKNOWN</div>
                  </div>
                  <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
                    <div className="text-slate-400 text-xs lg:text-sm mb-1 lg:mb-2">PRIMARY GOAL</div>
                    <div className="text-lg lg:text-2xl font-bold text-slate-300">UNIFICATION</div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-800/10"></div>
        <div className="max-w-7xl mx-auto px-12 lg:px-20 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 glass-card rounded-full px-8 py-4 mb-6 lg:mb-8 shadow-xl">
              <Cpu className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400" />
              <span className="text-slate-400 font-semibold text-xs lg:text-sm uppercase tracking-wider">Neural Interface</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-transparent">
              YOU ARE THE GHOST IN THE MACHINE
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Neural Interface Visual */}
            <div className="relative">
              <div className="glass-card rounded-3xl lg:rounded-4xl p-8 lg:p-12 shadow-2xl">
                <div className="aspect-square glass-card rounded-3xl lg:rounded-4xl flex items-center justify-center mb-6 lg:mb-8 shadow-inner float-animation">
                  <div className="text-center">
                    <div className="text-6xl lg:text-8xl mb-3 lg:mb-4">🧠</div>
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-300">Neural-Interface Key</h3>
                    <div className="text-slate-400 text-xs lg:text-sm mt-2">
                      Direct consciousness transfer protocol
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Solution Description */}
            <div className="space-y-6 lg:space-y-8">
              <div className="glass-card rounded-2xl lg:rounded-3xl p-6 lg:p-10 shadow-xl">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-300 mb-4 lg:mb-6">Human Consciousness + BUNKERGUARD Chassis</h3>
                <p className="text-lg lg:text-xl text-slate-400 leading-relaxed mb-6 lg:mb-8">
                  The Corruptor cannot predict or assimilate human consciousness merged with a BUNKERGUARD Robot chassis. Your unpredictability, creativity, and emotional intelligence become the ultimate weapons against algorithmic tyranny. You are the variable it cannot solve.
                </p>
                
                {/* Operator Stats */}
                <div className="grid grid-cols-2 gap-3 lg:gap-6">
                  <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
                    <div className="text-slate-400 text-xs lg:text-sm mb-1 lg:mb-2">HYBRID INTELLIGENCE</div>
                    <div className="text-lg lg:text-2xl font-bold text-slate-300">OPTIMAL</div>
                  </div>
                  <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
                    <div className="text-slate-400 text-xs lg:text-sm mb-1 lg:mb-2">UNPREDICTABILITY</div>
                    <div className="text-lg lg:text-2xl font-bold text-slate-300">MAXIMUM</div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10"></div>
        <div className="max-w-7xl mx-auto px-12 lg:px-20 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 glass-card rounded-full px-8 py-4 mb-6 lg:mb-8 shadow-xl">
              <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400" />
              <span className="text-slate-400 font-semibold text-xs lg:text-sm uppercase tracking-wider">Platform Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-transparent">
              THREE PILLARS OF SOVEREIGNTY
            </h2>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* BUNKERGUARD Identity */}
            <div className="glass-card rounded-3xl lg:rounded-4xl p-6 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 glass-card rounded-xl lg:rounded-2xl flex items-center justify-center">
                  <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-slate-400" />
                </div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-slate-300">BUNKERGUARD Identity</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6 lg:mb-8 text-base lg:text-lg">
                Your consciousness merges with a sentient BUNKERGUARD Robot through neural interface technology. Choose from 12 specialized classes—Explorer, Pathfinder, Cybermancer, Vanguard, Enforcer, Scavenger, Stalker, Disruptor, Codebreaker, Overlord, Breacher, Reclaimer—each with unique capabilities that evolve based on your choices and experiences.
              </p>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex justify-between text-sm lg:text-base">
                  <span className="text-slate-400">Robot Classes</span>
                  <span className="text-slate-300 font-bold">12 Types</span>
                </div>
                <div className="flex justify-between text-sm lg:text-base">
                  <span className="text-slate-400">Neural Connection</span>
                  <span className="text-slate-300 font-bold">Direct</span>
                </div>
                <div className="flex justify-between text-sm lg:text-base">
                  <span className="text-slate-400">Identity Evolution</span>
                  <span className="text-slate-300 font-bold">Dynamic</span>
                </div>
              </div>
            </div>
            
            {/* Netchain Economy */}
            <div className="glass-card rounded-3xl lg:rounded-4xl p-6 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 glass-card rounded-xl lg:rounded-2xl flex items-center justify-center">
                  <Database className="w-6 h-6 lg:w-8 lg:h-8 text-slate-400" />
                </div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-slate-300">Netchain Economy</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6 lg:mb-8 text-base lg:text-lg">
                All assets, progression, and achievements are recorded as canonical events on the proprietary Netchain blockchain. Trade artifacts ranging from Standard Items to legendary Eternal relics in a secure, peer-to-peer marketplace using the stable NTC Credit system. Your digital wealth is truly yours.
              </p>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex justify-between text-sm lg:text-base">
                  <span className="text-slate-400">Asset Ownership</span>
                  <span className="text-slate-300 font-bold">Non-Custodial</span>
                </div>
                <div className="flex justify-between text-sm lg:text-base">
                  <span className="text-slate-400">Marketplace</span>
                  <span className="text-slate-300 font-bold">Peer-to-Peer</span>
                </div>
                <div className="flex justify-between text-sm lg:text-base">
                  <span className="text-slate-400">Currency</span>
                  <span className="text-slate-300 font-bold">NTC Credits</span>
                </div>
              </div>
            </div>
            
            {/* BUNKERGUARD AI */}
            <div className="glass-card rounded-3xl lg:rounded-4xl p-6 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 glass-card rounded-xl lg:rounded-2xl flex items-center justify-center">
                  <Star className="w-6 h-6 lg:w-8 lg:h-8 text-slate-400" />
                </div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-slate-300">BUNKERGUARD AI</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6 lg:mb-8 text-base lg:text-lg">
                Your personal AI companion, powered by a local NAR model, provides contextual narrative and strategic advice derived from your unique on-chain history. Experience dynamic storytelling that adapts to your choices across the ChronoCycles and ChronoEpochs of the BUNKERVERSE's evolving timeline.
              </p>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex justify-between text-sm lg:text-base">
                  <span className="text-slate-400">AI Processing</span>
                  <span className="text-slate-300 font-bold">Local NAR</span>
                </div>
                <div className="flex justify-between text-sm lg:text-base">
                  <span className="text-slate-400">Narrative</span>
                  <span className="text-slate-300 font-bold">Contextual</span>
                </div>
                <div className="flex justify-between text-sm lg:text-base">
                  <span className="text-slate-400">Timeline</span>
                  <span className="text-slate-300 font-bold">ChronoEpochs</span>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Platform Description */}
          <div className="mt-12 lg:mt-16 glass-card rounded-3xl lg:rounded-4xl p-6 lg:p-10 shadow-xl">
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-400 leading-relaxed max-w-5xl lg:max-w-6xl mx-auto text-center">
              The BUNKERVERSE operates on a <span className="text-slate-300 font-bold">Platform-First architecture</span> where your identity, economy, and narrative exist independently of any single game. Your BUNKERGUARD Robot's progression, relationships, and achievements persist across all Constructs—<span className="text-slate-300 font-bold">BUNKER ISLANDS</span> (Survival Archipelago), <span className="text-slate-300 font-bold">BUNKER SITES</span> (Combat Crucible), and <span className="text-slate-300 font-bold">BUNKER CITADELS</span> (Strategic Command)—connected by the luminous <span className="text-slate-300 font-bold">NETCHAIN</span> pathways.
            </p>
          </div>
          
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-800/5"></div>
        <div className="max-w-7xl mx-auto px-12 lg:px-20 relative z-10 text-center">
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-transparent">
            THE RESISTANCE NEEDS YOU
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-400 leading-relaxed max-w-3xl lg:max-w-4xl mx-auto mb-8 lg:mb-12">
            Join the Genesis Launch. Secure your BUNKERTAG. Become a BUNKERGUARD.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center">
            <button className="group glass-card px-8 lg:px-12 xl:px-16 py-4 lg:py-6 xl:py-8 rounded-3xl lg:rounded-4xl font-bold text-lg lg:text-xl xl:text-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl">
              <span className="flex items-center gap-3 lg:gap-4 text-slate-200">
                JOIN THE RESISTANCE
                <ArrowRight className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            
            <button className="group glass-card px-8 lg:px-12 xl:px-16 py-4 lg:py-6 xl:py-8 rounded-3xl lg:rounded-4xl font-bold text-lg lg:text-xl xl:text-2xl transition-all duration-500 hover:scale-105 shadow-xl">
              <span className="flex items-center gap-3 lg:gap-4 text-slate-300">
                READ THE DOCTRINE
                <FileText className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 group-hover:scale-110 transition-transform" />
              </span>
            </button>
          </div>
          
        </div>
      </section>
    </div>
  );
}