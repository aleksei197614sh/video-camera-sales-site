import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Reviews() {
  const [filterRating, setFilterRating] = useState('all');
  const [filterProduct, setFilterProduct] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const reviews = [
    {
      id: 1,
      author: 'Михаил Козлов',
      company: 'ООО "Торговый дом"',
      rating: 5,
      date: '15 декабря 2024',
      product: 'SecurityPro Dome 4K Ultra HD',
      title: 'Отличное качество и надежность',
      text: 'Установили систему видеонаблюдения в нашем офисе. Качество изображения превосходное, даже ночью все видно четко. Особенно понравилась возможность удаленного просмотра через мобильное приложение. Монтажники работали аккуратно и быстро.',
      helpful: 24,
      verified: true,
      images: ['/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg']
    },
    {
      id: 2,
      author: 'Анна Петрова',
      company: 'Частное лицо',
      rating: 4,
      date: '12 декабря 2024',
      product: 'VisionMax Bullet IR Pro',
      title: 'Хорошее соотношение цена-качество',
      text: 'Купили для дачи. За свои деньги очень достойная камера. Картинка четкая, ночное видение работает хорошо. Единственный минус - немного сложная первоначальная настройка, но техподдержка помогла.',
      helpful: 18,
      verified: true,
      images: []
    },
    {
      id: 3,
      author: 'Дмитрий Сидоров',
      company: 'ИП Сидоров Д.А.',
      rating: 5,
      date: '10 декабря 2024',
      product: 'TechGuard PTZ Professional',
      title: 'Профессиональное оборудование',
      text: 'Установили PTZ камеру для охраны периметра склада. Функция автотрекинга работает отлично, качество зума впечатляет. Стоит своих денег, особенно для коммерческого использования.',
      helpful: 31,
      verified: true,
      images: ['/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg']
    },
    {
      id: 4,
      author: 'Елена Волкова',
      company: 'Медицинский центр "Здоровье"',
      rating: 5,
      date: '8 декабря 2024',
      product: 'Комплексное решение',
      title: 'Полный цикл обслуживания',
      text: 'Заказывали полное решение для медицинского центра. От проектирования до установки все прошло на высшем уровне. Особенно ценим круглосуточную техподдержку и быстрое реагирование на проблемы.',
      helpful: 27,
      verified: true,
      images: []
    },
    {
      id: 5,
      author: 'Алексей Морозов',
      company: 'Ресторан "Вкус"',
      rating: 4,
      date: '5 декабря 2024',
      product: 'SecurityPro Dome 4K Ultra HD',
      title: 'Качественная система для ресторана',
      text: 'Установили 12 камер в ресторане. Качество записи отличное, можем контролировать все зоны. Помогает в работе с персоналом и обеспечивает безопасность гостей. Рекомендую!',
      helpful: 15,
      verified: true,
      images: []
    },
    {
      id: 6,
      author: 'Ольга Кузнецова',
      company: 'Частное лицо',
      rating: 3,
      date: '3 декабря 2024',
      product: 'VisionMax Bullet IR Pro',
      title: 'Средне, есть нюансы',
      text: 'Камера работает, но качество ночной съемки могло бы быть лучше. За эти деньги нормально, но ожидала большего. Установка прошла без проблем.',
      helpful: 9,
      verified: false,
      images: []
    }
  ];

  const ratingStats = {
    average: 4.5,
    total: 156,
    distribution: [
      { stars: 5, count: 89, percentage: 57 },
      { stars: 4, count: 42, percentage: 27 },
      { stars: 3, count: 18, percentage: 12 },
      { stars: 2, count: 5, percentage: 3 },
      { stars: 1, count: 2, percentage: 1 }
    ]
  };

  const products = [
    'SecurityPro Dome 4K Ultra HD',
    'VisionMax Bullet IR Pro',
    'TechGuard PTZ Professional',
    'Комплексное решение'
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesRating = filterRating === 'all' || review.rating.toString() === filterRating;
    const matchesProduct = filterProduct === 'all' || review.product === filterProduct;
    return matchesRating && matchesProduct;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'rating-high':
        return b.rating - a.rating;
      case 'rating-low':
        return a.rating - b.rating;
      case 'helpful':
        return b.helpful - a.helpful;
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Отзывы клиентов</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Реальные отзывы наших клиентов о качестве оборудования и услуг. 
              Мы ценим каждое мнение и стремимся к совершенству.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with Stats and Filters */}
          <div className="lg:col-span-1">
            {/* Rating Overview */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Общий рейтинг</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-professional-blue mb-2">
                    {ratingStats.average}
                  </div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        className={`h-5 w-5 ${i < Math.floor(ratingStats.average) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-sm text-medium-gray">
                    На основе {ratingStats.total} отзывов
                  </p>
                </div>

                <div className="space-y-3">
                  {ratingStats.distribution.map(stat => (
                    <div key={stat.stars} className="flex items-center space-x-3">
                      <span className="text-sm w-6">{stat.stars}★</span>
                      <Progress value={stat.percentage} className="flex-1 h-2" />
                      <span className="text-sm text-medium-gray w-8">{stat.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Фильтры</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Рейтинг</label>
                  <Select value={filterRating} onValueChange={setFilterRating}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все оценки</SelectItem>
                      <SelectItem value="5">5 звезд</SelectItem>
                      <SelectItem value="4">4 звезды</SelectItem>
                      <SelectItem value="3">3 звезды</SelectItem>
                      <SelectItem value="2">2 звезды</SelectItem>
                      <SelectItem value="1">1 звезда</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Товар</label>
                  <Select value={filterProduct} onValueChange={setFilterProduct}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все товары</SelectItem>
                      {products.map(product => (
                        <SelectItem key={product} value={product}>
                          {product}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Сортировка</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date">По дате</SelectItem>
                      <SelectItem value="rating-high">Высокий рейтинг</SelectItem>
                      <SelectItem value="rating-low">Низкий рейтинг</SelectItem>
                      <SelectItem value="helpful">По полезности</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setFilterRating('all');
                    setFilterProduct('all');
                    setSortBy('date');
                  }}
                >
                  Сбросить фильтры
                </Button>
              </CardContent>
            </Card>

            {/* Write Review CTA */}
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Edit" className="h-8 w-8 text-professional-blue mx-auto mb-4" />
                <h3 className="font-semibold text-dark-slate mb-2">Оставьте отзыв</h3>
                <p className="text-sm text-medium-gray mb-4">
                  Поделитесь опытом использования наших товаров
                </p>
                <Button className="w-full bg-professional-blue hover:bg-blue-700">
                  Написать отзыв
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-dark-slate">
                Отзывы ({sortedReviews.length})
              </h2>
              <Button className="bg-professional-blue hover:bg-blue-700">
                <Icon name="Plus" className="h-4 w-4 mr-2" />
                Добавить отзыв
              </Button>
            </div>

            <div className="space-y-6">
              {sortedReviews.map(review => (
                <Card key={review.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-professional-blue rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">
                            {review.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-dark-slate">{review.author}</h3>
                            {review.verified && (
                              <Badge className="bg-green-100 text-green-800 text-xs">
                                <Icon name="CheckCircle" className="h-3 w-3 mr-1" />
                                Проверен
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-medium-gray">{review.company}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Icon 
                                  key={i} 
                                  name="Star" 
                                  className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-medium-gray">{review.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <Badge variant="secondary" className="mb-3">
                        {review.product}
                      </Badge>
                      <h4 className="font-semibold text-dark-slate mb-2">{review.title}</h4>
                      <p className="text-medium-gray">{review.text}</p>
                    </div>

                    {review.images.length > 0 && (
                      <div className="mb-4">
                        <div className="flex space-x-2">
                          {review.images.map((image, index) => (
                            <div key={index} className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                              <img 
                                src={image} 
                                alt="Фото от покупателя"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button variant="outline" size="sm">
                          <Icon name="ThumbsUp" className="h-4 w-4 mr-2" />
                          Полезно ({review.helpful})
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                          Ответить
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Share2" className="h-4 w-4 mr-2" />
                          Поделиться
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {sortedReviews.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="MessageCircle" className="h-12 w-12 text-medium-gray mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-dark-slate mb-2">Отзывы не найдены</h3>
                  <p className="text-medium-gray">Попробуйте изменить параметры фильтрации</p>
                </div>
              )}

              {/* Load More */}
              {sortedReviews.length > 0 && (
                <div className="text-center">
                  <Button variant="outline">
                    Показать еще отзывы
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Review Form Modal Trigger */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle>Поделитесь своим опытом</CardTitle>
              <p className="text-medium-gray">
                Ваш отзыв поможет другим клиентам сделать правильный выбор
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Icon name="Star" className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-dark-slate mb-2">Оцените товар</h3>
                  <p className="text-sm text-medium-gray">Поставьте оценку от 1 до 5 звезд</p>
                </div>
                <div>
                  <Icon name="Edit" className="h-8 w-8 text-professional-blue mx-auto mb-3" />
                  <h3 className="font-semibold text-dark-slate mb-2">Напишите отзыв</h3>
                  <p className="text-sm text-medium-gray">Расскажите о своем опыте</p>
                </div>
                <div>
                  <Icon name="Camera" className="h-8 w-8 text-green-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-dark-slate mb-2">Добавьте фото</h3>
                  <p className="text-sm text-medium-gray">Покажите товар в использовании</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button className="bg-professional-blue hover:bg-blue-700">
                  <Icon name="Edit" className="h-4 w-4 mr-2" />
                  Написать отзыв
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-dark-slate text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Убедитесь в качестве сами</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Закажите бесплатную консультацию и демонстрацию оборудования
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-professional-blue hover:bg-blue-700">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Заказать демо
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-slate">
              <Icon name="MapPin" className="h-5 w-5 mr-2" />
              Посетить демо-зал
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}