import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Installation() {
  const [formData, setFormData] = useState({
    objectType: '',
    area: '',
    camerasCount: '',
    budget: '',
    timeline: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    description: '',
    agreement: false
  });

  const installationSteps = [
    {
      step: 1,
      title: 'Консультация и выезд',
      description: 'Бесплатный выезд специалиста для оценки объекта',
      duration: '1-2 дня',
      icon: 'User'
    },
    {
      step: 2,
      title: 'Проектирование',
      description: 'Разработка схемы размещения камер и технического решения',
      duration: '2-3 дня',
      icon: 'FileText'
    },
    {
      step: 3,
      title: 'Согласование',
      description: 'Утверждение проекта и заключение договора',
      duration: '1 день',
      icon: 'FileCheck'
    },
    {
      step: 4,
      title: 'Поставка оборудования',
      description: 'Доставка и подготовка всего необходимого оборудования',
      duration: '3-5 дней',
      icon: 'Package'
    },
    {
      step: 5,
      title: 'Монтаж системы',
      description: 'Установка камер, прокладка кабелей, монтаж оборудования',
      duration: '1-3 дня',
      icon: 'Wrench'
    },
    {
      step: 6,
      title: 'Настройка и тестирование',
      description: 'Конфигурация системы, настройка записи и удаленного доступа',
      duration: '1 день',
      icon: 'Settings'
    },
    {
      step: 7,
      title: 'Обучение и сдача',
      description: 'Обучение персонала работе с системой и сдача объекта',
      duration: '1 день',
      icon: 'GraduationCap'
    }
  ];

  const servicePackages = [
    {
      name: 'Базовый',
      price: 'от 3 000 ₽',
      description: 'Установка готовой системы',
      features: [
        'Монтаж до 4 камер',
        'Настройка базовых функций',
        'Инструктаж по использованию',
        'Гарантия 1 год'
      ],
      popular: false
    },
    {
      name: 'Стандартный',
      price: 'от 8 000 ₽',
      description: 'Комплексная установка с настройкой',
      features: [
        'Монтаж до 16 камер',
        'Прокладка кабельных трасс',
        'Настройка удаленного доступа',
        'Обучение персонала',
        'Гарантия 2 года'
      ],
      popular: true
    },
    {
      name: 'Премиум',
      price: 'от 15 000 ₽',
      description: 'Полный цикл с проектированием',
      features: [
        'Неограниченное количество камер',
        'Индивидуальное проектирование',
        'Интеграция с другими системами',
        'Круглосуточная поддержка',
        'Гарантия 3 года'
      ],
      popular: false
    }
  ];

  const workExamples = [
    {
      title: 'Офисный центр "Высоцкий"',
      description: 'Установка 24 IP-камер с системой контроля доступа',
      area: '1200 м²',
      cameras: 24,
      duration: '5 дней',
      image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg'
    },
    {
      title: 'Производственный комплекс',
      description: 'Периметральная охрана с тепловизионными камерами',
      area: '5000 м²',
      cameras: 16,
      duration: '8 дней',
      image: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg'
    },
    {
      title: 'Торговый центр "Гринвич"',
      description: 'Многоуровневая система с аналитикой посетителей',
      area: '3000 м²',
      cameras: 48,
      duration: '12 дней',
      image: '/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg'
    }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Installation request:', formData);
  };

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Установка видеонаблюдения</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Профессиональный монтаж систем видеонаблюдения любой сложности. 
              От консультации до сдачи объекта под ключ.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Installation Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Этапы установки</h2>
            <p className="text-xl text-medium-gray">Прозрачный процесс от заявки до сдачи объекта</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationSteps.map((step, index) => (
              <Card key={step.step} className="relative hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-professional-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon} className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-dark-slate rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <Badge variant="secondary">{step.duration}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-medium-gray text-sm">{step.description}</p>
                </CardContent>
                
                {index < installationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <Icon name="ArrowRight" className="h-6 w-6 text-professional-blue" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Service Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Пакеты услуг</h2>
            <p className="text-xl text-medium-gray">Выберите подходящий вариант установки</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden ${pkg.popular ? 'ring-2 ring-professional-blue' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-professional-blue text-white px-3 py-1 text-sm">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-professional-blue">{pkg.price}</div>
                  <p className="text-medium-gray">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Icon name="Check" className="h-5 w-5 text-professional-blue mr-3 flex-shrink-0" />
                        <span className="text-medium-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-professional-blue hover:bg-blue-700' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Request Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Заявка на установку</CardTitle>
                <p className="text-medium-gray">
                  Заполните форму и мы свяжемся с вами для уточнения деталей
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Tabs defaultValue="object" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="object">Объект</TabsTrigger>
                      <TabsTrigger value="contact">Контакты</TabsTrigger>
                    </TabsList>

                    <TabsContent value="object" className="space-y-4 mt-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Тип объекта *</label>
                        <Select value={formData.objectType} onValueChange={(value) => handleInputChange('objectType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите тип объекта" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="office">Офис</SelectItem>
                            <SelectItem value="warehouse">Склад</SelectItem>
                            <SelectItem value="retail">Магазин</SelectItem>
                            <SelectItem value="production">Производство</SelectItem>
                            <SelectItem value="residential">Жилой дом</SelectItem>
                            <SelectItem value="other">Другое</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Площадь (м²)</label>
                          <Input
                            placeholder="500"
                            value={formData.area}
                            onChange={(e) => handleInputChange('area', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Количество камер</label>
                          <Input
                            placeholder="8"
                            value={formData.camerasCount}
                            onChange={(e) => handleInputChange('camerasCount', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Бюджет</label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите бюджет" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="50-100">50 000 - 100 000 ₽</SelectItem>
                            <SelectItem value="100-300">100 000 - 300 000 ₽</SelectItem>
                            <SelectItem value="300-500">300 000 - 500 000 ₽</SelectItem>
                            <SelectItem value="500+">Более 500 000 ₽</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Сроки установки</label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Когда планируете установку?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">Как можно скорее</SelectItem>
                            <SelectItem value="week">В течение недели</SelectItem>
                            <SelectItem value="month">В течение месяца</SelectItem>
                            <SelectItem value="quarter">В течение квартала</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Описание задач</label>
                        <Textarea
                          placeholder="Опишите особенности объекта, требования к системе..."
                          rows={3}
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="contact" className="space-y-4 mt-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Контактное лицо *</label>
                        <Input
                          placeholder="ФИО"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Телефон *</label>
                          <Input
                            placeholder="+7 (___) ___-__-__"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Email</label>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Адрес объекта *</label>
                        <Textarea
                          placeholder="Полный адрес объекта для установки"
                          rows={2}
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          required
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="agreement"
                          checked={formData.agreement}
                          onCheckedChange={(checked) => handleInputChange('agreement', checked as boolean)}
                        />
                        <label htmlFor="agreement" className="text-sm text-medium-gray">
                          Согласен с <a href="#" className="text-professional-blue hover:underline">условиями обработки данных</a>
                        </label>
                      </div>

                      <Button 
                        type="submit"
                        className="w-full bg-professional-blue hover:bg-blue-700"
                        disabled={!formData.agreement}
                      >
                        <Icon name="Send" className="h-4 w-4 mr-2" />
                        Отправить заявку
                      </Button>
                    </TabsContent>
                  </Tabs>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            {/* Advantages */}
            <Card>
              <CardHeader>
                <CardTitle>Наши преимущества</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" className="h-6 w-6 text-professional-blue" />
                  <div>
                    <h4 className="font-semibold text-dark-slate">Опытные специалисты</h4>
                    <p className="text-sm text-medium-gray">Более 10 лет опыта установки</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" className="h-6 w-6 text-professional-blue" />
                  <div>
                    <h4 className="font-semibold text-dark-slate">Гарантия качества</h4>
                    <p className="text-sm text-medium-gray">До 3 лет гарантии на работы</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="h-6 w-6 text-professional-blue" />
                  <div>
                    <h4 className="font-semibold text-dark-slate">Соблюдение сроков</h4>
                    <p className="text-sm text-medium-gray">Установка точно в срок</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Headphones" className="h-6 w-6 text-professional-blue" />
                  <div>
                    <h4 className="font-semibold text-dark-slate">Поддержка 24/7</h4>
                    <p className="text-sm text-medium-gray">Круглосуточная техподдержка</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Контакты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-professional-blue" />
                  <div>
                    <p className="font-medium">+7 (343) 123-45-67</p>
                    <p className="text-sm text-medium-gray">Консультации круглосуточно</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-professional-blue" />
                  <div>
                    <p className="font-medium">install@securetech.ru</p>
                    <p className="text-sm text-medium-gray">Заявки на установку</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-5 w-5 text-professional-blue" />
                  <div>
                    <p className="font-medium">г. Екатеринбург, ул. Малышева, 42</p>
                    <p className="text-sm text-medium-gray">Офис и склад оборудования</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Work Examples */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Примеры наших работ</h2>
            <p className="text-xl text-medium-gray">Реализованные проекты различной сложности</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workExamples.map((example, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-dark-slate mb-2">{example.title}</h3>
                  <p className="text-medium-gray mb-4">{example.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-professional-blue">{example.area}</div>
                      <div className="text-medium-gray">Площадь</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-professional-blue">{example.cameras}</div>
                      <div className="text-medium-gray">Камер</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-professional-blue">{example.duration}</div>
                      <div className="text-medium-gray">Срок</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-dark-slate text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать установку?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и выезд специалиста для оценки объекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-professional-blue hover:bg-blue-700">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Вызвать специалиста
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-slate">
              <Icon name="Calculator" className="h-5 w-5 mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}