import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function About() {
  const stats = [
    { label: 'Лет на рынке', value: '12+', icon: 'Calendar' },
    { label: 'Реализованных проектов', value: '500+', icon: 'Building' },
    { label: 'Довольных клиентов', value: '350+', icon: 'Users' },
    { label: 'Специалистов в команде', value: '25', icon: 'UserCheck' }
  ];

  const team = [
    {
      name: 'Алексей Петров',
      position: 'Генеральный директор',
      experience: '15 лет опыта',
      description: 'Эксперт в области систем безопасности, руководит компанией с момента основания',
      image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg'
    },
    {
      name: 'Мария Сидорова',
      position: 'Технический директор',
      experience: '12 лет опыта',
      description: 'Отвечает за техническую реализацию проектов и контроль качества',
      image: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Ведущий инженер',
      experience: '10 лет опыта',
      description: 'Специалист по проектированию и внедрению сложных систем видеонаблюдения',
      image: '/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg'
    }
  ];

  const values = [
    {
      title: 'Качество',
      description: 'Используем только проверенное оборудование ведущих мировых производителей',
      icon: 'Award'
    },
    {
      title: 'Надежность',
      description: 'Гарантируем стабильную работу систем и быстрое реагирование на проблемы',
      icon: 'Shield'
    },
    {
      title: 'Инновации',
      description: 'Внедряем современные технологии и следим за трендами в области безопасности',
      icon: 'Lightbulb'
    },
    {
      title: 'Клиентоориентированность',
      description: 'Индивидуальный подход к каждому клиенту и решению его задач',
      icon: 'Heart'
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Система менеджмента качества' },
    { name: 'ISO 27001', description: 'Информационная безопасность' },
    { name: 'Сертификат МЧС', description: 'Монтаж систем безопасности' },
    { name: 'Партнер Hikvision', description: 'Официальный партнер' }
  ];

  const timeline = [
    { year: '2012', event: 'Основание компании SecureTech' },
    { year: '2014', event: 'Первые 50 реализованных проектов' },
    { year: '2016', event: 'Получение сертификата ISO 9001' },
    { year: '2018', event: 'Открытие демо-зала оборудования' },
    { year: '2020', event: 'Запуск облачных решений' },
    { year: '2022', event: 'Внедрение AI-аналитики' },
    { year: '2024', event: 'Более 500 успешных проектов' }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">О компании SecureTech</h1>
              <p className="text-xl text-blue-100 mb-8">
                Мы — команда профессионалов с многолетним опытом в области систем безопасности. 
                Наша миссия — обеспечить надежную защиту вашего бизнеса с помощью современных технологий.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-dark-slate hover:bg-gray-100">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  Связаться с нами
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-slate">
                  <Icon name="Download" className="h-5 w-5 mr-2" />
                  Скачать презентацию
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-center">
                    <Icon name={stat.icon} className="h-8 w-8 text-white mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Наша история</h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              От небольшой команды энтузиастов до ведущей компании в области систем безопасности
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-professional-blue"></div>
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <Badge className="bg-professional-blue text-white mb-2">{item.year}</Badge>
                        <p className="text-dark-slate font-medium">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-professional-blue rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-light-gray py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Наши ценности</h2>
            <p className="text-xl text-medium-gray">Принципы, которыми мы руководствуемся в работе</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-professional-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon} className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-dark-slate">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-gray">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Наша команда</h2>
            <p className="text-xl text-medium-gray">Профессионалы с многолетним опытом</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-dark-slate">{member.name}</CardTitle>
                  <p className="text-professional-blue font-medium">{member.position}</p>
                  <Badge variant="secondary">{member.experience}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-gray">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-light-gray py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Сертификаты и партнерства</h2>
            <p className="text-xl text-medium-gray">Подтверждение нашей экспертизы и надежности</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-professional-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-dark-slate text-lg">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-gray text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark-slate mb-6">Наша экспертиза</h2>
              <p className="text-xl text-medium-gray mb-8">
                Мы постоянно развиваемся и изучаем новые технологии, 
                чтобы предоставлять клиентам самые современные решения
              </p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-dark-slate font-medium">Проектирование систем</span>
                    <span className="text-professional-blue">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-dark-slate font-medium">Монтаж и настройка</span>
                    <span className="text-professional-blue">98%</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-dark-slate font-medium">Техническая поддержка</span>
                    <span className="text-professional-blue">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-dark-slate font-medium">AI и аналитика</span>
                    <span className="text-professional-blue">88%</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-professional-blue/10 to-transparent rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-dark-slate mb-6">Почему выбирают нас</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="h-6 w-6 text-professional-blue mr-3" />
                  <span className="text-medium-gray">Индивидуальный подход к каждому проекту</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="h-6 w-6 text-professional-blue mr-3" />
                  <span className="text-medium-gray">Использование только качественного оборудования</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="h-6 w-6 text-professional-blue mr-3" />
                  <span className="text-medium-gray">Полный цикл работ от проекта до обслуживания</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="h-6 w-6 text-professional-blue mr-3" />
                  <span className="text-medium-gray">Гарантия качества и надежности</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="h-6 w-6 text-professional-blue mr-3" />
                  <span className="text-medium-gray">Круглосуточная техническая поддержка</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-dark-slate text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы работать с профессионалами?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Доверьте безопасность вашего бизнеса команде экспертов с многолетним опытом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-professional-blue hover:bg-blue-700">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-slate">
              <Icon name="MapPin" className="h-5 w-5 mr-2" />
              Посетить офис
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}