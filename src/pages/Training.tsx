import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Training() {
  const [registrationForm, setRegistrationForm] = useState({
    course: '',
    format: '',
    name: '',
    company: '',
    position: '',
    phone: '',
    email: '',
    experience: '',
    goals: ''
  });

  const courses = [
    {
      id: 1,
      title: 'Основы видеонаблюдения',
      level: 'Начальный',
      duration: '8 часов',
      format: ['Очно', 'Онлайн'],
      price: 15000,
      description: 'Базовый курс для новичков в области систем видеонаблюдения',
      topics: [
        'Принципы работы систем видеонаблюдения',
        'Типы камер и их применение',
        'Основы сетевых технологий',
        'Базовая настройка оборудования',
        'Правовые аспекты видеонаблюдения'
      ],
      certificate: true,
      nextDate: '25 декабря 2024',
      participants: 12,
      maxParticipants: 15
    },
    {
      id: 2,
      title: 'IP видеонаблюдение: проектирование и настройка',
      level: 'Средний',
      duration: '16 часов',
      format: ['Очно'],
      price: 28000,
      description: 'Углубленное изучение IP систем видеонаблюдения',
      topics: [
        'Архитектура IP систем',
        'Расчет пропускной способности сети',
        'Настройка NVR и камер',
        'Системы хранения данных',
        'Удаленный доступ и мобильные приложения',
        'Интеграция с другими системами'
      ],
      certificate: true,
      nextDate: '15 января 2025',
      participants: 8,
      maxParticipants: 12
    },
    {
      id: 3,
      title: 'AI аналитика в видеонаблюдении',
      level: 'Продвинутый',
      duration: '12 часов',
      format: ['Очно', 'Онлайн'],
      price: 35000,
      description: 'Современные технологии искусственного интеллекта',
      topics: [
        'Принципы работы AI в видеонаблюдении',
        'Распознавание лиц и объектов',
        'Анализ поведения и детекция событий',
        'Настройка алгоритмов машинного обучения',
        'Интеграция AI с существующими системами'
      ],
      certificate: true,
      nextDate: '20 января 2025',
      participants: 5,
      maxParticipants: 10
    },
    {
      id: 4,
      title: 'Техническое обслуживание систем безопасности',
      level: 'Средний',
      duration: '10 часов',
      format: ['Очно'],
      price: 22000,
      description: 'Профессиональное обслуживание и диагностика',
      topics: [
        'Планирование технического обслуживания',
        'Диагностика неисправностей',
        'Профилактические работы',
        'Замена компонентов и настройка',
        'Ведение технической документации'
      ],
      certificate: true,
      nextDate: '10 февраля 2025',
      participants: 3,
      maxParticipants: 8
    }
  ];

  const instructors = [
    {
      name: 'Алексей Петров',
      position: 'Ведущий инженер',
      experience: '15 лет',
      specialization: 'IP системы, проектирование',
      certifications: ['Hikvision Certified', 'Axis Solution Partner'],
      image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg'
    },
    {
      name: 'Мария Сидорова',
      position: 'Технический директор',
      experience: '12 лет',
      specialization: 'AI аналитика, интеграции',
      certifications: ['Dahua Certified', 'AI Specialist'],
      image: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Сервис-инженер',
      experience: '10 лет',
      specialization: 'Обслуживание, диагностика',
      certifications: ['Service Expert', 'Technical Support'],
      image: '/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg'
    }
  ];

  const benefits = [
    {
      title: 'Сертификат об окончании',
      description: 'Официальный документ о прохождении обучения',
      icon: 'Award'
    },
    {
      title: 'Практические навыки',
      description: 'Работа с реальным оборудованием',
      icon: 'Wrench'
    },
    {
      title: 'Методические материалы',
      description: 'Полный комплект обучающих материалов',
      icon: 'BookOpen'
    },
    {
      title: 'Техническая поддержка',
      description: '3 месяца бесплатных консультаций',
      icon: 'Headphones'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setRegistrationForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Training registration:', registrationForm);
  };

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Обучение и сертификация</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Профессиональные курсы по системам видеонаблюдения от практикующих экспертов. 
              Получите знания и сертификаты для успешной работы в сфере безопасности.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Courses */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Доступные курсы</h2>
            <p className="text-xl text-medium-gray">Выберите курс, соответствующий вашему уровню подготовки</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map(course => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`${
                      course.level === 'Начальный' ? 'bg-green-100 text-green-800' :
                      course.level === 'Средний' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {course.level}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-professional-blue">
                        {course.price.toLocaleString()} ₽
                      </div>
                      <div className="text-sm text-medium-gray">{course.duration}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <p className="text-medium-gray">{course.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-dark-slate mb-2">Программа курса:</h4>
                      <div className="space-y-1">
                        {course.topics.map((topic, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2 flex-shrink-0" />
                            <span className="text-medium-gray">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-medium-gray">Следующий курс:</span>
                        <div className="font-medium text-dark-slate">{course.nextDate}</div>
                      </div>
                      <div>
                        <span className="text-medium-gray">Мест свободно:</span>
                        <div className="font-medium text-dark-slate">
                          {course.maxParticipants - course.participants} из {course.maxParticipants}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-medium-gray">Заполненность</span>
                        <span>{Math.round((course.participants / course.maxParticipants) * 100)}%</span>
                      </div>
                      <Progress value={(course.participants / course.maxParticipants) * 100} className="h-2" />
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {course.format.map(format => (
                        <Badge key={format} variant="secondary" className="text-xs">
                          {format}
                        </Badge>
                      ))}
                      {course.certificate && (
                        <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                          Сертификат
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-professional-blue hover:bg-blue-700">
                    <Icon name="UserPlus" className="h-4 w-4 mr-2" />
                    Записаться на курс
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Instructors */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Наши преподаватели</h2>
            <p className="text-xl text-medium-gray">Практикующие эксперты с многолетним опытом</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gray-100 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-dark-slate mb-2">{instructor.name}</h3>
                  <p className="text-professional-blue font-medium mb-1">{instructor.position}</p>
                  <Badge variant="secondary" className="mb-4">{instructor.experience}</Badge>
                  
                  <div className="text-left">
                    <h4 className="font-semibold text-dark-slate mb-2">Специализация:</h4>
                    <p className="text-sm text-medium-gray mb-4">{instructor.specialization}</p>
                    
                    <h4 className="font-semibold text-dark-slate mb-2">Сертификации:</h4>
                    <div className="space-y-1">
                      {instructor.certifications.map((cert, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs mr-1">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Registration Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Регистрация на курс</CardTitle>
                <p className="text-medium-gray">
                  Заполните форму для записи на обучение
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Выберите курс *</label>
                    <Select value={registrationForm.course} onValueChange={(value) => handleInputChange('course', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите курс" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map(course => (
                          <SelectItem key={course.id} value={course.id.toString()}>
                            {course.title} - {course.price.toLocaleString()} ₽
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Формат обучения *</label>
                    <Select value={registrationForm.format} onValueChange={(value) => handleInputChange('format', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите формат" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="offline">Очное обучение</SelectItem>
                        <SelectItem value="online">Онлайн обучение</SelectItem>
                        <SelectItem value="individual">Индивидуальное обучение</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">ФИО *</label>
                      <Input
                        placeholder="Введите полное имя"
                        value={registrationForm.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Компания</label>
                      <Input
                        placeholder="Название компании"
                        value={registrationForm.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Должность</label>
                    <Input
                      placeholder="Ваша должность"
                      value={registrationForm.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон *</label>
                      <Input
                        placeholder="+7 (___) ___-__-__"
                        value={registrationForm.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={registrationForm.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Опыт работы</label>
                    <Select value={registrationForm.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите опыт" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Нет опыта</SelectItem>
                        <SelectItem value="basic">Базовые знания</SelectItem>
                        <SelectItem value="intermediate">1-3 года</SelectItem>
                        <SelectItem value="advanced">Более 3 лет</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Цели обучения</label>
                    <Textarea
                      placeholder="Что вы хотите получить от курса?"
                      rows={3}
                      value={registrationForm.goals}
                      onChange={(e) => handleInputChange('goals', e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-professional-blue hover:bg-blue-700">
                    <Icon name="UserPlus" className="h-4 w-4 mr-2" />
                    Записаться на курс
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Course Benefits */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Что вы получите</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-professional-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={benefit.icon} className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-slate">{benefit.title}</h4>
                      <p className="text-sm text-medium-gray">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Training Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Статистика обучения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-light-gray rounded-lg">
                    <div className="text-2xl font-bold text-professional-blue">250+</div>
                    <div className="text-sm text-medium-gray">Выпускников</div>
                  </div>
                  <div className="p-4 bg-light-gray rounded-lg">
                    <div className="text-2xl font-bold text-professional-blue">4.9</div>
                    <div className="text-sm text-medium-gray">Рейтинг курсов</div>
                  </div>
                  <div className="p-4 bg-light-gray rounded-lg">
                    <div className="text-2xl font-bold text-professional-blue">95%</div>
                    <div className="text-sm text-medium-gray">Успешность</div>
                  </div>
                  <div className="p-4 bg-light-gray rounded-lg">
                    <div className="text-2xl font-bold text-professional-blue">12</div>
                    <div className="text-sm text-medium-gray">Курсов в год</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Corporate Training */}
            <Card className="bg-gradient-to-br from-professional-blue/10 to-transparent">
              <CardHeader>
                <CardTitle>Корпоративное обучение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-medium-gray mb-4">
                  Организуем обучение для вашей команды с выездом к вам в офис
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2" />
                    <span className="text-sm">Индивидуальная программа</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2" />
                    <span className="text-sm">Обучение на вашем оборудовании</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2" />
                    <span className="text-sm">Гибкий график</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="Building" className="h-4 w-4 mr-2" />
                  Заказать корпоративное обучение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Learning Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Как проходит обучение</h2>
            <p className="text-xl text-medium-gray">Структурированный подход к получению знаний</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Теория', desc: 'Изучение основ и принципов', icon: 'BookOpen' },
              { step: 2, title: 'Практика', desc: 'Работа с реальным оборудованием', icon: 'Wrench' },
              { step: 3, title: 'Тестирование', desc: 'Проверка полученных знаний', icon: 'FileCheck' },
              { step: 4, title: 'Сертификация', desc: 'Получение официального сертификата', icon: 'Award' }
            ].map((step, index) => (
              <Card key={step.step} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-professional-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon} className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-dark-slate rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-dark-slate mb-2">{step.title}</h3>
                  <p className="text-sm text-medium-gray">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Отзывы выпускников</h2>
            <p className="text-xl text-medium-gray">Что говорят наши студенты</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Сергей Иванов',
                company: 'ООО "Безопасность"',
                course: 'IP видеонаблюдение',
                text: 'Отличный курс! Получил практические навыки, которые сразу применил в работе. Преподаватели - настоящие профессионалы.',
                rating: 5
              },
              {
                name: 'Анна Козлова',
                company: 'ИП Козлова А.В.',
                course: 'Основы видеонаблюдения',
                text: 'Курс помог разобраться в основах. Теперь могу самостоятельно консультировать клиентов и подбирать оборудование.',
                rating: 5
              },
              {
                name: 'Михаил Петров',
                company: 'ТехСервис',
                course: 'AI аналитика',
                text: 'Современные технологии объяснены простым языком. Много практики с реальными кейсами. Рекомендую!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-professional-blue rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-slate">{testimonial.name}</h3>
                      <p className="text-sm text-medium-gray">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="mb-3">
                    {testimonial.course}
                  </Badge>
                  
                  <p className="text-medium-gray mb-4">"{testimonial.text}"</p>
                  
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
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
          <h2 className="text-3xl font-bold mb-4">Готовы стать экспертом?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Запишитесь на курс и получите профессиональные знания в области видеонаблюдения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-professional-blue hover:bg-blue-700">
              <Icon name="UserPlus" className="h-5 w-5 mr-2" />
              Записаться на курс
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-slate">
              <Icon name="Download" className="h-5 w-5 mr-2" />
              Скачать программу
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}