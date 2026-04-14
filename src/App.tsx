/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  Send,
  Leaf,
  Clock,
  Diamond,
  Package,
  Menu,
  X,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
import { useState, useEffect } from "react";

const HITS = [
  { id: 1, name: "Орех", oldPrice: 5000, price: 3300, badge: "ХИТ", image: "/parquet/Орех/3413b6083d6d7b8772d789e24f6101fd.jpg" },
  { id: 2, name: "Арктик", oldPrice: 4000, price: 3300, badge: "АКЦИЯ", image: "/parquet/Арктик/0fe7a95c461109c7fdd94c114ad019f3.jpg" },
  { id: 3, name: "Мокко", oldPrice: 4800, price: 3500, badge: "ХИТ", image: "/parquet/Мокко/a734fcce439916ed14743a52d1742fe1.jpg" },
  { id: 4, name: "Капучино", oldPrice: 4500, price: 3400, badge: "АКЦИЯ", image: "/parquet/Капучино/29e0577617bdcca9de5c2ac090205dfb.jpg" },
  { id: 5, name: "Табако", oldPrice: 4900, price: 3600, badge: "ХИТ", image: "/parquet/Табако/5c02f4f048b8c1d4d0eb2368ff8908b6.jpg" },
  { id: 6, name: "Аделина", oldPrice: 4700, price: 3500, badge: "НОВИНКА", image: "/parquet/Аделина/26e29b539412d4476c4c5f363237fb77.jpg" },
];

