import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Comparison() {
  const [selectedProducts, setSelectedProducts] = useState([1, 2]);

  const products = [
    {
      id: 1,
      name: 'SecurityPro Dome 4K Ultra HD',
      model: 'SP-D4K-001',
      price: 15890,
      rating: 4.8,
      image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg',
      type: 'Купольная',
      resolution: '4K Ultra HD',
      nightVision: '30м',
      weatherProof: 'IP67',
      ptz: true,
      analytics: true,
      audio: true,
      power: 'PoE+',
      warranty: '3 года',
      pros: ['Отличное качество изображения', 'Надежная конструкция', 'Богатый функционал'],
      cons: ['Высокая цена', 'Требует PoE+ питание']
    },
    {
      id: 2,
      name: 'VisionMax Bullet IR Pro',
      model: 'VM-BIR-002',
      price: 12450,
      rating: 4.6,
      image: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg',
      type: 'Цилиндрическая',
      resolution: '2K Full HD',
      nightVision: '25м',
      weatherProof: 'IP66',
      ptz: false,
      analytics: false,
      audio: false,
      power: 'PoE',
      warranty: '2 года',
      pros: ['Доступная цена', 'Простая установка', 'Надежность'],
      cons: ['Нет PTZ', 'Ограниченная аналитика']
    },
    {
      id: 3,
      name: 'TechGuard PTZ Professional',
      model: 'TG-PTZ-003',
      price: 28750,
      rating: 4.9,
      image: '/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg',
      type: 'Поворотная',
      resolution: '4K Ultra HD',
      nightVision: '50м',
      weatherProof: 'IP67',
      ptz: true,
      analytics: true,
      audio: true,
      power: 'PoE++',
      warranty: '5 лет',
      pros: ['Максимальный функционал', 'Отличный зум', 'Автотрекинг'],
      cons: ['Очень высокая цена', 'Сложная настройка']
    },
    {
      id: 4,
      name: 'SecureVision Mini Dome',
      model: 'SV-MD-004',
      price: 8990,
      rating: 4.4,
      image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg',
      type: 'Купольная',
      resolution: 'Full HD',
      nightVision: '15м',
      weatherProof: 'IP65',
      ptz: false,
      analytics: false,
      audio: false,
      power: 'PoE',
      warranty: '2 года',
      pros: ['Низкая цена', 'Компактный размер', 'Простота'],
      cons: ['Базовый функционал', 'Короткая ИК подсветка']
    }
  ];

  const comparisonCategories = [
    { id: 'basic', title: 'Основные характеристики', icon: 'Info' },
    { id: 'features', title: 'Функции', icon: 'Settings' },
    { id: 'technical', title: 'Технические данные', icon: 'Cpu' },
    { id: 'pros-cons', title: 'Плюсы и минусы', icon: 'Scale' }
  ];

  const toggleProductSelection = (productId: number) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else if (prev.length < 4) {
        return [...prev, productId];
      }
      return prev;
    });
  };

  const selectedProductsData = products.filter(p => selectedProducts.includes(p.id));

  const getComparisonValue = (product: any, field: string) => {
    switch (field) {
      case 'resolution':
        return product.resolution;
      case 'nightVision':
        return product.nightVision;
      case 'weatherProof':
        return product.weatherProof;
      case 'ptz':
        return product.ptz ? 'Да' : 'Нет';
      case 'analytics':
        return product.analytics ? 'Да' : 'Нет';
      case 'audio':
        return product.audio ? 'Да' : 'Нет';
      case 'power':
        return product.power;
      case 'warranty':
        return product.warranty;
      default:
        return '-';
    }
  };

  const comparisonFields = [
    { key: 'resolution', label: 'Разрешение' },
    { key: 'nightVision', label: 'Ночное видение' },
    { key: 'weatherProof', label: 'Защита от влаги' },
    { key: 'ptz', label: 'PTZ управление' },
    { key: 'analytics', label: 'AI аналитика' },
    { key: 'audio', label: 'Аудио' },
    { key: 'power', label: 'Питание' },
    { key: 'warranty', label: 'Гарантия' }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Сравнение камер</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Сравните характеристики различных моделей камер видеонаблюдения 
              и выберите оптимальное решение для ваших задач
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Product Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-dark-slate mb-6">
            Выберите товары для сравнения (до 4 товаров)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <Card 
                key={product.id} 
                className={`cursor-pointer transition-all ${
                  selectedProducts.includes(product.id) 
                    ? 'ring-2 ring-professional-blue shadow-lg' 
                    : 'hover:shadow-lg'
                }`}
                onClick={() => toggleProductSelection(product.id)}
              >
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Checkbox 
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-dark-slate mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-professional-blue">
                      {product.price.toLocaleString()} ₽
                    </span>
                    <div className="flex items-center">
                      <Icon name="Star" className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm text-medium-gray">{product.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        {selectedProductsData.length > 0 && (
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Сравнение выбранных товаров</CardTitle>
              <p className="text-medium-gray">
                Детальное сравнение характеристик {selectedProductsData.length} товаров
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 w-48">Характеристика</th>
                      {selectedProductsData.map(product => (
                        <th key={product.id} className="text-center p-4 min-w-64">
                          <div className="space-y-2">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mx-auto">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h3 className="font-semibold text-dark-slate text-sm line-clamp-2">
                              {product.name}
                            </h3>
                            <p className="text-xs text-medium-gray">{product.model}</p>
                            <div className="text-lg font-bold text-professional-blue">
                              {product.price.toLocaleString()} ₽
                            </div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFields.map((field, index) => (
                      <tr key={field.key} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                        <td className="p-4 font-medium text-dark-slate">
                          {field.label}
                        </td>
                        {selectedProductsData.map(product => (
                          <td key={product.id} className="p-4 text-center">
                            <span className="text-medium-gray">
                              {getComparisonValue(product, field.key)}
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                    
                    {/* Rating Row */}
                    <tr className="border-b bg-gray-50">
                      <td className="p-4 font-medium text-dark-slate">Рейтинг</td>
                      {selectedProductsData.map(product => (
                        <td key={product.id} className="p-4 text-center">
                          <div className="flex items-center justify-center">
                            <Icon name="Star" className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-medium-gray">{product.rating}</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                    
                    {/* Actions Row */}
                    <tr>
                      <td className="p-4 font-medium text-dark-slate">Действия</td>
                      {selectedProductsData.map(product => (
                        <td key={product.id} className="p-4 text-center">
                          <div className="space-y-2">
                            <Button size="sm" className="w-full bg-professional-blue hover:bg-blue-700">
                              <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                              В корзину
                            </Button>
                            <Button variant="outline" size="sm" className="w-full">
                              <Icon name="Eye" className="h-4 w-4 mr-2" />
                              Подробнее
                            </Button>
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Detailed Comparison */}
        {selectedProductsData.length > 0 && (
          <div className="mt-12">
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                {comparisonCategories.map(category => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="pros-cons">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedProductsData.map(product => (
                    <Card key={product.id}>
                      <CardHeader>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                            <Icon name="Plus" className="h-4 w-4 mr-2" />
                            Преимущества
                          </h4>
                          <div className="space-y-2">
                            {product.pros.map((pro, index) => (
                              <div key={index} className="flex items-center">
                                <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                <span className="text-sm text-medium-gray">{pro}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                            <Icon name="Minus" className="h-4 w-4 mr-2" />
                            Недостатки
                          </h4>
                          <div className="space-y-2">
                            {product.cons.map((con, index) => (
                              <div key={index} className="flex items-center">
                                <Icon name="X" className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                                <span className="text-sm text-medium-gray">{con}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Comparison Guide */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Руководство по выбору</CardTitle>
              <p className="text-medium-gray">
                Рекомендации по выбору камеры в зависимости от ваших задач
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-light-gray rounded-lg p-6">
                  <h3 className="font-semibold text-dark-slate mb-3">Для офиса</h3>
                  <p className="text-sm text-medium-gray mb-4">
                    Контроль доступа и общая безопасность
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2" />
                      <span>Купольные камеры</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2" />
                      <span>Full HD разрешение</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2" />
                      <span>Базовая аналитика</span>
                    </div>
                  </div>
                </div>

                <div className="bg-light-gray rounded-lg p-6">
                  <h3 className="font-semibold text-dark-slate mb-3">Для склада</h3>
                  <p className="text-sm text-medium-gray mb-4">
                    Контроль товарных потоков и безопасность
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2" />
                      <span>Цилиндрические камеры</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2" />
                      <span>4K разрешение</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2" />
                      <span>Ночное видение</span>
                    </div>
                  </div>
                </div>

                <div className="bg-light-gray rounded-lg p-6">
                  <h3 className="font-semibold text-dark-slate mb-3">Для периметра</h3>
                  <p className="text-sm text-medium-gray mb-4">
                    Охрана территории и раннее обнаружение
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2" />
                      <span>PTZ камеры</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2" />
                      <span>Тепловизоры</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2" />
                      <span>AI детекция</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-dark-slate text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна помощь с выбором?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Наши эксперты помогут подобрать оптимальное оборудование для ваших задач
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