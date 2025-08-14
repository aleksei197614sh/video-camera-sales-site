import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'SecurityPro Dome 4K Ultra HD',
      model: 'SP-D4K-001',
      price: 15890,
      quantity: 2,
      image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg',
      inStock: true
    },
    {
      id: 2,
      name: 'VisionMax Bullet IR Pro',
      model: 'VM-BIR-002',
      price: 12450,
      quantity: 1,
      image: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg',
      inStock: true
    },
    {
      id: 3,
      name: 'TechGuard PTZ Professional',
      model: 'TG-PTZ-003',
      price: 28750,
      quantity: 1,
      image: '/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg',
      inStock: false
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('courier');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = deliveryMethod === 'courier' ? 0 : 500;
  const discount = promoCode === 'SAVE10' ? subtotal * 0.1 : 0;
  const total = subtotal + deliveryFee - discount;

  const deliveryOptions = [
    { value: 'courier', label: 'Курьерская доставка', price: 0, description: 'Бесплатно по Екатеринбургу' },
    { value: 'pickup', label: 'Самовывоз', price: 0, description: 'ул. Малышева, 42' },
    { value: 'express', label: 'Экспресс-доставка', price: 500, description: 'Доставка в течение 2 часов' }
  ];

  const paymentOptions = [
    { value: 'card', label: 'Банковская карта', icon: 'CreditCard' },
    { value: 'cash', label: 'Наличными при получении', icon: 'Banknote' },
    { value: 'transfer', label: 'Банковский перевод', icon: 'Building' }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-dark-slate mb-4">Корзина</h1>
          <div className="flex items-center space-x-2 text-sm text-medium-gray">
            <a href="/" className="hover:text-professional-blue">Главная</a>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <span className="text-dark-slate">Корзина</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-16">
            <Icon name="ShoppingCart" className="h-16 w-16 text-medium-gray mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-dark-slate mb-4">Корзина пуста</h2>
            <p className="text-medium-gray mb-8">Добавьте товары из каталога, чтобы оформить заказ</p>
            <Button className="bg-professional-blue hover:bg-blue-700">
              <Icon name="ArrowLeft" className="h-4 w-4 mr-2" />
              Перейти в каталог
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Товары в корзине ({cartItems.length})</span>
                    <Button variant="outline" size="sm">
                      <Icon name="Trash2" className="h-4 w-4 mr-2" />
                      Очистить корзину
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-dark-slate line-clamp-1">{item.name}</h3>
                        <p className="text-sm text-medium-gray">Модель: {item.model}</p>
                        {!item.inStock && (
                          <Badge variant="destructive" className="mt-1">Нет в наличии</Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Icon name="Minus" className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Icon name="Plus" className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="text-right min-w-0">
                          <p className="font-bold text-dark-slate">
                            {(item.price * item.quantity).toLocaleString()} ₽
                          </p>
                          <p className="text-sm text-medium-gray">
                            {item.price.toLocaleString()} ₽ за шт.
                          </p>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => removeItem(item.id)}
                        >
                          <Icon name="X" className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Delivery Method */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Способ доставки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {deliveryOptions.map(option => (
                    <div key={option.value} className="flex items-center space-x-3">
                      <Checkbox 
                        checked={deliveryMethod === option.value}
                        onCheckedChange={() => setDeliveryMethod(option.value)}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-dark-slate">{option.label}</span>
                          <span className="text-professional-blue font-medium">
                            {option.price === 0 ? 'Бесплатно' : `${option.price} ₽`}
                          </span>
                        </div>
                        <p className="text-sm text-medium-gray">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Способ оплаты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {paymentOptions.map(option => (
                    <div key={option.value} className="flex items-center space-x-3">
                      <Checkbox 
                        checked={paymentMethod === option.value}
                        onCheckedChange={() => setPaymentMethod(option.value)}
                      />
                      <Icon name={option.icon} className="h-5 w-5 text-professional-blue" />
                      <span className="font-medium text-dark-slate">{option.label}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle>Итого по заказу</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-medium-gray">Товары ({cartItems.length})</span>
                    <span className="font-medium">{subtotal.toLocaleString()} ₽</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-medium-gray">Доставка</span>
                    <span className="font-medium">
                      {deliveryFee === 0 ? 'Бесплатно' : `${deliveryFee.toLocaleString()} ₽`}
                    </span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Скидка</span>
                      <span>-{discount.toLocaleString()} ₽</span>
                    </div>
                  )}
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>К оплате</span>
                    <span>{total.toLocaleString()} ₽</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex space-x-2">
                      <Input 
                        placeholder="Промокод"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button variant="outline">
                        Применить
                      </Button>
                    </div>
                    
                    {promoCode === 'SAVE10' && (
                      <p className="text-sm text-green-600">Промокод применен! Скидка 10%</p>
                    )}
                  </div>
                  
                  <Button className="w-full bg-professional-blue hover:bg-blue-700">
                    <Icon name="CreditCard" className="h-4 w-4 mr-2" />
                    Оформить заказ
                  </Button>
                  
                  <div className="text-center">
                    <Button variant="link" className="text-professional-blue">
                      <Icon name="ArrowLeft" className="h-4 w-4 mr-2" />
                      Продолжить покупки
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-dark-slate mb-4">Ваши преимущества</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Icon name="Shield" className="h-5 w-5 text-professional-blue mr-3" />
                      <span className="text-sm text-medium-gray">Гарантия качества</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Truck" className="h-5 w-5 text-professional-blue mr-3" />
                      <span className="text-sm text-medium-gray">Бесплатная доставка</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Wrench" className="h-5 w-5 text-professional-blue mr-3" />
                      <span className="text-sm text-medium-gray">Установка и настройка</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Headphones" className="h-5 w-5 text-professional-blue mr-3" />
                      <span className="text-sm text-medium-gray">Техподдержка 24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* Recommended Products */}
      {cartItems.length > 0 && (
        <div className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-dark-slate mb-8">Рекомендуем также</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(i => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img 
                      src="/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg"
                      alt="Рекомендуемый товар"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-dark-slate mb-2 line-clamp-2">
                      Дополнительное оборудование {i}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-dark-slate">
                        {(5000 + i * 1000).toLocaleString()} ₽
                      </span>
                      <Button size="sm" variant="outline">
                        <Icon name="Plus" className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}