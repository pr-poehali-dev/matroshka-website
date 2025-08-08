import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b-4 border-russian-red">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-russian-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">М</span>
            </div>
            <span className="hero-title text-2xl">MatroShka</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-russian-brown hover:text-russian-red transition-colors">О нас</a>
            <a href="#masterclasses" className="text-russian-brown hover:text-russian-red transition-colors">Мастер-классы</a>
            <a href="#gallery" className="text-russian-brown hover:text-russian-red transition-colors">Галерея</a>
            <a href="#catalog" className="text-russian-brown hover:text-russian-red transition-colors">Каталог</a>
            <a href="#contacts" className="text-russian-brown hover:text-russian-red transition-colors">Контакты</a>
          </div>
          <Button className="bg-russian-red hover:bg-russian-darkbrown">
            Записаться
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;