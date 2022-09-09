export interface Registration {
  id?: number,
  name: string,
  email: string
}

export interface Response {
  code: number,
  message: string,
  data?: string
}
