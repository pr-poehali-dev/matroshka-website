import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-russian-darkbrown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-russian-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">М</span>
              </div>
              <span className="font-display text-2xl">MatroShka</span>
            </div>
            <p className="text-gray-300 mb-4">
              Уникальное пространство русских традиций, творчества и уютных встреч
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-russian-gold text-russian-gold hover:bg-russian-gold hover:text-white">
                <Icon name="MessageCircle" size={16} />
              </Button>
              <Button size="sm" variant="outline" className="border-russian-gold text-russian-gold hover:bg-russian-gold hover:text-white">
                <Icon name="Instagram" size={16} />
              </Button>
              <Button size="sm" variant="outline" className="border-russian-gold text-russian-gold hover:bg-russian-gold hover:text-white">
                <Icon name="Facebook" size={16} />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Разделы</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-russian-gold transition-colors">О нас</a></li>
              <li><a href="#masterclasses" className="hover:text-russian-gold transition-colors">Мастер-классы</a></li>
              <li><a href="#gallery" className="hover:text-russian-gold transition-colors">Галерея</a></li>
              <li><a href="#catalog" className="hover:text-russian-gold transition-colors">Каталог</a></li>
              <li><a href="#contacts" className="hover:text-russian-gold transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-300">
              <p>г. Москва, ул. Русская, д. 10</p>
              <p>+7 (495) 123-45-67</p>
              <p>info@matroshka.ru</p>
              <a href="https://t.me/MatroShkamaster" className="text-russian-gold hover:text-white transition-colors">
                @MatroShkamaster
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MatroShka. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;