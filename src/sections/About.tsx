import { useEffect, useRef, useState } from 'react';
import { Users, Calendar, Shield, Server } from 'lucide-react';

const stats = [
  { icon: Users, value: 50, suffix: '+', label: 'Активных членов' },
  { icon: Calendar, value: 3, suffix: '', label: 'Года на проекте' },
  { icon: Shield, value: 100, suffix: '%', label: 'Лояльность' },
  { icon: Server, value: 1, suffix: '', label: 'Server Denver' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (contentRef.current) {
              contentRef.current.style.opacity = '1';
              contentRef.current.style.transform = 'translateX(0)';
            }
            if (imageRef.current) {
              imageRef.current.style.opacity = '1';
              imageRef.current.style.transform = 'translateX(0)';
            }
          }
        });
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
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background accent - B&W */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div
            ref={contentRef}
            className="order-2 lg:order-1"
            style={{ opacity: 0, transform: 'translateX(-50px)', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <h2 className="font-display text-5xl lg:text-6xl text-white mb-6 tracking-wider">
              О НАШЕЙ <span className="text-white/60">СЕМЬЕ</span>
            </h2>
            
            <div className="space-y-4 text-white/60 text-lg leading-relaxed mb-10">
              <p>
                <span className="text-white font-semibold">HRSD</span> — это не просто семья на Majestic RP. 
                Это братство, объединённое общими ценностями и уличным кодексом.
              </p>
              <p>
                Мы контролируем территории, защищаем своих и уважаем силу. 
                Каждый член нашей семьи — это личность, готовая стоять до конца 
                за своих братьев и общие интересы.
              </p>
              <p>
                Наша история началась на улицах Los Santos сервера Denver, и с каждым днём 
                мы становимся только сильнее. Уважение зарабатывается делами, 
                а не словами.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-[#111] border border-[#222] card-hover"
                >
                  <stat.icon className="w-6 h-6 text-white mx-auto mb-2" />
                  <div className="font-display text-3xl lg:text-4xl text-white mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className="order-1 lg:order-2 relative"
            style={{ opacity: 0, transform: 'translateX(50px)', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/10 blur-[60px] rounded-full" />
              
              <img
                src="/images/mascot4.png"
                alt="HRSD Street Life"
                className="relative z-10 w-full drop-shadow-2xl"
              />
              
              {/* Decorative border */}
              <div className="absolute -inset-4 border border-white/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
