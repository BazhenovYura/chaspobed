import { useEffect, useRef, useState } from 'react';
import { MessageSquare, CheckCircle, Trophy, Bell, BarChart3, Users } from 'lucide-react';

const HowItWorks = () => {
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

  const steps = [
    {
      icon: MessageSquare,
      title: 'Присоединяйся',
      description: 'Нажми «Старт» в боте @zaklinatel5am_bot и начни свой путь',
      number: '01',
    },
    {
      icon: Bell,
      title: 'Получай напоминания',
      description: 'Бот ежедневно присылает практики и мотивацию в нужное время',
      number: '02',
    },
    {
      icon: CheckCircle,
      title: 'Выполняй задания',
      description: 'Отправляй фото, видео или текст подтверждения выполнения',
      number: '03',
    },
    {
      icon: Trophy,
      title: 'Зарабатывай победы',
      description: 'Каждое выполненное задание = победный балл в твою копилку',
      number: '04',
    },
    {
      icon: BarChart3,
      title: 'Следи за прогрессом',
      description: 'Отслеживай свою статистику и рост уверенности в себе',
      number: '05',
    },
    {
      icon: Users,
      title: 'Общайся с сообществом',
      description: 'Делись успехами, получай поддержку и вдохновение',
      number: '06',
    },
  ];

  return (
    <section 
      id="how-it-works"
      ref={sectionRef}
      className="section-padding bg-amber-50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-amber-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 mb-6">
            <MessageSquare className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">Как это работает</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6">
            Твой персональный <span className="text-gradient">помощник</span>
          </h2>

          <p className="text-lg text-amber-800/70 leading-relaxed">
            Телеграм-бот станет твоим проводником в мир ранних подъемов и продуктивных утренних практик. 
            Он не даст сбиться с пути и будет поддерживать каждый день.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`group relative card-watercolor p-6 hover:shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Number */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <step.icon className="w-7 h-7 text-amber-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-amber-900 mb-2">{step.title}</h3>
              <p className="text-amber-700/70 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Bot Preview */}
        <div className={`mt-16 card-watercolor overflow-hidden transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative h-64 lg:h-auto">
              <img 
                src={`${import.meta.env.BASE_URL}bot-interface.jpg`}
                alt="Bot Interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-4">
                Все под контролем
              </h3>
              <p className="text-amber-700/70 leading-relaxed mb-6">
                Бот автоматически принимает твои выполненные задания, считает победные баллы 
                и показывает прогресс. Ты всегда знаешь, на каком этапе пути находишься.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-amber-800">Автоматическая проверка заданий</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-amber-800">Подсчет победных баллов</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-amber-800">Ежедневная мотивация и напоминания</span>
                </div>
              </div>

              <a 
                href="https://t.me/zaklinatel5am_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 inline-flex items-center justify-center gap-2 w-fit"
              >
                Запустить бота
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
