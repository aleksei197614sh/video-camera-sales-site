import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Documentation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const documentCategories = [
    {
      id: 'manuals',
      title: 'Руководства пользователя',
      icon: 'BookOpen',
      description: 'Подробные инструкции по эксплуатации оборудования'
    },
    {
      id: 'installation',
      title: 'Инструкции по установке',
      icon: 'Wrench',
      description: 'Пошаговые руководства по монтажу и настройке'
    },
    {
      id: 'technical',
      title: 'Техническая документация',
      icon: 'FileText',
      description: 'Спецификации, схемы подключения, API документация'
    },
    {
      id: 'software',
      title: 'Программное обеспечение',
      icon: 'Download',
      description: 'Драйверы, утилиты, мобильные приложения'
    }
  ];

  const documents = [
    {
      id: 1,
      title: 'Руководство пользователя SecurityPro Dome 4K',
      category: 'manuals',
      type: 'PDF',
      size: '2.5 МБ',
      version: '1.3',
      date: '15.12.2024',
      downloads: 1247,
      description: 'Полное руководство по эксплуатации купольной IP-камеры',
      languages: ['Русский', 'English']
    },
    {
      id: 2,
      title: 'Инструкция по установке VisionMax Bullet',
      category: 'installation',
      type: 'PDF',
      size: '1.8 МБ',
      version: '2.1',
      date: '12.12.2024',
      downloads: 892,
      description: 'Пошаговая инструкция по монтажу цилиндрической камеры',
      languages: ['Русский']
    },
    {
      id: 3,
      title: 'API документация для разработчиков',
      category: 'technical',
      type: 'HTML',
      size: '5.2 МБ',
      version: '3.0',
      date: '10.12.2024',
      downloads: 456,
      description: 'Техническая документация для интеграции с системами',
      languages: ['English']
    },
    {
      id: 4,
      title: 'Мобильное приложение SecureView',
      category: 'software',
      type: 'APK',
      size: '45.8 МБ',
      version: '3.2.1',
      date: '8.12.2024',
      downloads: 3421,
      description: 'Приложение для удаленного просмотра камер на Android',
      languages: ['Русский', 'English']
    },
    {
      id: 5,
      title: 'Схемы подключения NVR регистраторов',
      category: 'technical',
      type: 'PDF',
      size: '3.1 МБ',
      version: '1.5',
      date: '5.12.2024',
      downloads: 678,
      description: 'Электрические схемы и диаграммы подключения',
      languages: ['Русский', 'English']
    },
    {
      id: 6,
      title: 'Конфигуратор системы видеонаблюдения',
      category: 'software',
      type: 'EXE',
      size: '12.4 МБ',
      version: '2.8',
      date: '3.12.2024',
      downloads: 234,
      description: 'Утилита для расчета и проектирования систем',
      languages: ['Русский']
    }
  ];

  const quickGuides = [
    {
      title: 'Быстрый старт',
      steps: [
        'Распакуйте оборудование',
        'Подключите питание и сеть',
        'Найдите камеру в сети',
        'Выполните базовую настройку',
        'Настройте запись'
      ]
    },
    {
      title: 'Устранение неполадок',
      steps: [
        'Проверьте питание устройства',
        'Убедитесь в правильности подключения',
        'Проверьте сетевые настройки',
        'Перезагрузите оборудование',
        'Обратитесь в техподдержку'
      ]
    },
    {
      title: 'Настройка удаленного доступа',
      steps: [
        'Настройте статический IP',
        'Откройте необходимые порты',
        'Настройте DDNS сервис',
        'Установите мобильное приложение',
        'Добавьте устройство в приложение'
      ]
    }
  ];

  const videoTutorials = [
    {
      title: 'Установка IP-камеры за 10 минут',
      duration: '10:24',
      views: 15420,
      category: 'Установка',
      thumbnail: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg'
    },
    {
      title: 'Настройка NVR регистратора',
      duration: '15:33',
      views: 8930,
      category: 'Настройка',
      thumbnail: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg'
    },
    {
      title: 'Мобильное приложение: полный обзор',
      duration: '8:15',
      views: 12340,
      category: 'ПО',
      thumbnail: '/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg'
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Документация и поддержка</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Полная техническая документация, руководства пользователя, 
              программное обеспечение и обучающие материалы
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Document Categories */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Категории документов</h2>
            <p className="text-xl text-medium-gray">Найдите нужную информацию быстро и легко</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentCategories.map(category => (
              <Card 
                key={category.id} 
                className={`cursor-pointer hover:shadow-lg transition-all ${
                  selectedCategory === category.id ? 'ring-2 ring-professional-blue' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-professional-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={category.icon} className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-dark-slate mb-2">{category.title}</h3>
                  <p className="text-sm text-medium-gray">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
              <div className="flex gap-4">
                <Input
                  placeholder="Поиск по документации..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
                <Button variant="outline">
                  <Icon name="Search" className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Documents List */}
            <div className="space-y-4">
              {filteredDocuments.map(doc => (
                <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-12 h-12 bg-professional-blue rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="FileText" className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-dark-slate mb-2">{doc.title}</h3>
                          <p className="text-sm text-medium-gray mb-3">{doc.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge className="bg-professional-blue text-white">
                              {doc.type}
                            </Badge>
                            <Badge variant="secondary">
                              v{doc.version}
                            </Badge>
                            <Badge variant="outline">
                              {doc.size}
                            </Badge>
                            {doc.languages.map(lang => (
                              <Badge key={lang} variant="outline" className="text-xs">
                                {lang}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-medium-gray">
                            <span>Обновлено: {doc.date}</span>
                            <span>•</span>
                            <span>Скачиваний: {doc.downloads}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2 ml-4">
                        <Button size="sm" className="bg-professional-blue hover:bg-blue-700">
                          <Icon name="Download" className="h-4 w-4 mr-2" />
                          Скачать
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Eye" className="h-4 w-4 mr-2" />
                          Просмотр
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredDocuments.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="Search" className="h-12 w-12 text-medium-gray mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-dark-slate mb-2">Документы не найдены</h3>
                  <p className="text-medium-gray">Попробуйте изменить параметры поиска</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Guides */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Zap" className="h-5 w-5 mr-2" />
                  Быстрые руководства
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {quickGuides.map((guide, index) => (
                    <AccordionItem key={index} value={`guide-${index}`}>
                      <AccordionTrigger className="text-sm">
                        {guide.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {guide.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-center text-xs">
                              <span className="w-5 h-5 bg-professional-blue rounded-full flex items-center justify-center text-white mr-2 flex-shrink-0 text-xs">
                                {stepIndex + 1}
                              </span>
                              <span className="text-medium-gray">{step}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Video Tutorials */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Video" className="h-5 w-5 mr-2" />
                  Видеоуроки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {videoTutorials.map((video, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-3">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-dark-slate text-sm mb-1 line-clamp-2">
                      {video.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-medium-gray">
                      <span>{video.duration}</span>
                      <span>{video.views.toLocaleString()} просмотров</span>
                    </div>
                    <Badge variant="secondary" className="text-xs mt-2">
                      {video.category}
                    </Badge>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  <Icon name="Video" className="h-4 w-4 mr-2" />
                  Все видеоуроки
                </Button>
              </CardContent>
            </Card>

            {/* Popular Downloads */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="TrendingUp" className="h-5 w-5 mr-2" />
                  Популярные загрузки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {documents.slice(0, 4).map(doc => (
                  <div key={doc.id} className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-dark-slate line-clamp-1">
                        {doc.title}
                      </h4>
                      <p className="text-xs text-medium-gray">
                        {doc.downloads} загрузок
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="Download" className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="bg-gradient-to-br from-professional-blue/10 to-transparent">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" className="h-5 w-5 mr-2" />
                  Нужна помощь?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-medium-gray mb-4">
                  Не нашли нужную документацию? Обратитесь к нашим специалистам
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                    Онлайн-чат
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Icon name="Phone" className="h-4 w-4 mr-2" />
                    Техподдержка
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Knowledge Base */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">База знаний</h2>
            <p className="text-xl text-medium-gray">Ответы на часто задаваемые технические вопросы</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="setup" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="setup">Настройка</TabsTrigger>
                <TabsTrigger value="troubleshooting">Проблемы</TabsTrigger>
                <TabsTrigger value="integration">Интеграция</TabsTrigger>
                <TabsTrigger value="maintenance">Обслуживание</TabsTrigger>
              </TabsList>

              <TabsContent value="setup">
                <Card>
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible>
                      {[
                        {
                          question: 'Как настроить IP-камеру в локальной сети?',
                          answer: 'Подключите камеру к роутеру, найдите её IP-адрес с помощью утилиты поиска, войдите в веб-интерфейс через браузер и выполните базовую настройку согласно руководству.'
                        },
                        {
                          question: 'Как настроить запись по расписанию?',
                          answer: 'В настройках регистратора перейдите в раздел "Запись", выберите камеру, установите расписание записи и настройте качество видео.'
                        },
                        {
                          question: 'Как настроить детекцию движения?',
                          answer: 'В настройках камеры включите детекцию движения, настройте зоны обнаружения, установите чувствительность и настройте действия при срабатывании.'
                        }
                      ].map((item, index) => (
                        <AccordionItem key={index} value={`setup-${index}`}>
                          <AccordionTrigger>{item.question}</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-medium-gray">{item.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="troubleshooting">
                <Card>
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible>
                      {[
                        {
                          question: 'Камера не отображается в сети',
                          answer: 'Проверьте физическое подключение, убедитесь что камера получает питание, проверьте настройки сети и используйте утилиту поиска устройств.'
                        },
                        {
                          question: 'Плохое качество изображения ночью',
                          answer: 'Очистите объектив камеры, проверьте настройки ИК подсветки, убедитесь что нет препятствий для ИК излучения, настройте экспозицию.'
                        },
                        {
                          question: 'Система не записывает видео',
                          answer: 'Проверьте свободное место на жестком диске, убедитесь что включена запись, проверьте расписание записи и права доступа.'
                        }
                      ].map((item, index) => (
                        <AccordionItem key={index} value={`trouble-${index}`}>
                          <AccordionTrigger>{item.question}</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-medium-gray">{item.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Download Statistics */}
      <div className="bg-light-gray py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Статистика загрузок</h2>
            <p className="text-xl text-medium-gray">Популярность различных типов документов</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { type: 'Руководства', downloads: '12.5K', icon: 'BookOpen' },
              { type: 'ПО и драйверы', downloads: '8.3K', icon: 'Download' },
              { type: 'Схемы подключения', downloads: '5.7K', icon: 'FileText' },
              { type: 'Видеоуроки', downloads: '15.2K', icon: 'Video' }
            ].map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-professional-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-professional-blue mb-2">{stat.downloads}</div>
                  <div className="text-medium-gray">{stat.type}</div>
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
            Наши специалисты помогут с настройкой, установкой и решением любых технических вопросов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-professional-blue hover:bg-blue-700">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Техническая поддержка
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-slate">
              <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
              Онлайн-консультация
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}