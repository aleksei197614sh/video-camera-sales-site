import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = {
    general: {
      title: 'Общие вопросы',
      icon: 'HelpCircle',
      questions: [
        {
          question: 'Что такое система видеонаблюдения и зачем она нужна?',
          answer: 'Система видеонаблюдения — это комплекс технических средств для визуального контроля и записи происходящего на объекте. Она обеспечивает безопасность, помогает предотвратить кражи, контролировать доступ и анализировать происходящие события.'
        },
        {
          question: 'Какие типы камер видеонаблюдения существуют?',
          answer: 'Основные типы: купольные (для скрытого наблюдения), цилиндрические (для направленного наблюдения), PTZ (поворотные с зумом), тепловизионные (для работы в темноте), панорамные (360°) и специализированные камеры для конкретных задач.'
        },
        {
          question: 'В чем разница между IP и аналоговыми камерами?',
          answer: 'IP-камеры передают цифровой сигнал по сети, обеспечивают высокое качество изображения, имеют встроенную аналитику и легко масштабируются. Аналоговые камеры дешевле, но ограничены в качестве и функциональности.'
        },
        {
          question: 'Сколько стоит система видеонаблюдения?',
          answer: 'Стоимость зависит от количества камер, их типа, качества записи и дополнительных функций. Базовая система для дома от 30 000 руб., для офиса от 100 000 руб., для крупных объектов от 500 000 руб.'
        }
      ]
    },
    technical: {
      title: 'Технические вопросы',
      icon: 'Settings',
      questions: [
        {
          question: 'Какое разрешение камер лучше выбрать?',
          answer: 'Для общего наблюдения достаточно Full HD (1080p). Для детального анализа рекомендуется 4K. Для распознавания лиц — минимум 2MP на расстоянии до 3 метров. Учитывайте, что высокое разрешение требует больше места для хранения.'
        },
        {
          question: 'Как долго хранятся записи?',
          answer: 'Срок хранения зависит от объема накопителя и настроек системы. Обычно от 7 до 30 дней. Для коммерческих объектов рекомендуется минимум 30 дней. Важные записи можно архивировать отдельно.'
        },
        {
          question: 'Можно ли просматривать камеры удаленно?',
          answer: 'Да, современные системы поддерживают удаленный доступ через интернет. Можно просматривать камеры с компьютера, смартфона или планшета из любой точки мира. Требуется стабильное интернет-соединение.'
        },
        {
          question: 'Что такое детекция движения и как она работает?',
          answer: 'Детекция движения — функция автоматического обнаружения изменений в кадре. Система анализирует видеопоток и при обнаружении движения может начать запись, отправить уведомление или включить сирену.'
        }
      ]
    },
    installation: {
      title: 'Установка и монтаж',
      icon: 'Wrench',
      questions: [
        {
          question: 'Сколько времени занимает установка системы?',
          answer: 'Для дома или небольшого офиса — 1-2 дня. Для крупных объектов — от недели до месяца. Время зависит от количества камер, сложности прокладки кабелей и настройки системы.'
        },
        {
          question: 'Нужно ли получать разрешения на установку камер?',
          answer: 'На своей территории разрешения не требуются. При съемке общественных мест или соседних участков нужно соблюдать законодательство о персональных данных и уведомлять о видеонаблюдении.'
        },
        {
          question: 'Можно ли установить камеры самостоятельно?',
          answer: 'Простые системы можно установить самостоятельно, но для профессионального результата рекомендуется обращаться к специалистам. Неправильная установка может снизить эффективность системы.'
        },
        {
          question: 'Какие кабели используются для подключения камер?',
          answer: 'Для IP-камер — сетевой кабель UTP cat5e/6. Для аналоговых — коаксиальный кабель RG-59/6. Также может потребоваться кабель питания, если камеры не поддерживают PoE (питание по сети).'
        }
      ]
    },
    legal: {
      title: 'Правовые вопросы',
      icon: 'Scale',
      questions: [
        {
          question: 'Законно ли устанавливать камеры на рабочих местах?',
          answer: 'Да, но с ограничениями. Нельзя устанавливать в туалетах, раздевалках, комнатах отдыха. Сотрудники должны быть уведомлены о видеонаблюдении. Записи нельзя использовать для контроля производительности.'
        },
        {
          question: 'Нужно ли уведомлять о видеонаблюдении?',
          answer: 'Да, обязательно. Должны быть установлены предупреждающие таблички "Ведется видеонаблюдение". Посетители и сотрудники должны быть проинформированы о целях съемки и сроках хранения записей.'
        },
        {
          question: 'Можно ли передавать записи третьим лицам?',
          answer: 'Записи можно передавать только правоохранительным органам по официальному запросу или в суд. Передача записей другим лицам без согласия снимаемых может нарушать закон о персональных данных.'
        },
        {
          question: 'Как долго можно хранить записи согласно закону?',
          answer: 'Законодательство не устанавливает точных сроков, но рекомендуется не более 30 дней для общих целей. Для коммерческих объектов может потребоваться более длительное хранение согласно внутренним политикам.'
        }
      ]
    },
    maintenance: {
      title: 'Обслуживание',
      icon: 'Tool',
      questions: [
        {
          question: 'Как часто нужно обслуживать систему видеонаблюдения?',
          answer: 'Рекомендуется проводить техническое обслуживание каждые 6 месяцев. Включает очистку камер, проверку записи, обновление ПО, тестирование всех функций и резервное копирование настроек.'
        },
        {
          question: 'Что делать, если камера перестала работать?',
          answer: 'Сначала проверьте питание и кабельные соединения. Перезагрузите камеру и регистратор. Проверьте настройки сети. Если проблема не решается — обратитесь в техническую поддержку.'
        },
        {
          question: 'Как очищать камеры видеонаблюдения?',
          answer: 'Используйте мягкую ткань и специальные средства для оптики. Не используйте абразивные материалы. Для уличных камер регулярно очищайте от пыли, снега и паутины. Проверяйте герметичность корпуса.'
        },
        {
          question: 'Нужно ли обновлять программное обеспечение?',
          answer: 'Да, регулярные обновления важны для безопасности и стабильности работы. Обновления исправляют ошибки, добавляют новые функции и закрывают уязвимости безопасности.'
        }
      ]
    }
  };

  const allQuestions = Object.values(faqCategories).flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.title }))
  );

  const filteredQuestions = allQuestions.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const popularQuestions = [
    'Сколько стоит система видеонаблюдения?',
    'Какое разрешение камер лучше выбрать?',
    'Можно ли просматривать камеры удаленно?',
    'Нужно ли получать разрешения на установку камер?',
    'Как долго хранятся записи?'
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Часто задаваемые вопросы</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ответы на популярные вопросы о системах видеонаблюдения, 
              установке, обслуживании и правовых аспектах
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Search" className="h-5 w-5 mr-2" />
                  Поиск по FAQ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Input
                  placeholder="Введите ваш вопрос..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div>
                  <h3 className="font-semibold text-dark-slate mb-3">Популярные вопросы</h3>
                  <div className="space-y-2">
                    {popularQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchTerm(question)}
                        className="w-full text-left text-sm text-medium-gray hover:text-professional-blue transition-colors p-2 rounded hover:bg-gray-50"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-professional-blue/10 to-transparent rounded-lg p-4">
                  <h3 className="font-semibold text-dark-slate mb-2">Не нашли ответ?</h3>
                  <p className="text-sm text-medium-gray mb-3">
                    Задайте вопрос нашим экспертам
                  </p>
                  <Button className="w-full bg-professional-blue hover:bg-blue-700">
                    <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                    Задать вопрос
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {searchTerm ? (
              /* Search Results */
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-dark-slate mb-2">
                    Результаты поиска
                  </h2>
                  <p className="text-medium-gray">
                    Найдено {filteredQuestions.length} результатов для "{searchTerm}"
                  </p>
                </div>

                {filteredQuestions.length > 0 ? (
                  <Accordion type="single" collapsible className="space-y-4">
                    {filteredQuestions.map((item, index) => (
                      <AccordionItem key={index} value={`search-${index}`}>
                        <Card>
                          <AccordionTrigger className="px-6 py-4 hover:no-underline">
                            <div className="text-left">
                              <h3 className="font-semibold text-dark-slate mb-1">
                                {item.question}
                              </h3>
                              <Badge variant="secondary" className="text-xs">
                                {item.category}
                              </Badge>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-medium-gray">{item.answer}</p>
                          </AccordionContent>
                        </Card>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="text-center py-12">
                    <Icon name="Search" className="h-12 w-12 text-medium-gray mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-dark-slate mb-2">
                      Ничего не найдено
                    </h3>
                    <p className="text-medium-gray mb-4">
                      Попробуйте изменить поисковый запрос
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => setSearchTerm('')}
                    >
                      Показать все вопросы
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              /* Categories */
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
                  {Object.entries(faqCategories).map(([key, category]) => (
                    <TabsTrigger key={key} value={key} className="text-sm">
                      {category.title.split(' ')[0]}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(faqCategories).map(([key, category]) => (
                  <TabsContent key={key} value={key}>
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-professional-blue rounded-lg flex items-center justify-center mr-3">
                          <Icon name={category.icon} className="h-5 w-5 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-dark-slate">
                          {category.title}
                        </h2>
                      </div>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((item, index) => (
                        <AccordionItem key={index} value={`${key}-${index}`}>
                          <Card>
                            <AccordionTrigger className="px-6 py-4 hover:no-underline">
                              <h3 className="font-semibold text-dark-slate text-left">
                                {item.question}
                              </h3>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4">
                              <p className="text-medium-gray">{item.answer}</p>
                            </AccordionContent>
                          </Card>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                ))}
              </Tabs>
            )}
          </div>
        </div>
      </div>

      {/* Quick Help Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Нужна помощь?</h2>
            <p className="text-xl text-medium-gray">Выберите удобный способ получить поддержку</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-professional-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Телефонная поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray mb-4">
                  Получите консультацию по телефону в рабочее время
                </p>
                <Button className="bg-professional-blue hover:bg-blue-700">
                  +7 (343) 123-45-67
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-professional-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Онлайн-чат</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray mb-4">
                  Быстрые ответы на вопросы в режиме реального времени
                </p>
                <Button variant="outline">
                  Начать чат
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-professional-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Email поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray mb-4">
                  Подробные ответы на сложные технические вопросы
                </p>
                <Button variant="outline">
                  support@securetech.ru
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-dark-slate text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Наши эксперты готовы помочь с выбором и настройкой системы видеонаблюдения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-professional-blue hover:bg-blue-700">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-slate">
              <Icon name="Calendar" className="h-5 w-5 mr-2" />
              Записаться на встречу
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}