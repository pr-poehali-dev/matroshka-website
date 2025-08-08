import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const masterClasses = [
    { name: "Роспись матрешек", description: "Традиционная русская роспись", price: "2500 ₽", image: "img/1fe90879-36d6-4741-aa68-44cf140e7d83.jpg" },
    { name: "Роспись котомки", description: "Старинное ремесло", price: "2000 ₽", image: "img/ad7d8016-66e8-415d-ba33-62082e8a31f9.jpg" },
    { name: "Амулеты из смолы", description: "С сухоцветами", price: "1800 ₽", image: "img/e2e59026-89f3-4752-9980-519fba9e9e1c.jpg" },
    { name: "Броши из глины", description: "Авторская техника", price: "1500 ₽", image: "img/1fe90879-36d6-4741-aa68-44cf140e7d83.jpg" },
    { name: "Мозаика из витражного стекла", description: "Сверкающие узоры", price: "3000 ₽", image: "img/ad7d8016-66e8-415d-ba33-62082e8a31f9.jpg" },
    { name: "Свечеварение", description: "Ароматные свечи ручной работы", price: "1200 ₽", image: "img/e2e59026-89f3-4752-9980-519fba9e9e1c.jpg" }
  ];

  const souvenirs = [
    { name: "Расписная матрешка", price: "1500 ₽", status: "В наличии", image: "img/1fe90879-36d6-4741-aa68-44cf140e7d83.jpg" },
    { name: "Деревянная шкатулка", price: "2200 ₽", status: "Под заказ", image: "img/ad7d8016-66e8-415d-ba33-62082e8a31f9.jpg" },
    { name: "Платок с хохломой", price: "3500 ₽", status: "В наличии", image: "img/e2e59026-89f3-4752-9980-519fba9e9e1c.jpg" },
    { name: "Керамическая кружка", price: "800 ₽", status: "В наличии", image: "img/1fe90879-36d6-4741-aa68-44cf140e7d83.jpg" }
  ];

  const galleryImages = [
    { src: "img/1fe90879-36d6-4741-aa68-44cf140e7d83.jpg", title: "Мастер-класс по росписи матрешек", category: "Мастер-классы" },
    { src: "img/ad7d8016-66e8-415d-ba33-62082e8a31f9.jpg", title: "Работы участников", category: "Галерея работ" },
    { src: "img/e2e59026-89f3-4752-9980-519fba9e9e1c.jpg", title: "Творческая атмосфера", category: "Атмосфера" },
    { src: "img/1fe90879-36d6-4741-aa68-44cf140e7d83.jpg", title: "Готовые изделия", category: "Изделия" },
    { src: "img/ad7d8016-66e8-415d-ba33-62082e8a31f9.jpg", title: "Фотопроект в русском стиле", category: "Фотопроекты" },
    { src: "img/e2e59026-89f3-4752-9980-519fba9e9e1c.jpg", title: "MatroShka HUT подворье", category: "Подворье" }
  ];

  return (
    <div className="min-h-screen bg-russian-cream">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Фотогалерея работ */}
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

      {/* Каталог сувенирной продукции */}
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

      {/* MatroShka HUT подворье */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">MatroShka HUT подворье</h2>
            <p className="text-lg text-russian-brown max-w-2xl mx-auto">
              Творческие туры, практики и настоящая русская атмосфера
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="img/e2e59026-89f3-4752-9980-519fba9e9e1c.jpg" 
                alt="MatroShka HUT подворье" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <Card className="border-russian-gold">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-russian-red">
                    <Icon name="Home" />
                    Программа тура "Погружение в традиции"
                  </CardTitle>
                  <CardDescription className="text-russian-brown">
                    3-дневная программа полного погружения в русскую культуру и ремесла
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-russian-brown">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Мастер-классы по традиционным ремеслам
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Эзотерические и творческие практики
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Проживание в традиционном подворье
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Русская кухня и чайные церемонии
                    </li>
                  </ul>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-2xl font-bold text-russian-red">от 15000 ₽</span>
                    <Button className="bg-russian-red hover:bg-russian-darkbrown">
                      Забронировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Новости/Блог */}
      <section className="py-16 bg-russian-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Новости и события</h2>
            <p className="text-lg text-russian-brown max-w-2xl mx-auto">
              Следите за нашими мероприятиями, анонсами и интересными историями
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover animate-fade-in bg-white">
              <CardHeader>
                <Badge className="bg-russian-gold w-fit mb-2">Анонс</Badge>
                <CardTitle className="font-display text-xl text-russian-red">
                  Фестиваль русских ремесел
                </CardTitle>
                <CardDescription className="text-russian-brown">
                  20-22 августа пройдет большой фестиваль с мастер-классами, выставкой и ярмаркой
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" variant="outline" className="border-russian-red text-russian-red hover:bg-russian-red hover:text-white">
                  Читать далее
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover animate-fade-in bg-white">
              <CardHeader>
                <Badge className="bg-green-500 w-fit mb-2">Новость</Badge>
                <CardTitle className="font-display text-xl text-russian-red">
                  Новые мастер-классы по керамике
                </CardTitle>
                <CardDescription className="text-russian-brown">
                  Добавили в программу уникальные мастер-классы по работе с глиной и созданию посуды
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" variant="outline" className="border-russian-red text-russian-red hover:bg-russian-red hover:text-white">
                  Читать далее
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover animate-fade-in bg-white">
              <CardHeader>
                <Badge className="bg-russian-red w-fit mb-2">Акция</Badge>
                <CardTitle className="font-display text-xl text-russian-red">
                  Скидка 20% на групповые занятия
                </CardTitle>
                <CardDescription className="text-russian-brown">
                  При записи группой от 5 человек действует специальная скидка на все мастер-классы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" variant="outline" className="border-russian-red text-russian-red hover:bg-russian-red hover:text-white">
                  Читать далее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Контакты</h2>
            <p className="text-lg text-russian-brown max-w-2xl mx-auto">
              Свяжитесь с нами для записи или консультации
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="border-russian-gold">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-russian-brown">
                      <Icon name="MapPin" className="text-russian-red" />
                      <span>г. Москва, ул. Русская, д. 10</span>
                    </div>
                    <div className="flex items-center gap-3 text-russian-brown">
                      <Icon name="Phone" className="text-russian-red" />
                      <span>+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center gap-3 text-russian-brown">
                      <Icon name="Mail" className="text-russian-red" />
                      <span>info@matroshka.ru</span>
                    </div>
                    <div className="flex items-center gap-3 text-russian-brown">
                      <Icon name="MessageCircle" className="text-russian-red" />
                      <a href="https://t.me/MatroShkamaster" className="hover:text-russian-red transition-colors">
                        @MatroShkamaster
                      </a>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-russian-cream">
                    <p className="text-sm text-russian-brown mb-4">
                      Следите за новостями в нашем Telegram-канале
                    </p>
                    <Button className="w-full bg-russian-red hover:bg-russian-darkbrown">
                      <Icon name="MessageCircle" className="mr-2" />
                      Подписаться на канал
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-russian-gold">
              <CardHeader>
                <CardTitle className="font-display text-xl text-russian-red text-center">
                  Форма обратной связи
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-russian-brown mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-russian-cream rounded-lg focus:border-russian-red focus:outline-none"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-russian-brown mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-russian-cream rounded-lg focus:border-russian-red focus:outline-none"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-russian-brown mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 border border-russian-cream rounded-lg focus:border-russian-red focus:outline-none"
                    placeholder="Ваше сообщение или вопрос"
                  ></textarea>
                </div>
                <Button className="w-full bg-russian-red hover:bg-russian-darkbrown">
                  <Icon name="Send" className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;