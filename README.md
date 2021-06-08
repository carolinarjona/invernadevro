# **Inverna(dev)ro**
![Logo Inverna(dev)ro](https://res.cloudinary.com/carolveloper/image/upload/v1623136011/Invernadevro-Plant/InvernadevroLogo_gkmov8.png)


**Inverna(dev)ro** es una API creada para las clases de Node.js que simula una red social de plantas. Los usuarios pueden registrarse y añadir plantas a su *vivero online* para compartir las plantas que tienen, en qué estado están y pequeñas notas sobre ellas.
## **🌱 Instalar el proyecto**
Hacen falta diferentes dependencias para que el proyecto funcione y, para ello, escribiremos el comando:
```
npm install
```
## **🌿 Iniciar el proyecto**
Para iniciar el proyecto utilizaremos el comando:
```
npm start
```
Para cargar el seed del modelo **Plant** utilizaremos:
```
npm run seed 
```
## **🌵 Configuración extra**
Encontrarás el archivo `env.template` con las variables de entorno necesarias para que el proyecto funcione.
## **🌻 Estructura de archivos**
- **bin** ▶ Contiene la estructura y creación del servidor para que funcione cuando lo pongamos en marcha.
- **config** ▶ Contiene la configuración de la base de datos `dbInvernadevro.js`.
- **middleware** ▶ Contiene archivos que mejoran la calidad de nuestro proyecto con el `errorHandler.js` para manejar los errores, el `roleValidation.js` para validar los permisos según el rol y el `tokenValidation.js` que nos permite validar el token para la autorización de nuestros usuarios.
- **models** ▶ Contiene la configuración de los modelos (entidades) de nuestra base de datos, sus relaciones y la sincronización con la base de datos: `Plant.js`, `Plantpot.js`, `User.js` y `relationship.js`.
- **repositories** ▶ Contiene todo lo necesario para realizar peticiones a la base de datos y, cada modelo, tiene el suyo propio: `plantpotRepository.js`, `plantRepository.js`, `userRepository.js`.
- **routes** ▶ Contiene los archivos con los endpoints necesarios para gestionar nuestra API: `plantpots.js`, `plants.js`, `users.js`.
- **services** ▶ Contiene los archivos que realizan la lógica de negocio y conecta el repositorio con la ruta: `plantpotService.js`, `plantService.js` y `userService.js`. Aquí también tenemos el `jwtService.js`, que valida y genera el token que usarán nuestros usuarios.
- **util** ▶ Contiene los archivos necesarios para que nuestro proyecto funcione mejor y correctamente: `checkOwnership.js` comprueba si el usuario es el autor de lo que ha creado o si el rol le da los permisos para hacer ciertos cambios, el archivo `constants.js` contiene las constantes que usaremos para nuestro proyecto y que nos ayudarán, en algunos casos, a refactorizar, `encryptPass.js` contiene la lógica con la librería *crypto* para encriptar las contraseñas, `httpError.js` nos deja personalizar los errores y el `plantSeed.js` contiene la *seed* que nos dejará cargar campos predefinidos a nuestro modelo *Plant*.
- **validations** ▶ Contiene los archivos que validan los datos que introducimos para crear o editar campos de nuestras entidades. Gracias a la librería *Joi*, creamos las validaciones `plantpotValidation.js`, `plantValidation.js` y `userValidation.js`.
- **env.template** ▶ Contiene las variables de entorno necesarias para que el proyecto funcione.
- **app.js** ▶ Contiene las llamadas a funciones, middlewares y rutas necesarias para que el proyecto funcione.
## **🌷 Relaciones**
Un **user** registra sus **plantpot** indicando qué **plant** hay en cada una de ellas. Un **user** puede tener muchas **plantpot**.
![Relaciones user-plantpots-plants](https://res.cloudinary.com/carolveloper/image/upload/v1623142829/Invernadevro-Plant/userplantpotplant_fgi2uh.png)
## **🌴 Mejoras para el futuro**
- Instalar y configurar **multer**.
- Instalar y configurar **node mailer**.
- ¡Refactorizar!
- Realizar maquetación con HTML y CSS, funcionalidades del frontend con JavaScript, guardar token en LocalStorage y configurar errores.


![Diseño Home Inverna(dev)ro](https://res.cloudinary.com/carolveloper/image/upload/v1623142842/Invernadevro-Plant/InvernadevroHome_yerops.png)

