import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const products = [
    {
      id: 1,
      name: 'SecurityPro Dome 4K Ultra',
      category: 'dome',
      price: 15890,
      rating: 4.8,
      reviews: 124,
      features: ['4K Ultra HD', 'Ночное видение', 'IP67', 'PTZ управление'],
      image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg',
      inStock: true
    },
    {
      id: 2,
      name: 'VisionMax Bullet IR Pro',
      category: 'bullet',
      price: 12450,
      rating: 4.6,
      reviews: 89,
      features: ['2K Full HD', 'ИК подсветка', 'Антивандальная', 'IP66'],
      image: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg',
      inStock: true
    },
    {
      id: 3,
      name: 'TechGuard PTZ Professional',
      category: 'ptz',
      price: 28750,
      rating: 4.9,
      reviews: 67,
      features: ['4K Ultra HD', '30x Zoom', 'Автотрекинг', 'AI аналитика'],
      image: '/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg',
      inStock: false
    },
    // Добавим больше товаров для демонстрации
    {
      id: 4,
      name: 'SecureVision Mini Dome',
      category: 'dome',
      price: 8990,
      rating: 4.4,
      reviews: 156,
      features: ['Full HD', 'Компактный размер', 'Ночное видение'],
      image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg',
      inStock: true
    },
    {
      id: 5,
      name: 'ProWatch Thermal Camera',
      category: 'thermal',
      price: 45000,
      rating: 4.7,
      reviews: 23,
      features: ['Тепловизор', 'Детекция температуры', 'Всепогодная'],
      image: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg',
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-dark-slate mb-4">Каталог оборудования</h1>
          <p className="text-xl text-medium-gray">Профессиональные камеры видеонаблюдения для любых задач</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Filter" className="h-5 w-5 mr-2" />
                  Фильтры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Поиск</label>
                  <Input
                    placeholder="Название модели..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Тип камеры</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все типы</SelectItem>
                      <SelectItem value="dome">Купольные</SelectItem>
                      <SelectItem value="bullet">Цилиндрические</SelectItem>
                      <SelectItem value="ptz">Поворотные</SelectItem>
                      <SelectItem value="thermal">Тепловизоры</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Цена: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ₽
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={50000}
                    step={1000}
                    className="mt-2"
                  />
                </div>

                {/* Sort */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Сортировка</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">По названию</SelectItem>
                      <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                      <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                      <SelectItem value="rating">По рейтингу</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange([0, 100000]);
                    setSortBy('name');
                  }}
                >
                  Сбросить фильтры
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-medium-gray">
                Найдено товаров: {sortedProducts.length}
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Icon name="Grid3X3" className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="List" className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedProducts.map(product => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="destructive">Нет в наличии</Badge>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      <Badge className="bg-professional-blue text-white">
                        ★ {product.rating}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-dark-slate line-clamp-2">{product.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-medium-gray">
                      <span>★ {product.rating}</span>
                      <span>({product.reviews} отзывов)</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.features.slice(0, 3).map(feature => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-dark-slate">
                        {product.price.toLocaleString()} ₽
                      </span>
                      <Button 
                        className="bg-professional-blue hover:bg-blue-700"
                        disabled={!product.inStock}
                      >
                        <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                        {product.inStock ? 'В корзину' : 'Нет в наличии'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" className="h-12 w-12 text-medium-gray mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-slate mb-2">Товары не найдены</h3>
                <p className="text-medium-gray">Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}