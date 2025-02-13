---
dir:
  order: -3
  link: true
  text: Enteprise-версия
  collapsible: true
index: true
icon: "file"
---

# Enterprise-версия


Enterprise-версия, в отличии от облака, обладает рядом приемуществ и дает дополнительные функции, связанные с эксплуатацией в мульти-командном окружении и на своих серверах.
|  # |                                Параметр                               |   Team  | Enterprise |
|:--:|:---------------------------------------------------------------------:|:-------:|:----------:|
|  1 | Функционал моделирования процессов                                    |    ✓    |      ✓     |
|  2 | Управление серверами Camunda                                          |         |      ✓     |
|  3 | Установка на свои сервера                                             |         |      ✓     |
|  4 | Корпоративное обучение                                                |         |      ✓     |
|  5 | Базовый SLA ( 5 дней реакция, 30 дней устранение)                     |    ✓    |            |
|  6 | Расширенный SLA (2 часа реакция, 5 дней устранение)                   |         |      ✓     |
|  7 | Интеграция с BI                                                       |         |      ✓     |
|  8 | Интеграция через public api                                           |         |      ✓     |
|  9 | SSO                                                                   |         |      ✓     |
| 10 | Аудит событий информационной безопасности                             |         |      ✓     |
| 11 | Влияние на роудмап продукта                                           |         |      ✓     |
| 12 | Выделенный менеджер поддержки                                         |         |      ✓     |
| 13 | Массовая выгрузка в BPMN                                              |         |      ✓     |
| 14 | Централизованное управление командами и пользователями                |         |      ✓     |
| 15 | Бесплатные лицензии на просмотр                                       |    ✓    |      ✓     |
| 16 | Удобный способ предоставлять доступ на просмотр на уровне предприятия |         |      ✓     |
| 17 | Уровень управления                                                    | Команда | Команды    |

## Архитектура
Stormbpmn используется в своей работе несколько Open-source решений, которые поставляются как docker-контейнеры, а так же инфраструктуру заказчика:  

![image](storm-arch.png)

В некоторых ситуациях Stormbpmn предлагает опции по использованию компонент:
 - **Аутентификация** (Keycloak/LDAPS/Внутренний механизм) : на выбор прямая интеграция с LDAP, через Keycloak или встроенный механизм. Keycloak позволяет подключить другие провайдеры авторизации, но требует отдельного обслуживания.
 - **E-mail уведомления** (SMTP/Mautic) интеграция через mautic дает возможность шаблонизировать письма под ваши потребности, но требует отдельного обслуживания.
 - **Отрисовка PlantUML** (PlantUML/Не использовать): позволяет рисовать в Stormbpmn PlantUML диаграммы.
 - **Мониторинг** (Prometheus/Не использовать):  позволяет анализировать работоспособность системы.


## Админинистративный интерфейс
Административный интерфейс получают все члены _специальной команды_ на сервере. Вот как туда попасть:
![image](admin-link.png)
### Управление пользователями
Это вкладка позволяет:
- Поменять почту, емейл, имя, должность пользователя.
- Заблокировать пользователя и освободить лицензию.
- Войти в систему под пользователем.
### Управление командами
Эта вкладка позволяет:
- Посмотреть все команды на сервере
- Добавить пользователя в команду
- Сделать пользователя администратором команды
### Лицензия
Это вкладка отображает актуальную информацию по вашей лицензии и позволяет выкидывать текущих пользователей (при конкурентных лицензия).
### Переменные окружения
Это вкладка показывает технические настройки, с которыми запущен контейнер приложения.
### Настройка приложения
Это вкладка позволяет менять настройки приложения,а именно:
- baserUrl - базовый урл системы, используется для формирования ссылок в письмах.
- showRegistraton - показывать или нет регистрацию.
- showCustomLoginButtonName - показывать уникальный текст на кнопке входа.
- CustomLoginButtonName - текст на кнопке входа.
- enableCommonAssets - сделать Элементы архитектуры общими для всех пользователей системы.
- enableCommonRoles - сделать Роли общими для всех пользователей системы.
- showSSOLogin - показывать кнопку авторизации Keycloak.
- enableCommonUsers - сделать Пользователей (для участников диаграммы) общими для всех пользователей системы.
- allDiagramsAnonAccess - сделать анонимный доступ до всех диаграмм без авторизации.
- enableAnonSearchPage - отображать вместо главной страницу поиска по диаграммам для анонимов.
- enableCaptchaCheck - проверка Captcha при регистрации и приглашении пользователей.
- enablePreventAutosave - включить проверка версии автосохранения.
- yandexPrivateKey - закрытый ключ авторизации из сервисного аккаунта яндекса ( используется для интеграции с YandexGPT).
- yandexOpenKeyId - идентификатор открытого ключа из сервисного аккаунта яндекса ( используется для интеграции с YandexGPT).
- yandexServiceAccountId - идентификатор сервисного аккаунта яндекса ( используется для интеграции с YandexGPT).
- yandexXFolderId - идентификатор папки в яндекс облаке ( используется для интеграции с YandexGPT).
- stormVersion - HTML разметка, которая вставляется в футер. Обновляется автоматически при установке новых версий.
- checkDuplicates - при сохранении диаграмм позволяет проверить и вывести уведомление о совпадении имен.
- simpleEmailEnabled - включен простой отправитель писем. (изменения применяется ТОЛЬКО после перезагрузки приложения).
- simpleSmtpHost - SMTP хост. (изменения применяется ТОЛЬКО после перезагрузки приложения).
- simpleSmtpPort- SMTP порт. TLS протокол установлен по-умолчанию. (изменения применяется ТОЛЬКО после перезагрузки приложения).
- simpleSmtpUsername - SMTP пользователь (аутентификация и отправка “ОТ”). (изменения применяется ТОЛЬКО после перезагрузки приложения).
- simpleSmtpPassword - SMTP пароль.(изменения применяется ТОЛЬКО после перезагрузки приложения).
- baseTemplateId - UUID базового шаблона для генерации регламентов бизнес-процессов.
- autoEnableEnterpriseLicense - автоматическая выдача лицензии любому, кто залогинился в систему.
- autoJoinTeamId - идентификатор команды, к которой автоматически подключать всех новых пользователей. 

Настройка видимости в “настройке” разрешает возвращать настройку на фронт, т.е. делает доступным просмотр для клиента. Не устанавливаете ее для паролей и прочих вещей, которые не влияют на поведение приложения на фронте.


## Инструкция по установке

По запросу через менеджера, с которым вы работаете.


