import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const MatroShkaSection = () => {
  return (
    <>
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
    </>
  );
};

export default MatroShkaSection;