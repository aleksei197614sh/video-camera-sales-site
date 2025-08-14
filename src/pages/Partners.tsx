import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function Partners() {
  const mainPartners = [
    {
      name: 'Hikvision',
      logo: '/img/6a1e2a5a-fb22-4cbc-977f-0dc2364601bb.jpg',
      status: 'Золотой партнер',
      since: '2015',
      description: 'Ведущий мировой производитель систем видеонаблюдения и безопасности',
      products: ['IP камеры', 'NVR регистраторы', 'Системы контроля доступа'],
      benefits: ['Официальная гарантия', 'Техническая поддержка', 'Обучение специалистов'],
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      name: 'Dahua Technology',
      logo: '/img/5bb64438-24c3-4902-b4f8-3c9ae308f79f.jpg',
      status: 'Сертифицированный партнер',
      since: '2016',
      description: 'Инновационные решения в области видеонаблюдения и AI технологий',
      products: ['AI камеры', 'Тепловизоры', 'Системы распознавания'],
      benefits: ['Эксклюзивные цены', 'Приоритетные поставки', 'Маркетинговая поддержка'],
      statusColor: 'bg-blue-100 text-blue-800'
    },
    {
      name: 'Axis Communications',
      logo: '/img/d531d37a-326a-465c-a4f6-6974999d7fd7.jpg',
      status: 'Авторизованный партнер',
      since: '2017',
      description: 'Премиальные решения для профессионального видеонаблюдения',
      products: ['Сетевые камеры', 'Видеоаналитика', 'Аудиосистемы'],
      benefits: ['Премиум качество', 'Расширенная гарантия', 'Эксклюзивные продукты'],
      statusColor: 'bg-purple-100 text-purple-800'
    }
  ];

  const additionalPartners = [
    { name: 'Bosch Security', category: 'Системы безопасности' },
    { name: 'Hanwha Techwin', category: 'IP камеры' },
    { name: 'Uniview', category: 'Видеонаблюдение' },
    { name: 'FLIR Systems', category: 'Тепловизоры' },
    { name: 'Pelco', category: 'Профессиональные камеры' },
    { name: 'Avigilon', category: 'AI аналитика' }
  ];

  const partnershipBenefits = [
    {
      title: 'Официальные гарантии',
      description: 'Полная гарантия производителя на все оборудование',
      icon: 'Shield'
    },
    {
      title: 'Лучшие цены',
      description: 'Прямые поставки без посредников',
      icon: 'DollarSign'
    },
    {
      title: 'Техническая поддержка',
      description: 'Прямая линия с техподдержкой производителей',
      icon: 'Headphones'
    },
    {
      title: 'Обучение персонала',
      description: 'Регулярные тренинги и сертификация',
      icon: 'GraduationCap'
    },
    {
      title: 'Новинки первыми',
      description: 'Доступ к новым продуктам до официального релиза',
      icon: 'Zap'
    },
    {
      title: 'Маркетинговая поддержка',
      description: 'Совместные маркетинговые программы',
      icon: 'Megaphone'
    }
  ];

  const certifications = [
    {
      name: 'Hikvision Certified Engineer',
      level: 'Эксперт',
      specialists: 8,
      validUntil: '2025'
    },
    {
      name: 'Dahua Certified Installer',
      level: 'Профессионал',
      specialists: 6,
      validUntil: '2025'
    },
    {
      name: 'Axis Solution Partner',
      level: 'Партнер',
      specialists: 4,
      validUntil: '2024'
    }
  ];

  const achievements = [
    {
      title: 'Партнер года 2023',
      issuer: 'Hikvision',
      description: 'За выдающиеся результаты продаж и качество обслуживания',
      icon: 'Award'
    },
    {
      title: 'Лучший интегратор',
      issuer: 'Dahua Technology',
      description: 'За инновационные решения и техническую экспертизу',
      icon: 'Trophy'
    },
    {
      title: 'Сертификат качества',
      issuer: 'Axis Communications',
      description: 'За соблюдение высочайших стандартов качества',
      icon: 'Medal'
    }
  ];

  const partnershipStats = [
    { label: 'Лет сотрудничества', value: '9+', icon: 'Calendar' },
    { label: 'Партнеров', value: '15', icon: 'Handshake' },
    { label: 'Сертифицированных специалистов', value: '18', icon: 'Users' },
    { label: 'Проектов с партнерами', value: '400+', icon: 'Building' }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Наши партнеры</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Мы работаем с ведущими мировыми производителями систем безопасности, 
              что гарантирует высочайшее качество оборудования и услуг
            </p>
          </div>
        </div>
      </div>

      {/* Partnership Stats */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-professional-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-professional-blue mb-2">{stat.value}</div>
                  <div className="text-medium-gray">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Main Partners */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark-slate mb-4">Основные партнеры</h2>
          <p className="text-xl text-medium-gray">Стратегические партнерства с лидерами индустрии</p>
        </div>
        
        <div className="space-y-8">
          {mainPartners.map((partner, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-1 bg-gradient-to-br from-professional-blue/10 to-transparent p-8 flex flex-col items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center mb-6">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-slate mb-2">{partner.name}</h3>
                  <Badge className={partner.statusColor}>
                    {partner.status}
                  </Badge>
                  <p className="text-sm text-medium-gray mt-2">Партнеры с {partner.since} года</p>
                </div>
                
                <div className="lg:col-span-2 p-8">
                  <p className="text-medium-gray mb-6">{partner.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-dark-slate mb-3">Продукты</h4>
                      <div className="space-y-2">
                        {partner.products.map((product, idx) => (
                          <div key={idx} className="flex items-center">
                            <Icon name="ArrowRight" className="h-4 w-4 text-professional-blue mr-2" />
                            <span className="text-medium-gray text-sm">{product}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark-slate mb-3">Преимущества партнерства</h4>
                      <div className="space-y-2">
                        {partner.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center">
                            <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-medium-gray text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Partners */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Дополнительные партнеры</h2>
            <p className="text-xl text-medium-gray">Расширенная экосистема партнерских отношений</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalPartners.map((partner, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Building" className="h-8 w-8 text-professional-blue" />
                  </div>
                  <h3 className="font-semibold text-dark-slate mb-2">{partner.name}</h3>
                  <Badge variant="secondary">{partner.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark-slate mb-4">Сертификации и достижения</h2>
          <p className="text-xl text-medium-gray">Подтверждение нашей экспертизы от ведущих производителей</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Award" className="h-5 w-5 mr-2" />
                Сертификации специалистов
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-dark-slate">{cert.name}</h3>
                    <Badge className="bg-professional-blue text-white">
                      {cert.level}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-medium-gray">Специалистов:</span>
                      <span className="ml-2 font-medium">{cert.specialists}</span>
                    </div>
                    <div>
                      <span className="text-medium-gray">Действует до:</span>
                      <span className="ml-2 font-medium">{cert.validUntil}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Trophy" className="h-5 w-5 mr-2" />
                Награды и достижения
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-professional-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={achievement.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-slate">{achievement.title}</h3>
                    <p className="text-sm text-professional-blue font-medium">{achievement.issuer}</p>
                    <p className="text-sm text-medium-gray">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Partnership Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Преимущества партнерства</h2>
            <p className="text-xl text-medium-gray">Что дает нам сотрудничество с лидерами рынка</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-professional-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-gray">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Process */}
        <Card>
          <CardHeader>
            <CardTitle>Как мы выбираем партнеров</CardTitle>
            <p className="text-medium-gray">
              Строгие критерии отбора гарантируют качество продукции
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Репутация', desc: 'Проверенная репутация на рынке', icon: 'Star' },
                { title: 'Качество', desc: 'Высочайшие стандарты качества', icon: 'Award' },
                { title: 'Инновации', desc: 'Постоянное развитие технологий', icon: 'Lightbulb' },
                { title: 'Поддержка', desc: 'Надежная техническая поддержка', icon: 'Headphones' }
              ].map((criteria, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-professional-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={criteria.icon} className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-dark-slate mb-2">{criteria.title}</h3>
                  <p className="text-sm text-medium-gray">{criteria.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Partnership Levels */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Уровни партнерства</h2>
            <p className="text-xl text-medium-gray">Различные уровни сотрудничества с производителями</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-yellow-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Crown" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-yellow-600">Золотой партнер</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Максимальные скидки</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Приоритетная поддержка</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Эксклюзивные продукты</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Маркетинговая поддержка</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-600">Сертифицированный партнер</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Хорошие скидки</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Техническая поддержка</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Обучение персонала</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Сертификация</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Handshake" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-purple-600">Авторизованный партнер</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Базовые скидки</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Официальная гарантия</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Доступ к документации</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Регулярные обновления</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-light-gray py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Почему партнеры выбирают нас</h2>
            <p className="text-xl text-medium-gray">Что ценят в нас ведущие производители</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-dark-slate mb-6">Наши достижения</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-medium-gray">Объем продаж</span>
                      <span className="font-medium">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-medium-gray">Удовлетворенность клиентов</span>
                      <span className="font-medium">98%</span>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-medium-gray">Техническая экспертиза</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-medium-gray">Рост продаж</span>
                      <span className="font-medium">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-dark-slate mb-6">Ключевые факторы</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Target" className="h-6 w-6 text-professional-blue mr-3" />
                    <div>
                      <h4 className="font-semibold text-dark-slate">Фокус на результате</h4>
                      <p className="text-sm text-medium-gray">Достижение KPI партнеров</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="Users" className="h-6 w-6 text-professional-blue mr-3" />
                    <div>
                      <h4 className="font-semibold text-dark-slate">Квалифицированная команда</h4>
                      <p className="text-sm text-medium-gray">Сертифицированные специалисты</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="TrendingUp" className="h-6 w-6 text-professional-blue mr-3" />
                    <div>
                      <h4 className="font-semibold text-dark-slate">Стабильный рост</h4>
                      <p className="text-sm text-medium-gray">Увеличение продаж год к году</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="Heart" className="h-6 w-6 text-professional-blue mr-3" />
                    <div>
                      <h4 className="font-semibold text-dark-slate">Лояльность клиентов</h4>
                      <p className="text-sm text-medium-gray">Высокий уровень повторных покупок</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-dark-slate text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Хотите стать нашим партнером?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Мы всегда открыты для сотрудничества с надежными поставщиками и производителями
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-professional-blue hover:bg-blue-700">
              <Icon name="Handshake" className="h-5 w-5 mr-2" />
              Стать партнером
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-slate">
              <Icon name="FileText" className="h-5 w-5 mr-2" />
              Партнерская программа
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}