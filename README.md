# Post-Manager hecho con React redux y Ruby on Rails

Este repositorio contiene tanto el backend como el frontend de mi aplicación. El backend se ha desarrollado con Ruby on Rails y el frontend con React Redux.

## Pre-requisitos

Antes de comenzar, asegúrate de tener lo siguiente instalado en tu sistema:

- Ruby 3.0.2
- Rails 7.0.6
- Ruby Bundler
- PostgreSQL
- Node.js
- npm o yarn

Si aún no tienes instalados estos pre-requisitos, puedes seguir las siguientes instrucciones para instalarlos en un sistema basado en Ubuntu:

**Ruby:**

```bash
sudo apt-get update
sudo apt-get install ruby-full
```

**Rails y Bundler:**

```bash
gem install rails
gem install bundler
```

**PostgreSQL:**

```bash
sudo apt-get install postgresql postgresql-contrib libpq-dev
```

**Node.js y npm:**

```bash
sudo apt-get install nodejs npm
```

## Configuración del Backend

1. Navega al directorio del backend:

```bash
cd backend
```

2. Instala las gemas necesarias para el proyecto:

```bash
bundle install
```

3. Crea la base de datos y realiza las migraciones:

```bash
rails db:create
rails db:migrate
```

4. Arranca el servidor de Rails:

```bash
rails server -p 3001
```

El servidor del backend debería estar ahora corriendo en http://localhost:3001.

## Configuración del Frontend

1. Navega al directorio del frontend:

```bash
cd ../frontend
```

2. Instala las dependencias del proyecto:

```bash
npm install
```

O si estás utilizando yarn:

```bash
yarn install
```

3. Arranca el servidor de desarrollo de React:

```bash
npm start
```

O si estás utilizando yarn:

```bash
yarn start
```

El servidor del frontend debería estar ahora corriendo en http://localhost:3000.

---
