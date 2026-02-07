import { MessageCircle, ExternalLink } from 'lucide-react';

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'О семье', href: '#about' },
  { label: 'Состав', href: '#ranks' },
  { label: 'Галерея', href: '#gallery' },
];

const socialLinks = [
  { icon: MessageCircle, label: 'Discord', href: 'https://discord.gg/8xvTXN9q4a' },
  { icon: ExternalLink, label: 'VK', href: 'https://vk.com/hrsd' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#111] border-t border-[#222]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <h3 className="font-display text-4xl text-white mb-4 tracking-wider">
              HRSD
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Heirsside Family — уличная семья на проекте Majestic RP Server Denver.
              Уважение, братство, власть.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-[#0a0a0a] border border-[#222] text-white/50 hover:text-white hover:border-white transition-all hover:scale-110"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-accent text-lg text-white uppercase tracking-wider mb-6">
              Навигация
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/50 hover:text-white transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-accent text-lg text-white uppercase tracking-wider mb-6">
              Контакты
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-white/50">
                <span className="text-white">Проект:</span> Majestic RP
              </p>
              <p className="text-white/50">
                <span className="text-white">Сервер:</span> Denver
              </p>
              <p className="text-white/50">
                <span className="text-white">Discord:</span> discord.gg/8xvTXN9q4a
              </p>
              <p className="text-white/50">
                <span className="text-white">Рекрутинг:</span> Открыт
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2025 HRSD Family. Majestic RP Denver.
          </p>
          <p className="text-white/30 text-xs">
            Designed for the streets
          </p>
        </div>
      </div>
    </footer>
  );
}
