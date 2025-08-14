import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Checkout() {
  const [customerType, setCustomerType] = useState('individual');
  const [formData, setFormData] = useState({
    // Individual
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    // Company
    companyName: '',
    inn: '',
    kpp: '',
    // Address
    city: 'Екатеринбург',
    address: '',
    apartment: '',
    postalCode: '',
    // Additional
    comment: '',
    agreement: false,
    newsletter: false
  });

  const orderItems = [
    {
      id: 1,
      name: 'SecurityPro Dome 4K Ultra HD',
      quantity: 2,
      price: 15890,
      image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg'
    },
    {
      id: 2,
      name: 'VisionMax Bullet IR Pro',
      quantity: 1,
      price: 12450,
      image: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg'
    }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', { customerType, formData, orderItems });
  };

  const steps = [
    { id: 1, title: 'Корзина', completed: true },
    { id: 2, title: 'Оформление', active: true },
    { id: 3, title: 'Оплата', completed: false },
    { id: 4, title: 'Подтверждение', completed: false }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-dark-slate mb-6">Оформление заказа</h1>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-between max-w-2xl">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  step.completed 
                    ? 'bg-green-500 text-white' 
                    : step.active 
                      ? 'bg-professional-blue text-white' 
                      : 'bg-gray-200 text-gray-600'
                }`}>
                  {step.completed ? (
                    <Icon name="Check" className="h-5 w-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <span className={`ml-2 text-sm ${
                  step.active ? 'text-professional-blue font-medium' : 'text-medium-gray'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-4 ${
                    step.completed ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Customer Type */}
              <Card>
                <CardHeader>
                  <CardTitle>Тип покупателя</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs value={customerType} onValueChange={setCustomerType}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="individual">Физическое лицо</TabsTrigger>
                      <TabsTrigger value="company">Юридическое лицо</TabsTrigger>
                    </TabsList>

                    <TabsContent value="individual" className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Имя *</label>
                          <Input
                            placeholder="Введите имя"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Фамилия *</label>
                          <Input
                            placeholder="Введите фамилию"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="company" className="mt-6">
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Название организации *</label>
                          <Input
                            placeholder="ООО «Название компании»"
                            value={formData.companyName}
                            onChange={(e) => handleInputChange('companyName', e.target.value)}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">ИНН *</label>
                            <Input
                              placeholder="1234567890"
                              value={formData.inn}
                              onChange={(e) => handleInputChange('inn', e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">КПП</label>
                            <Input
                              placeholder="123456789"
                              value={formData.kpp}
                              onChange={(e) => handleInputChange('kpp', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон *</label>
                      <Input
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              <Card>
                <CardHeader>
                  <CardTitle>Адрес доставки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Город *</label>
                    <Select value={formData.city} onValueChange={(value) => handleInputChange('city', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Екатеринбург">Екатеринбург</SelectItem>
                        <SelectItem value="Челябинск">Челябинск</SelectItem>
                        <SelectItem value="Пермь">Пермь</SelectItem>
                        <SelectItem value="Тюмень">Тюмень</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Адрес *</label>
                    <Input
                      placeholder="Улица, дом"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Квартира/Офис</label>
                      <Input
                        placeholder="Кв. 123"
                        value={formData.apartment}
                        onChange={(e) => handleInputChange('apartment', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Индекс</label>
                      <Input
                        placeholder="620000"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Дополнительная информация</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Комментарий к заказу</label>
                    <Textarea
                      placeholder="Укажите удобное время доставки, особые пожелания..."
                      rows={3}
                      value={formData.comment}
                      onChange={(e) => handleInputChange('comment', e.target.value)}
                    />
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreement"
                        checked={formData.agreement}
                        onCheckedChange={(checked) => handleInputChange('agreement', checked as boolean)}
                      />
                      <label htmlFor="agreement" className="text-sm text-medium-gray">
                        Согласен с <a href="#" className="text-professional-blue hover:underline">условиями продажи</a> и 
                        <a href="#" className="text-professional-blue hover:underline ml-1">политикой конфиденциальности</a> *
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                      />
                      <label htmlFor="newsletter" className="text-sm text-medium-gray">
                        Подписаться на новости и специальные предложения
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle>Ваш заказ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Order Items */}
                  <div className="space-y-4">
                    {orderItems.map(item => (
                      <div key={item.id} className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-dark-slate line-clamp-2">
                            {item.name}
                          </h4>
                          <p className="text-xs text-medium-gray">
                            {item.quantity} × {item.price.toLocaleString()} ₽
                          </p>
                        </div>
                        <span className="text-sm font-medium text-dark-slate">
                          {(item.price * item.quantity).toLocaleString()} ₽
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Separator />
                  
                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-medium-gray">Товары</span>
                      <span>{subtotal.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-medium-gray">Доставка</span>
                      <span className="text-green-600">Бесплатно</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Итого</span>
                    <span>{total.toLocaleString()} ₽</span>
                  </div>
                  
                  {/* Payment Methods */}
                  <div className="mt-6">
                    <h4 className="font-medium text-dark-slate mb-3">Способы оплаты</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Icon name="CreditCard" className="h-4 w-4 text-professional-blue" />
                        <span className="text-sm text-medium-gray">Банковские карты</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Banknote" className="h-4 w-4 text-professional-blue" />
                        <span className="text-sm text-medium-gray">Наличными при получении</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Building" className="h-4 w-4 text-professional-blue" />
                        <span className="text-sm text-medium-gray">Безналичный расчет</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-professional-blue hover:bg-blue-700 mt-6"
                    disabled={!formData.agreement}
                  >
                    <Icon name="CreditCard" className="h-4 w-4 mr-2" />
                    Перейти к оплате
                  </Button>
                  
                  <div className="text-center mt-4">
                    <Button variant="link" className="text-professional-blue">
                      <Icon name="ArrowLeft" className="h-4 w-4 mr-2" />
                      Вернуться в корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Security Info */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Icon name="Shield" className="h-6 w-6 text-green-500 mr-3" />
                    <h3 className="font-semibold text-dark-slate">Безопасная оплата</h3>
                  </div>
                  <div className="space-y-2 text-sm text-medium-gray">
                    <div className="flex items-center">
                      <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                      <span>SSL шифрование данных</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                      <span>Защита персональных данных</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                      <span>Гарантия возврата</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}