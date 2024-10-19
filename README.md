# Frontend Microtasks  
 Этот проект посвящен микрофронтенду. Он создан с использованием следующих технологий:
    -Webpack
    -React
    -Tailwind CSS
    -Flowbite React
    -TypeScript

### Подключение публичного API для получения данных о погоде

Для начала работы со вторым модулем, необходимо получить API ключ. Первоначально нужно перейти 
на сайт  `https://home.openweathermap.org/` и зарегестрироваться.
После активации аккаунта перейдите в раздел `API keys` и сгенерируйте новый API ключ.

В папке `weather` в корне создайте файл `.env`. 
В содержимое `.env` вставьте `WEATHER_API = сюда_вставить_свой_API_ключ` и заменить значение переменной своим сгенерированным API-ключом

## Запуск  
Есть 3 папки:   
    `main`
    `users`
    `weather`

В каждой папке необходимо выполнить следующую команду: `npm i`, чтобы установить все зависимости.

Чтобы запустить проект в каждой папке, необходимо выполнить следующую команду: `npm run start`.

Будут запущены 3 сервера со следующими портами:

`http://localhost:3000/`

`http://localhost:3001/`

`http://localhost:3002/`

## Описание проекта
Этот проект дает пример того, как работает микрофронтенд.

Для этого я использовал команду `npx create-mf-app`. С ее помощью я создал 3 проекта:

`main`
`users`
`weather`

Основным проектом является `main`, где мы загружаем все остальные приложения.

Изначально они не связаны между собой. Чтобы это изменить, необходимо открыть файл `webpack.config.js` в проектах `users` и `weather` и добавить в `ModuleFederationPlugin` следующую конфигурацию:

Пример для `users`

``` javascript 
new ModuleFederationPlugin({
  name: "users",
  filename: "users-app.js",
  remotes: {},
  exposes: {
    "./UsersApp": "./src/App.tsx",
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
}),
```
Здесь видно, что я использовал свойство `exposes`, где экспортирую компоненты и даю им имена. Так как мне нужно поделиться всеми функциями с основным проектом, я экспортирую функцию из `App.tsx`.

То же самое я сделал для проекта `weather`.

В основной папке внутри файла `webpack.config.js` я также обновил `ModuleFederationPlugin`, где добавил свойство `remotes`:

```javascript
new ModuleFederationPlugin({
  name: "main",
  filename: "main.js",
  remotes: {
    "users": "users@http://localhost:3001/users-app.js",
    "weather": "weather@http://localhost:3002/weather-app.js",
  },
  exposes: {},
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
})
```
Также важно иметь разные маршруты для каждого проекта.

Для загрузки функций `users` и `weather` я использовал следующую логику:

```javascript
import React, { Suspense } from "react";
const Users = React.lazy(() => import("users/UsersApp"));
const Weather = React.lazy(() => import("weather/WeatherApp"));
```

```javascript
export const Layout = () => {
  return (
    <>
      <Suspense fallback={<span>Loading Users</span>}>
        <Users />
      </Suspense>
      <Suspense fallback={<span>Loading Weather</span>}>
        <Weather />
      </Suspense>
    </>
  );
};
```
