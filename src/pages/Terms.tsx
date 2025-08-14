import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Terms() {
  const contractTerms = [
    {
      section: 'Предмет договора',
      items: [
        'Поставка оборудования видеонаблюдения',
        'Проектирование систем безопасности',
        'Монтаж и настройка оборудования',
        'Техническое обслуживание и поддержка'
      ]
    },
    {
      section: 'Права и обязанности Поставщика',
      items: [
        'Поставить оборудование в согласованные сроки',
        'Обеспечить качество поставляемого оборудования',
        'Предоставить техническую документацию',
        'Осуществить монтаж и настройку системы',
        'Предоставить гарантию на оборудование и работы'
      ]
    },
    {
      section: 'Права и обязанности Заказчика',
      items: [
        'Оплатить услуги в соответствии с договором',
        'Обеспечить доступ к объекту для выполнения работ',
        'Предоставить техническое задание',
        'Принять выполненные работы',
        'Соблюдать правила эксплуатации оборудования'
      ]
    }
  ];

  const paymentTerms = [
    {
      type: 'Физические лица',
      methods: ['Наличный расчет', 'Банковские карты', 'Электронные платежи'],
      terms: 'Оплата при получении товара или предоплата 50%'
    },
    {
      type: 'Юридические лица',
      methods: ['Безналичный расчет', 'Банковский перевод', 'Аккредитив'],
      terms: 'Оплата по счету в течение 10 банковских дней'
    },
    {
      type: 'Крупные проекты',
      methods: ['Поэтапная оплата', 'Банковская гарантия', 'Аккредитив'],
      terms: 'Предоплата 30%, промежуточные платежи, окончательный расчет'
    }
  ];

  const warrantyConditions = [
    {
      category: 'Гарантия на оборудование',
      period: 'От 1 до 5 лет',
      coverage: [
        'Производственные дефекты',
        'Неисправности электронных компонентов',
        'Программные ошибки',
        'Замена неисправного оборудования'
      ],
      exclusions: [
        'Механические повреждения',
        'Воздействие влаги (если не предусмотрено)',
        'Неправильная эксплуатация',
        'Самостоятельный ремонт'
      ]
    },
    {
      category: 'Гарантия на работы',
      period: 'От 1 до 3 лет',
      coverage: [
        'Качество монтажных работ',
        'Правильность настройки системы',
        'Соответствие техническому заданию',
        'Устранение дефектов монтажа'
      ],
      exclusions: [
        'Изменения в инфраструктуре объекта',
        'Воздействие третьих лиц',
        'Форс-мажорные обстоятельства',
        'Нарушение правил эксплуатации'
      ]
    }
  ];

  const returnPolicy = [
    {
      condition: 'Возврат товара надлежащего качества',
      period: '14 дней',
      requirements: [
        'Товарный вид сохранен',
        'Упаковка не повреждена',
        'Отсутствие следов эксплуатации',
        'Наличие документов о покупке'
      ]
    },
    {
      condition: 'Возврат товара ненадлежащего качества',
      period: 'В течение гарантийного срока',
      requirements: [
        'Наличие производственного дефекта',
        'Невозможность устранения недостатка',
        'Существенное нарушение требований к качеству',
        'Документальное подтверждение дефекта'
      ]
    }
  ];

  const disputeResolution = [
    {
      step: 1,
      title: 'Претензионный порядок',
      description: 'Направление письменной претензии с описанием нарушения',
      timeframe: '30 дней на рассмотрение'
    },
    {
      step: 2,
      title: 'Переговоры',
      description: 'Попытка урегулирования спора путем переговоров',
      timeframe: '15 дней на достижение соглашения'
    },
    {
      step: 3,
      title: 'Медиация',
      description: 'Привлечение независимого медиатора для решения спора',
      timeframe: '30 дней на процедуру медиации'
    },
    {
      step: 4,
      title: 'Судебное разбирательство',
      description: 'Обращение в суд при невозможности досудебного урегулирования',
      timeframe: 'Согласно процессуальному законодательству'
    }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Условия использования</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Правила и условия использования сайта, поставки оборудования 
              и оказания услуг компании SecureTech
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="FileText" className="h-6 w-6 mr-3" />
              Общие положения
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-medium-gray">
              Настоящие Условия использования регулируют отношения между ООО "СекьюрТех" 
              (далее - "Компания") и пользователями сайта securetech.ru, а также клиентами Компании.
            </p>
            <p className="text-medium-gray">
              Используя наш сайт или заказывая наши услуги, вы соглашаетесь с данными условиями. 
              Если вы не согласны с какими-либо условиями, пожалуйста, не используйте наш сайт.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Icon name="Info" className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-semibold text-blue-800">Реквизиты компании</span>
              </div>
              <div className="text-blue-700 text-sm space-y-1">
                <p><strong>Полное наименование:</strong> Общество с ограниченной ответственностью "СекьюрТех"</p>
                <p><strong>ИНН:</strong> 6658123456 <strong>КПП:</strong> 665801001</p>
                <p><strong>ОГРН:</strong> 1126658001234</p>
                <p><strong>Адрес:</strong> 620000, г. Екатеринбург, ул. Малышева, 42</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contract Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="FileCheck" className="h-6 w-6 mr-3" />
              Договорные отношения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {contractTerms.map((term, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-dark-slate mb-3">{term.section}</h3>
                  <div className="space-y-2">
                    {term.items.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <Icon name="ArrowRight" className="h-4 w-4 text-professional-blue mr-3 flex-shrink-0" />
                        <span className="text-medium-gray">{item}</span>
                      </div>
                    ))}
                  </div>
                  {index < contractTerms.length - 1 && <Separator className="mt-6" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="CreditCard" className="h-6 w-6 mr-3" />
              Условия оплаты
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {paymentTerms.map((payment, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-dark-slate mb-3">{payment.type}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-medium-gray mb-2">Способы оплаты:</h4>
                      <div className="space-y-1">
                        {payment.methods.map((method, idx) => (
                          <div key={idx} className="flex items-center">
                            <Icon name="Check" className="h-4 w-4 text-professional-blue mr-2" />
                            <span className="text-sm text-medium-gray">{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-medium-gray mb-2">Условия:</h4>
                      <p className="text-sm text-medium-gray">{payment.terms}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Warranty */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Shield" className="h-6 w-6 mr-3" />
              Гарантийные обязательства
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {warrantyConditions.map((warranty, index) => (
                <div key={index} className="border rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-dark-slate">{warranty.category}</h3>
                    <Badge className="bg-professional-blue text-white">{warranty.period}</Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">Что покрывается:</h4>
                      <div className="space-y-2">
                        {warranty.coverage.map((item, idx) => (
                          <div key={idx} className="flex items-center">
                            <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-medium-gray">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">Исключения:</h4>
                      <div className="space-y-2">
                        {warranty.exclusions.map((item, idx) => (
                          <div key={idx} className="flex items-center">
                            <Icon name="X" className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-medium-gray">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Return Policy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="RotateCcw" className="h-6 w-6 mr-3" />
              Условия возврата
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {returnPolicy.map((policy, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-dark-slate">{policy.condition}</h3>
                    <Badge variant="outline">{policy.period}</Badge>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-medium-gray mb-2">Требования для возврата:</h4>
                    <div className="space-y-1">
                      {policy.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-center">
                          <Icon name="ArrowRight" className="h-4 w-4 text-professional-blue mr-2 flex-shrink-0" />
                          <span className="text-sm text-medium-gray">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Icon name="AlertTriangle" className="h-5 w-5 text-yellow-600 mr-2" />
                <span className="font-semibold text-yellow-800">Важная информация</span>
              </div>
              <p className="text-yellow-700 text-sm">
                Возврат технически сложных товаров (камеры, регистраторы) возможен только при наличии 
                существенных недостатков, которые не могут быть устранены.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Dispute Resolution */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Scale" className="h-6 w-6 mr-3" />
              Порядок разрешения споров
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-medium-gray mb-6">
              Все споры и разногласия решаются в следующем порядке:
            </p>
            
            <div className="space-y-4">
              {disputeResolution.map((step, index) => (
                <div key={step.step} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-professional-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-dark-slate">{step.title}</h4>
                    <p className="text-sm text-medium-gray mb-1">{step.description}</p>
                    <Badge variant="secondary" className="text-xs">{step.timeframe}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Liability */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="AlertCircle" className="h-6 w-6 mr-3" />
              Ограничение ответственности
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Icon name="ArrowRight" className="h-5 w-5 text-professional-blue mt-0.5 flex-shrink-0" />
                <p className="text-medium-gray">
                  Компания не несет ответственности за ущерб, возникший вследствие неправильной 
                  эксплуатации оборудования или нарушения рекомендаций по установке.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="ArrowRight" className="h-5 w-5 text-professional-blue mt-0.5 flex-shrink-0" />
                <p className="text-medium-gray">
                  Максимальная ответственность Компании ограничена стоимостью поставленного 
                  оборудования или оказанных услуг.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="ArrowRight" className="h-5 w-5 text-professional-blue mt-0.5 flex-shrink-0" />
                <p className="text-medium-gray">
                  Компания не несет ответственности за косвенные убытки, упущенную выгоду 
                  или моральный вред.
                </p>
              </div>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Icon name="AlertTriangle" className="h-5 w-5 text-red-600 mr-2" />
                <span className="font-semibold text-red-800">Форс-мажор</span>
              </div>
              <p className="text-red-700 text-sm">
                Стороны освобождаются от ответственности за неисполнение обязательств, 
                если это вызвано обстоятельствами непреодолимой силы.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Copyright" className="h-6 w-6 mr-3" />
              Интеллектуальная собственность
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-medium-gray">
              Все материалы сайта, включая тексты, изображения, логотипы, дизайн, 
              являются объектами интеллектуальной собственности.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-dark-slate mb-3">Разрешается:</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-medium-gray">Просмотр материалов сайта</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-medium-gray">Скачивание документации</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-medium-gray">Цитирование с указанием источника</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-dark-slate mb-3">Запрещается:</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Icon name="X" className="h-4 w-4 text-red-500 mr-2" />
                    <span className="text-sm text-medium-gray">Копирование без разрешения</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="X" className="h-4 w-4 text-red-500 mr-2" />
                    <span className="text-sm text-medium-gray">Коммерческое использование</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="X" className="h-4 w-4 text-red-500 mr-2" />
                    <span className="text-sm text-medium-gray">Модификация материалов</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy and Data */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Lock" className="h-6 w-6 mr-3" />
              Конфиденциальность и защита данных
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-medium-gray">
              Обработка персональных данных осуществляется в соответствии с нашей 
              <a href="/privacy" className="text-professional-blue hover:underline ml-1">Политикой конфиденциальности</a>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Мы гарантируем:</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-green-700">Защиту ваших данных</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-green-700">Соблюдение законодательства</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-green-700">Прозрачность обработки</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Ваши права:</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center">
                    <Icon name="User" className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-blue-700">Доступ к своим данным</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Edit" className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-blue-700">Исправление данных</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Trash2" className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-blue-700">Удаление данных</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="RefreshCw" className="h-6 w-6 mr-3" />
              Изменения условий
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-medium-gray">
              Компания оставляет за собой право изменять настоящие Условия использования. 
              Изменения вступают в силу с момента их публикации на сайте.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">О существенных изменениях мы уведомляем:</h4>
              <div className="space-y-1 text-sm">
                <div className="flex items-center">
                  <Icon name="Mail" className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-blue-700">По email (если адрес предоставлен)</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Bell" className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-blue-700">Уведомлением на сайте</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-blue-700">По телефону (для активных клиентов)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="MessageCircle" className="h-6 w-6 mr-3" />
              Контактная информация
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-medium-gray mb-6">
              По всем вопросам, связанным с условиями использования, обращайтесь к нам:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Building" className="h-5 w-5 text-professional-blue" />
                  <div>
                    <p className="font-medium">Юридический адрес</p>
                    <p className="text-sm text-medium-gray">620000, г. Екатеринбург, ул. Малышева, 42</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-professional-blue" />
                  <div>
                    <p className="font-medium">+7 (343) 123-45-67</p>
                    <p className="text-sm text-medium-gray">Юридический отдел</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-professional-blue" />
                  <div>
                    <p className="font-medium">legal@securetech.ru</p>
                    <p className="text-sm text-medium-gray">Правовые вопросы</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-light-gray rounded-lg p-4">
                <h4 className="font-semibold text-dark-slate mb-3">Время работы</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-medium-gray">Понедельник - Пятница:</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-medium-gray">Суббота:</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-medium-gray">Воскресенье:</span>
                    <span className="font-medium">Выходной</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}