import { useEffect, useRef, useState } from 'react';
import { Check, Sparkles, Crown, Star } from 'lucide-react';

const Pricing = () => {
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

  const plans = [
    {
      name: 'Старт',
      icon: Star,
      price: 'Бесплатно',
      period: '',
      description: 'Попробуй и почувствуй разницу',
      features: [
        'Доступ к базовым практикам',
        'Ежедневные напоминания',
        'Подсчет победных баллов',
        'Доступ к общему чату',
        '7 дней пробного периода',
      ],
      cta: 'Начать бесплатно',
      href: 'https://t.me/zaklinatel5am_bot',
      popular: false,
    },
    {
      name: 'Премиум',
      icon: Crown,
      price: '2 990 ₽',
      period: '/ 66 дней',
      description: 'Полная трансформация за 66 дней',
      features: [
        'Все практики и задания',
        'Персональный трекер прогресса',
        'Участие в еженедельных созвонах',
        'Обратная связь от кураторов',
        'Закрытое премиум-сообщество',
        'Бонусные материалы',
        'Сертификат об окончании',
      ],
      cta: 'Присоединиться',
      href: 'https://t.me/zaklinatel5am_bot',
      popular: true,
    },
  ];

  return (
    <section 
      id="pricing"
      ref={sectionRef}
      className="section-padding bg-[#FFFBEB] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-amber-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 mb-6">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">Тарифы</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6">
            Инвестиция в <span className="text-gradient">себя</span>
          </h2>

          <p className="text-lg text-amber-800/70 leading-relaxed">
            Выбери подходящий формат участия. Помни: лучшая инвестиция — это инвестиция в себя.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-medium shadow-lg">
                    Популярный выбор
                  </div>
                </div>
              )}

              <div className={`h-full rounded-2xl p-8 ${plan.popular ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-white' : 'card-watercolor'}`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center ${plan.popular ? 'bg-white/20' : 'bg-gradient-to-br from-amber-400 to-amber-500'}`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-white'}`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-amber-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gradient'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.popular ? 'text-amber-100' : 'text-amber-600'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-sm ${plan.popular ? 'text-amber-100' : 'text-amber-700/70'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular ? 'bg-white/20' : 'bg-amber-100'}`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-amber-600'}`} />
                      </div>
                      <span className={`text-sm ${plan.popular ? 'text-amber-50' : 'text-amber-800/80'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a 
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 rounded-full font-semibold text-center transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-white text-amber-600 hover:bg-amber-50 hover:shadow-lg' 
                      : 'btn-primary'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-100">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium">7 дней бесплатно — без обязательств</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
