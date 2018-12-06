export interface Vr {
  id: string
  name: string
  from_date: string
  to_date: string
  created_datetime: string
  created_by: number
  link: string
  joined: boolean
  engagements: Engagement[]
}

export interface VrCreation {
  name: string
  from_date: string
  to_date: string
  distance: number
}

export interface Engagement {
  athlete: number
  distance: number
}
