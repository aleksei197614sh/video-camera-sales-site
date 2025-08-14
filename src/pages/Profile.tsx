import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';

export default function Profile() {
  const [profileData, setProfileData] = useState({
    firstName: 'Алексей',
    lastName: 'Петров',
    email: 'alexey.petrov@example.com',
    phone: '+7 (912) 345-67-89',
    company: 'ООО "Безопасность+"',
    address: 'г. Екатеринбург, ул. Ленина, 123',
    notifications: {
      email: true,
      sms: false,
      push: true
    }
  });

  const orders = [
    {
      id: '2024-001',
      date: '15 декабря 2024',
      status: 'Доставлен',
      total: 44230,
      items: 3,
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: '2024-002',
      date: '10 декабря 2024',
      status: 'В пути',
      total: 15890,
      items: 1,
      statusColor: 'bg-blue-100 text-blue-800'
    },
    {
      id: '2024-003',
      date: '5 декабря 2024',
      status: 'Обрабатывается',
      total: 28750,
      items: 1,
      statusColor: 'bg-yellow-100 text-yellow-800'
    }
  ];

  const favorites = [
    {
      id: 1,
      name: 'SecurityPro Dome 4K Ultra HD',
      price: 15890,
      image: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg',
      inStock: true
    },
    {
      id: 2,
      name: 'VisionMax Bullet IR Pro',
      price: 12450,
      image: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg',
      inStock: true
    }
  ];

  const supportTickets = [
    {
      id: 'T-001',
      subject: 'Проблема с настройкой камеры',
      status: 'Открыт',
      date: '12 декабря 2024',
      priority: 'Средний',
      statusColor: 'bg-red-100 text-red-800'
    },
    {
      id: 'T-002',
      subject: 'Вопрос по гарантии',
      status: 'Решен',
      date: '8 декабря 2024',
      priority: 'Низкий',
      statusColor: 'bg-green-100 text-green-800'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (type: string, value: boolean) => {
    setProfileData(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [type]: value }
    }));
  };

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="User" className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">
                {profileData.firstName} {profileData.lastName}
              </h1>
              <p className="text-blue-100">{profileData.email}</p>
              <Badge className="bg-white/20 text-white mt-2">Постоянный клиент</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="orders">Заказы</TabsTrigger>
            <TabsTrigger value="favorites">Избранное</TabsTrigger>
            <TabsTrigger value="support">Поддержка</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Личная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Имя</label>
                      <Input
                        value={profileData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Фамилия</label>
                      <Input
                        value={profileData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input
                      value={profileData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Компания</label>
                    <Input
                      value={profileData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Адрес</label>
                    <Textarea
                      value={profileData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows={3}
                    />
                  </div>
                  
                  <Button className="bg-professional-blue hover:bg-blue-700">
                    <Icon name="Save" className="h-4 w-4 mr-2" />
                    Сохранить изменения
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {/* Statistics */}
                <Card>
                  <CardHeader>
                    <CardTitle>Статистика</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-light-gray rounded-lg">
                        <div className="text-2xl font-bold text-professional-blue">12</div>
                        <div className="text-sm text-medium-gray">Заказов</div>
                      </div>
                      <div className="text-center p-4 bg-light-gray rounded-lg">
                        <div className="text-2xl font-bold text-professional-blue">₽ 245K</div>
                        <div className="text-sm text-medium-gray">Потрачено</div>
                      </div>
                      <div className="text-center p-4 bg-light-gray rounded-lg">
                        <div className="text-2xl font-bold text-professional-blue">5</div>
                        <div className="text-sm text-medium-gray">В избранном</div>
                      </div>
                      <div className="text-center p-4 bg-light-gray rounded-lg">
                        <div className="text-2xl font-bold text-professional-blue">2</div>
                        <div className="text-sm text-medium-gray">Года с нами</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Быстрые действия</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                      Повторить последний заказ
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="Download" className="h-4 w-4 mr-2" />
                      Скачать документы
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                      Связаться с поддержкой
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>История заказов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map(order => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-dark-slate">Заказ #{order.id}</h3>
                          <p className="text-sm text-medium-gray">{order.date}</p>
                        </div>
                        <Badge className={order.statusColor}>
                          {order.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-medium-gray">Товаров:</span>
                          <span className="ml-2 font-medium">{order.items}</span>
                        </div>
                        <div>
                          <span className="text-medium-gray">Сумма:</span>
                          <span className="ml-2 font-medium">{order.total.toLocaleString()} ₽</span>
                        </div>
                        <div className="text-right">
                          <Button variant="outline" size="sm">
                            Подробнее
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>Избранные товары</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favorites.map(item => (
                    <div key={item.id} className="border rounded-lg p-4">
                      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-dark-slate mb-2 line-clamp-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-dark-slate">
                          {item.price.toLocaleString()} ₽
                        </span>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-professional-blue hover:bg-blue-700">
                            <Icon name="ShoppingCart" className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="X" className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Мои обращения</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {supportTickets.map(ticket => (
                      <div key={ticket.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-dark-slate">#{ticket.id}</h3>
                          <Badge className={ticket.statusColor}>
                            {ticket.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-medium-gray mb-2">{ticket.subject}</p>
                        <div className="flex items-center justify-between text-xs text-medium-gray">
                          <span>{ticket.date}</span>
                          <span>Приоритет: {ticket.priority}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-4 bg-professional-blue hover:bg-blue-700">
                    <Icon name="Plus" className="h-4 w-4 mr-2" />
                    Создать обращение
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Контакты поддержки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="h-5 w-5 text-professional-blue" />
                    <div>
                      <p className="font-medium">+7 (343) 123-45-67</p>
                      <p className="text-sm text-medium-gray">Круглосуточно</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="h-5 w-5 text-professional-blue" />
                    <div>
                      <p className="font-medium">support@securetech.ru</p>
                      <p className="text-sm text-medium-gray">Ответ в течение 2 часов</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="MessageCircle" className="h-5 w-5 text-professional-blue" />
                    <div>
                      <p className="font-medium">Онлайн-чат</p>
                      <p className="text-sm text-medium-gray">Пн-Пт 9:00-18:00</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full">
                      <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                      Начать чат
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Icon name="FileText" className="h-4 w-4 mr-2" />
                      База знаний
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Уведомления</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-dark-slate">Email уведомления</h4>
                      <p className="text-sm text-medium-gray">Получать уведомления на email</p>
                    </div>
                    <Switch
                      checked={profileData.notifications.email}
                      onCheckedChange={(checked) => handleNotificationChange('email', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-dark-slate">SMS уведомления</h4>
                      <p className="text-sm text-medium-gray">Получать SMS о статусе заказа</p>
                    </div>
                    <Switch
                      checked={profileData.notifications.sms}
                      onCheckedChange={(checked) => handleNotificationChange('sms', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-dark-slate">Push уведомления</h4>
                      <p className="text-sm text-medium-gray">Уведомления в браузере</p>
                    </div>
                    <Switch
                      checked={profileData.notifications.push}
                      onCheckedChange={(checked) => handleNotificationChange('push', checked)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Безопасность</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Key" className="h-4 w-4 mr-2" />
                    Изменить пароль
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Shield" className="h-4 w-4 mr-2" />
                    Двухфакторная аутентификация
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Download" className="h-4 w-4 mr-2" />
                    Экспорт данных
                  </Button>
                  
                  <Separator />
                  
                  <Button variant="destructive" className="w-full">
                    <Icon name="Trash2" className="h-4 w-4 mr-2" />
                    Удалить аккаунт
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}