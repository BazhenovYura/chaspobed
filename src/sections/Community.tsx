import { useEffect, useRef, useState } from 'react';
import { Users, Video, MessageCircle, Heart, Star } from 'lucide-react';

const Community = () => {
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

  const testimonials = [
    {
      name: 'Анна',
      days: '45 дней в челлендже',
      text: 'Ранние подъемы изменили мою жизнь. Я стала более энергичной, успеваю вдвое больше. Сообщество дает невероятную поддержку!',
      rating: 5,
    },
    {
      name: 'Михаил',
      days: '66 дней — завершил!',
      text: 'Прошел полный цикл. Теперь встаю в 5 утра без будильника. Это не просто привычка, это образ жизни.',
      rating: 5,
    },
    {
      name: 'Елена',
      days: '30 дней в челлендже',
      text: 'Бот — это находка! Не нужно ничего придумывать, просто следуешь инструкциям. Практики действительно работают.',
      rating: 5,
    },
  ];

  const features = [
    {
      icon: Video,
      title: 'Еженедельные созвоны',
      description: 'Подводим итоги недели, делимся успехами и получаем обратную связь',
    },
    {
      icon: MessageCircle,
      title: 'Чат поддержки',
      description: 'Общайся с единомышленниками, задавай вопросы кураторам',
    },
    {
      icon: Users,
      title: 'Групповая энергия',
      description: 'Когда идешь не один, достичь цели намного легче',
    },
  ];

  return (
    <section 
      id="community"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-amber-50 to-[#FFFBEB] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 mb-6">
            <Users className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">Сообщество</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6">
            Ты не <span className="text-gradient">один</span>
          </h2>

          <p className="text-lg text-amber-800/70 leading-relaxed">
            Присоединяйся к сообществу единомышленников, которые каждый день просыпаются 
            в 5 утра, чтобы стать лучше. Вместе мы сильнее!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/community.jpg" 
                alt="Community"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 card-watercolor p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-900">500+</div>
                  <div className="text-sm text-amber-700">участников</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-watercolor p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-1">{feature.title}</h3>
                  <p className="text-amber-700/70 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}

            <a 
              href="https://t.me/chaspobed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full flex items-center justify-center gap-2"
            >
              Присоединиться к сообществу
              <Users className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Testimonials */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-amber-900 text-center mb-8">
            Истории участников
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="card-watercolor p-6 hover:shadow-xl transition-shadow"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-amber-800/80 leading-relaxed mb-4 text-sm">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-amber-200/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white font-semibold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-amber-900">{testimonial.name}</div>
                    <div className="text-xs text-amber-600">{testimonial.days}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
