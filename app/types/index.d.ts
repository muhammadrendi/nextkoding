import type { ParsedContent } from '@nuxt/content'
import type { Avatar, Badge, Link } from '#ui/types'

export interface BlogPost extends ParsedContent {
  title: string
  description: string
  date: string
  image?: HTMLImageElement
  badge?: Badge
  authors?: ({
    name: string
    description?: string
    avatar: Avatar
  } & Link)[]
}


export interface ImageData {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface SectionData {
  title: string
  description: string
  id: string
  orientation?: 'vertical' | 'horizontal'
  image?: ImageData  // Custom property
  features?: Array<{
    name: string
    description: string
    icon: string
  }>
  links?: Array<{
    label: string
    to: string
    trailingIcon?: string
  }>
}

export interface PageData {
  title: string
  description: string
  seo: {
    title: string
    description: string
  }
  sections: SectionData[]
  features: {
    title: string
    description: string
    items: Array<any>
  }
  testimonials: any
  cta: any
}