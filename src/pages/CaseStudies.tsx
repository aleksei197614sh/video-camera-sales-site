import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: 'Торговый центр "Гринвич" - комплексная система безопасности',
      client: 'ТЦ "Гринвич"',
      industry: 'Торговля',
      size: 'Крупный',
      area: '15000 м²',
      cameras: 48,
      budget: '2.8 млн ₽',
      duration: '3 недели',
      image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg',
      challenge: 'Необходимо было обеспечить безопасность большого торгового центра с высокой проходимостью, интегрировать систему с пожарной сигнализацией и обеспечить аналитику посетителей.',
      solution: 'Установлена многоуровневая система видеонаблюдения с 48 IP-камерами 4K, системой подсчета посетителей, интеграцией с СКУД и пожарной сигнализацией.',
      results: [
        'Снижение краж на 85%',
        'Оптимизация работы персонала',
        'Аналитика посещаемости в реальном времени',
        'Интеграция с системами безопасности'
      ],
      technologies: ['4K IP камеры', 'AI аналитика', 'Облачное хранение', 'Мобильное приложение'],
      testimonial: 'Система работает безупречно. Качество изображения отличное, аналитика помогает оптимизировать работу. Техподдержка всегда на связи.',
      testimonialAuthor: 'Директор по безопасности ТЦ "Гринвич"'
    },
    {
      id: 2,
      title: 'Производственный комплекс "УралМаш" - периметральная охрана',
      client: 'ПК "УралМаш"',
      industry: 'Производство',
      size: 'Крупный',
      area: '25000 м²',
      cameras: 32,
      budget: '4.2 млн ₽',
      duration: '5 недель',
      image: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg',
      challenge: 'Защита периметра крупного производственного комплекса, работающего в три смены. Требовалась система с тепловизионными камерами и автоматической детекцией нарушителей.',
      solution: 'Реализована система периметральной охраны с тепловизионными и PTZ камерами, автоматической детекцией пересечения границ и интеграцией с охранной службой.',
      results: [
        'Полный контроль периметра 24/7',
        'Автоматическое обнаружение нарушителей',
        'Снижение затрат на охрану на 40%',
        'Интеграция с системой оповещения'
      ],
      technologies: ['Тепловизоры', 'PTZ камеры', 'AI детекция', 'Система оповещения'],
      testimonial: 'Современная система позволила значительно повысить уровень безопасности предприятия и сократить расходы на охрану.',
      testimonialAuthor: 'Начальник службы безопасности ПК "УралМаш"'
    },
    {
      id: 3,
      title: 'Офисный центр "Высоцкий" - интеллектуальная система контроля',
      client: 'БЦ "Высоцкий"',
      industry: 'Недвижимость',
      size: 'Средний',
      area: '8000 м²',
      cameras: 24,
      budget: '1.5 млн ₽',
      duration: '2 недели',
      image: '/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg',
      challenge: 'Модернизация устаревшей аналоговой системы, интеграция с системой контроля доступа и обеспечение удаленного мониторинга для управляющей компании.',
      solution: 'Полная замена на IP-систему с интеграцией СКУД, облачным хранением данных и мобильным приложением для управляющей компании.',
      results: [
        'Улучшение качества изображения в 4 раза',
        'Интеграция с системой доступа',
        'Удаленный мониторинг 24/7',
        'Снижение эксплуатационных расходов'
      ],
      technologies: ['IP камеры', 'Облачное хранение', 'СКУД интеграция', 'Удаленный доступ'],
      testimonial: 'Новая система кардинально изменила подход к безопасности. Теперь мы можем контролировать все процессы удаленно.',
      testimonialAuthor: 'Управляющий БЦ "Высоцкий"'
    },
    {
      id: 4,
      title: 'Медицинский центр "Здоровье+" - система с соблюдением конфиденциальности',
      client: 'МЦ "Здоровье+"',
      industry: 'Медицина',
      size: 'Малый',
      area: '1200 м²',
      cameras: 16,
      budget: '650 тыс ₽',
      duration: '1 неделя',
      image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg',
      challenge: 'Обеспечение безопасности медицинского учреждения с соблюдением требований конфиденциальности пациентов и медицинских стандартов.',
      solution: 'Установлена система с зонированием доступа, шифрованием данных, ограниченным временем хранения записей и соблюдением медицинских стандартов.',
      results: [
        'Соблюдение медицинских стандартов',
        'Защита конфиденциальности пациентов',
        'Контроль доступа в критические зоны',
        'Система экстренного вызова'
      ],
      technologies: ['Зонированная система', 'Шифрование данных', 'Ограниченный доступ', 'Экстренные кнопки'],
      testimonial: 'Система полностью соответствует медицинским требованиям и обеспечивает необходимый уровень безопасности.',
      testimonialAuthor: 'Главный врач МЦ "Здоровье+"'
    }
  ];

  const industries = ['all', 'Торговля', 'Производство', 'Недвижимость', 'Медицина', 'Образование', 'Логистика'];
  const sizes = ['all', 'Малый', 'Средний', 'Крупный'];

  const filteredCases = caseStudies.filter(caseStudy => {
    const matchesIndustry = selectedIndustry === 'all' || caseStudy.industry === selectedIndustry;
    const matchesSize = selectedSize === 'all' || caseStudy.size === selectedSize;
    return matchesIndustry && matchesSize;
  });

  const projectStats = [
    { label: 'Реализованных проектов', value: '500+', icon: 'Building' },
    { label: 'Довольных клиентов', value: '350+', icon: 'Users' },
    { label: 'Установленных камер', value: '12K+', icon: 'Camera' },
    { label: 'Лет опыта', value: '12', icon: 'Calendar' }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Кейсы и проекты</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Реальные проекты систем видеонаблюдения различной сложности. 
              Изучите наш опыт и подходы к решению задач безопасности.
            </p>
          </div>
        </div>
      </div>

      {/* Project Stats */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-professional-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-professional-blue mb-2">{stat.value}</div>
                  <div className="text-medium-gray">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Отрасль</label>
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все отрасли</SelectItem>
                  {industries.slice(1).map(industry => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Размер проекта</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все размеры</SelectItem>
                  {sizes.slice(1).map(size => (
                    <SelectItem key={size} value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setSelectedIndustry('all');
                  setSelectedSize('all');
                }}
              >
                <Icon name="X" className="h-4 w-4 mr-2" />
                Сбросить
              </Button>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {filteredCases.map(caseStudy => (
            <Card key={caseStudy.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="aspect-video lg:aspect-auto bg-gray-100 relative overflow-hidden">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 space-y-2">
                    <Badge className="bg-professional-blue text-white">
                      {caseStudy.industry}
                    </Badge>
                    <Badge className={`${
                      caseStudy.size === 'Малый' ? 'bg-green-100 text-green-800' :
                      caseStudy.size === 'Средний' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {caseStudy.size} проект
                    </Badge>
                  </div>
                </div>
                
                <div className="lg:col-span-2 p-8">
                  <h2 className="text-2xl font-bold text-dark-slate mb-4">{caseStudy.title}</h2>
                  
                  {/* Project Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-light-gray rounded-lg">
                      <div className="text-lg font-bold text-professional-blue">{caseStudy.area}</div>
                      <div className="text-xs text-medium-gray">Площадь</div>
                    </div>
                    <div className="text-center p-3 bg-light-gray rounded-lg">
                      <div className="text-lg font-bold text-professional-blue">{caseStudy.cameras}</div>
                      <div className="text-xs text-medium-gray">Камер</div>
                    </div>
                    <div className="text-center p-3 bg-light-gray rounded-lg">
                      <div className="text-lg font-bold text-professional-blue">{caseStudy.budget}</div>
                      <div className="text-xs text-medium-gray">Бюджет</div>
                    </div>
                    <div className="text-center p-3 bg-light-gray rounded-lg">
                      <div className="text-lg font-bold text-professional-blue">{caseStudy.duration}</div>
                      <div className="text-xs text-medium-gray">Срок</div>
                    </div>
                  </div>

                  <Tabs defaultValue="challenge" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="challenge">Задача</TabsTrigger>
                      <TabsTrigger value="solution">Решение</TabsTrigger>
                      <TabsTrigger value="results">Результаты</TabsTrigger>
                    </TabsList>

                    <TabsContent value="challenge" className="mt-4">
                      <div>
                        <h3 className="font-semibold text-dark-slate mb-3">Вызов</h3>
                        <p className="text-medium-gray">{caseStudy.challenge}</p>
                      </div>
                    </TabsContent>

                    <TabsContent value="solution" className="mt-4">
                      <div>
                        <h3 className="font-semibold text-dark-slate mb-3">Наше решение</h3>
                        <p className="text-medium-gray mb-4">{caseStudy.solution}</p>
                        
                        <h4 className="font-semibold text-dark-slate mb-2">Использованные технологии:</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.technologies.map(tech => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="results" className="mt-4">
                      <div>
                        <h3 className="font-semibold text-dark-slate mb-3">Достигнутые результаты</h3>
                        <div className="space-y-2 mb-6">
                          {caseStudy.results.map((result, index) => (
                            <div key={index} className="flex items-center">
                              <Icon name="Check" className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-medium-gray">{result}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="bg-light-gray rounded-lg p-4">
                          <h4 className="font-semibold text-dark-slate mb-2">Отзыв клиента</h4>
                          <p className="text-medium-gray italic mb-2">"{caseStudy.testimonial}"</p>
                          <p className="text-sm text-professional-blue font-medium">
                            — {caseStudy.testimonialAuthor}
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" className="h-12 w-12 text-medium-gray mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-dark-slate mb-2">Кейсы не найдены</h3>
            <p className="text-medium-gray">Попробуйте изменить параметры фильтрации</p>
          </div>
        )}
      </div>

      {/* Industries We Serve */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Отрасли, с которыми мы работаем</h2>
            <p className="text-xl text-medium-gray">Опыт реализации проектов в различных сферах</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Торговля и ритейл', projects: 120, icon: 'ShoppingBag' },
              { name: 'Производство', projects: 85, icon: 'Factory' },
              { name: 'Офисные центры', projects: 95, icon: 'Building' },
              { name: 'Образование', projects: 45, icon: 'GraduationCap' },
              { name: 'Медицина', projects: 35, icon: 'Heart' },
              { name: 'Логистика', projects: 60, icon: 'Truck' }
            ].map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-professional-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={industry.icon} className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-dark-slate mb-2">{industry.name}</h3>
                  <p className="text-professional-blue font-medium">{industry.projects} проектов</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-light-gray py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Показатели успеха</h2>
            <p className="text-xl text-medium-gray">Результаты наших проектов в цифрах</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: 'Снижение краж', value: '78%', desc: 'В среднем по проектам' },
              { metric: 'Время реакции', value: '2.5 мин', desc: 'На инциденты' },
              { metric: 'Удовлетворенность', value: '96%', desc: 'Клиентов довольны' },
              { metric: 'Время безотказной работы', value: '99.8%', desc: 'Надежность систем' }
            ].map((metric, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-professional-blue mb-2">{metric.value}</div>
                  <div className="font-semibold text-dark-slate mb-1">{metric.metric}</div>
                  <div className="text-sm text-medium-gray">{metric.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-dark-slate text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Хотите стать нашим следующим успешным кейсом?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Обсудите ваш проект с нашими экспертами и получите индивидуальное решение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-professional-blue hover:bg-blue-700">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Обсудить проект
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