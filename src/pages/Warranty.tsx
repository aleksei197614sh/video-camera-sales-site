import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Warranty() {
  const [warrantyCheck, setWarrantyCheck] = useState({
    serialNumber: '',
    purchaseDate: '',
    result: null
  });

  const [claimForm, setClaimForm] = useState({
    serialNumber: '',
    issueType: '',
    description: '',
    contact: '',
    phone: '',
    email: '',
    address: ''
  });

  const warrantyTerms = [
    {
      category: 'IP камеры',
      standard: '3 года',
      extended: '5 лет',
      conditions: [
        'Гарантия на производственные дефекты',
        'Бесплатный ремонт или замена',
        'Исключается механическое повреждение',
        'Требуется сохранение товарного вида'
      ]
    },
    {
      category: 'Аналоговые камеры',
      standard: '2 года',
      extended: '3 года',
      conditions: [
        'Гарантия на электронные компоненты',
        'Замена неисправных деталей',
        'Не покрывает износ от эксплуатации',
        'Действует при соблюдении условий установки'
      ]
    },
    {
      category: 'Регистраторы NVR/DVR',
      standard: '3 года',
      extended: '5 лет',
      conditions: [
        'Полная гарантия на все компоненты',
        'Бесплатное восстановление данных',
        'Замена жестких дисков по гарантии',
        'Техническая поддержка включена'
      ]
    },
    {
      category: 'Аксессуары',
      standard: '1 год',
      extended: '2 года',
      conditions: [
        'Гарантия на кабели и крепления',
        'Замена при производственном браке',
        'Исключается неправильная установка',
        'Проверка совместимости обязательна'
      ]
    }
  ];

  const warrantyProcess = [
    {
      step: 1,
      title: 'Проверка гарантии',
      description: 'Введите серийный номер для проверки гарантийного статуса',
      icon: 'Search'
    },
    {
      step: 2,
      title: 'Подача заявки',
      description: 'Заполните форму с описанием проблемы',
      icon: 'FileText'
    },
    {
      step: 3,
      title: 'Диагностика',
      description: 'Наши специалисты проведут диагностику оборудования',
      icon: 'Stethoscope'
    },
    {
      step: 4,
      title: 'Решение проблемы',
      description: 'Ремонт, замена или возврат средств согласно гарантии',
      icon: 'CheckCircle'
    }
  ];

  const faqItems = [
    {
      question: 'Что покрывает гарантия?',
      answer: 'Гарантия покрывает производственные дефекты, неисправности электронных компонентов и программного обеспечения. Не покрывается механическое повреждение, неправильная эксплуатация и естественный износ.'
    },
    {
      question: 'Как проверить гарантийный статус?',
      answer: 'Введите серийный номер устройства в форму проверки на этой странице. Система покажет статус гарантии, дату окончания и доступные опции обслуживания.'
    },
    {
      question: 'Что делать при поломке в гарантийный период?',
      answer: 'Обратитесь в наш сервисный центр по телефону или через форму на сайте. Опишите проблему и предоставьте серийный номер. Мы организуем диагностику и ремонт.'
    },
    {
      question: 'Можно ли продлить гарантию?',
      answer: 'Да, мы предлагаем программы расширенной гарантии до 5 лет. Продление возможно в течение первого года эксплуатации оборудования.'
    },
    {
      question: 'Что не покрывается гарантией?',
      answer: 'Механические повреждения, воздействие влаги (если не предусмотрено), неправильная установка, использование не по назначению, самостоятельный ремонт.'
    }
  ];

  const handleWarrantyCheck = (e: React.FormEvent) => {
    e.preventDefault();
    // Имитация проверки гарантии
    setWarrantyCheck(prev => ({
      ...prev,
      result: {
        status: 'active',
        product: 'SecurityPro Dome 4K Ultra HD',
        purchaseDate: '15.03.2024',
        expiryDate: '15.03.2027',
        remainingDays: 456
      }
    }));
  };

  const handleClaimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Warranty claim:', claimForm);
  };

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Гарантийное обслуживание</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Надежная гарантия на все оборудование и профессиональное 
              гарантийное обслуживание от сертифицированных специалистов
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="check" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="check">Проверка гарантии</TabsTrigger>
                <TabsTrigger value="claim">Гарантийная заявка</TabsTrigger>
                <TabsTrigger value="terms">Условия гарантии</TabsTrigger>
              </TabsList>

              {/* Warranty Check */}
              <TabsContent value="check">
                <Card>
                  <CardHeader>
                    <CardTitle>Проверка гарантийного статуса</CardTitle>
                    <p className="text-medium-gray">
                      Введите серийный номер устройства для проверки гарантии
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleWarrantyCheck} className="space-y-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Серийный номер *</label>
                        <Input
                          placeholder="Например: SP4K001234567"
                          value={warrantyCheck.serialNumber}
                          onChange={(e) => setWarrantyCheck(prev => ({ ...prev, serialNumber: e.target.value }))}
                          required
                        />
                        <p className="text-xs text-medium-gray mt-1">
                          Серийный номер указан на наклейке устройства
                        </p>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Дата покупки (опционально)</label>
                        <Input
                          type="date"
                          value={warrantyCheck.purchaseDate}
                          onChange={(e) => setWarrantyCheck(prev => ({ ...prev, purchaseDate: e.target.value }))}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-professional-blue hover:bg-blue-700">
                        <Icon name="Search" className="h-4 w-4 mr-2" />
                        Проверить гарантию
                      </Button>
                    </form>

                    {/* Warranty Result */}
                    {warrantyCheck.result && (
                      <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center mb-4">
                          <Icon name="CheckCircle" className="h-6 w-6 text-green-600 mr-3" />
                          <h3 className="text-lg font-semibold text-green-800">Гарантия активна</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Продукт:</span>
                            <div className="font-medium">{warrantyCheck.result.product}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Дата покупки:</span>
                            <div className="font-medium">{warrantyCheck.result.purchaseDate}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Гарантия до:</span>
                            <div className="font-medium">{warrantyCheck.result.expiryDate}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Осталось дней:</span>
                            <div className="font-medium text-green-600">{warrantyCheck.result.remainingDays}</div>
                          </div>
                        </div>
                        
                        <Button className="mt-4 bg-green-600 hover:bg-green-700">
                          <Icon name="FileText" className="h-4 w-4 mr-2" />
                          Подать гарантийную заявку
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Warranty Claim */}
              <TabsContent value="claim">
                <Card>
                  <CardHeader>
                    <CardTitle>Подача гарантийной заявки</CardTitle>
                    <p className="text-medium-gray">
                      Заполните форму для оформления гарантийного случая
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleClaimSubmit} className="space-y-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Серийный номер *</label>
                        <Input
                          placeholder="SP4K001234567"
                          value={claimForm.serialNumber}
                          onChange={(e) => setClaimForm(prev => ({ ...prev, serialNumber: e.target.value }))}
                          required
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Тип проблемы *</label>
                        <Select value={claimForm.issueType} onValueChange={(value) => setClaimForm(prev => ({ ...prev, issueType: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите тип проблемы" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no-power">Не включается</SelectItem>
                            <SelectItem value="no-image">Нет изображения</SelectItem>
                            <SelectItem value="poor-quality">Плохое качество</SelectItem>
                            <SelectItem value="no-recording">Не записывает</SelectItem>
                            <SelectItem value="network">Проблемы с сетью</SelectItem>
                            <SelectItem value="software">Проблемы с ПО</SelectItem>
                            <SelectItem value="other">Другое</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Описание проблемы *</label>
                        <Textarea
                          placeholder="Подробно опишите проблему, когда она возникла, какие действия предпринимались..."
                          rows={4}
                          value={claimForm.description}
                          onChange={(e) => setClaimForm(prev => ({ ...prev, description: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Контактное лицо *</label>
                          <Input
                            placeholder="ФИО"
                            value={claimForm.contact}
                            onChange={(e) => setClaimForm(prev => ({ ...prev, contact: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Телефон *</label>
                          <Input
                            placeholder="+7 (___) ___-__-__"
                            value={claimForm.phone}
                            onChange={(e) => setClaimForm(prev => ({ ...prev, phone: e.target.value }))}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={claimForm.email}
                          onChange={(e) => setClaimForm(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Адрес установки</label>
                        <Textarea
                          placeholder="Адрес, где установлено оборудование"
                          rows={2}
                          value={claimForm.address}
                          onChange={(e) => setClaimForm(prev => ({ ...prev, address: e.target.value }))}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-professional-blue hover:bg-blue-700">
                        <Icon name="Send" className="h-4 w-4 mr-2" />
                        Подать заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Warranty Terms */}
              <TabsContent value="terms">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Гарантийные условия по категориям</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {warrantyTerms.map((term, index) => (
                          <div key={index} className="border rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-lg font-semibold text-dark-slate">{term.category}</h3>
                              <div className="flex space-x-2">
                                <Badge className="bg-professional-blue text-white">
                                  Стандарт: {term.standard}
                                </Badge>
                                <Badge variant="outline">
                                  Расширенная: {term.extended}
                                </Badge>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {term.conditions.map((condition, idx) => (
                                <div key={idx} className="flex items-center">
                                  <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2 flex-shrink-0" />
                                  <span className="text-sm text-medium-gray">{condition}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* FAQ */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Часто задаваемые вопросы</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible>
                        {faqItems.map((item, index) => (
                          <AccordionItem key={index} value={`faq-${index}`}>
                            <AccordionTrigger className="text-left">
                              {item.question}
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="text-medium-gray">{item.answer}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Warranty Process */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Info" className="h-5 w-5 mr-2" />
                  Процесс гарантийного обслуживания
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {warrantyProcess.map((step, index) => (
                  <div key={step.step} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-professional-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{step.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-slate text-sm">{step.title}</h4>
                      <p className="text-xs text-medium-gray">{step.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Headphones" className="h-5 w-5 mr-2" />
                  Гарантийная поддержка
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-professional-blue" />
                  <div>
                    <p className="font-medium">+7 (343) 123-45-69</p>
                    <p className="text-sm text-medium-gray">Гарантийный отдел</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-professional-blue" />
                  <div>
                    <p className="font-medium">warranty@securetech.ru</p>
                    <p className="text-sm text-medium-gray">Гарантийные вопросы</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="h-5 w-5 text-professional-blue" />
                  <div>
                    <p className="font-medium">Пн-Пт: 9:00-18:00</p>
                    <p className="text-sm text-medium-gray">Время работы</p>
                  </div>
                </div>
                
                <Separator />
                
                <Button className="w-full bg-professional-blue hover:bg-blue-700">
                  <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                  Связаться с поддержкой
                </Button>
              </CardContent>
            </Card>

            {/* Extended Warranty */}
            <Card className="bg-gradient-to-br from-professional-blue/10 to-transparent">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Shield" className="h-5 w-5 mr-2" />
                  Расширенная гарантия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-medium-gray mb-4">
                  Продлите гарантию до 5 лет и получите дополнительные преимущества
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2" />
                    <span className="text-sm">Приоритетное обслуживание</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2" />
                    <span className="text-sm">Бесплатная диагностика</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2" />
                    <span className="text-sm">Скидки на запчасти</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="Plus" className="h-4 w-4 mr-2" />
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Быстрые действия</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Download" className="h-4 w-4 mr-2" />
                  Скачать гарантийный талон
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="FileText" className="h-4 w-4 mr-2" />
                  Инструкция по эксплуатации
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Video" className="h-4 w-4 mr-2" />
                  Видео по настройке
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Warranty Benefits */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Преимущества нашей гарантии</h2>
            <p className="text-xl text-medium-gray">Что получают наши клиенты</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Shield', title: 'До 5 лет гарантии', desc: 'Максимальная защита инвестиций' },
              { icon: 'Zap', title: 'Быстрое реагирование', desc: 'Решение проблем в течение 24 часов' },
              { icon: 'Wrench', title: 'Бесплатный ремонт', desc: 'Все работы за наш счет' },
              { icon: 'Repeat', title: 'Замена оборудования', desc: 'При невозможности ремонта' }
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
          <h2 className="text-3xl font-bold mb-4">Нужна помощь с гарантией?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Наши специалисты помогут разобраться с любыми гарантийными вопросами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-professional-blue hover:bg-blue-700">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              +7 (343) 123-45-69
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-slate">
              <Icon name="Mail" className="h-5 w-5 mr-2" />
              warranty@securetech.ru
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}