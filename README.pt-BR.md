# Tattoo-Studio

<div align="center">

Um `Studio-de-Tatuagem` com Galeria de Imagem usando Cloudinary, ISR Sob Demanda, SSG, Caminhos Estáticos

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

- Galeria de Imagem conectada com _cloudinary_ Account
- Emails automáticos com _nodemailer_
- Validação de Formulário com _react-hook-form_
- Internacionalização com _GetStaticProps_
- Lindas Interfaces de Usuário com _material-ui_
- Belíssimas Animações de Página com _framer-motion_
- Grid de 8 pontos Responsivo com _figma_
- Sitemap com _next-sitemap_
- SEO com _next-seo_

## Instalação

```sh
# Clone esse repositório
$ git clone git@github.com:florescente/tattoo.git

# Entre na pasta
$ cd vitor-underground-tattoo

# Instale dependências
$ npm install
OU
$ yarn set version berry
$ yarn install
$ yarn dlx @yarnpkg/sdks vscode


# Rode o app
$ npm run dev
OU
$ yarn dev
```

## Como Usar

1. Crie uma conta no Cloudinary
2. Crie uma conta no Gmail
3. Pegue as informações de configuração do Cloudinary
4. Gere uma senha de app no Gmail
5. Crie pastas com imagens no Cloudinary
6. Crie as variáveis de ambiente
7. Rode

## Variáveis de Ambiente

```bash
NEXT_PUBLIC_SITE_NAME
NEXT_PUBLIC_SITE_URL
CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
EMAIL - GMAIL
PASSWORD - Gerar senha de APP
SECRET_TOKEN
```

## Congifurações do Cloudinary

Isso é importante para a revalidação de ISR:

Vá para as configurações do cloudinary, debaixo da aba uploads, e coloque isso em notifications:

```bash
https://<NEXT_PUBLIC_SITE_URL>/api/revalidate?secret=<SECRET_TOKEN>
```

## Meta

Criado Por Sarassaura:
[github.com/sarassaura](https://github.com/sarassaura)
