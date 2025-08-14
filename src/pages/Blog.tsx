import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: 'Как выбрать камеры видеонаблюдения для офиса: полное руководство',
      excerpt: 'Подробный гид по выбору оптимальной системы видеонаблюдения для офисных помещений. Рассматриваем типы камер, разрешение, функции и бюджет.',
      category: 'Руководства',
      author: 'Алексей Петров',
      date: '15 декабря 2024',
      readTime: '8 мин',
      image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg',
      tags: ['офис', 'выбор камер', 'IP камеры']
    },
    {
      id: 2,
      title: 'Тренды в области видеонаблюдения 2024: AI и машинное обучение',
      excerpt: 'Обзор современных технологий в сфере видеонаблюдения. Искусственный интеллект, распознавание лиц, аналитика поведения и другие инновации.',
      category: 'Технологии',
      author: 'Мария Сидорова',
      date: '12 декабря 2024',
      readTime: '6 мин',
      image: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg',
      tags: ['AI', 'машинное обучение', 'тренды']
    },
    {
      id: 3,
      title: 'Правовые аспекты установки видеонаблюдения: что нужно знать',
      excerpt: 'Разбираем законодательные требования к установке систем видеонаблюдения. Согласования, уведомления, защита персональных данных.',
      category: 'Законодательство',
      author: 'Дмитрий Козлов',
      date: '10 декабря 2024',
      readTime: '10 мин',
      image: '/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg',
      tags: ['законодательство', 'GDPR', 'персональные данные']
    },
    {
      id: 4,
      title: 'Сравнение IP и аналоговых камер: что выбрать в 2024 году',
      excerpt: 'Детальное сравнение IP и аналоговых систем видеонаблюдения. Преимущества, недостатки, стоимость владения и области применения.',
      category: 'Сравнения',
      author: 'Алексей Петров',
      date: '8 декабря 2024',
      readTime: '7 мин',
      image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg',
      tags: ['IP камеры', 'аналоговые камеры', 'сравнение']
    },
    {
      id: 5,
      title: 'Кибербезопасность систем видеонаблюдения: защита от хакеров',
      excerpt: 'Как защитить вашу систему видеонаблюдения от кибератак. Настройка паролей, обновления, сетевая безопасность и мониторинг.',
      category: 'Безопасность',
      author: 'Мария Сидорова',
      date: '5 декабря 2024',
      readTime: '9 мин',
      image: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg',
      tags: ['кибербезопасность', 'защита', 'хакеры']
    },
    {
      id: 6,
      title: 'Облачные решения для видеонаблюдения: преимущества и недостатки',
      excerpt: 'Разбираем облачные системы видеонаблюдения. Стоимость, надежность, масштабируемость и интеграция с существующими системами.',
      category: 'Технологии',
      author: 'Дмитрий Козлов',
      date: '3 декабря 2024',
      readTime: '6 мин',
      image: '/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg',
      tags: ['облако', 'cloud', 'VSaaS']
    }
  ];

  const categories = ['all', 'Руководства', 'Технологии', 'Законодательство', 'Сравнения', 'Безопасность'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles[0];
  const recentArticles = articles.slice(1, 4);

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Блог SecureTech</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Экспертные статьи о видеонаблюдении, технологиях безопасности 
              и лучших практиках защиты бизнеса
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Featured Article */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark-slate mb-8">Рекомендуемая статья</h2>
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-gray-100 relative overflow-hidden">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-professional-blue text-white">
                  {featuredArticle.category}
                </Badge>
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-dark-slate mb-4 line-clamp-2">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-medium-gray mb-6 line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredArticle.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-medium-gray">
                      <span>{featuredArticle.author}</span>
                      <span>•</span>
                      <span>{featuredArticle.date}</span>
                      <span>•</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  <Button className="bg-professional-blue hover:bg-blue-700">
                    <Icon name="ArrowRight" className="h-4 w-4 mr-2" />
                    Читать статью
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <Input
                    placeholder="Поиск по статьям..."
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

            {/* Articles Grid */}
            <div className="space-y-8">
              {filteredArticles.map(article => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="aspect-video bg-gray-100 relative overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-3 right-3 bg-professional-blue text-white">
                        {article.category}
                      </Badge>
                    </div>
                    <div className="md:col-span-2 p-6">
                      <h3 className="text-xl font-bold text-dark-slate mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-medium-gray mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 3).map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-sm text-medium-gray">
                          <span>{article.author}</span>
                          <span>•</span>
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
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

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" className="h-12 w-12 text-medium-gray mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-slate mb-2">Статьи не найдены</h3>
                <p className="text-medium-gray">Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Recent Articles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" className="h-5 w-5 mr-2" />
                  Последние статьи
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentArticles.map(article => (
                  <div key={article.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <h4 className="font-semibold text-dark-slate text-sm mb-2 line-clamp-2">
                      {article.title}
                    </h4>
                    <div className="flex items-center text-xs text-medium-gray">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
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
                {categories.slice(1).map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-professional-blue text-white'
                        : 'hover:bg-gray-100 text-medium-gray'
                    }`}
                  >
                    {category}
                  </button>
                ))}
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
                  Получайте новые статьи и экспертные материалы на email
                </p>
                <div className="space-y-3">
                  <Input placeholder="Ваш email" />
                  <Button className="w-full bg-professional-blue hover:bg-blue-700">
                    <Icon name="Send" className="h-4 w-4 mr-2" />
                    Подписаться
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Tag" className="h-5 w-5 mr-2" />
                  Популярные теги
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['IP камеры', 'AI', 'безопасность', 'офис', 'облако', 'аналитика', 'монтаж', 'законы'].map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs cursor-pointer hover:bg-professional-blue hover:text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-dark-slate text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация эксперта?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Наши специалисты помогут выбрать оптимальное решение для вашего объекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-professional-blue hover:bg-blue-700">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-slate">
              <Icon name="Calculator" className="h-5 w-5 mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}