import { useEffect, useRef, useState } from 'react';
import { Dumbbell, BookOpen, Brain, Sun } from 'lucide-react';

const Practices = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const practices = [
    {
      icon: Dumbbell,
      title: 'Движение',
      duration: '20 минут',
      description: 'Зарядка, йога, бег или любая физическая активность. Пробуждаем тело и запускаем энергию.',
      image: `${import.meta.env.BASE_URL}exercise.jpg`,
      color: 'from-orange-400 to-amber-500',
    },
    {
      icon: Brain,
      title: 'Медитация',
      duration: '20 минут',
      description: 'Утренняя медитация для настройки сознания, ясности мышления и внутреннего покоя.',
      image: `${import.meta.env.BASE_URL}meditation.jpg`,
      color: 'from-amber-400 to-yellow-500',
    },
    {
      icon: BookOpen,
      title: 'Чтение',
      duration: '20 минут',
      description: 'Книги по саморазвитию, биографии великих людей, обучающие материалы.',
      image: `${import.meta.env.BASE_URL}reading.jpg`,
      color: 'from-yellow-400 to-amber-500',
    },
    {
      icon: Sun,
      title: 'Планирование',
      duration: '20 минут',
      description: 'Постановка целей на день, визуализация успеха, практика благодарности.',
      image: `${import.meta.env.BASE_URL}planning.jpg`,
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section 
      id="practices"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-[#FFFBEB] to-amber-50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-300/30 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 mb-6">
            <Sun className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">Формула 20/20/20</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6">
            Четыре столпа <span className="text-gradient">утреннего ритуала</span>
          </h2>

          <p className="text-lg text-amber-800/70 leading-relaxed">
            Каждое утро в 5:00 ты посвящаешь время себе — 20 минут движения, 
            20 минут медитации, 20 минут чтения и планирования. 
            Это инвестиция в лучшую версию себя.
          </p>
        </div>

        {/* Practices Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {practices.map((practice, index) => (
            <div 
              key={index}
              className={`group card-watercolor overflow-hidden hover:shadow-2xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid sm:grid-cols-2 h-full">
                {/* Image */}
                <div className="relative h-48 sm:h-full overflow-hidden">
                  <img 
                    src={practice.image} 
                    alt={practice.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${practice.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-center">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${practice.color} flex items-center justify-center mb-4`}>
                    <practice.icon className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-amber-900">{practice.title}</h3>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-amber-100 text-amber-700">
                      {practice.duration}
                    </span>
                  </div>

                  <p className="text-amber-700/70 text-sm leading-relaxed">
                    {practice.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Practices */}
        <div className={`mt-16 card-watercolor p-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <img 
                src={`${import.meta.env.BASE_URL}gratitude.jpg`}
                alt="Благодарность"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">
                Практика благодарности
              </h3>
              <p className="text-amber-700/70 leading-relaxed mb-4">
                Каждое утро записывай три вещи, за которые ты благодарен. 
                Это меняет фокус сознания с негатива на позитив, 
                повышает уровень счастья и привлекает больше хорошего в жизнь.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
                  #благодарность
                </span>
                <span className="px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
                  #позитив
                </span>
                <span className="px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
                  #осознанность
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Practices;
