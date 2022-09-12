# Tattoo-Studio

## How to use

Execute:

```bash
yarn set version berry
yarn install
yarn dlx @yarnpkg/sdks vscode
```

VScode configuration:

```bash
Select Typescript Version: Workspace Version
Select Language Mode: Typescript React
```

Environmental variables(.env.local):

```bash
NEXT_PUBLIC_SITE_NAME
NEXT_PUBLIC_SITE_URL
CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
EMAIL - GMAIL
PASSWORD - Generate APP password
SECRET_TOKEN - For ISR revalidation
```

Obs: Go to the cloudinary settings, under uploads tab, and put this in notifications:

```bash
https://<NEXT_PUBLIC_SITE_URL>/api/revalidate?secret=<SECRET_TOKEN>
```
