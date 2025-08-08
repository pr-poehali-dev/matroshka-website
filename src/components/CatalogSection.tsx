import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CatalogSection = () => {
  const souvenirs = [
    { name: "Расписная матрешка", price: "1500 ₽", status: "В наличии", image: "img/1fe90879-36d6-4741-aa68-44cf140e7d83.jpg" },
    { name: "Деревянная шкатулка", price: "2200 ₽", status: "Под заказ", image: "img/ad7d8016-66e8-415d-ba33-62082e8a31f9.jpg" },
    { name: "Платок с хохломой", price: "3500 ₽", status: "В наличии", image: "img/e2e59026-89f3-4752-9980-519fba9e9e1c.jpg" },
    { name: "Керамическая кружка", price: "800 ₽", status: "В наличии", image: "img/1fe90879-36d6-4741-aa68-44cf140e7d83.jpg" }
  ];

  return (
    <section id="catalog" className="py-16 bg-russian-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Каталог сувенирной продукции</h2>
          <p className="text-lg text-russian-brown max-w-2xl mx-auto">
            Эксклюзивные изделия ручной работы в наличии и под заказ
          </p>
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          <Button className="bg-russian-red hover:bg-russian-darkbrown">В наличии</Button>
          <Button variant="outline" className="border-russian-brown text-russian-brown hover:bg-russian-brown hover:text-white">
            Под заказ
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {souvenirs.map((item, index) => (
            <Card key={index} className="card-hover animate-fade-in bg-white">
              <CardHeader className="pb-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <Badge className={item.status === "В наличии" ? "bg-green-500" : "bg-russian-gold"}>
                  {item.status}
                </Badge>
                <CardTitle className="font-display text-lg text-russian-red">
                  {item.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-russian-red">{item.price}</span>
                  <Button size="sm" className="bg-russian-red hover:bg-russian-darkbrown">
                    {item.status === "В наличии" ? "Купить" : "Заказать"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;