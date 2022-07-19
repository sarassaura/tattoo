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

export interface TramProps {
  images: ImageProp[]
  nextCursor: string | false
  folders: Folder[]
  active: string | string[] | undefined
}
