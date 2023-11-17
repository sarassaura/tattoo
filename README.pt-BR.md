# Tattoo-Studio

<div align="center">

A `Tattoo-Studio` portfolio with Cloudinary Image Gallery, On-Demand ISR, SSG, Static Paths

![Banner](/public/Banner.png?raw=true)

[Tecnologias](#tecnologias)&nbsp;&nbsp; • &nbsp;&nbsp;
[Instalação](#instalação)&nbsp;&nbsp; • &nbsp;&nbsp;
[Como Usar](#como-usar)&nbsp;&nbsp; • &nbsp;&nbsp;
[Variáveis de Ambiente](#variáveis-de-ambiente)

[🇬🇧 English](/README.md)&nbsp;&nbsp; • &nbsp;&nbsp;
[🇪🇸 Español](/README.es.md)&nbsp;&nbsp; • &nbsp;&nbsp;
[🇧🇷 Português](/README.pt-BR.md)

![Home](/public/Home.gif)
![Portfolio](/public/Portfolio.gif)
![Contact](/public/Contact.gif)

</div>

## Tecnologias

- Image Gallery connected with _cloudinary_ Account
- Automatic e-mails with _nodemailer_
- Form Validation with _react-hook-form_
- Internationalization with _GetStaticProps_
- Beautiful UI with _material-ui_
- Beautiful Page Animations with _framer-motion_
- Responsive 8-pt grid system with _figma_
- Sitemap with _next-sitemap_
- SEO with _next-seo_

## Instalação

```sh
# Clone this repository
$ git clone git@github.com:florescente/tattoo.git

# Go into the repository
$ cd vitor-underground-tattoo

# Install dependencies
$ npm install
OR
$ yarn set version berry
$ yarn install
$ yarn dlx @yarnpkg/sdks vscode


# Run the app
$ npm run dev
OR
$ yarn dev
```

## Como Usar

1. Create a Cloudinary Account
2. Create a Gmail Account
3. Get Cloudinary Config Info
4. Generate Gmail App password
5. Create Folders with Images in Cloudinary
6. Set the environment variables
7. run

## Variáveis de Ambiente

```bash
NEXT_PUBLIC_SITE_NAME
NEXT_PUBLIC_SITE_URL
CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
EMAIL - GMAIL
PASSWORD - Generate APP password
SECRET_TOKEN
```

## Congifurações do Cloudinary

This is important for the ISR revalidation:

Go to the cloudinary settings, under uploads tab, and put this in notifications:

```bash
https://<NEXT_PUBLIC_SITE_URL>/api/revalidate?secret=<SECRET_TOKEN>
```

## Meta

Criado Por Sarassaura:
[github.com/sarassaura](https://github.com/sarassaura)
