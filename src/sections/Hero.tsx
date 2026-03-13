import { useEffect, useRef } from 'react';
import { Sun, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChallenge = () => {
    const element = document.getElementById('challenge');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Background Image with Parallax */}
      <div 
        ref={imageRef}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/hero-sunrise.jpg" 
          alt="Sunrise" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-transparent to-amber-50/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 float-animation">
          <Sun className="w-12 h-12 text-amber-400 opacity-40" />
        </div>
        <div className="absolute top-40 right-20 float-animation" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-8 h-8 text-yellow-400 opacity-50" />
        </div>
        <div className="absolute bottom-40 left-20 float-animation" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-6 h-6 text-amber-300 opacity-40" />
        </div>
        <div className="absolute top-1/3 right-1/4 float-animation" style={{ animationDelay: '1.5s' }}>
          <Sun className="w-16 h-16 text-yellow-300 opacity-30" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-amber-200 mb-8 fade-in-up">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-800">Трансформационный челлендж</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 fade-in-up stagger-1">
            <span className="text-gradient">Час побед</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-amber-900/80 font-light mb-4 fade-in-up stagger-2">
            66 дней к новой жизни
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-amber-800/70 max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up stagger-3">
            Пробуди свой потенциал с первыми лучами солнца. 
            Основано на философии «Клуб 5 часов утра» Робина Шармы 
            и «Магии утра» Хэла Элрода.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up stagger-4">
            <a 
              href="https://t.me/zaklinatel5am_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 text-lg"
            >
              Начать трансформацию
              <ArrowRight className="w-5 h-5" />
            </a>
            <button 
              onClick={scrollToChallenge}
              className="btn-secondary flex items-center gap-2 text-lg"
            >
              Узнать больше
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto fade-in-up stagger-5">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-amber-600">66</div>
              <div className="text-sm text-amber-700/60 mt-1">дней челленджа</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-amber-600">5</div>
              <div className="text-sm text-amber-700/60 mt-1">утра — старт</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-amber-600">∞</div>
              <div className="text-sm text-amber-700/60 mt-1">возможностей</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="#FFFBEB"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
