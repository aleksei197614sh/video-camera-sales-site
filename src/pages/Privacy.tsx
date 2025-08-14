import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Privacy() {
  const dataTypes = [
    {
      type: 'Персональные данные',
      description: 'ФИО, контактная информация, данные документов',
      purpose: 'Обработка заказов, связь с клиентами',
      retention: '3 года после последнего обращения'
    },
    {
      type: 'Технические данные',
      description: 'IP-адреса, данные браузера, cookies',
      purpose: 'Улучшение работы сайта, аналитика',
      retention: '1 год'
    },
    {
      type: 'Коммерческие данные',
      description: 'История заказов, предпочтения, платежная информация',
      purpose: 'Персонализация предложений, учет',
      retention: '5 лет (требования законодательства)'
    }
  ];

  const userRights = [
    {
      right: 'Право на информацию',
      description: 'Получение информации о том, какие данные мы собираем и как их используем'
    },
    {
      right: 'Право на доступ',
      description: 'Запрос копии всех персональных данных, которые мы о вас храним'
    },
    {
      right: 'Право на исправление',
      description: 'Исправление неточных или неполных персональных данных'
    },
    {
      right: 'Право на удаление',
      description: 'Удаление персональных данных при определенных условиях'
    },
    {
      right: 'Право на ограничение',
      description: 'Ограничение обработки персональных данных в определенных случаях'
    },
    {
      right: 'Право на переносимость',
      description: 'Получение данных в структурированном формате для передачи другому контролеру'
    }
  ];

  const securityMeasures = [
    {
      measure: 'Шифрование данных',
      description: 'Все персональные данные шифруются при передаче и хранении',
      icon: 'Lock'
    },
    {
      measure: 'Контроль доступа',
      description: 'Строгое разграничение доступа к данным по ролям сотрудников',
      icon: 'Key'
    },
    {
      measure: 'Резервное копирование',
      description: 'Регулярное создание резервных копий для предотвращения потери данных',
      icon: 'HardDrive'
    },
    {
      measure: 'Мониторинг безопасности',
      description: 'Постоянный мониторинг систем на предмет угроз безопасности',
      icon: 'Shield'
    },
    {
      measure: 'Обучение персонала',
      description: 'Регулярное обучение сотрудников правилам обработки данных',
      icon: 'GraduationCap'
    },
    {
      measure: 'Аудит безопасности',
      description: 'Ежегодный аудит систем безопасности независимыми экспертами',
      icon: 'Search'
    }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Политика конфиденциальности</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Мы серьезно относимся к защите ваших персональных данных и соблюдаем 
              все требования законодательства о персональных данных
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Info" className="h-6 w-6 mr-3" />
              Общие положения
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-medium-gray">
              Настоящая Политика конфиденциальности определяет порядок обработки персональных данных 
              пользователей сайта securetech.ru и услуг компании ООО "СекьюрТех".
            </p>
            <p className="text-medium-gray">
              Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ 
              "О персональных данных" и другими нормативными актами Российской Федерации.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Icon name="Calendar" className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-semibold text-blue-800">Дата последнего обновления: 15 декабря 2024</span>
              </div>
              <p className="text-blue-700 text-sm">
                Мы регулярно обновляем политику конфиденциальности в соответствии с изменениями законодательства
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Collection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Database" className="h-6 w-6 mr-3" />
              Какие данные мы собираем
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {dataTypes.map((data, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-dark-slate mb-2">{data.type}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-medium-gray font-medium">Что включает:</span>
                      <p className="text-medium-gray">{data.description}</p>
                    </div>
                    <div>
                      <span className="text-medium-gray font-medium">Цель обработки:</span>
                      <p className="text-medium-gray">{data.purpose}</p>
                    </div>
                    <div>
                      <span className="text-medium-gray font-medium">Срок хранения:</span>
                      <p className="text-medium-gray">{data.retention}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* User Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Users" className="h-6 w-6 mr-3" />
              Ваши права
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-medium-gray mb-6">
              В соответствии с законодательством о персональных данных, вы имеете следующие права:
            </p>
            <div className="space-y-4">
              {userRights.map((right, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon name="Check" className="h-5 w-5 text-professional-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-dark-slate">{right.right}</h4>
                    <p className="text-sm text-medium-gray">{right.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center mb-2">
                <Icon name="AlertTriangle" className="h-5 w-5 text-yellow-600 mr-2" />
                <span className="font-semibold text-yellow-800">Как реализовать свои права</span>
              </div>
              <p className="text-yellow-700 text-sm">
                Для реализации любого из указанных прав обратитесь к нам по email: 
                <a href="mailto:privacy@securetech.ru" className="underline ml-1">privacy@securetech.ru</a> 
                или по телефону +7 (343) 123-45-67
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Security Measures */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Shield" className="h-6 w-6 mr-3" />
              Меры безопасности
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-medium-gray mb-6">
              Мы применяем современные технические и организационные меры для защиты ваших данных:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-professional-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={measure.icon} className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-slate">{measure.measure}</h4>
                    <p className="text-sm text-medium-gray">{measure.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cookies Policy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Cookie" className="h-6 w-6 mr-3" />
              Использование cookies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-medium-gray">
              Наш сайт использует файлы cookie для улучшения пользовательского опыта и аналитики.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-dark-slate mb-2">Необходимые</h4>
                <p className="text-sm text-medium-gray">
                  Обеспечивают базовую функциональность сайта
                </p>
                <Badge className="mt-2 bg-green-100 text-green-800">Всегда активны</Badge>
              </div>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-dark-slate mb-2">Аналитические</h4>
                <p className="text-sm text-medium-gray">
                  Помогают понять, как посетители используют сайт
                </p>
                <Badge className="mt-2 bg-blue-100 text-blue-800">Опционально</Badge>
              </div>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-dark-slate mb-2">Маркетинговые</h4>
                <p className="text-sm text-medium-gray">
                  Используются для персонализации рекламы
                </p>
                <Badge className="mt-2 bg-purple-100 text-purple-800">Опционально</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third Parties */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="ExternalLink" className="h-6 w-6 mr-3" />
              Передача данных третьим лицам
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-medium-gray">
              Мы можем передавать ваши персональные данные третьим лицам только в следующих случаях:
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Icon name="Check" className="h-5 w-5 text-professional-blue mr-3" />
                <span className="text-medium-gray">С вашего явного согласия</span>
              </div>
              <div className="flex items-center">
                <Icon name="Check" className="h-5 w-5 text-professional-blue mr-3" />
                <span className="text-medium-gray">Для выполнения договорных обязательств</span>
              </div>
              <div className="flex items-center">
                <Icon name="Check" className="h-5 w-5 text-professional-blue mr-3" />
                <span className="text-medium-gray">По требованию государственных органов</span>
              </div>
              <div className="flex items-center">
                <Icon name="Check" className="h-5 w-5 text-professional-blue mr-3" />
                <span className="text-medium-gray">Нашим партнерам для обработки заказов</span>
              </div>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Icon name="AlertTriangle" className="h-5 w-5 text-red-600 mr-2" />
                <span className="font-semibold text-red-800">Важно</span>
              </div>
              <p className="text-red-700 text-sm">
                Мы никогда не продаем ваши персональные данные третьим лицам для маркетинговых целей
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Phone" className="h-6 w-6 mr-3" />
              Контактная информация
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-dark-slate mb-4">Контролер персональных данных</h3>
              <div className="space-y-2 text-medium-gray">
                <p><strong>Организация:</strong> ООО "СекьюрТех"</p>
                <p><strong>Адрес:</strong> 620000, г. Екатеринбург, ул. Малышева, 42</p>
                <p><strong>ИНН:</strong> 6658123456</p>
                <p><strong>ОГРН:</strong> 1126658001234</p>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-semibold text-dark-slate mb-4">Контакты по вопросам персональных данных</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-professional-blue" />
                  <div>
                    <p className="font-medium">privacy@securetech.ru</p>
                    <p className="text-sm text-medium-gray">Вопросы по обработке данных</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-professional-blue" />
                  <div>
                    <p className="font-medium">+7 (343) 123-45-67</p>
                    <p className="text-sm text-medium-gray">Горячая линия по защите данных</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-5 w-5 text-professional-blue" />
                  <div>
                    <p className="font-medium">г. Екатеринбург, ул. Малышева, 42</p>
                    <p className="text-sm text-medium-gray">Личное обращение: Пн-Пт 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal Basis */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Scale" className="h-6 w-6 mr-3" />
              Правовые основания обработки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-medium-gray mb-4">
              Обработка персональных данных осуществляется на следующих правовых основаниях:
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-professional-blue pl-4">
                <h4 className="font-semibold text-dark-slate">Согласие субъекта данных</h4>
                <p className="text-sm text-medium-gray">
                  При заполнении форм на сайте, регистрации или подписке на рассылку
                </p>
              </div>
              
              <div className="border-l-4 border-professional-blue pl-4">
                <h4 className="font-semibold text-dark-slate">Исполнение договора</h4>
                <p className="text-sm text-medium-gray">
                  Для выполнения обязательств по договорам поставки и обслуживания
                </p>
              </div>
              
              <div className="border-l-4 border-professional-blue pl-4">
                <h4 className="font-semibold text-dark-slate">Законные интересы</h4>
                <p className="text-sm text-medium-gray">
                  Для обеспечения безопасности, предотвращения мошенничества
                </p>
              </div>
              
              <div className="border-l-4 border-professional-blue pl-4">
                <h4 className="font-semibold text-dark-slate">Соблюдение правовых обязательств</h4>
                <p className="text-sm text-medium-gray">
                  Для соблюдения требований налогового и бухгалтерского законодательства
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Measures */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Lock" className="h-6 w-6 mr-3" />
              Меры защиты данных
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-medium-gray mb-6">
              Мы применяем комплексные меры для защиты ваших персональных данных:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-professional-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={measure.icon} className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-slate">{measure.measure}</h4>
                    <p className="text-sm text-medium-gray">{measure.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Changes to Policy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="RefreshCw" className="h-6 w-6 mr-3" />
              Изменения в политике
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-medium-gray">
              Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. 
              О существенных изменениях мы уведомляем следующими способами:
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 text-professional-blue mr-3" />
                <span className="text-medium-gray">Уведомление по email (если у нас есть ваш адрес)</span>
              </div>
              <div className="flex items-center">
                <Icon name="Globe" className="h-5 w-5 text-professional-blue mr-3" />
                <span className="text-medium-gray">Размещение уведомления на главной странице сайта</span>
              </div>
              <div className="flex items-center">
                <Icon name="Bell" className="h-5 w-5 text-professional-blue mr-3" />
                <span className="text-medium-gray">Push-уведомления в мобильном приложении</span>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-700 text-sm">
                Рекомендуем периодически проверять данную страницу для ознакомления с актуальной версией политики
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact for Questions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="MessageCircle" className="h-6 w-6 mr-3" />
              Вопросы и обращения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-medium-gray mb-6">
              Если у вас есть вопросы о том, как мы обрабатываем ваши персональные данные, 
              или вы хотите реализовать свои права, свяжитесь с нами:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-professional-blue" />
                  <div>
                    <p className="font-medium">privacy@securetech.ru</p>
                    <p className="text-sm text-medium-gray">Ответ в течение 3 рабочих дней</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-professional-blue" />
                  <div>
                    <p className="font-medium">+7 (343) 123-45-67</p>
                    <p className="text-sm text-medium-gray">Консультации по телефону</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-light-gray rounded-lg p-4">
                <h4 className="font-semibold text-dark-slate mb-2">Время рассмотрения обращений</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-medium-gray">Запрос информации:</span>
                    <span className="font-medium">до 30 дней</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-medium-gray">Исправление данных:</span>
                    <span className="font-medium">до 7 дней</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-medium-gray">Удаление данных:</span>
                    <span className="font-medium">до 10 дней</span>
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