# PROYECTO PARA PRUEBA TÉCNICA

## Por poropo

##

## Para iniciar el PROYECTO
El proyecto ha sido desarrollado en Vue, con instalar las dependecias ya debería funcionar


Siguiendo unas instrucciones se realizará la programación de una aplicación single-page


Prueba front-end ZARA.com
1



  RESUMEN
Esta prueba consiste en la creación de una mini-aplicación para escuchar podcasts musicales.
La aplicación tendrá únicamente tres vistas:
1. Vista principal
2. Detalles de un podcast
3. Detalles de un capítulo de un podcast
El diseño de las vistas se debe ceñir al mostrado junto a la descripción del detalle de las mismas (más abajo).
La aplicación será una Single Page Application de manera que la navegación se realizará siempre en cliente, sin refrescar completamente el documento principal en ningún momento.
La aplicación deberá tener un modo ​development e​ n el que se sirvan los assets sin minimizar (pueden estar concatenados si se quiere) y otro modo ​production d​ onde se deben servir los assets concatenados y minimizados.
El objetivo final de la prueba es presentar un repositorio de código público (G​ ithub o​ Bitbucket)​ ​ con la solución desarrollada. Es deseable que se vaya subiendo código a medida que se va avanzando en las diferentes secciones del proyecto (utilizando tags para dejar marcas de cada paso relevante) para poder evaluar la evolución de la implementación. En el repositorio deberá existir un archivo nombrado ​README d​ onde se explicará cómo ejecutar la aplicación en ambos modos solicitados.
Restricciones

• Está permitido el uso de cualquier librería JS/CSS salvo los frameworks específicos ​AngularJS ​y ​Ember.​
 3

  RESUMEN
Aspectos permitidos
• Se permite el uso de sintaxis ES2020 de Javascript.
• Se permite el uso de herramientas tipo W​ ebpacka ​o P​ arcel​.
• La aplicación solo será revisada en la última versión de Google Chrome de escritorio,
por lo que no es necesario tener en cuenta las particularidades de otros
navegadores ni de tamaños de pantalla pequeños.
• No será necesario realizar una gestión de errores de cara al usuario. Si se produce un error, solo se deberá mostrar en la consola del navegador su mensaje y su traza.
4

  DESCRIPCIÓN DE LAS VISTAS Vista principal
URL: ​/
Requerimientos:
● Mostrar el listado de los 100 podcasts más populares según el listado de Apple (m​ ás info al final del documento​).
● Una vez obtenido el listado desde el servicio externo por primera vez se deberá almacenar en cliente de manera que solo se vuelva a solicitar si ha pasado más de un día desde la última vez que se solicitó.
● El usuario podrá filtrar los podcasts mostrados introduciendo una cadena de texto que tendrá en cuenta tanto el título de los podcasts así como los nombres de sus autores.
● El filtrado deberá ser inmediato de manera que reaccione a medida que el usuario vaya introduciendo su texto de filtrado.
● Al pulsar sobre un podcast el usuario deberá navegar a la vista con el detalle del mismo.
5

 DESCRIPCIÓN DE LAS VISTAS Detalle de un podcast
URL: ​/podcast/{podcastId}
Requerimientos:
● Se debe mostrar una barra lateral con la imagen del podcast, su título, su autor y su descripción.

● Se debe mostrar una sección principal donde se visualizará el número de episodios que actualmente tiene el podcast así como un listado de los mismos indicando su título, fecha de publicación y duración.

● Una vez obtenido el detalle de un podcast desde el servicio externo por primera vez, se deberá almacenar en cliente de manera que solo se vuelva a solicitar si ha pasado un día desde la última vez que se solicitó.

● Al pulsar sobre el título de un episodio se deberá navegar a la vista con el detalle del mismo.



  DESCRIPCIÓN DE LAS VISTAS Detalle de un episodio
URL: ​/podcast/{podcastId}/episode/{episodeId}
Requerimientos:

● Se debe mostrar la misma barra lateral que en la vista anterior.

○ Tanto la imagen como el título del podcast y el autor deben ser enlaces a la vista con el detalle del podcast (s​ e permite que estos componentes

también tengan los mismos enlaces en la vista anterior​).
● Se debe mostrar una sección principal donde se visualizará el título del podcast, su descripción y un reproductor de audio básico (nativo HTML5) para reproducir el podcast.

○ Se deberá tener en cuenta que algunas descripciones de episodios contienen HTML y este se debe mostrar interpretado (no escapado).


   DESCRIPCIÓN DE LAS VISTAS Cabecera
Requerimientos:

● El título de la aplicación deberá actuar como enlace a la vista principal de la aplicación.
● Cada vez que se inicie una navegación en cliente se debe mostrar algún tipo de indicador visual en la esquina superior derecha de la página para reflejar que el proceso está en marcha. Dicho indicador deberá desaparecer tras finalizar la transición a la nueva vista.


  RECURSOS
● La URL para obtener el listado de los 100 podcasts más populares es la siguiente:

https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json

● La URL para obtener el detalle de un podcast es la siguiente​: https:// itunes.apple.com/lookup?id={​ podcastId}

● Servicios para poder acceder a recursos externos que no proveen ​JSONP ​ni cabecerasC​ ORS:
○ https://cors-anywhere.herokuapp.com/ ○ https://allorigins.win/
9
