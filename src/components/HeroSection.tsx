import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-russian-cream to-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DC2626' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="hero-title mb-6">
            Добро пожаловать в «MatroShka»
          </h1>
          <p className="text-xl text-russian-brown mb-8 max-w-3xl mx-auto leading-relaxed">
            Уникальное пространство, где оживают традиции, раскрывается творчество и рождаются самые тёплые воспоминания! 
            У нас вы найдете авторские мастер-классы для детей и взрослых, тематические туры и фотопроекты, 
            эксклюзивную сувенирную продукцию и атмосферу подлинного уюта.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-russian-red hover:bg-russian-darkbrown animate-scale-in">
              <Icon name="Palette" className="mr-2" />
              Записаться на мастер-класс
            </Button>
            <Button variant="outline" size="lg" className="border-russian-brown text-russian-brown hover:bg-russian-brown hover:text-white animate-scale-in">
              <Icon name="Camera" className="mr-2" />
              Фотопроекты
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;