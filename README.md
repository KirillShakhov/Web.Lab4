# Web.Lab4

[![GitHub stars][stars-shield]][stars-url]
[![GitHub issues][issues-shield]][issues-url]
[![GitHub][license-shield]][license-url]
![GitHub repo size](https://img.shields.io/github/repo-size/KirillShakhov/Web.Lab4)
![GitHub last commit](https://img.shields.io/github/last-commit/KirillShakhov/Web.Lab4)

Variant 28254

![pic](https://github.com/KirillShakhov/Web.Lab4/blob/main/img/pic.png)

#### Дополнительные требования к приложению:

* Все результаты проверки должны сохраняться в базе данных под управлением СУБД PostgreSQL.
* Для доступа к БД необходимо использовать Spring Data.

Переписать приложение из предыдущей лабораторной работы с использованием следующих технологий:

Уровень back-end должен быть основан на Spring.
Уровень front-end должен быть построен на React + Redux (необходимо использовать ES6 и JSX) с использованием набора компонентов Belle
Взаимодействие между уровнями back-end и front-end должно быть организовано посредством REST API.
Приложение по-прежнему должно включать в себя 2 страницы - стартовую и основную страницу приложения. Обе страницы приложения должны быть адаптированы для отображения в 3 режимах:

"Десктопный" - для устройств, ширина экрана которых равна или превышает 1169 пикселей.
"Планшетный" - для устройств, ширина экрана которых равна или превышает 749, но меньше 1169 пикселей.
"Мобильный"- для устройств, ширина экрана которых меньше 749 пикселей.
Стартовая страница должна содержать следующие элементы:

"Шапку", содержащую ФИО студента, номер группы и номер варианта.
Форму для ввода логина и пароля. Информация о зарегистрированных в системе пользователях должна храниться в отдельной таблице БД (пароль должен храниться в виде хэш-суммы). Доступ неавторизованных пользователей к основной странице приложения должен быть запрещён.
Основная страница приложения должна содержать следующие элементы:

Набор полей ввода для задания координат точки и радиуса области в соответствии с вариантом задания: Radio {'-5','-4','-3','-2','-1','0','1','2','3'} для координаты по оси X, Spinner (-5 ... 3) для координаты по оси Y, и Radio {'-5','-4','-3','-2','-1','0','1','2','3'} для задания радиуса области. Если поле ввода допускает ввод заведомо некорректных данных (таких, например, как буквы в координатах точки или отрицательный радиус), то приложение должно осуществлять их валидацию.
Динамически обновляемую картинку, изображающую область на координатной плоскости в соответствии с номером варианта и точки, координаты которых были заданы пользователем. Клик по картинке должен инициировать сценарий, осуществляющий определение координат новой точки и отправку их на сервер для проверки её попадания в область. Цвет точек должен зависить от факта попадания / непопадания в область. Смена радиуса также должна инициировать перерисовку картинки.
Таблицу со списком результатов предыдущих проверок.
Кнопку, по которой аутентифицированный пользователь может закрыть свою сессию и вернуться на стартовую страницу приложения.
Дополнительные требования к приложению:

Все результаты проверки должны сохраняться в базе данных под управлением СУБД PostgreSQL.
Для доступа к БД необходимо использовать Spring Data.

____
**Вопросы к защите лабораторной работы:**
1. Платформа Java EE. Спецификации и их реализации.
1. Принципы IoC, CDI и Location Transpanency. Компоненты и контейнеры.
1. Управление жизненным циклом компонентов. Дескрипторы развёртывания.
1. Java EE API. Виды компонентов. Профили платформы Java EE.
1. Компоненты EJB. Stateless & Stateful Session Beans. EJB Lite и EJB Full.
1. Работа с электронной почтой в Java EE. JavaMail API.
1. JMS. Реализация очередей сообщений. Способы доставки сообщений до клиента. Message-Driven Beans.
1. Понятие транзакции. Управление транзакциями в Java EE. JTA.
1. Веб-сервисы. Технологии JAX-RS и JAX-WS.
1. Платформа Spring. Сходства и отличия с Java EE.
1. Модули Spring. Архитектура Spring Runtime. Spring Security и Spring Data.
1. Реализация IoC и CDI в Spring. Сходства и отличия с Java EE.
1. Реализация REST API в Java EE и Spring.
1. React JS. Архитектура и основные принципы разработки приложений.
1. Компоненты React. State & props. "Умные" и "глупые" компоненты.
1. Разметка страниц в React-приложениях. JSX.
1. Навигация в React-приложениях. ReactRouter.
1. Управление состоянием интерфейса. Redux.
1. Angular: архитектура и основные принципы разработки приложений.
1. Angular: модули, компоненты, сервисы и DI.
1. Angular: шаблоны страниц, жизненный цикл компонентов, подключение CSS.
1. Angular: клиент-серверное взаимодействие, создание, отправка и валидация данных форм.



## Как задеплоить лабу?(WildFly)

1. Установка [WildFly](https://github.com/KirillShakhov/Web.Lab2/blob/main/guides/install-wildfly.md#установка-wildfly-на-helios)
1. [Деплой](https://github.com/KirillShakhov/Web.Lab2/blob/main/guides/install-wildfly.md#deployment) лабы
1. [Проброс портов](https://github.com/KirillShakhov/Web.Lab2/blob/main/guides/install-wildfly.md#проброс-портов) для гелиоса
1. Запуск в [фоновом режиме](https://github.com/KirillShakhov/Web.Lab2/blob/main/guides/install-wildfly.md#запуск-в-фоне)
1. Установка вашего [portbase](https://github.com/KirillShakhov/Web.Lab2/blob/main/guides/install-wildfly.md#установка-portbase)
1. Установка [datasource](https://github.com/KirillShakhov/Web.Lab2/blob/main/guides/set-wildfly-datasource.md)


## Как задеплоить лабу?(glassfish)

1. Создаём домен для лабы:
`$ asadmin create-domain --domaindir ~/glass --portbase 41414 lab2`
где:
    * `~/glass` -- путь до каталога, где вы хотите разместить свою лабу;
    * `41414` - число, от которого будут отсчитываться номера портов созданного домена. Проявите фантазию в выборе, чтоб не пересечься с другими студентами;
    * `lab2` - название католога для веб-приложения (лабы).

    Сервер будет сконфигурирован. Заскриньте терминал: эти данные вам ещё понадобятся. Примерный вывод:
```
Using port 41462 for Admin.
Using port 41494 for HTTP Instance.
Using port 41490 for JMS.
Using port 41451 for IIOP.
Using port 41495 for HTTP_SSL.
Using port 41452 for IIOP_SSL.
Using port 41453 for IIOP_MUTUALAUTH.
Using port 41500 for JMX_ADMIN.
Using port 41480 for OSGI_SHELL.
Using port 41423 for JAVA_DEBUGGER.
```
2. Запускаем созданный домен:
`$ asadmin start-domain --domaindir ~/glass lab2`
(проверить его статус можно командой: `$ asadmin list-domains --domaindir ~/glass`)
3. Так-как домены Glassfish недоступны снаружи, то необходимо пробросить порты через SSH-туннель. Заходим в консоль с своей машины и вводим:
`ssh -fNL 41462:127.0.0.1:41462 имяПользователяр@se.ifmo.ru -p 2222`
После этого заходим на [127.0.0.1:41462] в браузере - должна отобразиться страница с приветствием Glassfish.
4. Логинимся, деплоим приложение на вкладке **application** и пробрасывет порт для него (повторить пункт 3 с портом HTTP Instance).

Другие команды:
`$ asadmin stop-domain --domaindir ~/glass lab2` - остановить домен
`$ asadmin delete-domain --domaindir ~/glass lab2` - удалить домен

[stars-shield]: https://img.shields.io/github/stars/KirillShakhov/Web.Lab4?style=social
[stars-url]: https://github.com/KirillShakhov/Web.Lab4/stargazers
[issues-shield]: https://img.shields.io/github/issues/KirillShakhov/Web.Lab4
[issues-url]: https://github.com/KirillShakhov/Web.Lab4/issues
[license-shield]: https://img.shields.io/github/license/KirillShakhov/Web.Lab4
[license-url]: https://github.com/KirillShakhov/Web.Lab4/blob/master/LICENSE
