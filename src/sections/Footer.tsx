import { Sun, MessageCircle, Users, Send, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: 'Челлендж',
      items: [
        { label: 'О проекте', href: '#challenge' },
        { label: 'Практики', href: '#practices' },
        { label: 'Как это работает', href: '#how-it-works' },
        { label: 'Тарифы', href: '#pricing' },
      ],
    },
    {
      title: 'Сообщество',
      items: [
        { label: 'Telegram группа', href: 'https://t.me/chaspobed', external: true },
        { label: 'Бот', href: 'https://t.me/zaklinatel5am_bot', external: true },
        { label: 'Отзывы', href: '#community' },
      ],
    },
    {
      title: 'Помощь',
      items: [
        { label: 'FAQ', href: '#' },
        { label: 'Поддержка', href: 'https://t.me/chaspobed', external: true },
        { label: 'Политика конфиденциальности', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-amber-900 text-amber-100">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center">
                <Sun className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Час побед</h3>
                <p className="text-xs text-amber-300">66 дней к новой жизни</p>
              </div>
            </div>
            <p className="text-amber-300/80 leading-relaxed mb-6 max-w-sm">
              Трансформационный челлендж, основанный на философии 
              «Клуб 5 часов утра» Робина Шармы и «Магии утра» Хэла Элрода.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://t.me/chaspobed"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition-colors"
              >
                <Users className="w-5 h-5" />
              </a>
              <a 
                href="https://t.me/zaklinatel5am_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {links.map((group, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.items.map((item, i) => (
                  <li key={i}>
                    <a 
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="text-amber-300/80 hover:text-white transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-amber-400/60 text-sm">
              © {currentYear} Час побед. Все права защищены.
            </p>
            <p className="text-amber-400/60 text-sm flex items-center gap-1">
              Сделано с <Heart className="w-4 h-4 text-red-400 fill-red-400" /> для тех, кто стремится к лучшему
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
