import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Services() {
  const services = [
    {
      id: 'consultation',
      title: 'Консультация и проектирование',
      description: 'Профессиональная оценка объекта и разработка технического решения',
      icon: 'Lightbulb',
      price: 'Бесплатно',
      duration: '1-2 дня',
      features: [
        'Выезд специалиста на объект',
        'Анализ требований безопасности',
        'Разработка схемы размещения камер',
        'Подбор оптимального оборудования',
        'Расчет стоимости проекта',
        'Техническое задание'
      ]
    },
    {
      id: 'installation',
      title: 'Монтаж и настройка',
      description: 'Профессиональная установка оборудования и настройка системы',
      icon: 'Wrench',
      price: 'от 3 000 ₽',
      duration: '1-5 дней',
      features: [
        'Монтаж камер и оборудования',
        'Прокладка кабельных трасс',
        'Настройка сетевого оборудования',
        'Конфигурация системы записи',
        'Настройка удаленного доступа',
        'Обучение персонала'
      ]
    },
    {
      id: 'maintenance',
      title: 'Техническое обслуживание',
      description: 'Регулярное обслуживание для стабильной работы системы',
      icon: 'Settings',
      price: 'от 5 000 ₽/мес',
      duration: 'Постоянно',
      features: [
        'Плановые проверки оборудования',
        'Обновление программного обеспечения',
        'Очистка и настройка камер',
        'Проверка качества записи',
        'Резервное копирование данных',
        'Техническая поддержка 24/7'
      ]
    },
    {
      id: 'monitoring',
      title: 'Мониторинг и охрана',
      description: 'Круглосуточное наблюдение за вашим объектом',
      icon: 'Eye',
      price: 'от 8 000 ₽/мес',
      duration: '24/7',
      features: [
        'Круглосуточное наблюдение',
        'Реагирование на тревожные события',
        'Связь с охранными службами',
        'Ведение журнала событий',
        'Уведомления на мобильный',
        'Ежемесячные отчеты'
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Заявка',
      description: 'Оставьте заявку на сайте или позвоните нам',
      icon: 'Phone'
    },
    {
      step: 2,
      title: 'Консультация',
      description: 'Бесплатный выезд специалиста на объект',
      icon: 'User'
    },
    {
      step: 3,
      title: 'Проект',
      description: 'Разработка технического решения и сметы',
      icon: 'FileText'
    },
    {
      step: 4,
      title: 'Договор',
      description: 'Заключение договора и согласование сроков',
      icon: 'FileCheck'
    },
    {
      step: 5,
      title: 'Монтаж',
      description: 'Установка и настройка оборудования',
      icon: 'Wrench'
    },
    {
      step: 6,
      title: 'Сдача',
      description: 'Тестирование системы и обучение персонала',
      icon: 'CheckCircle'
    }
  ];

  const advantages = [
    {
      title: 'Опытные специалисты',
      description: 'Более 10 лет опыта в области систем безопасности',
      icon: 'Award'
    },
    {
      title: 'Качественное оборудование',
      description: 'Работаем только с проверенными производителями',
      icon: 'Shield'
    },
    {
      title: 'Гарантия качества',
      description: 'Гарантия на оборудование до 5 лет, на работы - 2 года',
      icon: 'CheckCircle2'
    },
    {
      title: 'Быстрое реагирование',
      description: 'Выезд специалиста в течение 2 часов в Екатеринбурге',
      icon: 'Clock'
    }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Наши услуги</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Полный спектр услуг по проектированию, установке и обслуживанию 
              систем видеонаблюдения для вашего бизнеса
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="container mx-auto px-6 py-16">
        <Tabs defaultValue="consultation" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {services.map((service) => (
              <TabsTrigger key={service.id} value={service.id} className="text-sm">
                {service.title.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-professional-blue/10 to-transparent">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-professional-blue rounded-lg flex items-center justify-center">
                        <Icon name={service.icon} className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-dark-slate">{service.title}</CardTitle>
                        <p className="text-medium-gray">{service.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-professional-blue text-white mb-2">
                        {service.price}
                      </Badge>
                      <p className="text-sm text-medium-gray">{service.duration}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-dark-slate mb-4">Что включено:</h3>
                      <div className="space-y-3">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <Icon name="Check" className="h-5 w-5 text-professional-blue mr-3 flex-shrink-0" />
                            <span className="text-medium-gray">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-light-gray rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-dark-slate mb-4">Заказать услугу</h3>
                      <p className="text-medium-gray mb-6">
                        Оставьте заявку и наш специалист свяжется с вами в течение 15 минут
                      </p>
                      <div className="space-y-3">
                        <Button className="w-full bg-professional-blue hover:bg-blue-700">
                          <Icon name="Phone" className="h-4 w-4 mr-2" />
                          Заказать звонок
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Icon name="Calculator" className="h-4 w-4 mr-2" />
                          Рассчитать стоимость
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Process */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Как мы работаем</h2>
            <p className="text-xl text-medium-gray">Простой и понятный процесс от заявки до сдачи объекта</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-professional-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={step.icon} className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-dark-slate rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                    <CardTitle className="text-dark-slate">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-medium-gray">{step.description}</p>
                  </CardContent>
                </Card>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Icon name="ArrowRight" className="h-6 w-6 text-professional-blue" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advantages */}
      <div className="bg-light-gray py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Наши преимущества</h2>
            <p className="text-xl text-medium-gray">Почему клиенты выбирают именно нас</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-professional-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon} className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-dark-slate text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-gray">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-dark-slate text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы обеспечить безопасность вашего объекта?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и расчет стоимости системы видеонаблюдения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-professional-blue hover:bg-blue-700">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              +7 (343) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-slate">
              <Icon name="Mail" className="h-5 w-5 mr-2" />
              Написать нам
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}