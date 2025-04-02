declare module "pg" {
  export class Pool {
    constructor(options: any)
    query(
      text: string,
      params?: any[],
    ): Promise<{
      rows: any[]
      rowCount: number
    }>
    end(): Promise<void>
  }
}

