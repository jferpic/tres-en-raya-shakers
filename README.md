# Tres en Raya - Shakers

## Descripción

Este proyecto es una implementación del clásico juego de Tres en Raya, también conocido como Tic-Tac-Toe, desarrollado con **Next.js**. La aplicación permite jugar en este caso contra una máquina. Además, incluye una página de ranking donde se visualizan las victorias, empates y derrotas de los jugadores.

## ¿Por qué Next.js?

Se ha elegido **Next.js** debido a su robustez, facilidad de uso y características que permiten desarrollar aplicaciones de una sola página (SPA) con renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG). Esto asegura una experiencia de usuario rápida y fluida, especialmente cuando se interactúa con APIs externas, como en este caso, con la base de datos en MongoDB Atlas.

## Dependencias

- **mongodb**: Esta dependencia ha sido utilizada para establecer la conexión con la base de datos en MongoDB Atlas. Gracias a ella, el proyecto puede interactuar de manera eficiente con la base de datos para almacenar y recuperar información sobre las partidas y los rankings de los jugadores. La conexión a la base de datos se realiza a través del archivo `mongodb.js`.
- **tailwindcss**: Se ha utilizado **TailwindCSS** como framework de CSS, debido a su sencillez y flexibilidad. Permite crear un diseño atractivo y responsive rápidamente, algo esencial para garantizar que la página sea accesible y funcione correctamente en diferentes tamaños de pantalla.

## Configuración

Para poder interactuar con la base de datos, es necesario configurar una variable de entorno. Asegúrate de crear un archivo `.env` en la raíz del proyecto y añadir la siguiente variable de entorno:

`MONGODB_URI=mongodb+srv://juliofernz1505:vzkrgvRKgeSEaZTT@clustertresenraya.lip15.mongodb.net/?retryWrites=true&w=majority&appName=clusterTresEnRaya`

Esto permitirá que el proyecto se conecte a la base de datos MongoDB en la nube.

## Cómo ejecutar el proyecto

1. Clona el repositorio:

   ```bash
   git clone https://github.com/jferpic/tres-en-raya-shakers.git

   ```

2. Instala las dependencias:

   ```bash
   npm install

   ```

3. Crea el archivo `.env` en la raíz del proyecto y agrega tu `MONGODB_URI`:

   ```bash
   git clone https://github.com/jferpic/tres-en-raya-shakers.git

   ```

4. Ejecuta el proyecto en desarrollo:

   ```bash
   npm run dev

   ```

5. Abre el navegador y visita [http://localhost:3000](http://localhost:3000)
