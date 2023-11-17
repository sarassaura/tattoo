# Tattoo-Studio

<div align="center">

A `Tattoo-Studio` portfolio with Cloudinary Image Gallery, On-Demand ISR, SSG, Static Paths

![Banner](/public/Banner.png?raw=true)

[Features](#features)&nbsp;&nbsp; • &nbsp;&nbsp;
[Installation](#installation)&nbsp;&nbsp; • &nbsp;&nbsp;
[Usage](#usage)&nbsp;&nbsp; • &nbsp;&nbsp;
[Environment Variables](#environment-variables)

[🇬🇧 English](/README.md)&nbsp;&nbsp; • &nbsp;&nbsp;
[🇪🇸 Español](/README.es.md)&nbsp;&nbsp; • &nbsp;&nbsp;
[🇧🇷 Português](/README.pt-BR.md)

https://github.com/sarassaura/tattoo/assets/141577271/e63f8c83-db41-4c5a-8633-b127344e4295

https://github.com/sarassaura/tattoo/assets/141577271/3ffb287c-77b6-47c0-9b9e-0f27e76350ab

https://github.com/sarassaura/tattoo/assets/141577271/a6f2aad6-6090-410a-a1b6-506491dcf645

</div>

## Features

- Image Gallery connected with _cloudinary_ Account
- Automatic e-mails with _nodemailer_
- Form Validation with _react-hook-form_
- Internationalization with _GetStaticProps_
- Beautiful UI with _material-ui_
- Beautiful Page Animations with _framer-motion_
- Responsive 8-pt grid system with _figma_
- Sitemap with _next-sitemap_
- SEO with _next-seo_

## Installation

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

## Usage

1. Create a Cloudinary Account
2. Create a Gmail Account
3. Get Cloudinary Config Info
4. Generate Gmail App password
5. Create Folders with Images in Cloudinary
6. Set the environment variables
7. run

## Environment Variables

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

## Cloudinary Configurations

This is important for the ISR revalidation:

Go to the cloudinary settings, under uploads tab, and put this in notifications:

```bash
https://<NEXT_PUBLIC_SITE_URL>/api/revalidate?secret=<SECRET_TOKEN>
```

## Meta

Created By Sarassaura:
[github.com/sarassaura](https://github.com/sarassaura)
