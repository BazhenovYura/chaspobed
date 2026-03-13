import { useEffect, useRef, useState } from 'react';
import { Calendar, Target, Zap, TrendingUp } from 'lucide-react';

const Challenge = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

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

  useEffect(() => {
    if (isVisible && count < 66) {
      const timer = setTimeout(() => {
        setCount(prev => Math.min(prev + 1, 66));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isVisible, count]);

  const benefits = [
    {
      icon: Calendar,
      title: '66 дней',
      description: 'Научно доказанный срок для формирования устойчивых привычек',
    },
    {
      icon: Target,
      title: 'Четкая цель',
      description: 'Каждый день приближает тебя к лучшей версии себя',
    },
    {
      icon: Zap,
      title: 'Энергия',
      description: 'Утренние практики заряжают на весь день',
    },
    {
      icon: TrendingUp,
      title: 'Рост',
      description: 'Постоянное развитие во всех сферах жизни',
    },
  ];

  return (
    <section 
      id="challenge"
      ref={sectionRef}
      className="section-padding bg-[#FFFBEB] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 mb-6">
              <Target className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-800">О челлендже</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6 leading-tight">
              Почему именно <span className="text-gradient">66 дней</span>?
            </h2>

            <p className="text-lg text-amber-800/70 mb-6 leading-relaxed">
              Исследования Университетского колледжа Лондона показали: в среднем для формирования 
              устойчивой привычки требуется именно 66 дней. Это не просто число — это 
              научно обоснованный путь к трансформации.
            </p>

            <p className="text-lg text-amber-800/70 mb-8 leading-relaxed">
              За это время твой мозг перестроит нейронные связи, и утренние практики 
              станут такой же естественной частью жизни, как чистка зубов.
            </p>

            {/* Counter */}
            <div className="card-watercolor p-8 inline-block">
              <div className="text-center">
                <div className="text-7xl sm:text-8xl font-bold text-gradient mb-2">
                  {count}
                </div>
                <div className="text-amber-700 font-medium">дней к новой жизни</div>
              </div>
            </div>
          </div>

          {/* Right Content - Benefits Grid */}
          <div className={`grid sm:grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="card-watercolor p-6 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{benefit.title}</h3>
                <p className="text-amber-700/70 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className={`mt-20 text-center max-w-3xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <blockquote className="text-2xl sm:text-3xl font-light text-amber-800 italic leading-relaxed">
            «Утро — взлетная полоса твоей жизни. Как начнешь день, так и проживешь его»
          </blockquote>
          <cite className="block mt-4 text-amber-600 font-medium not-italic">
            — Робин Шарма
          </cite>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
