import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const GallerySection = () => {
  const galleryImages = [
    { src: "img/1fe90879-36d6-4741-aa68-44cf140e7d83.jpg", title: "Мастер-класс по росписи матрешек", category: "Мастер-классы" },
    { src: "img/ad7d8016-66e8-415d-ba33-62082e8a31f9.jpg", title: "Работы участников", category: "Галерея работ" },
    { src: "img/e2e59026-89f3-4752-9980-519fba9e9e1c.jpg", title: "Творческая атмосфера", category: "Атмосфера" },
    { src: "img/1fe90879-36d6-4741-aa68-44cf140e7d83.jpg", title: "Готовые изделия", category: "Изделия" },
    { src: "img/ad7d8016-66e8-415d-ba33-62082e8a31f9.jpg", title: "Фотопроект в русском стиле", category: "Фотопроекты" },
    { src: "img/e2e59026-89f3-4752-9980-519fba9e9e1c.jpg", title: "MatroShka HUT подворье", category: "Подворье" }
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Фотогалерея работ участников и готовых изделий</h2>
          <p className="text-lg text-russian-brown max-w-2xl mx-auto">
            Полюбуйтесь творениями наших участников и готовыми изделиями мастеров
          </p>
        </div>
        
        {/* Категории фильтров */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="outline" className="border-russian-red text-russian-red bg-russian-red text-white">
            Все работы
          </Button>
          <Button variant="outline" className="border-russian-brown text-russian-brown hover:bg-russian-brown hover:text-white">
            Мастер-классы
          </Button>
          <Button variant="outline" className="border-russian-brown text-russian-brown hover:bg-russian-brown hover:text-white">
            Готовые изделия
          </Button>
          <Button variant="outline" className="border-russian-brown text-russian-brown hover:bg-russian-brown hover:text-white">
            Фотопроекты
          </Button>
        </div>

        {/* Галерея */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group cursor-pointer animate-fade-in">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <Badge className="bg-russian-gold mb-2">{image.category}</Badge>
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-russian-red text-russian-red hover:bg-russian-red hover:text-white">
            <Icon name="Eye" className="mr-2" />
            Смотреть все фото
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;