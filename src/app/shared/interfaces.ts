export interface App{
  number: number
  date: string
  organisation: string
  COVID: boolean
  patientName: string
  patientYearOfBirth?: number
  diagnosis: string
  name: string
  position: string
  type: string
  workplace?: string
  additionalInfo?: string
  consultType: string
  consultDate: string
  description?: string
  report?: string
}

export interface Consultant{
  name: string
  position: string
  type: string
  workplace?: string
  additionalInfo?: string
}

export interface Organisation{
  name: string
  region: string
  _id?: string
}
