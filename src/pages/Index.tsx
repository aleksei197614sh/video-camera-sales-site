import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedResolution, setSelectedResolution] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');

  const cameras = [
    {
      id: 1,
      name: 'SecurityPro Dome 4K',
      type: 'Купольная',
      resolution: '4K Ultra HD',
      brand: 'SecurityPro',
      price: '15 890',
      features: ['Ночное видение', 'IP67', 'PTZ управление'],
      image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg'
    },
    {
      id: 2,
      name: 'VisionMax Bullet IR',
      type: 'Цилиндрическая',
      resolution: '2K Full HD',
      brand: 'VisionMax',
      price: '12 450',
      features: ['ИК подсветка', 'Антивандальная', 'IP66'],
      image: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg'
    },
    {
      id: 3,
      name: 'TechGuard PTZ Pro',
      type: 'Поворотная',
      resolution: '4K Ultra HD',
      brand: 'TechGuard',
      price: '28 750',
      features: ['30x Zoom', 'Автотрекинг', 'AI аналитика'],
      image: '/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg'
    }
  ];

  const solutions = [
    {
      title: 'Офисная безопасность',
      description: 'Комплексное решение для офисных помещений до 500 м²',
      includes: ['8 IP-камер', 'NVR регистратор', 'Система аналитики'],
      price: '185 000'
    },
    {
      title: 'Складской комплекс',
      description: 'Профессиональная система для складов и производства',
      includes: ['16 камер высокого разрешения', 'Тепловизионный контроль', '24/7 мониторинг'],
      price: '450 000'
    },
    {
      title: 'Периметральная охрана',
      description: 'Защита территории с детекцией нарушений',
      includes: ['PTZ камеры', 'Детекторы движения', 'Интеграция с СКУД'],
      price: '320 000'
    }
  ];

  const filteredCameras = cameras.filter(camera => {
    return (selectedCategory === 'all' || camera.type.toLowerCase().includes(selectedCategory)) &&
           (selectedResolution === 'all' || camera.resolution === selectedResolution) &&
           (selectedBrand === 'all' || camera.brand === selectedBrand);
  });

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-professional-blue rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-dark-slate">SecureTech</h1>
                <p className="text-sm text-medium-gray">Системы видеонаблюдения</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/catalog" className="text-medium-gray hover:text-professional-blue transition-colors">Каталог</a>
              <a href="/solutions" className="text-medium-gray hover:text-professional-blue transition-colors">Решения</a>
              <a href="/services" className="text-medium-gray hover:text-professional-blue transition-colors">Услуги</a>
              <a href="/about" className="text-medium-gray hover:text-professional-blue transition-colors">О нас</a>
              <a href="/contact" className="text-medium-gray hover:text-professional-blue transition-colors">Контакты</a>
            </nav>
            <Button className="bg-professional-blue hover:bg-blue-700">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark-slate to-professional-blue text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Профессиональные системы
                <span className="text-blue-300"> видеонаблюдения</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Защитите свой бизнес с помощью современных технологий безопасности. 
                Полный цикл: от консультации до технической поддержки.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-dark-slate hover:bg-gray-100">
                  <Icon name="Calculator" className="h-5 w-5 mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-slate">
                  <Icon name="Play" className="h-5 w-5 mr-2" />
                  Посмотреть демо
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-blue-200">Объектов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-200">Поддержка</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">5 лет</div>
                    <div className="text-blue-200">Гарантия</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">99.9%</div>
                    <div className="text-blue-200">Аптайм</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-medium-gray">Комплексный подход к безопасности вашего бизнеса</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-professional-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Users" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dark-slate mb-4">Экспертиза</h3>
              <p className="text-medium-gray">Более 10 лет опыта в области систем безопасности и видеонаблюдения</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-professional-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Settings" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dark-slate mb-4">Под ключ</h3>
              <p className="text-medium-gray">Полный цикл работ от проектирования до сервисного обслуживания</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-professional-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dark-slate mb-4">Надёжность</h3>
              <p className="text-medium-gray">Используем только проверенное оборудование ведущих производителей</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-light-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Каталог оборудования</h2>
            <p className="text-xl text-medium-gray">Современные камеры видеонаблюдения для любых задач</p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Тип камеры" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все типы</SelectItem>
                  <SelectItem value="купольная">Купольные</SelectItem>
                  <SelectItem value="цилиндрическая">Цилиндрические</SelectItem>
                  <SelectItem value="поворотная">Поворотные</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedResolution} onValueChange={setSelectedResolution}>
                <SelectTrigger>
                  <SelectValue placeholder="Разрешение" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все разрешения</SelectItem>
                  <SelectItem value="4K Ultra HD">4K Ultra HD</SelectItem>
                  <SelectItem value="2K Full HD">2K Full HD</SelectItem>
                  <SelectItem value="Full HD">Full HD</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger>
                  <SelectValue placeholder="Производитель" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все производители</SelectItem>
                  <SelectItem value="SecurityPro">SecurityPro</SelectItem>
                  <SelectItem value="VisionMax">VisionMax</SelectItem>
                  <SelectItem value="TechGuard">TechGuard</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" onClick={() => {
                setSelectedCategory('all');
                setSelectedResolution('all');
                setSelectedBrand('all');
              }}>
                <Icon name="X" className="h-4 w-4 mr-2" />
                Сбросить
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCameras.map(camera => (
              <Card key={camera.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img 
                    src={camera.image} 
                    alt={camera.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-professional-blue text-white">
                    {camera.type}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-dark-slate">{camera.name}</CardTitle>
                  <p className="text-medium-gray">{camera.resolution} • {camera.brand}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {camera.features.map(feature => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-dark-slate">{camera.price} ₽</span>
                    <Button className="bg-professional-blue hover:bg-blue-700">
                      <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Готовые решения</h2>
            <p className="text-xl text-medium-gray">Комплексные системы безопасности для различных сфер бизнеса</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-professional-blue/10 to-transparent"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-dark-slate">{solution.title}</CardTitle>
                  <p className="text-medium-gray">{solution.description}</p>
                </CardHeader>
                <CardContent className="relative">
                  <div className="mb-6">
                    <p className="font-semibold text-dark-slate mb-3">В комплект входит:</p>
                    <ul className="space-y-2">
                      {solution.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center text-medium-gray">
                          <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Separator className="mb-6" />
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-dark-slate">от {solution.price} ₽</span>
                    <Button className="bg-professional-blue hover:bg-blue-700">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-dark-slate text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl mb-8 text-blue-100">
                Получите профессиональную консультацию и расчёт стоимости системы видеонаблюдения для вашего объекта
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-professional-blue rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Phone" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">+7 (343) 123-45-67</p>
                    <p className="text-blue-200">Звонки принимаем круглосуточно</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-professional-blue rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Mail" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">info@securetech.ru</p>
                    <p className="text-blue-200">Техническая поддержка и консультации</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-professional-blue rounded-lg flex items-center justify-center mr-4">
                    <Icon name="MapPin" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">г. Екатеринбург, ул. Малышева, 42</p>
                    <p className="text-blue-200">Офис и демо-зал оборудования</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-dark-slate">Заказать консультацию</CardTitle>
                <p className="text-medium-gray">Заполните форму и мы свяжемся с вами в течение 15 минут</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" />
                  <Input placeholder="Email" />
                  <Textarea placeholder="Опишите ваш объект и задачи..." />
                  <Button className="w-full bg-professional-blue hover:bg-blue-700">
                    <Icon name="Send" className="h-4 w-4 mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-medium-gray text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-slate text-white py-12 border-t border-medium-gray">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-professional-blue rounded-lg flex items-center justify-center">
                  <Icon name="Shield" className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">SecureTech</span>
              </div>
              <p className="text-blue-200 mb-4">
                Профессиональные системы видеонаблюдения и безопасности для бизнеса
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">IP камеры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аналоговые камеры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Регистраторы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Проектирование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Монтаж</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Настройка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обслуживание</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-blue-200">
                <li>+7 (343) 123-45-67</li>
                <li>info@securetech.ru</li>
                <li>г. Екатеринбург</li>
                <li>ул. Малышева, 42</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-medium-gray" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200">© 2024 SecureTech. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}