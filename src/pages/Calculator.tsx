import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function Calculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [calculatorData, setCalculatorData] = useState({
    objectType: '',
    area: [100],
    camerasCount: [4],
    cameraType: '',
    resolution: '',
    nightVision: false,
    weatherProof: false,
    ptz: false,
    analytics: false,
    storage: '',
    installation: false,
    maintenance: false,
    name: '',
    phone: '',
    email: ''
  });

  const [estimatedCost, setEstimatedCost] = useState(0);

  const steps = [
    { id: 1, title: 'Объект', icon: 'Building' },
    { id: 2, title: 'Камеры', icon: 'Camera' },
    { id: 3, title: 'Функции', icon: 'Settings' },
    { id: 4, title: 'Услуги', icon: 'Wrench' },
    { id: 5, title: 'Контакты', icon: 'User' }
  ];

  const objectTypes = [
    { value: 'office', label: 'Офис', multiplier: 1.0 },
    { value: 'warehouse', label: 'Склад', multiplier: 1.2 },
    { value: 'retail', label: 'Магазин', multiplier: 1.1 },
    { value: 'production', label: 'Производство', multiplier: 1.5 },
    { value: 'residential', label: 'Жилой дом', multiplier: 0.8 }
  ];

  const cameraTypes = [
    { value: 'dome', label: 'Купольные', price: 8000 },
    { value: 'bullet', label: 'Цилиндрические', price: 6000 },
    { value: 'ptz', label: 'Поворотные', price: 25000 },
    { value: 'thermal', label: 'Тепловизионные', price: 45000 }
  ];

  const resolutions = [
    { value: 'hd', label: 'HD (720p)', multiplier: 1.0 },
    { value: 'fullhd', label: 'Full HD (1080p)', multiplier: 1.3 },
    { value: '4k', label: '4K Ultra HD', multiplier: 2.0 }
  ];

  const storageOptions = [
    { value: '1tb', label: '1 ТБ (7 дней)', price: 8000 },
    { value: '2tb', label: '2 ТБ (14 дней)', price: 12000 },
    { value: '4tb', label: '4 ТБ (30 дней)', price: 18000 },
    { value: '8tb', label: '8 ТБ (60 дней)', price: 28000 }
  ];

  // Calculate estimated cost
  useEffect(() => {
    let cost = 0;
    
    // Base camera cost
    const cameraType = cameraTypes.find(t => t.value === calculatorData.cameraType);
    if (cameraType) {
      cost += cameraType.price * calculatorData.camerasCount[0];
    }
    
    // Resolution multiplier
    const resolution = resolutions.find(r => r.value === calculatorData.resolution);
    if (resolution) {
      cost *= resolution.multiplier;
    }
    
    // Object type multiplier
    const objectType = objectTypes.find(t => t.value === calculatorData.objectType);
    if (objectType) {
      cost *= objectType.multiplier;
    }
    
    // Additional features
    if (calculatorData.nightVision) cost += calculatorData.camerasCount[0] * 2000;
    if (calculatorData.weatherProof) cost += calculatorData.camerasCount[0] * 1500;
    if (calculatorData.ptz) cost += calculatorData.camerasCount[0] * 15000;
    if (calculatorData.analytics) cost += calculatorData.camerasCount[0] * 5000;
    
    // Storage
    const storage = storageOptions.find(s => s.value === calculatorData.storage);
    if (storage) {
      cost += storage.price;
    }
    
    // Installation
    if (calculatorData.installation) {
      cost += calculatorData.camerasCount[0] * 3000;
    }
    
    // Maintenance (annual)
    if (calculatorData.maintenance) {
      cost += calculatorData.camerasCount[0] * 6000;
    }
    
    setEstimatedCost(Math.round(cost));
  }, [calculatorData]);

  const handleInputChange = (field: string, value: any) => {
    setCalculatorData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Calculator data:', calculatorData);
    console.log('Estimated cost:', estimatedCost);
  };

  const progressPercentage = (currentStep / steps.length) * 100;

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-slate to-professional-blue text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Калькулятор стоимости</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Рассчитайте примерную стоимость системы видеонаблюдения 
              для вашего объекта за несколько минут
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    step.id <= currentStep 
                      ? 'bg-professional-blue text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    <Icon name={step.icon} className="h-5 w-5" />
                  </div>
                  <span className={`ml-2 text-sm ${
                    step.id === currentStep ? 'text-professional-blue font-medium' : 'text-medium-gray'
                  }`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <p className="text-sm text-medium-gray mt-2">
              Шаг {currentStep} из {steps.length}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Шаг {currentStep}: {steps[currentStep - 1].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Object */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div>
                          <label className="text-sm font-medium mb-3 block">Тип объекта *</label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {objectTypes.map(type => (
                              <button
                                key={type.value}
                                type="button"
                                onClick={() => handleInputChange('objectType', type.value)}
                                className={`p-4 border rounded-lg text-left transition-colors ${
                                  calculatorData.objectType === type.value
                                    ? 'border-professional-blue bg-professional-blue/10'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <div className="font-medium text-dark-slate">{type.label}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-3 block">
                            Площадь объекта: {calculatorData.area[0]} м²
                          </label>
                          <Slider
                            value={calculatorData.area}
                            onValueChange={(value) => handleInputChange('area', value)}
                            max={5000}
                            min={50}
                            step={50}
                            className="mt-2"
                          />
                          <div className="flex justify-between text-xs text-medium-gray mt-1">
                            <span>50 м²</span>
                            <span>5000 м²</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Cameras */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div>
                          <label className="text-sm font-medium mb-3 block">
                            Количество камер: {calculatorData.camerasCount[0]}
                          </label>
                          <Slider
                            value={calculatorData.camerasCount}
                            onValueChange={(value) => handleInputChange('camerasCount', value)}
                            max={64}
                            min={1}
                            step={1}
                            className="mt-2"
                          />
                          <div className="flex justify-between text-xs text-medium-gray mt-1">
                            <span>1 камера</span>
                            <span>64 камеры</span>
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-3 block">Тип камер *</label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {cameraTypes.map(type => (
                              <button
                                key={type.value}
                                type="button"
                                onClick={() => handleInputChange('cameraType', type.value)}
                                className={`p-4 border rounded-lg text-left transition-colors ${
                                  calculatorData.cameraType === type.value
                                    ? 'border-professional-blue bg-professional-blue/10'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <div className="font-medium text-dark-slate">{type.label}</div>
                                <div className="text-sm text-medium-gray">от {type.price.toLocaleString()} ₽</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-3 block">Разрешение *</label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {resolutions.map(res => (
                              <button
                                key={res.value}
                                type="button"
                                onClick={() => handleInputChange('resolution', res.value)}
                                className={`p-3 border rounded-lg text-center transition-colors ${
                                  calculatorData.resolution === res.value
                                    ? 'border-professional-blue bg-professional-blue/10'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <div className="font-medium text-dark-slate">{res.label}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Features */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div>
                          <label className="text-sm font-medium mb-3 block">Дополнительные функции</label>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                              <div>
                                <h4 className="font-medium text-dark-slate">Ночное видение</h4>
                                <p className="text-sm text-medium-gray">ИК подсветка до 30 метров</p>
                              </div>
                              <Checkbox
                                checked={calculatorData.nightVision}
                                onCheckedChange={(checked) => handleInputChange('nightVision', checked)}
                              />
                            </div>

                            <div className="flex items-center justify-between p-4 border rounded-lg">
                              <div>
                                <h4 className="font-medium text-dark-slate">Защита от погоды</h4>
                                <p className="text-sm text-medium-gray">IP67 для уличной установки</p>
                              </div>
                              <Checkbox
                                checked={calculatorData.weatherProof}
                                onCheckedChange={(checked) => handleInputChange('weatherProof', checked)}
                              />
                            </div>

                            <div className="flex items-center justify-between p-4 border rounded-lg">
                              <div>
                                <h4 className="font-medium text-dark-slate">PTZ управление</h4>
                                <p className="text-sm text-medium-gray">Поворот, наклон, зум</p>
                              </div>
                              <Checkbox
                                checked={calculatorData.ptz}
                                onCheckedChange={(checked) => handleInputChange('ptz', checked)}
                              />
                            </div>

                            <div className="flex items-center justify-between p-4 border rounded-lg">
                              <div>
                                <h4 className="font-medium text-dark-slate">AI аналитика</h4>
                                <p className="text-sm text-medium-gray">Распознавание лиц, детекция объектов</p>
                              </div>
                              <Checkbox
                                checked={calculatorData.analytics}
                                onCheckedChange={(checked) => handleInputChange('analytics', checked)}
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-3 block">Система хранения *</label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {storageOptions.map(storage => (
                              <button
                                key={storage.value}
                                type="button"
                                onClick={() => handleInputChange('storage', storage.value)}
                                className={`p-4 border rounded-lg text-left transition-colors ${
                                  calculatorData.storage === storage.value
                                    ? 'border-professional-blue bg-professional-blue/10'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <div className="font-medium text-dark-slate">{storage.label}</div>
                                <div className="text-sm text-medium-gray">{storage.price.toLocaleString()} ₽</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Services */}
                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <div>
                          <label className="text-sm font-medium mb-3 block">Дополнительные услуги</label>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                              <div>
                                <h4 className="font-medium text-dark-slate">Установка и настройка</h4>
                                <p className="text-sm text-medium-gray">
                                  Профессиональный монтаж (~{(calculatorData.camerasCount[0] * 3000).toLocaleString()} ₽)
                                </p>
                              </div>
                              <Checkbox
                                checked={calculatorData.installation}
                                onCheckedChange={(checked) => handleInputChange('installation', checked)}
                              />
                            </div>

                            <div className="flex items-center justify-between p-4 border rounded-lg">
                              <div>
                                <h4 className="font-medium text-dark-slate">Годовое обслуживание</h4>
                                <p className="text-sm text-medium-gray">
                                  Техподдержка и профилактика (~{(calculatorData.camerasCount[0] * 6000).toLocaleString()} ₽/год)
                                </p>
                              </div>
                              <Checkbox
                                checked={calculatorData.maintenance}
                                onCheckedChange={(checked) => handleInputChange('maintenance', checked)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 5: Contact */}
                    {currentStep === 5 && (
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-dark-slate mb-4">
                            Получить точный расчет
                          </h3>
                          <p className="text-medium-gray mb-6">
                            Оставьте контакты и мы отправим вам детальный расчет с учетом всех особенностей объекта
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
                            <Input
                              placeholder="Введите имя"
                              value={calculatorData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Телефон *</label>
                            <Input
                              placeholder="+7 (___) ___-__-__"
                              value={calculatorData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block">Email</label>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={calculatorData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                          />
                        </div>

                        <Button 
                          type="submit"
                          className="w-full bg-professional-blue hover:bg-blue-700"
                        >
                          <Icon name="Send" className="h-4 w-4 mr-2" />
                          Получить точный расчет
                        </Button>
                      </div>
                    )}

                    {/* Navigation */}
                    <div className="flex justify-between mt-8">
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                      >
                        <Icon name="ArrowLeft" className="h-4 w-4 mr-2" />
                        Назад
                      </Button>
                      
                      {currentStep < steps.length ? (
                        <Button 
                          type="button"
                          onClick={nextStep}
                          className="bg-professional-blue hover:bg-blue-700"
                        >
                          Далее
                          <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
                        </Button>
                      ) : null}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Cost Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle>Предварительный расчет</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-6 bg-gradient-to-br from-professional-blue/10 to-transparent rounded-lg">
                    <div className="text-3xl font-bold text-professional-blue mb-2">
                      {estimatedCost.toLocaleString()} ₽
                    </div>
                    <p className="text-sm text-medium-gray">Примерная стоимость</p>
                  </div>

                  <Separator />

                  <div className="space-y-3 text-sm">
                    {calculatorData.objectType && (
                      <div className="flex justify-between">
                        <span className="text-medium-gray">Тип объекта:</span>
                        <span className="font-medium">
                          {objectTypes.find(t => t.value === calculatorData.objectType)?.label}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-medium-gray">Площадь:</span>
                      <span className="font-medium">{calculatorData.area[0]} м²</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-medium-gray">Камер:</span>
                      <span className="font-medium">{calculatorData.camerasCount[0]} шт.</span>
                    </div>

                    {calculatorData.cameraType && (
                      <div className="flex justify-between">
                        <span className="text-medium-gray">Тип камер:</span>
                        <span className="font-medium">
                          {cameraTypes.find(t => t.value === calculatorData.cameraType)?.label}
                        </span>
                      </div>
                    )}

                    {calculatorData.resolution && (
                      <div className="flex justify-between">
                        <span className="text-medium-gray">Разрешение:</span>
                        <span className="font-medium">
                          {resolutions.find(r => r.value === calculatorData.resolution)?.label}
                        </span>
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div className="space-y-2 text-xs text-medium-gray">
                    <p>* Точная стоимость рассчитывается после выезда специалиста</p>
                    <p>* Цены указаны без учета монтажных работ</p>
                    <p>* Возможны скидки при заказе комплексных решений</p>
                  </div>

                  <Button className="w-full bg-professional-blue hover:bg-blue-700">
                    <Icon name="Phone" className="h-4 w-4 mr-2" />
                    Вызвать специалиста
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-slate mb-4">Почему наш калькулятор точный</h2>
            <p className="text-xl text-medium-gray">Мы учитываем все факторы для максимально точного расчета</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Target', title: 'Точность расчета', desc: 'Учитываем все особенности объекта' },
              { icon: 'TrendingUp', title: 'Актуальные цены', desc: 'Цены обновляются ежедневно' },
              { icon: 'Shield', title: 'Без скрытых платежей', desc: 'Прозрачное ценообразование' },
              { icon: 'Award', title: 'Опыт 10+ лет', desc: 'Основано на реальных проектах' }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-professional-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-gray">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}