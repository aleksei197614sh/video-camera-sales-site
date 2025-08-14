import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: 'SecurityPro Dome 4K Ultra HD',
    model: 'SP-D4K-001',
    price: 15890,
    oldPrice: 18990,
    rating: 4.8,
    reviews: 124,
    inStock: true,
    category: 'Купольные камеры',
    brand: 'SecurityPro',
    images: [
      '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg',
      '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg',
      '/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg'
    ],
    description: 'Профессиональная купольная IP-камера с разрешением 4K Ultra HD для внутреннего и наружного видеонаблюдения. Обеспечивает кристально четкое изображение даже в условиях низкой освещенности.',
    features: [
      '4K Ultra HD разрешение (3840×2160)',
      'Ночное видение до 30 метров',
      'Защита IP67 от влаги и пыли',
      'PTZ управление (поворот, наклон, зум)',
      'Детекция движения с уведомлениями',
      'Двусторонняя аудиосвязь',
      'Поддержка PoE+ питания',
      'Мобильное приложение для iOS/Android'
    ],
    specifications: {
      'Разрешение': '4K Ultra HD (3840×2160)',
      'Матрица': '1/2.8" CMOS',
      'Объектив': '2.8-12мм, автофокус',
      'Угол обзора': '103°-30° (горизонтальный)',
      'ИК подсветка': 'До 30 метров',
      'Сжатие видео': 'H.265+/H.265/H.264+/H.264',
      'Питание': 'PoE+ (25.5Вт) / DC 12В',
      'Рабочая температура': '-30°C ~ +60°C',
      'Защита': 'IP67, IK10',
      'Размеры': 'Ø140 × 122мм',
      'Вес': '850г'
    },
    included: [
      'IP-камера SecurityPro SP-D4K-001',
      'Кронштейн для крепления',
      'Комплект крепежных элементов',
      'Руководство пользователя',
      'Гарантийный талон',
      'CD с программным обеспечением'
    ],
    warranty: '3 года',
    delivery: 'Бесплатная доставка по Екатеринбургу'
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'VisionMax Bullet IR Pro',
      price: 12450,
      image: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg',
      rating: 4.6
    },
    {
      id: 3,
      name: 'TechGuard PTZ Professional',
      price: 28750,
      image: '/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg',
      rating: 4.9
    }
  ];

  const reviews = [
    {
      id: 1,
      author: 'Михаил К.',
      rating: 5,
      date: '10 декабря 2024',
      text: 'Отличная камера! Качество изображения превосходное, даже ночью все видно четко. Установили в офисе, очень довольны.',
      helpful: 12
    },
    {
      id: 2,
      author: 'Анна С.',
      rating: 4,
      date: '5 декабря 2024',
      text: 'Хорошая камера за свои деньги. Единственный минус - немного сложная настройка, но техподдержка помогла.',
      helpful: 8
    }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-medium-gray">
            <a href="/" className="hover:text-professional-blue">Главная</a>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <a href="/catalog" className="hover:text-professional-blue">Каталог</a>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <span className="text-dark-slate">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-white rounded-lg overflow-hidden mb-4">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-professional-blue' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <Badge className="bg-professional-blue text-white mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold text-dark-slate mb-2">{product.name}</h1>
              <p className="text-medium-gray">Модель: {product.model}</p>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      name="Star" 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-medium-gray">
                  {product.rating} ({product.reviews} отзывов)
                </span>
              </div>
              {product.inStock ? (
                <Badge className="bg-green-100 text-green-800">В наличии</Badge>
              ) : (
                <Badge variant="destructive">Нет в наличии</Badge>
              )}
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-dark-slate">
                  {product.price.toLocaleString()} ₽
                </span>
                {product.oldPrice && (
                  <span className="text-xl text-medium-gray line-through">
                    {product.oldPrice.toLocaleString()} ₽
                  </span>
                )}
              </div>
              <p className="text-green-600 font-medium">{product.delivery}</p>
            </div>

            <div className="mb-6">
              <p className="text-medium-gray">{product.description}</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium">Количество:</label>
                <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(10)].map((_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <Button 
                className="w-full bg-professional-blue hover:bg-blue-700"
                disabled={!product.inStock}
              >
                <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
                Добавить в корзину
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline">
                  <Icon name="Heart" className="h-4 w-4 mr-2" />
                  В избранное
                </Button>
                <Button variant="outline">
                  <Icon name="Share2" className="h-4 w-4 mr-2" />
                  Поделиться
                </Button>
              </div>
            </div>

            <div className="bg-light-gray rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <Icon name="Shield" className="h-4 w-4 text-professional-blue mr-2" />
                  <span>Гарантия {product.warranty}</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Truck" className="h-4 w-4 text-professional-blue mr-2" />
                  <span>Быстрая доставка</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Wrench" className="h-4 w-4 text-professional-blue mr-2" />
                  <span>Установка и настройка</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Headphones" className="h-4 w-4 text-professional-blue mr-2" />
                  <span>Техподдержка 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="specifications">Характеристики</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы ({product.reviews})</TabsTrigger>
            <TabsTrigger value="delivery">Доставка</TabsTrigger>
          </TabsList>

          <TabsContent value="description">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-dark-slate mb-4">Основные возможности</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Icon name="Check" className="h-5 w-5 text-professional-blue mr-3 flex-shrink-0" />
                      <span className="text-medium-gray">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-6" />
                
                <h3 className="text-xl font-bold text-dark-slate mb-4">Комплектация</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.included.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Icon name="Package" className="h-5 w-5 text-professional-blue mr-3 flex-shrink-0" />
                      <span className="text-medium-gray">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-dark-slate mb-6">Технические характеристики</h3>
                <div className="space-y-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-dark-slate">{key}</span>
                      <span className="text-medium-gray">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Отзывы покупателей</CardTitle>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-dark-slate mr-2">{product.rating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i} 
                            name="Star" 
                            className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-medium-gray">на основе {product.reviews} отзывов</span>
                  </div>
                </CardHeader>
              </Card>

              {reviews.map(review => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-dark-slate">{review.author}</h4>
                        <div className="flex items-center space-x-2">
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
                    <p className="text-medium-gray mb-4">{review.text}</p>
                    <div className="flex items-center space-x-4">
                      <Button variant="outline" size="sm">
                        <Icon name="ThumbsUp" className="h-4 w-4 mr-2" />
                        Полезно ({review.helpful})
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                        Ответить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-dark-slate mb-4">Оставить отзыв</h3>
                  <Button className="bg-professional-blue hover:bg-blue-700">
                    <Icon name="Edit" className="h-4 w-4 mr-2" />
                    Написать отзыв
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="delivery">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-dark-slate mb-6">Доставка и оплата</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-dark-slate mb-4">Способы доставки</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Icon name="Truck" className="h-5 w-5 text-professional-blue mr-3" />
                        <div>
                          <p className="font-medium">Курьерская доставка</p>
                          <p className="text-sm text-medium-gray">По Екатеринбургу - бесплатно</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Icon name="MapPin" className="h-5 w-5 text-professional-blue mr-3" />
                        <div>
                          <p className="font-medium">Самовывоз</p>
                          <p className="text-sm text-medium-gray">ул. Малышева, 42</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-slate mb-4">Способы оплаты</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Icon name="CreditCard" className="h-5 w-5 text-professional-blue mr-3" />
                        <span>Банковские карты</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Banknote" className="h-5 w-5 text-professional-blue mr-3" />
                        <span>Наличными при получении</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Building" className="h-5 w-5 text-professional-blue mr-3" />
                        <span>Безналичный расчет</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-dark-slate mb-8">Похожие товары</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map(relatedProduct => (
              <Card key={relatedProduct.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-dark-slate mb-2 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-dark-slate">
                      {relatedProduct.price.toLocaleString()} ₽
                    </span>
                    <div className="flex items-center">
                      <Icon name="Star" className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm text-medium-gray">{relatedProduct.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-professional-blue hover:bg-blue-700">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}