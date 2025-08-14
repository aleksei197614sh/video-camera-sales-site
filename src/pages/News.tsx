import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const news = [
    {
      id: 1,
      title: 'SecureTech стала золотым партнером Hikvision в 2024 году',
      excerpt: 'Наша компания достигла статуса золотого партнера благодаря выдающимся результатам продаж и качеству обслуживания клиентов.',
      category: 'Партнерство',
      date: '15 декабря 2024',
      readTime: '3 мин',
      image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg',
      featured: true,
      tags: ['партнерство', 'Hikvision', 'достижения']
    },
    {
      id: 2,
      title: 'Новая линейка 4K камер с AI аналитикой поступила в продажу',
      excerpt: 'Представляем революционные камеры с искусственным интеллектом для распознавания лиц, анализа поведения и детекции объектов.',
      category: 'Продукты',
      date: '12 декабря 2024',
      readTime: '5 мин',
      image: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg',
      featured: false,
      tags: ['новинки', 'AI', '4K камеры']
    },
    {
      id: 3,
      title: 'Открытие нового демо-зала в центре Екатеринбурга',
      excerpt: 'Приглашаем посетить наш обновленный демо-зал площадью 200 м², где можно протестировать все виды оборудования.',
      category: 'Компания',
      date: '10 декабря 2024',
      readTime: '2 мин',
      image: '/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg',
      featured: false,
      tags: ['демо-зал', 'открытие', 'Екатеринбург']
    },
    {
      id: 4,
      title: 'Успешная реализация проекта видеонаблюдения для ТЦ "Мега"',
      excerpt: 'Завершили масштабный проект по установке 120 камер в торговом центре с интеграцией системы подсчета посетителей.',
      category: 'Проекты',
      date: '8 декабря 2024',
      readTime: '4 мин',
      image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg',
      featured: false,
      tags: ['проект', 'торговый центр', 'аналитика']
    },
    {
      id: 5,
      title: 'Обновление мобильного приложения SecureView 3.0',
      excerpt: 'Выпущена новая версия приложения с улучшенным интерфейсом, поддержкой облачного хранения и push-уведомлениями.',
      category: 'Технологии',
      date: '5 декабря 2024',
      readTime: '3 мин',
      image: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg',
      featured: false,
      tags: ['приложение', 'обновление', 'облако']
    },
    {
      id: 6,
      title: 'Специальные цены на системы видеонаблюдения до конца года',
      excerpt: 'Действует акция на комплексные решения со скидкой до 25%. Успейте оформить заказ до 31 декабря.',
      category: 'Акции',
      date: '3 декабря 2024',
      readTime: '2 мин',
      image: '/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg',
      featured: false,
      tags: ['акция', 'скидки', 'новый год']
    }
  ];

  const categories = ['all', 'Партнерство', 'Продукты', 'Компания', 'Проекты', 'Технологии', 'Акции'];

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = news.filter(item => item.featured);
  const recentNews = news.filter(item => !item.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Новости SecureTech</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Последние новости компании, анонсы новых продуктов, 
              успешные проекты и события в мире видеонаблюдения
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-dark-slate mb-8">Главные новости</h2>
            {featuredNews.map(item => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto bg-gray-100 relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-professional-blue text-white">
                      {item.category}
                    </Badge>
                    <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                      Главная новость
                    </Badge>
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-dark-slate mb-4 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-medium-gray mb-6 line-clamp-3">
                        {item.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-medium-gray">
                          <span>{item.date}</span>
                          <span>•</span>
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                      <Button className="bg-professional-blue hover:bg-blue-700">
                        <Icon name="ArrowRight" className="h-4 w-4 mr-2" />
                        Читать полностью
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <Input
                    placeholder="Поиск по новостям..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Категория" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все категории</SelectItem>
                    {categories.slice(1).map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* News Grid */}
            <div className="space-y-8">
              {filteredNews.filter(item => !item.featured).map(item => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="aspect-video bg-gray-100 relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-3 right-3 bg-professional-blue text-white">
                        {item.category}
                      </Badge>
                    </div>
                    <div className="md:col-span-2 p-6">
                      <h3 className="text-xl font-bold text-dark-slate mb-3 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-medium-gray mb-4 line-clamp-2">
                        {item.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.slice(0, 3).map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-sm text-medium-gray">
                          <span>{item.date}</span>
                          <span>•</span>
                          <span>{item.readTime}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Читать
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" className="h-12 w-12 text-medium-gray mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-slate mb-2">Новости не найдены</h3>
                <p className="text-medium-gray">Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Recent News */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" className="h-5 w-5 mr-2" />
                  Последние новости
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentNews.map(item => (
                  <div key={item.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <h4 className="font-semibold text-dark-slate text-sm mb-2 line-clamp-2">
                      {item.title}
                    </h4>
                    <div className="flex items-center text-xs text-medium-gray">
                      <span>{item.date}</span>
                      <span className="mx-2">•</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Folder" className="h-5 w-5 mr-2" />
                  Категории
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.slice(1).map(category => {
                  const count = news.filter(item => item.category === category).length;
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between ${
                        selectedCategory === category
                          ? 'bg-professional-blue text-white'
                          : 'hover:bg-gray-100 text-medium-gray'
                      }`}
                    >
                      <span>{category}</span>
                      <Badge variant="secondary" className="text-xs">
                        {count}
                      </Badge>
                    </button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-professional-blue/10 to-transparent">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Mail" className="h-5 w-5 mr-2" />
                  Подписка на новости
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-medium-gray mb-4">
                  Получайте последние новости и анонсы на email
                </p>
                <div className="space-y-3">
                  <Input placeholder="Ваш email" />
                  <Button className="w-full bg-professional-blue hover:bg-blue-700">
                    <Icon name="Send" className="h-4 w-4 mr-2" />
                    Подписаться
                  </Button>
                </div>
                <p className="text-xs text-medium-gray mt-3">
                  Отправляем не чаще 1 раза в неделю
                </p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Share2" className="h-5 w-5 mr-2" />
                  Мы в соцсетях
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                  Telegram канал
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Video" className="h-4 w-4 mr-2" />
                  YouTube канал
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Linkedin" className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </CardContent>
            </Card>

            {/* Archive */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Archive" className="h-5 w-5 mr-2" />
                  Архив новостей
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {['Декабрь 2024', 'Ноябрь 2024', 'Октябрь 2024', 'Сентябрь 2024'].map(month => (
                  <button
                    key={month}
                    className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-100 text-medium-gray transition-colors"
                  >
                    {month}
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Company Updates */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Развитие компании</h2>
            <p className="text-xl text-medium-gray">Ключевые достижения и планы на будущее</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Новые партнерства', count: '3', desc: 'В этом году', icon: 'Handshake' },
              { title: 'Запущенных проектов', count: '127', desc: 'За 2024 год', icon: 'Rocket' },
              { title: 'Новых продуктов', count: '15', desc: 'В каталоге', icon: 'Package' },
              { title: 'Обученных специалистов', count: '8', desc: 'Получили сертификаты', icon: 'GraduationCap' }
            ].map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-professional-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-professional-blue mb-2">{stat.count}</div>
                  <div className="font-semibold text-dark-slate mb-1">{stat.title}</div>
                  <div className="text-sm text-medium-gray">{stat.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-light-gray py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Предстоящие события</h2>
            <p className="text-xl text-medium-gray">Мероприятия, выставки и презентации</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Выставка "Безопасность 2024"',
                date: '20-22 декабря 2024',
                location: 'Екатеринбург-ЭКСПО',
                description: 'Представим новинки и проведем демонстрации',
                type: 'Выставка'
              },
              {
                title: 'Вебинар по AI аналитике',
                date: '25 декабря 2024',
                location: 'Онлайн',
                description: 'Обзор возможностей искусственного интеллекта',
                type: 'Вебинар'
              },
              {
                title: 'День открытых дверей',
                date: '28 декабря 2024',
                location: 'Демо-зал SecureTech',
                description: 'Экскурсии и консультации для всех желающих',
                type: 'Мероприятие'
              }
            ].map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-professional-blue text-white">
                      {event.type}
                    </Badge>
                    <Icon name="Calendar" className="h-5 w-5 text-professional-blue" />
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-medium-gray">
                      <Icon name="Calendar" className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-medium-gray">
                      <Icon name="MapPin" className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-medium-gray mb-4">{event.description}</p>
                  <Button variant="outline" className="w-full">
                    <Icon name="Calendar" className="h-4 w-4 mr-2" />
                    Зарегистрироваться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-dark-slate text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Следите за нашими новостями</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Будьте в курсе последних событий, новых продуктов и специальных предложений
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-professional-blue hover:bg-blue-700">
              <Icon name="Mail" className="h-5 w-5 mr-2" />
              Подписаться на рассылку
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-slate">
              <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
              Telegram канал
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}