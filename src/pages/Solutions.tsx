import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Solutions() {
  const solutions = [
    {
      id: 1,
      title: 'Офисная безопасность',
      subtitle: 'Комплексное решение для офисных помещений',
      description: 'Профессиональная система видеонаблюдения для офисов площадью до 500 м². Включает IP-камеры высокого разрешения, систему записи и удаленный мониторинг.',
      coverage: 'До 500 м²',
      cameras: '8-12 камер',
      price: 'от 185 000',
      features: [
        'IP-камеры 4K разрешения',
        'NVR регистратор на 16 каналов',
        'Система аналитики и уведомлений',
        'Мобильное приложение',
        'Облачное хранение данных',
        'Интеграция с СКУД'
      ],
      benefits: [
        'Контроль доступа сотрудников',
        'Защита от краж и вандализма',
        'Мониторинг рабочих процессов',
        'Соблюдение трудовой дисциплины'
      ],
      icon: 'Building2'
    },
    {
      id: 2,
      title: 'Складской комплекс',
      subtitle: 'Профессиональная система для складов и производства',
      description: 'Масштабируемое решение для складских помещений и производственных цехов. Включает тепловизионный контроль и систему 24/7 мониторинга.',
      coverage: 'До 2000 м²',
      cameras: '16-32 камеры',
      price: 'от 450 000',
      features: [
        '16 камер высокого разрешения',
        'Тепловизионный контроль',
        '24/7 мониторинг',
        'Система пожарной безопасности',
        'Интеграция с ERP системами',
        'Автоматические отчеты'
      ],
      benefits: [
        'Контроль товарных потоков',
        'Предотвращение хищений',
        'Мониторинг температурного режима',
        'Соблюдение техники безопасности'
      ],
      icon: 'Warehouse'
    },
    {
      id: 3,
      title: 'Периметральная охрана',
      subtitle: 'Защита территории с детекцией нарушений',
      description: 'Комплексная система охраны периметра с использованием PTZ камер, детекторов движения и интеллектуальной аналитики.',
      coverage: 'До 5000 м²',
      cameras: '12-24 камеры',
      price: 'от 320 000',
      features: [
        'PTZ камеры с 30x зумом',
        'Детекторы движения',
        'Интеграция с СКУД',
        'Система оповещения',
        'Ночное видение',
        'Погодозащищенное исполнение'
      ],
      benefits: [
        'Раннее обнаружение нарушителей',
        'Автоматическое отслеживание',
        'Интеграция с охранными службами',
        'Снижение затрат на охрану'
      ],
      icon: 'Shield'
    },
    {
      id: 4,
      title: 'Торговые центры',
      subtitle: 'Безопасность для торговых площадей',
      description: 'Специализированное решение для торговых центров и магазинов с системой подсчета посетителей и анализа поведения.',
      coverage: 'До 3000 м²',
      cameras: '20-40 камер',
      price: 'от 280 000',
      features: [
        'Камеры с функцией подсчета',
        'Анализ поведения покупателей',
        'Система распознавания лиц',
        'Интеграция с кассовыми системами',
        'Мобильные уведомления',
        'Облачная аналитика'
      ],
      benefits: [
        'Предотвращение краж',
        'Анализ покупательского трафика',
        'Оптимизация работы персонала',
        'Повышение безопасности клиентов'
      ],
      icon: 'ShoppingBag'
    },
    {
      id: 5,
      title: 'Образовательные учреждения',
      subtitle: 'Безопасность школ и детских садов',
      description: 'Специальное решение для образовательных учреждений с учетом требований безопасности детей и конфиденциальности.',
      coverage: 'До 1500 м²',
      cameras: '15-25 камер',
      price: 'от 220 000',
      features: [
        'Камеры с защитой от вандализма',
        'Система контроля доступа',
        'Экстренные кнопки вызова',
        'Интеграция с пожарной сигнализацией',
        'Родительский контроль',
        'Архивирование записей'
      ],
      benefits: [
        'Безопасность детей и персонала',
        'Контроль посещаемости',
        'Предотвращение конфликтов',
        'Соблюдение образовательных стандартов'
      ],
      icon: 'GraduationCap'
    },
    {
      id: 6,
      title: 'Медицинские учреждения',
      subtitle: 'Безопасность клиник и больниц',
      description: 'Решение для медицинских учреждений с соблюдением требований конфиденциальности и медицинских стандартов.',
      coverage: 'До 1000 м²',
      cameras: '10-20 камер',
      price: 'от 195 000',
      features: [
        'Камеры с шифрованием данных',
        'Система контроля доступа в палаты',
        'Интеграция с медицинскими системами',
        'Экстренные вызовы',
        'Соблюдение HIPAA стандартов',
        'Резервное питание'
      ],
      benefits: [
        'Безопасность пациентов',
        'Контроль доступа к лекарствам',
        'Мониторинг критических зон',
        'Соблюдение медицинских протоколов'
      ],
      icon: 'Heart'
    }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Готовые решения</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Комплексные системы видеонаблюдения для различных сфер бизнеса. 
              Каждое решение адаптировано под специфические требования отрасли.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <Card key={solution.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-professional-blue/10 to-transparent">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-professional-blue rounded-lg flex items-center justify-center">
                      <Icon name={solution.icon} className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-dark-slate text-xl">{solution.title}</CardTitle>
                      <p className="text-medium-gray">{solution.subtitle}</p>
                    </div>
                  </div>
                  <Badge className="bg-professional-blue text-white">
                    {solution.price} ₽
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <p className="text-medium-gray mb-6">{solution.description}</p>
                
                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-light-gray rounded-lg p-3">
                    <div className="text-sm text-medium-gray">Покрытие</div>
                    <div className="font-semibold text-dark-slate">{solution.coverage}</div>
                  </div>
                  <div className="bg-light-gray rounded-lg p-3">
                    <div className="text-sm text-medium-gray">Камеры</div>
                    <div className="font-semibold text-dark-slate">{solution.cameras}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-dark-slate mb-3">Что входит в комплект:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {solution.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-medium-gray">
                        <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="mb-6" />

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-dark-slate mb-3">Преимущества:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {solution.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-medium-gray">
                        <Icon name="Star" className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button className="flex-1 bg-professional-blue hover:bg-blue-700">
                    <Icon name="Calculator" className="h-4 w-4 mr-2" />
                    Рассчитать стоимость
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Icon name="Info" className="h-4 w-4 mr-2" />
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-dark-slate text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужно индивидуальное решение?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Наши инженеры разработают систему видеонаблюдения специально под ваши требования и бюджет
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-professional-blue hover:bg-blue-700">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-slate">
              <Icon name="FileText" className="h-5 w-5 mr-2" />
              Техническое задание
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}