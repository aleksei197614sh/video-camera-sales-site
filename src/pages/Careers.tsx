import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

export default function Careers() {
  const [applicationForm, setApplicationForm] = useState({
    position: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    education: '',
    skills: '',
    motivation: '',
    salary: '',
    startDate: '',
    agreement: false
  });

  const openPositions = [
    {
      id: 1,
      title: 'Инженер по видеонаблюдению',
      department: 'Технический отдел',
      type: 'Полная занятость',
      location: 'Екатеринбург',
      experience: '2-5 лет',
      salary: '80 000 - 120 000 ₽',
      description: 'Проектирование, установка и настройка систем видеонаблюдения для коммерческих объектов',
      requirements: [
        'Опыт работы с IP камерами и NVR',
        'Знание сетевых технологий',
        'Опыт монтажных работ',
        'Водительские права категории B',
        'Готовность к командировкам'
      ],
      responsibilities: [
        'Выезд на объекты для консультаций',
        'Проектирование систем видеонаблюдения',
        'Монтаж и настройка оборудования',
        'Техническая поддержка клиентов',
        'Ведение технической документации'
      ],
      benefits: [
        'Официальное трудоустройство',
        'Медицинская страховка',
        'Обучение за счет компании',
        'Корпоративный автомобиль',
        'Премии за выполнение планов'
      ],
      urgent: true
    },
    {
      id: 2,
      title: 'Менеджер по продажам',
      department: 'Отдел продаж',
      type: 'Полная занятость',
      location: 'Екатеринбург',
      experience: '1-3 года',
      salary: '60 000 - 100 000 ₽',
      description: 'Продажа систем видеонаблюдения корпоративным клиентам, развитие клиентской базы',
      requirements: [
        'Опыт продаж B2B',
        'Коммуникативные навыки',
        'Знание основ видеонаблюдения',
        'Опыт работы с CRM',
        'Водительские права'
      ],
      responsibilities: [
        'Поиск и привлечение новых клиентов',
        'Консультирование по продуктам',
        'Подготовка коммерческих предложений',
        'Ведение переговоров',
        'Сопровождение сделок'
      ],
      benefits: [
        'Высокие комиссионные',
        'Корпоративное обучение',
        'Гибкий график',
        'Карьерный рост',
        'Корпоративные мероприятия'
      ],
      urgent: false
    },
    {
      id: 3,
      title: 'Системный администратор',
      department: 'IT отдел',
      type: 'Полная занятость',
      location: 'Екатеринбург',
      experience: '3-7 лет',
      salary: '70 000 - 110 000 ₽',
      description: 'Администрирование IT инфраструктуры компании и клиентских систем',
      requirements: [
        'Опыт администрирования Windows/Linux',
        'Знание сетевых технологий',
        'Опыт работы с системами видеонаблюдения',
        'Знание SQL и баз данных',
        'Английский язык (технический)'
      ],
      responsibilities: [
        'Поддержка IT инфраструктуры',
        'Настройка серверного оборудования',
        'Администрирование систем видеонаблюдения',
        'Резервное копирование данных',
        'Техническая поддержка пользователей'
      ],
      benefits: [
        'Современное оборудование',
        'Удаленная работа 2 дня в неделю',
        'Профессиональное развитие',
        'Сертификации за счет компании',
        'Дополнительные выходные'
      ],
      urgent: false
    }
  ];

  const companyBenefits = [
    {
      title: 'Конкурентная зарплата',
      description: 'Достойная оплата труда и премии за результат',
      icon: 'DollarSign'
    },
    {
      title: 'Профессиональное развитие',
      description: 'Обучение, сертификации и карьерный рост',
      icon: 'TrendingUp'
    },
    {
      title: 'Современный офис',
      description: 'Комфортное рабочее место в центре города',
      icon: 'Building'
    },
    {
      title: 'Дружная команда',
      description: 'Поддерживающий коллектив и корпоративные мероприятия',
      icon: 'Users'
    },
    {
      title: 'Гибкий график',
      description: 'Возможность удаленной работы и гибкого графика',
      icon: 'Clock'
    },
    {
      title: 'Социальный пакет',
      description: 'Медицинская страховка и дополнительные льготы',
      icon: 'Heart'
    }
  ];

  const companyValues = [
    {
      title: 'Профессионализм',
      description: 'Мы стремимся к совершенству в каждом проекте',
      icon: 'Award'
    },
    {
      title: 'Инновации',
      description: 'Внедряем передовые технологии и решения',
      icon: 'Lightbulb'
    },
    {
      title: 'Клиентоориентированность',
      description: 'Потребности клиента - наш главный приоритет',
      icon: 'Target'
    },
    {
      title: 'Командная работа',
      description: 'Вместе мы достигаем больших результатов',
      icon: 'Users'
    }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setApplicationForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job application:', applicationForm);
  };

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Карьера в SecureTech</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Присоединяйтесь к команде профессионалов в области систем безопасности. 
              Развивайтесь вместе с лидером рынка видеонаблюдения.
            </p>
          </div>
        </div>
      </div>

      {/* Company Benefits */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Почему стоит работать с нами</h2>
            <p className="text-xl text-medium-gray">Преимущества работы в SecureTech</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-professional-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-gray">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Open Positions */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Открытые вакансии</h2>
            <p className="text-xl text-medium-gray">Актуальные предложения для специалистов</p>
          </div>
          
          <div className="space-y-8">
            {openPositions.map(position => (
              <Card key={position.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <CardTitle className="text-2xl">{position.title}</CardTitle>
                        {position.urgent && (
                          <Badge className="bg-red-500 text-white">
                            Срочно
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-medium-gray">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-professional-blue">{position.salary}</div>
                      <div className="text-sm text-medium-gray">Опыт: {position.experience}</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-medium-gray mb-6">{position.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-dark-slate mb-3">Требования:</h4>
                      <div className="space-y-2">
                        {position.requirements.map((req, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <Icon name="ArrowRight" className="h-4 w-4 text-professional-blue mr-2 flex-shrink-0" />
                            <span className="text-medium-gray">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark-slate mb-3">Обязанности:</h4>
                      <div className="space-y-2">
                        {position.responsibilities.map((resp, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-medium-gray">{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark-slate mb-3">Мы предлагаем:</h4>
                      <div className="space-y-2">
                        {position.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <Icon name="Star" className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                            <span className="text-medium-gray">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <Button className="bg-professional-blue hover:bg-blue-700">
                      <Icon name="Send" className="h-4 w-4 mr-2" />
                      Откликнуться на вакансию
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Application Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Отправить резюме</CardTitle>
                <p className="text-medium-gray">
                  Заполните форму, даже если подходящей вакансии нет. 
                  Мы свяжемся с вами при появлении подходящих позиций.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Интересующая позиция</label>
                    <Select value={applicationForm.position} onValueChange={(value) => handleInputChange('position', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите позицию" />
                      </SelectTrigger>
                      <SelectContent>
                        {openPositions.map(position => (
                          <SelectItem key={position.id} value={position.title}>
                            {position.title}
                          </SelectItem>
                        ))}
                        <SelectItem value="other">Другая позиция</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Имя *</label>
                      <Input
                        placeholder="Введите имя"
                        value={applicationForm.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Фамилия *</label>
                      <Input
                        placeholder="Введите фамилию"
                        value={applicationForm.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={applicationForm.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон *</label>
                      <Input
                        placeholder="+7 (___) ___-__-__"
                        value={applicationForm.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Опыт работы</label>
                    <Textarea
                      placeholder="Опишите ваш опыт работы, предыдущие должности..."
                      rows={3}
                      value={applicationForm.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Образование</label>
                    <Input
                      placeholder="Учебное заведение, специальность"
                      value={applicationForm.education}
                      onChange={(e) => handleInputChange('education', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Ключевые навыки</label>
                    <Textarea
                      placeholder="Перечислите ваши профессиональные навыки..."
                      rows={3}
                      value={applicationForm.skills}
                      onChange={(e) => handleInputChange('skills', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Мотивация</label>
                    <Textarea
                      placeholder="Почему вы хотите работать в нашей компании?"
                      rows={3}
                      value={applicationForm.motivation}
                      onChange={(e) => handleInputChange('motivation', e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Желаемая зарплата</label>
                      <Input
                        placeholder="от 80 000 ₽"
                        value={applicationForm.salary}
                        onChange={(e) => handleInputChange('salary', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Готовность приступить</label>
                      <Input
                        type="date"
                        value={applicationForm.startDate}
                        onChange={(e) => handleInputChange('startDate', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="career-agreement"
                      checked={applicationForm.agreement}
                      onCheckedChange={(checked) => handleInputChange('agreement', checked as boolean)}
                    />
                    <label htmlFor="career-agreement" className="text-sm text-medium-gray">
                      Согласен с <a href="#" className="text-professional-blue hover:underline">обработкой персональных данных</a>
                    </label>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-professional-blue hover:bg-blue-700"
                    disabled={!applicationForm.agreement}
                  >
                    <Icon name="Send" className="h-4 w-4 mr-2" />
                    Отправить резюме
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Company Info */}
          <div className="space-y-6">
            {/* Company Values */}
            <Card>
              <CardHeader>
                <CardTitle>Наши ценности</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {companyValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-professional-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={value.icon} className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-slate">{value.title}</h4>
                      <p className="text-sm text-medium-gray">{value.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Team Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Наша команда</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-light-gray rounded-lg">
                    <div className="text-2xl font-bold text-professional-blue">25</div>
                    <div className="text-sm text-medium-gray">Сотрудников</div>
                  </div>
                  <div className="p-4 bg-light-gray rounded-lg">
                    <div className="text-2xl font-bold text-professional-blue">8</div>
                    <div className="text-sm text-medium-gray">Лет средний стаж</div>
                  </div>
                  <div className="p-4 bg-light-gray rounded-lg">
                    <div className="text-2xl font-bold text-professional-blue">18</div>
                    <div className="text-sm text-medium-gray">Сертификатов</div>
                  </div>
                  <div className="p-4 bg-light-gray rounded-lg">
                    <div className="text-2xl font-bold text-professional-blue">95%</div>
                    <div className="text-sm text-medium-gray">Довольны работой</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact HR */}
            <Card>
              <CardHeader>
                <CardTitle>Контакты HR отдела</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="User" className="h-5 w-5 text-professional-blue" />
                  <div>
                    <p className="font-medium">Елена Волкова</p>
                    <p className="text-sm text-medium-gray">HR менеджер</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-professional-blue" />
                  <div>
                    <p className="font-medium">+7 (343) 123-45-70</p>
                    <p className="text-sm text-medium-gray">Вопросы по трудоустройству</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-professional-blue" />
                  <div>
                    <p className="font-medium">hr@securetech.ru</p>
                    <p className="text-sm text-medium-gray">Отправка резюме</p>
                  </div>
                </div>
                
                <Separator />
                
                <Button className="w-full bg-professional-blue hover:bg-blue-700">
                  <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                  Связаться с HR
                </Button>
              </CardContent>
            </Card>

            {/* Office Tour */}
            <Card className="bg-gradient-to-br from-professional-blue/10 to-transparent">
              <CardHeader>
                <CardTitle>Экскурсия по офису</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-medium-gray mb-4">
                  Приглашаем на экскурсию по нашему офису и демо-залу
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <Icon name="MapPin" className="h-4 w-4 text-professional-blue mr-2" />
                    <span className="text-sm">ул. Малышева, 42</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" className="h-4 w-4 text-professional-blue mr-2" />
                    <span className="text-sm">Пн-Пт 10:00-17:00</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="Calendar" className="h-4 w-4 mr-2" />
                  Записаться на экскурсию
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Company Culture */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Корпоративная культура</h2>
            <p className="text-xl text-medium-gray">Как мы работаем и развиваемся вместе</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Обучение и развитие',
                description: 'Регулярные тренинги, сертификации и конференции',
                image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg'
              },
              {
                title: 'Командные мероприятия',
                description: 'Корпоративы, тимбилдинги и совместный отдых',
                image: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg'
              },
              {
                title: 'Современный офис',
                description: 'Комфортное рабочее место с современным оборудованием',
                image: '/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg'
              }
            ].map((culture, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img 
                    src={culture.image} 
                    alt={culture.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-dark-slate mb-2">{culture.title}</h3>
                  <p className="text-medium-gray">{culture.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-dark-slate text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы присоединиться к нашей команде?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Станьте частью динамично развивающейся компании в сфере систем безопасности
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-professional-blue hover:bg-blue-700">
              <Icon name="Send" className="h-5 w-5 mr-2" />
              Отправить резюме
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-slate">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Связаться с HR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}