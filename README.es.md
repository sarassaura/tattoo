# Estudio de Tatuajes

<div align="center">

Un `Estudio-de-Tatuajes` con Galería de imágenes usando Cloudinary, Bajo Demanda ISR, SSG, Caminos Estáticos

![Banner](/public/Banner.png?raw=true)

[Tecnologías](#tecnologías)&nbsp;&nbsp; • &nbsp;&nbsp;
[Instalación](#instalación)&nbsp;&nbsp; • &nbsp;&nbsp;
[Cómo Utilizar](#cómo-utilizar)&nbsp;&nbsp; • &nbsp;&nbsp;
[Variables de Entorno](#variables-de-entorno)

[🇬🇧 English](/README.md)&nbsp;&nbsp; • &nbsp;&nbsp;
[🇪🇸 Español](/README.es.md)&nbsp;&nbsp; • &nbsp;&nbsp;
[🇧🇷 Português](/README.pt-BR.md)

![Home](/public/Home.gif)
![Portfolio](/public/Portfolio.gif)
![Contact](/public/Contact.gif)

</div>

## Tecnologías

- Galería de imágenes conectada con _cloudinary_ Account
- Emails automáticos con _nodemailer_
- Validación de formulario con _react-hook-form_
- Internacionalización con _GetStaticProps_
- Hermosa Interfaz de Usuario con _material-ui_
- Hermosas Animaciones de Página con _framer-motion_
- Cuadrícula de 8 puntos Responsivo con _figma_
- Sitemap con _next-sitemap_
- SEO con _next-seo_

## Instalación

```sh
# Clonar este repositorio
$ git clone git@github.com:florescente/tattoo.git

# Ingrese a la carpeta
$ cd vitor-underground-tattoo

# Instalar dependencias
$ npm install
O
$ yarn set version berry
$ yarn install
$ yarn dlx @yarnpkg/sdks vscode


# Ejecute la aplicación
$ npm run dev
O
$ yarn dev
```

## Cómo utilizar

1. Crea una cuenta en Cloudinary
2. Crea una cuenta de Gmail
3. Obtener información de configuración de Cloudinary
4. Generar una contraseña de APP en Gmail
5. Crear carpetas con imágenes en Cloudinary
6. Crear las variables de entorno
7. Ejecute la aplicación

## Variables de Entorno

```bash
NEXT_PUBLIC_SITE_NAME
NEXT_PUBLIC_SITE_URL
CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
EMAIL - GMAIL
PASSWORD - Generar contraseña de APP
SECRET_TOKEN
```

## Configuraciones de Cloudinary

Esto es importante para la revalidación del ISR:

Vaya a la configuración de Cloudinary, en la pestaña de uploads, y ponga esto en notifications:

```bash
https://<NEXT_PUBLIC_SITE_URL>/api/revalidate?secret=<SECRET_TOKEN>
```

## Meta

Creado Por Sarassaura:
[github.com/sarassaura](https://github.com/sarassaura)
