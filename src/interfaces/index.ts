export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export type MenuElement = {
  display: string
  value: string
}

export type LogoInfo = {
  display: string
  linkTo: string
}

export type JobDescription = {
  dateRange: string
  description: string
  showDivider?: boolean
  title: string
}

export type SchoolDescription = {
  carrerTitle: string
  dateRange: string
  degree: string
}

export type ProjectData = {
  description: string
  imagePlaceHolderData: ImagePlaceHolderData
  name: string
  projectUrl: string
  tags: string[]
}

export type ImagePlaceHolderData = {
  extraClasses?: string
  images: Image[]
}

type Image = {
  url: string
  media: string
  alt: string
}

export type ButtonProps = {
  disabled?: boolean
  text: string
  type: ButtonType
}
