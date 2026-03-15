import { useEffect, useRef, useState } from 'react';
import { Check, Sparkles, Crown, Star, Zap } from 'lucide-react';

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

  // Расчёт экономии
  const pricePer6Days = 1990;
  const totalFor66Days = pricePer6Days * 11; // 1990 * 11 = 21 890 ₽
  const premiumPrice = 14990;
  const savings = totalFor66Days - premiumPrice; // 21 890 - 14 990 = 6 900 ₽

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
      ],
      cta: 'Начать бесплатно',
      href: 'https://t.me/zaklinatel5am_bot',
      popular: false,
      highlight: false,
    },
    {
      name: '6 дней',
      icon: Zap,
      price: '1 990 ₽',
      period: '/ 6 дней',
      description: 'Интенсивный старт трансформации',
      features: [
        'Все практики и задания',
        'Персональный трекер прогресса',
        'Ежедневная обратная связь',
        'Участие в закрытом чате',
        'Бонусные материалы',
        'Поддержка куратора 24/7',
        '6 дней — видимый результат',
      ],
      cta: 'Начать трансформацию',
      href: 'https://t.me/zaklinatel5am_bot',
      popular: false,
      highlight: true,
    },
    {
      name: 'Полный цикл',
      icon: Crown,
      price: '14 990 ₽',
      period: '/ 66 дней',
      description: 'Максимальная экономия и результат',
      features: [
        'Все практики и задания',
        'Персональный трекер прогресса',
        'Участие в еженедельных созвонах',
        'Обратная связь от кураторов',
        'Закрытое премиум-сообщество',
        'Бонусные материалы',
        'Сертификат об окончании',
        'Личный куратор на весь период',
        `Экономия ${savings.toLocaleString('ru-RU')} ₽`, // Динамическое обновление экономии
      ],
      cta: 'Выбрать полный цикл',
      href: 'https://t.me/zaklinatel5am_bot',
      popular: true,
      highlight: false,
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
            Выбери подходящий формат участия. 6 дней бесплатно — попробуй без риска.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-medium shadow-lg whitespace-nowrap">
                    🏆 Наибольшая экономия
                  </div>
                </div>
              )}

              {/* Highlight Badge (для 6 дней) */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium shadow-lg whitespace-nowrap">
                    ⚡️ Самый популярный старт
                  </div>
                </div>
              )}

              <div className={`h-full rounded-2xl p-6 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-white scale-105 shadow-2xl' 
                  : plan.highlight
                    ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl'
                    : 'card-watercolor'
              }`}>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                    plan.popular || plan.highlight 
                      ? 'bg-white/20' 
                      : 'bg-gradient-to-br from-amber-400 to-amber-500'
                  }`}>
                    <plan.icon className={`w-6 h-6 ${
                      plan.popular || plan.highlight ? 'text-white' : 'text-white'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-1 ${
                    plan.popular || plan.highlight ? 'text-white' : 'text-amber-900'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className={`text-3xl font-bold ${
                      plan.popular || plan.highlight ? 'text-white' : 'text-gradient'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`text-xs ${
                      plan.popular || plan.highlight ? 'text-amber-100' : 'text-amber-600'
                    }`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-xs ${
                    plan.popular || plan.highlight ? 'text-amber-100' : 'text-amber-700/70'
                  }`}>
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular || plan.highlight ? 'bg-white/20' : 'bg-amber-100'
                      }`}>
                        <Check className={`w-2.5 h-2.5 ${
                          plan.popular || plan.highlight ? 'text-white' : 'text-amber-600'
                        }`} />
                      </div>
                      <span className={`text-xs ${
                        plan.popular || plan.highlight ? 'text-amber-50' : 'text-amber-800/80'
                      }`}>
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
                  className={`block w-full py-3 rounded-full font-semibold text-sm text-center transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-white text-amber-600 hover:bg-amber-50 hover:shadow-lg' 
                      : plan.highlight
                        ? 'bg-white text-green-600 hover:bg-amber-50 hover:shadow-lg'
                        : 'btn-primary text-sm py-3'
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Экономия для полного цикла */}
                {plan.popular && (
                  <div className="mt-3 text-center">
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      Экономия {savings.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-100">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium">6 дней бесплатно — без обязательств</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
