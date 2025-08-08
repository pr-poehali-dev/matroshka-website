import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
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
  );
};

export default ContactsSection;