import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const MasterClassSection = () => {
  const masterClasses = [
    { name: "Роспись матрешек", description: "Традиционная русская роспись", price: "2500 ₽", image: "img/1fe90879-36d6-4741-aa68-44cf140e7d83.jpg" },
    { name: "Роспись котомки", description: "Старинное ремесло", price: "2000 ₽", image: "img/ad7d8016-66e8-415d-ba33-62082e8a31f9.jpg" },
    { name: "Амулеты из смолы", description: "С сухоцветами", price: "1800 ₽", image: "img/e2e59026-89f3-4752-9980-519fba9e9e1c.jpg" },
    { name: "Броши из глины", description: "Авторская техника", price: "1500 ₽", image: "img/1fe90879-36d6-4741-aa68-44cf140e7d83.jpg" },
    { name: "Мозаика из витражного стекла", description: "Сверкающие узоры", price: "3000 ₽", image: "img/ad7d8016-66e8-415d-ba33-62082e8a31f9.jpg" },
    { name: "Свечеварение", description: "Ароматные свечи ручной работы", price: "1200 ₽", image: "img/e2e59026-89f3-4752-9980-519fba9e9e1c.jpg" }
  ];

  return (
    <>
      {/* Мастер-класс недели */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Мастер-класс ближайшей недели</h2>
          </div>
          <Card className="max-w-4xl mx-auto russian-pattern-border animate-fade-in">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="img/1fe90879-36d6-4741-aa68-44cf140e7d83.jpg" 
                  alt="Роспись матрешек" 
                  className="w-full h-64 md:h-full object-cover rounded-l-lg"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-russian-red">Популярное</Badge>
                    <Badge variant="outline" className="border-russian-gold text-russian-gold">12 августа</Badge>
                  </div>
                  <CardTitle className="text-2xl font-display text-russian-red mb-2">
                    Роспись матрешек
                  </CardTitle>
                  <CardDescription className="text-lg text-russian-brown">
                    Окунитесь в мир традиционного русского искусства! Научитесь расписывать матрешки в классическом стиле 
                    с использованием аутентичных техник и узоров.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-russian-brown">
                      <Icon name="Clock" size={16} />
                      <span>3 часа</span>
                    </div>
                    <div className="flex items-center gap-2 text-russian-brown">
                      <Icon name="Users" size={16} />
                      <span>До 12 человек</span>
                    </div>
                    <div className="flex items-center gap-2 text-russian-brown">
                      <Icon name="MapPin" size={16} />
                      <span>MatroShka HUT-подворье</span>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-2xl font-bold text-russian-red">2500 ₽</span>
                      <Button className="bg-russian-red hover:bg-russian-darkbrown">
                        Записаться
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Мастер-классы */}
      <section id="masterclasses" className="py-16 bg-russian-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Наши мастер-классы</h2>
            <p className="text-lg text-russian-brown max-w-2xl mx-auto">
              Выберите творческое направление по душе и окунитесь в мир рукоделия и традиций
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {masterClasses.map((masterClass, index) => (
              <Card key={index} className="card-hover animate-fade-in bg-white border-russian-gold/20">
                <CardHeader className="pb-4">
                  <img 
                    src={masterClass.image} 
                    alt={masterClass.name} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="font-display text-xl text-russian-red">
                    {masterClass.name}
                  </CardTitle>
                  <CardDescription className="text-russian-brown">
                    {masterClass.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-russian-red">{masterClass.price}</span>
                    <Button size="sm" variant="outline" className="border-russian-red text-russian-red hover:bg-russian-red hover:text-white">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MasterClassSection;