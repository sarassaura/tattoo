export interface ResourceProp {
  asset_id: string
  public_id: string
  format: string
  version: number
  resource_type: string
  type: string
  created_at: string
  bytes: number
  width: number
  height: number
  folder: string
  url: string
  secure_url: string
}

export interface Result {
  resources: ResourceProp[]
  next_cursor: string | false
}

export interface ImageProp {
  id: string
  title: string
  image: string
  width: number
  height: number
}

export interface Folder {
  name: string
  path: string
}

export interface LayoutProps {
  logo: string
  name: string
  description: string
  address: string
  phone: string
  cell: string
  gmail: string
  copyright: string
  menu: {
    first: string
    second: string
    third: string
  }
}

interface WorksProps {
  button: string
}

interface CardsProps {
  id: number
  text: string
}

interface FactsProps {
  id: number
  name: string
  number: number
}

interface HomeText {
  title: string
  subtitle: string
  cards: CardsProps[]
  facts: FactsProps[]
}

export interface LogoText {
  title: string
  sub: string
}

export interface TextProps {
  text: HomeText
  layout: LayoutProps
}

export interface TramProps {
  images: ImageProp[]
  nextCursor: string | false
  folders: Folder[]
  active: string | string[] | undefined
  layout: LayoutProps
  text: WorksProps
}
