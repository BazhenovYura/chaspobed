import { useEffect, useRef, useState } from 'react';
import { Sun, ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-[#FFFBEB] to-amber-100 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-300/30 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 float-animation">
          <Sun className="w-16 h-16 text-amber-300 opacity-40" />
        </div>
        <div className="absolute bottom-20 right-20 float-animation" style={{ animationDelay: '1.5s' }}>
          <Sparkles className="w-12 h-12 text-yellow-400 opacity-40" />
        </div>
        <div className="absolute top-1/2 right-10 float-animation" style={{ animationDelay: '2s' }}>
          <Sun className="w-8 h-8 text-amber-400 opacity-30" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-amber-200 mb-8">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-800">Начни сегодня</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Твоя новая жизнь <br />
            <span className="text-gradient">начинается завтра в 5:00</span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-amber-800/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Не откладывай на понедельник. Каждый день промедления — это день, 
            когда ты мог бы стать лучше. Сделай первый шаг прямо сейчас.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://t.me/zaklinatel5am_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 text-lg px-10 py-5"
            >
              Начать трансформацию
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://t.me/chaspobed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 text-lg px-10 py-5"
            >
              Узнать больше
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-amber-700/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">500+ участников</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">7 дней бесплатно</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">Без обязательств</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
