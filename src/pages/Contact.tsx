import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: '',
    message: '',
    agreement: false
  });

  const contactInfo = [
    {
      title: 'Телефон',
      value: '+7 (343) 123-45-67',
      description: 'Звонки принимаем круглосуточно',
      icon: 'Phone',
      action: 'tel:+73431234567'
    },
    {
      title: 'Email',
      value: 'info@securetech.ru',
      description: 'Техническая поддержка и консультации',
      icon: 'Mail',
      action: 'mailto:info@securetech.ru'
    },
    {
      title: 'Адрес офиса',
      value: 'г. Екатеринбург, ул. Малышева, 42',
      description: 'Офис и демо-зал оборудования',
      icon: 'MapPin',
      action: '#'
    },
    {
      title: 'Режим работы',
      value: 'Пн-Пт: 9:00-18:00, Сб: 10:00-16:00',
      description: 'Воскресенье - выходной',
      icon: 'Clock',
      action: '#'
    }
  ];

  const departments = [
    {
      name: 'Отдел продаж',
      phone: '+7 (343) 123-45-67',
      email: 'sales@securetech.ru',
      description: 'Консультации по оборудованию и решениям'
    },
    {
      name: 'Техническая поддержка',
      phone: '+7 (343) 123-45-68',
      email: 'support@securetech.ru',
      description: 'Помощь по настройке и эксплуатации'
    },
    {
      name: 'Сервисный центр',
      phone: '+7 (343) 123-45-69',
      email: 'service@securetech.ru',
      description: 'Ремонт и обслуживание оборудования'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь 
              с выбором и настройкой систем видеонаблюдения
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Info" className="h-5 w-5 mr-2" />
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-professional-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={info.icon} className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-dark-slate">{info.title}</h3>
                      <p className="text-professional-blue font-medium">{info.value}</p>
                      <p className="text-sm text-medium-gray">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Departments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Users" className="h-5 w-5 mr-2" />
                  Отделы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="border-l-4 border-professional-blue pl-4">
                    <h3 className="font-semibold text-dark-slate">{dept.name}</h3>
                    <p className="text-sm text-professional-blue">{dept.phone}</p>
                    <p className="text-sm text-professional-blue">{dept.email}</p>
                    <p className="text-xs text-medium-gray">{dept.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Forms */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="consultation" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="consultation">Консультация</TabsTrigger>
                <TabsTrigger value="callback">Обратный звонок</TabsTrigger>
                <TabsTrigger value="service">Сервис</TabsTrigger>
              </TabsList>

              <TabsContent value="consultation">
                <Card>
                  <CardHeader>
                    <CardTitle>Заказать консультацию</CardTitle>
                    <p className="text-medium-gray">
                      Получите профессиональную консультацию по выбору системы видеонаблюдения
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
                          <Input
                            placeholder="Введите ваше имя"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Телефон *</label>
                          <Input
                            placeholder="+7 (___) ___-__-__"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Email</label>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Компания</label>
                          <Input
                            placeholder="Название компании"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Интересующая услуга</label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите услугу" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consultation">Консультация</SelectItem>
                            <SelectItem value="design">Проектирование</SelectItem>
                            <SelectItem value="installation">Монтаж</SelectItem>
                            <SelectItem value="maintenance">Обслуживание</SelectItem>
                            <SelectItem value="equipment">Поставка оборудования</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Описание задачи</label>
                        <Textarea
                          placeholder="Опишите ваш объект, требования к системе видеонаблюдения..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="agreement"
                          checked={formData.agreement}
                          onCheckedChange={(checked) => handleInputChange('agreement', checked as boolean)}
                        />
                        <label htmlFor="agreement" className="text-sm text-medium-gray">
                          Согласен с <a href="#" className="text-professional-blue hover:underline">политикой конфиденциальности</a>
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
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="callback">
                <Card>
                  <CardHeader>
                    <CardTitle>Заказать обратный звонок</CardTitle>
                    <p className="text-medium-gray">
                      Оставьте номер телефона и мы перезвоним в течение 15 минут
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
                        <Input placeholder="Введите ваше имя" required />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Телефон *</label>
                        <Input placeholder="+7 (___) ___-__-__" required />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Удобное время для звонка</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите время" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="now">Сейчас</SelectItem>
                            <SelectItem value="morning">Утром (9:00-12:00)</SelectItem>
                            <SelectItem value="afternoon">Днем (12:00-15:00)</SelectItem>
                            <SelectItem value="evening">Вечером (15:00-18:00)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Комментарий</label>
                        <Textarea placeholder="Кратко опишите ваш вопрос..." rows={3} />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="callback-agreement" />
                        <label htmlFor="callback-agreement" className="text-sm text-medium-gray">
                          Согласен с политикой конфиденциальности
                        </label>
                      </div>

                      <Button className="w-full bg-professional-blue hover:bg-blue-700">
                        <Icon name="Phone" className="h-4 w-4 mr-2" />
                        Заказать звонок
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="service">
                <Card>
                  <CardHeader>
                    <CardTitle>Заявка на сервисное обслуживание</CardTitle>
                    <p className="text-medium-gray">
                      Опишите проблему с оборудованием для быстрого решения
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Контактное лицо *</label>
                          <Input placeholder="ФИО" required />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Телефон *</label>
                          <Input placeholder="+7 (___) ___-__-__" required />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Адрес объекта</label>
                        <Input placeholder="Адрес, где установлено оборудование" />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Тип проблемы</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите тип проблемы" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no-image">Нет изображения</SelectItem>
                            <SelectItem value="poor-quality">Плохое качество</SelectItem>
                            <SelectItem value="no-recording">Не записывает</SelectItem>
                            <SelectItem value="network">Проблемы с сетью</SelectItem>
                            <SelectItem value="hardware">Неисправность оборудования</SelectItem>
                            <SelectItem value="other">Другое</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Описание проблемы *</label>
                        <Textarea 
                          placeholder="Подробно опишите проблему, когда она возникла, какие действия предпринимались..."
                          rows={4}
                          required
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Приоритет</label>
                        <Select>
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

                      <Button className="w-full bg-professional-blue hover:bg-blue-700">
                        <Icon name="Wrench" className="h-4 w-4 mr-2" />
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Как нас найти</h2>
            <p className="text-xl text-medium-gray">Наш офис и демо-зал в центре Екатеринбурга</p>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <Icon name="MapPin" className="h-12 w-12 text-professional-blue mx-auto mb-4" />
              <p className="text-dark-slate font-semibold">Интерактивная карта</p>
              <p className="text-medium-gray">г. Екатеринбург, ул. Малышева, 42</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-light-gray py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-medium-gray">Ответы на популярные вопросы о наших услугах</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'Как быстро вы можете выехать на объект?',
                answer: 'В пределах Екатеринбурга выезжаем в течение 2 часов. В области - в течение суток.'
              },
              {
                question: 'Предоставляете ли вы гарантию на оборудование?',
                answer: 'Да, гарантия на оборудование до 5 лет, на монтажные работы - 2 года.'
              },
              {
                question: 'Можно ли посмотреть оборудование перед покупкой?',
                answer: 'Конечно! У нас есть демо-зал, где можно посмотреть и протестировать оборудование.'
              },
              {
                question: 'Работаете ли вы с юридическими лицами?',
                answer: 'Да, мы работаем как с физическими, так и с юридическими лицами. Предоставляем все необходимые документы.'
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-dark-slate">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-gray">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}