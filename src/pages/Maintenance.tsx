import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function Maintenance() {
  const [serviceRequest, setServiceRequest] = useState({
    type: '',
    priority: '',
    description: '',
    contact: '',
    phone: '',
    address: '',
    agreement: false
  });

  const maintenancePlans = [
    {
      name: 'Базовый',
      price: '5 000 ₽/мес',
      description: 'Основное обслуживание системы',
      features: [
        'Ежемесячная проверка работоспособности',
        'Очистка камер от пыли и загрязнений',
        'Проверка качества записи',
        'Обновление базового ПО',
        'Техподдержка в рабочее время',
        'Гарантия на обслуживание'
      ],
      suitable: 'До 8 камер',
      response: '24 часа'
    },
    {
      name: 'Стандартный',
      price: '12 000 ₽/мес',
      description: 'Расширенное обслуживание с мониторингом',
      features: [
        'Все услуги базового плана',
        'Еженедельная проверка системы',
        'Удаленный мониторинг состояния',
        'Профилактическая замена расходников',
        'Приоритетная техподдержка',
        'Резервное копирование настроек',
        'Отчеты о состоянии системы'
      ],
      suitable: 'До 32 камер',
      response: '4 часа',
      popular: true
    },
    {
      name: 'Премиум',
      price: '25 000 ₽/мес',
      description: 'Максимальный уровень обслуживания',
      features: [
        'Все услуги стандартного плана',
        'Круглосуточный мониторинг',
        'Выезд специалиста в течение 2 часов',
        'Превентивная диагностика',
        'Замена оборудования на время ремонта',
        'Персональный менеджер',
        'Консультации по развитию системы'
      ],
      suitable: 'Любое количество камер',
      response: '2 часа'
    }
  ];

  const serviceTypes = [
    {
      title: 'Плановое обслуживание',
      description: 'Регулярные проверки и профилактика',
      icon: 'Calendar',
      services: [
        'Очистка камер и оборудования',
        'Проверка кабельных соединений',
        'Тестирование записи и воспроизведения',
        'Обновление программного обеспечения',
        'Проверка настроек безопасности'
      ]
    },
    {
      title: 'Экстренный ремонт',
      description: 'Устранение неисправностей 24/7',
      icon: 'AlertTriangle',
      services: [
        'Диагностика неисправностей',
        'Замена вышедшего из строя оборудования',
        'Восстановление записи',
        'Настройка после сбоев',
        'Экстренный выезд специалиста'
      ]
    },
    {
      title: 'Модернизация системы',
      description: 'Улучшение и расширение возможностей',
      icon: 'Upgrade',
      services: [
        'Добавление новых камер',
        'Обновление до новых технологий',
        'Интеграция с другими системами',
        'Улучшение качества записи',
        'Расширение функциональности'
      ]
    },
    {
      title: 'Консультации и обучение',
      description: 'Помощь в использовании системы',
      icon: 'GraduationCap',
      services: [
        'Обучение персонала',
        'Консультации по настройкам',
        'Оптимизация работы системы',
        'Рекомендации по улучшению',
        'Техническая документация'
      ]
    }
  ];

  const commonIssues = [
    {
      problem: 'Нет изображения с камеры',
      solutions: [
        'Проверить питание камеры',
        'Проверить кабельные соединения',
        'Перезагрузить камеру',
        'Проверить настройки сети'
      ],
      urgency: 'Высокая'
    },
    {
      problem: 'Плохое качество записи',
      solutions: [
        'Очистить объектив камеры',
        'Проверить настройки качества',
        'Проверить освещение',
        'Настроить фокусировку'
      ],
      urgency: 'Средняя'
    },
    {
      problem: 'Система не записывает',
      solutions: [
        'Проверить свободное место на диске',
        'Проверить настройки записи',
        'Перезагрузить регистратор',
        'Проверить расписание записи'
      ],
      urgency: 'Высокая'
    },
    {
      problem: 'Нет удаленного доступа',
      solutions: [
        'Проверить интернет-соединение',
        'Проверить настройки роутера',
        'Проверить порты и firewall',
        'Обновить мобильное приложение'
      ],
      urgency: 'Средняя'
    }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setServiceRequest(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Service request:', serviceRequest);
  };

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Техническое обслуживание</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Профессиональное обслуживание систем видеонаблюдения для стабильной работы 
              и максимального срока службы оборудования
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Maintenance Plans */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Планы обслуживания</h2>
            <p className="text-xl text-medium-gray">Выберите подходящий план технического обслуживания</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'ring-2 ring-professional-blue' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-professional-blue text-white px-3 py-1 text-sm">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-professional-blue">{plan.price}</div>
                  <p className="text-medium-gray">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Icon name="Check" className="h-5 w-5 text-professional-blue mr-3 flex-shrink-0" />
                        <span className="text-medium-gray text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-light-gray rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-medium-gray">Подходит для:</span>
                        <div className="font-medium text-dark-slate">{plan.suitable}</div>
                      </div>
                      <div>
                        <span className="text-medium-gray">Время реакции:</span>
                        <div className="font-medium text-dark-slate">{plan.response}</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-professional-blue hover:bg-blue-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Types */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Виды обслуживания</h2>
            <p className="text-xl text-medium-gray">Полный спектр услуг по поддержке вашей системы</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTypes.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-professional-blue rounded-lg flex items-center justify-center">
                      <Icon name={service.icon} className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle>{service.title}</CardTitle>
                      <p className="text-medium-gray">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <Icon name="ArrowRight" className="h-4 w-4 text-professional-blue mr-2 flex-shrink-0" />
                        <span className="text-medium-gray text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Request Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Заявка на обслуживание</CardTitle>
                <p className="text-medium-gray">
                  Опишите проблему или выберите тип обслуживания
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Тип обращения *</label>
                    <Select value={serviceRequest.type} onValueChange={(value) => handleInputChange('type', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип обращения" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maintenance">Плановое обслуживание</SelectItem>
                        <SelectItem value="repair">Экстренный ремонт</SelectItem>
                        <SelectItem value="upgrade">Модернизация</SelectItem>
                        <SelectItem value="consultation">Консультация</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Приоритет</label>
                    <Select value={serviceRequest.priority} onValueChange={(value) => handleInputChange('priority', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите приоритет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Низкий</SelectItem>
                        <SelectItem value="medium">Средний</SelectItem>
                        <SelectItem value="high">Высокий</SelectItem>
                        <SelectItem value="critical">Критический</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Описание проблемы *</label>
                    <Textarea
                      placeholder="Подробно опишите проблему или требуемые работы..."
                      rows={4}
                      value={serviceRequest.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Контактное лицо *</label>
                      <Input
                        placeholder="ФИО"
                        value={serviceRequest.contact}
                        onChange={(e) => handleInputChange('contact', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон *</label>
                      <Input
                        placeholder="+7 (___) ___-__-__"
                        value={serviceRequest.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Адрес объекта *</label>
                    <Textarea
                      placeholder="Адрес, где требуется обслуживание"
                      rows={2}
                      value={serviceRequest.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="service-agreement"
                      checked={serviceRequest.agreement}
                      onCheckedChange={(checked) => handleInputChange('agreement', checked as boolean)}
                    />
                    <label htmlFor="service-agreement" className="text-sm text-medium-gray">
                      Согласен с условиями обслуживания
                    </label>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-professional-blue hover:bg-blue-700"
                    disabled={!serviceRequest.agreement}
                  >
                    <Icon name="Send" className="h-4 w-4 mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Common Issues */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Частые проблемы и решения</CardTitle>
                <p className="text-medium-gray">
                  Попробуйте решить проблему самостоятельно
                </p>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="0" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="0">Изображение</TabsTrigger>
                    <TabsTrigger value="1">Запись</TabsTrigger>
                  </TabsList>

                  {commonIssues.slice(0, 2).map((issue, index) => (
                    <TabsContent key={index} value={index.toString()}>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-dark-slate">{issue.problem}</h3>
                          <Badge variant={issue.urgency === 'Высокая' ? 'destructive' : 'secondary'}>
                            {issue.urgency}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          {issue.solutions.map((solution, idx) => (
                            <div key={idx} className="flex items-center">
                              <Icon name="ArrowRight" className="h-4 w-4 text-professional-blue mr-2" />
                              <span className="text-medium-gray text-sm">{solution}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center">
                  <Icon name="AlertTriangle" className="h-5 w-5 mr-2" />
                  Экстренная поддержка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 mb-4">
                  При критических неисправностях звоните по телефону экстренной поддержки
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  +7 (343) 123-45-99
                </Button>
              </CardContent>
            </Card>

            {/* Service Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Статистика обслуживания</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-medium-gray">Среднее время реакции</span>
                      <span className="text-sm font-medium">2.5 часа</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-medium-gray">Решение с первого визита</span>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-medium-gray">Удовлетворенность клиентов</span>
                      <span className="text-sm font-medium">98%</span>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Преимущества нашего обслуживания</h2>
            <p className="text-xl text-medium-gray">Почему стоит выбрать наш сервис</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Clock', title: 'Быстрое реагирование', desc: 'Выезд в течение 2-4 часов' },
              { icon: 'Award', title: 'Опытные специалисты', desc: 'Сертифицированные инженеры' },
              { icon: 'Shield', title: 'Гарантия качества', desc: 'Гарантия на все виды работ' },
              { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Круглосуточная техподдержка' }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-professional-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-gray">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-dark-slate text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна техническая поддержка?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Наши специалисты готовы помочь с любыми вопросами по обслуживанию системы видеонаблюдения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-professional-blue hover:bg-blue-700">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              +7 (343) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-slate">
              <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
              Онлайн-чат
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}