const COLORS = [
  { name: "Грация", type: "Одноцветные", price: "от 3500 р.", image: "/parquet/Грация/54609b797dcdff05a07cab8daeaa89cb.jpg" },
  { name: "Маура", type: "Двухцветные", price: "от 3800 р.", image: "/parquet/Маура/6517de0866a65687998ed5a811ae15ef.jpg" },
  { name: "Ноэми", type: "Одноцветные", price: "от 3500 р.", image: "/parquet/Ноэми/70779d766cb5abb0eeee421ab7cebcf8.jpg" },
  { name: "Капучино", type: "Одноцветные", price: "от 3400 р.", image: "/parquet/Капучино/29e0577617bdcca9de5c2ac090205dfb.jpg" },
  { name: "Мокко", type: "Двухцветные", price: "от 3500 р.", image: "/parquet/Мокко/a734fcce439916ed14743a52d1742fe1.jpg" },
  { name: "Орех", type: "Двухцветные", price: "от 3300 р.", image: "/parquet/Орех/3413b6083d6d7b8772d789e24f6101fd.jpg" },
  { name: "Табако", type: "Двухцветные", price: "от 3600 р.", image: "/parquet/Табако/5c02f4f048b8c1d4d0eb2368ff8908b6.jpg" },
  { name: "Арктик", type: "Одноцветные", price: "от 3300 р.", image: "/parquet/Арктик/0fe7a95c461109c7fdd94c114ad019f3.jpg" },
  { name: "Аделина", type: "Двухцветные", price: "от 3500 р.", image: "/parquet/Аделина/26e29b539412d4476c4c5f363237fb77.jpg" },
  { name: "Венге", type: "Одноцветные", price: "от 3900 р.", image: "/parquet/Венге/0c4ab587aff36bb355864b820660c61c.jpg" },
  { name: "Летиция", type: "Двухцветные", price: "от 3700 р.", image: "/parquet/Летиция/3bbe2b69a1ab22ccbde9d8ce28f6c610.jpg" },
  { name: "Мирелла", type: "Двухцветные", price: "от 3600 р.", image: "/parquet/Мирелла/6462694e33dffccbc0b34d05677e8816.jpg" },
  { name: "Натали", type: "Одноцветные", price: "от 3500 р.", image: "/parquet/Натали/16770e8233db97a14a2936e43a63d9aa.jpg" },
  { name: "Доменика", type: "Одноцветные", price: "от 3500 р.", image: "/parquet/Доменика/2a8f6a63165b9f7546d6147a465db39c.jpg" },
  { name: "Махагон", type: "Одноцветные", price: "от 3600 р.", image: "/parquet/Махагон/58542cf06ab8153c6199759005129cf3.jpg" },
  { name: "Мербау", type: "Одноцветные", price: "от 3800 р.", image: "/parquet/Мербау/8183326c297db2d64e6225903842d3f9.jpg" },
  { name: "Пальмира", type: "Двухцветные", price: "от 3700 р.", image: "/parquet/Пальмира/6dea62fd81ddfe3ab938d08e5ca607ce.jpg" },
  { name: "Перла", type: "Одноцветные", price: "от 3400 р.", image: "/parquet/Перла/11c8e15b6323faa468d1b2de8e05701b.jpg" },
  { name: "Розэбель", type: "Двухцветные", price: "от 3700 р.", image: "/parquet/Розэбель/6e59f66d2c2b16ed468fad448515dc87.jpg" },
  { name: "Тониа", type: "Одноцветные", price: "от 3500 р.", image: "/parquet/Тониа/978feb5a5e3239996556e8e3841d6554.jpg" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Все");
  const [activeMobileColor, setActiveMobileColor] = useState<string | null>(null);
  const [popupColor, setPopupColor] = useState<string | null>(null);

  const openPopup = (colorName?: string) => {
    setPopupColor(colorName || null);
    setIsPopupOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredColors = COLORS.filter(c => activeFilter === "Все" || c.type === activeFilter);

  return (
    <div className="min-h-screen selection:bg-brand-emerald selection:text-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-brand-bg/95 backdrop-blur-md py-3 shadow-sm border-b border-brand-text/5" : "bg-brand-bg/80 backdrop-blur-sm py-4"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between lg:gap-12">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-serif font-bold tracking-tighter text-brand-emerald">ABSOLUT</div>
            <div className="hidden md:block h-8 w-px bg-brand-text/10" />
            <div className="hidden md:block text-[10px] uppercase tracking-widest text-brand-text/60 leading-tight">
              Производство массивной доски<br/>из сибирской лиственницы
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {["Главная", "Хиты", "Преимущества", "Каталог", "Характеристики"].map((item) => (
              <a key={item} href={`#${item}`} className="text-xs uppercase tracking-widest font-medium hover:text-brand-emerald transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Mobile: always-visible phone */}
            <a href="tel:+79139162888" className="sm:hidden flex items-center gap-1.5 text-sm font-bold hover:text-brand-emerald transition-colors whitespace-nowrap">
              <Phone size={14} />
              +7 (913) 916-28-88
            </a>
            {/* Desktop: phone + messengers */}
            <div className="hidden sm:flex items-center gap-4">
              <div className="flex flex-col items-end">
                <a href="tel:+79139162888" className="text-sm font-bold hover:text-brand-emerald transition-colors whitespace-nowrap">+7 (913) 916-28-88</a>
              </div>
              <div className="flex gap-2">
                <a href="https://wa.me/89139162888" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                  <WhatsAppIcon size={16} />
                </a>
                <a href="https://t.me/Borozdov13" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#0088cc] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                  <Send size={16} fill="currentColor" />
                </a>
              </div>
            </div>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="hidden md:block bg-brand-emerald text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-emerald/90 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-emerald/20"
            >
              Заказать звонок
            </button>
            <button className="lg:hidden text-brand-text" onClick={() => setIsMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Pop-up — Phone */}
      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPopupOpen(false)}
              className="absolute inset-0 bg-brand-text/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm bg-white rounded-[2.5rem] p-10 shadow-2xl text-center"
            >
              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-6 right-6 text-brand-text/40 hover:text-brand-text transition-colors"
              >
                <X size={24} />
              </button>

              {popupColor && (
                <div className="inline-block px-4 py-1.5 bg-brand-emerald/10 text-brand-emerald rounded-full text-[10px] uppercase tracking-widest font-bold mb-6">
                  {popupColor}
                </div>
              )}

              <div className="w-16 h-16 rounded-full bg-brand-emerald/10 flex items-center justify-center mx-auto mb-6">
                <Phone size={28} className="text-brand-emerald" />
              </div>

              <p className="text-brand-text/50 text-sm mb-3">Позвоните нам</p>
              <a
                href="tel:+79139162888"
                className="block text-3xl font-bold text-brand-text hover:text-brand-emerald transition-colors mb-8 whitespace-nowrap"
              >
                +7 (913) 916-28-88
              </a>

              <a
                href="tel:+79139162888"
                className="block w-full bg-brand-emerald text-white py-5 rounded-2xl text-xs uppercase tracking-widest font-bold hover:bg-brand-emerald/90 transition-all shadow-xl shadow-brand-emerald/20 mb-4"
              >
                Позвонить
              </a>

              <div className="flex gap-3">
                <a
                  href="https://wa.me/89139162888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white rounded-2xl text-xs font-bold hover:opacity-90 transition-opacity"
                >
                  <WhatsAppIcon size={16} />
                  WhatsApp
                </a>
                <a
                  href="https://t.me/Borozdov13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#0088cc] text-white rounded-2xl text-xs font-bold hover:opacity-90 transition-opacity"
                >
                  <Send size={16} />
                  Telegram
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPrivacyOpen(false)}
              className="absolute inset-0 bg-brand-text/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="absolute top-6 right-6 text-brand-text/40 hover:text-brand-text transition-colors"
              >
                <X size={24} />
              </button>
              <div className="mb-8 border-b border-brand-text/5 pb-6">
                <h3 className="text-2xl md:text-4xl font-bold uppercase text-center">Политика конфиденциальности</h3>
              </div>
              <div className="space-y-6 text-sm md:text-base text-brand-text/80 leading-relaxed">
                <p>
                  Обработка персональных данных пользователя осуществляется в соответствии с законодательством Российской Федерации. Администрация сайта обрабатывает персональные данные пользователя в целях предоставления пользователю услуг.
                </p>
                <p>
                  Пользователь, заполняя форму с указанием личных данных и предпочтений по оказанию ему услуг нашей компанией, даёт согласие на обработку своих персональных данных. Под обработкой персональных данных понимается сбор, систематизация, накопление, уточнение (обновление, изменение).
                </p>
                <p>
                  Обработка осуществляется с использованием средств автоматизации, в целях реализации мероприятий оповещения пользователя о изменениях на сайте и по поддержке обратной связи с пользователями сайта.
                </p>
                <p>
                  В соответствии с ФЗ от 27.07.2006г. № 152-ФЗ «О персональных данных» пользователю гарантируется, что его данные будут использоваться только для оказания услуг и не будут разглашаться третьим лицам.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[60] bg-brand-bg p-8 flex flex-col"
          >
            <button className="self-end mb-12" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-8">
              {["Главная", "Хиты", "Преимущества", "Каталог", "Характеристики"].map((item) => (
                <a key={item} href={`#${item}`} onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif hover:text-brand-emerald transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-8 border-t border-brand-text/10">
              <a href="tel:+79139162888" className="text-xl font-bold block mb-4">+7 (913) 916-28-88</a>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsPopupOpen(true);
                }}
                className="w-full bg-brand-emerald text-white py-4 rounded-xl text-sm uppercase tracking-widest font-bold"
              >
                Заказать звонок
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="Главная" className="relative h-screen flex items-center overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 z-0">
          <img
            src="/parquet/Орех/5f3628b90d66abfcc0c7e3e12a7b6290.jpg"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] uppercase tracking-[0.2em] font-bold mb-8 border border-white/20">
              <Diamond size={12} className="text-brand-mustard" />
              Премиальное качество из Сибири
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-8">
              Массивная доска <br/>
              <span className="italic font-light">из лиственницы</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-xl leading-relaxed">
              Более 20 стильных оттенков для вашего интерьера. <br/>
              Служит до 100 лет. Идеальная геометрия. <br/>
              <span className="text-white font-bold text-2xl mt-2 block">От 3500 руб./м²</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => openPopup()} className="bg-brand-terracotta text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-brand-terracotta/90 transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-brand-terracotta/30 flex items-center justify-center gap-3">
                Получить каталог и расчет
                <ArrowRight size={18} />
              </button>
              <div className="flex items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                <div className="w-10 h-10 rounded-full bg-brand-emerald flex items-center justify-center text-white">
                  <CheckCircle2 size={20} />
                </div>
                <div className="text-white text-[10px] uppercase tracking-widest font-bold leading-tight">
                  Японское <br/> оборудование
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hits Section */}
      <section id="Хиты" className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-emerald mb-4">Горячее предложение</div>
              <h2 className="text-4xl md:text-6xl">Хиты продаж и Акции</h2>
            </div>
            <p className="text-brand-text/60 max-w-xs text-sm leading-relaxed italic">
              Самые востребованные оттенки сезона по специальным ценам от производителя.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HITS.map((hit, idx) => (
              <motion.div 
                key={hit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={hit.image} 
                    alt={hit.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold text-white ${hit.badge === 'ХИТ' ? 'bg-brand-burgundy' : hit.badge === 'АКЦИЯ' ? 'bg-brand-mustard' : 'bg-brand-emerald'}`}>
                      {hit.badge}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl mb-4">{hit.name}</h3>
                  <div className="flex items-end gap-4 mb-8">
                    <div className="text-3xl font-bold text-brand-emerald">{hit.price} р.<span className="text-sm font-normal text-brand-text/40">/м²</span></div>
                    <div className="text-lg text-brand-text/30 line-through mb-1">{hit.oldPrice} р.</div>
                  </div>
                  <button onClick={() => openPopup(hit.name)} className="w-full py-4 rounded-xl border border-brand-emerald/20 text-brand-emerald text-xs uppercase tracking-widest font-bold group-hover:bg-brand-emerald group-hover:text-white transition-all duration-300">
                    Хочу такой цвет
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="Преимущества" className="py-24 bg-brand-emerald text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <div className="text-[20rem] font-serif italic select-none">Wood</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-mustard mb-6">Почему мы?</div>
              <h2 className="text-4xl md:text-6xl mb-12 leading-tight">Почему выбирают массив лиственницы?</h2>
              
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                {[
                  { icon: Leaf, title: "Экологичность", desc: "Цельная доска, дышащий материал без клея и химии." },
                  { icon: Clock, title: "Долговечность", desc: "Прослужит от 50 до 100 лет при минимальном уходе." },
                  { icon: Diamond, title: "Эстетика", desc: "Уникальный рисунок древесины, благородный стиль." },
                  { icon: Package, title: "Готовность", desc: "Доставим готовую к укладке доску в надежной упаковке." },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-brand-mustard">
                      <item.icon size={24} />
                    </div>
                    <h4 className="text-xl mb-3">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block">
              {/* Image removed as requested */}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="Каталог" className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-emerald mb-4">Палитра оттенков</div>
            <h2 className="text-4xl md:text-6xl mb-8">Выберите свой идеальный оттенок</h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Все", "Одноцветные", "Двухцветные"].map((filter) => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all ${activeFilter === filter ? "bg-brand-emerald text-white shadow-lg shadow-brand-emerald/20" : "bg-white text-brand-text/60 hover:bg-brand-emerald/5"}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredColors.map((color, idx) => (
                <motion.div
                  layout
                  key={color.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm"
                  onClick={() => setActiveMobileColor(activeMobileColor === color.name ? null : color.name)}
                >
                  <img
                    src={color.image}
                    alt={color.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Desktop hover overlay */}
                  <div className="absolute inset-0 bg-brand-emerald/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex flex-col items-center justify-center p-4 text-center">
                    <div className="text-white font-serif text-xl mb-1">{color.name}</div>
                    <div className="text-white/60 text-[10px] uppercase tracking-widest mb-3">{color.type}</div>
                    <div className="text-brand-mustard font-bold text-sm mb-4">{color.price}</div>
                    <button
                      onClick={(e) => { e.stopPropagation(); openPopup(color.name); }}
                      className="px-4 py-2 bg-white text-brand-emerald rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-brand-mustard hover:text-white transition-colors"
                    >
                      Узнать цену
                    </button>
                  </div>
                  {/* Mobile: always-visible name bar */}
                  <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:hidden transition-opacity duration-200 ${activeMobileColor === color.name ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="text-white text-xs font-bold">{color.name}</div>
                  </div>
                  {/* Mobile tap overlay with price */}
                  <div className={`absolute inset-0 bg-brand-emerald/92 md:hidden transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center ${activeMobileColor === color.name ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="text-white font-serif text-lg mb-1">{color.name}</div>
                    <div className="text-white/60 text-[10px] uppercase tracking-widest mb-2">{color.type}</div>
                    <div className="text-brand-mustard font-bold text-base mb-4">{color.price}</div>
                    <button
                      onClick={(e) => { e.stopPropagation(); openPopup(color.name); }}
                      className="px-5 py-2.5 bg-white text-brand-emerald rounded-full text-[10px] uppercase tracking-widest font-bold active:scale-95 transition-transform"
                    >
                      Узнать цену
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-16 p-8 md:p-12 bg-white rounded-[3rem] border border-brand-text/5 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-3xl mb-6 italic">Про покрытие</h3>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <div className="font-bold text-brand-emerald mb-2 uppercase text-[10px] tracking-widest">Натуральное Масло</div>
                  <p className="text-sm text-brand-text/60 leading-relaxed">Подчеркивает естественную текстуру дерева, позволяя ему «дышать». Приятно на ощупь, легко обновляется локально.</p>
                </div>
                <div>
                  <div className="font-bold text-brand-emerald mb-2 uppercase text-[10px] tracking-widest">УФ-Лак</div>
                  <p className="text-sm text-brand-text/60 leading-relaxed">Создает элегантную гладкость и высокую износостойкость. Идеально для помещений с высокой проходимостью.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section id="Характеристики" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative p-6 md:p-12 bg-brand-bg rounded-[2.5rem] md:rounded-[4rem] overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
                <div className="absolute top-10 left-10 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-emerald/20 vertical-text hidden md:block">Technical Specs</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-12 w-full">
                  <div className="text-center p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl shadow-sm">
                    <div className="text-3xl md:text-4xl font-bold text-brand-emerald mb-1 md:mb-2">15 мм</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40">Толщина массива</div>
                  </div>
                  <div className="text-center p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl shadow-sm">
                    <div className="text-xl md:text-2xl font-serif italic mb-1 md:mb-2">Шип-паз</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40">Тип соединения</div>
                  </div>
                  <div className="text-center p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-brand-emerald mb-1 md:mb-2">120 мм</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40">Ширина доски</div>
                  </div>
                  <div className="text-center p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-brand-emerald mb-1 md:mb-2">8-10%</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40">Влажность</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-emerald mb-6">Для профессионалов</div>
              <h2 className="text-4xl md:text-6xl mb-12">Технические характеристики</h2>
              
              <div className="space-y-6">
                {[
                  { label: "Дерево", value: "Сибирская лиственница (цельный массив)" },
                  { label: "Тип соединения", value: "Шип-паз с четырех сторон" },
                  { label: "Ширина доски", value: "120 мм" },
                  { label: "Толщина", value: "15 мм" },
                  { label: "Длины в упаковке", value: "607, 910, 1214, 1820 мм" },
                  { label: "Площадь упаковки", value: "2,184 м²" },
                  { label: "Влажность", value: "8-10% (камерная сушка)" },
                ].map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b border-brand-text/5">
                    <span className="text-xs uppercase tracking-widest font-bold text-brand-text/40">{spec.label}</span>
                    <span className="text-sm font-medium text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-emerald mb-6">Свяжитесь с нами</div>
          <h2 className="text-4xl md:text-6xl mb-6">Позвоните нам</h2>
          <p className="text-brand-text/60 mb-10 text-lg">
            Проконсультируем, подберём оттенок и рассчитаем точную стоимость
          </p>

          <a
            href="tel:+79139162888"
            className="inline-flex items-center justify-center gap-4 text-5xl md:text-7xl font-bold text-brand-text hover:text-brand-emerald transition-colors whitespace-nowrap mb-4"
          >
            <Phone size={40} className="text-brand-emerald flex-shrink-0" />
            +7 (913) 916-28-88
          </a>
          <div className="text-[10px] uppercase tracking-widest font-bold text-brand-emerald mb-12">Отвечаем за 5 минут</div>

          <div className="flex flex-col items-center gap-6">
            <div className="text-xs uppercase tracking-widest font-bold text-brand-text/30">Или напишите в мессенджеры</div>
            <div className="flex gap-4">
              <a href="https://wa.me/89139162888" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-2xl hover:opacity-90 transition-opacity">
                <WhatsAppIcon size={20} />
                <span className="text-sm font-bold">WhatsApp</span>
              </a>
              <a href="https://t.me/Borozdov13" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-[#0088cc] text-white rounded-2xl hover:opacity-90 transition-opacity">
                <Send size={20} />
                <span className="text-sm font-bold">Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-brand-text text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="text-3xl font-serif font-bold tracking-tighter mb-6">ABSOLUT</div>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Производство премиальной массивной доски из сибирской лиственницы. Красота и долговечность вашего дома.
              </p>
              <div className="flex gap-4">
                {/* Social icons could go here */}
              </div>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-brand-mustard">Навигация</h4>
              <ul className="space-y-4 text-sm text-white/60">
                {[
                  { label: "Главная", href: "#Главная" },
                  { label: "Хиты продаж", href: "#Хиты" },
                  { label: "Преимущества", href: "#Преимущества" },
                  { label: "Каталог оттенков", href: "#Каталог" },
                  { label: "Характеристики", href: "#Характеристики" }
                ].map(item => (
                  <li key={item.label}><a href={item.href} className="hover:text-white transition-colors">{item.label}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-brand-mustard">Контакты</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex items-center gap-3">
                  <Phone size={16} /> 
                  <a href="tel:+79139162888" className="hover:text-white transition-colors">+7 (913) 916-28-88</a>
                </li>
                <li className="flex items-center gap-3">
                  <Send size={16} /> 
                  <a href="mailto:ab130@list.ru" className="hover:text-white transition-colors">ab130@list.ru</a>
                </li>
                <li className="opacity-40">г. Новосибирск, ул. Троллейная, 87/1</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-brand-mustard">Реквизиты</h4>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/40 leading-loose">
                ООО "АБСОЛЮТ" <br/>
                ИНН: 5404071140 <br/>
                ОГРН: 1185476009470 <br/>
                КПП: 540401001
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] uppercase tracking-widest font-bold text-white/20">
              © 2026 ООО "АБСОЛЮТ". Все права защищены.
            </div>
            <button 
              onClick={() => setIsPrivacyOpen(true)}
              className="text-[10px] uppercase tracking-widest font-bold text-white/20 hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
