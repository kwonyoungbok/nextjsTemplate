type exMode = 'development' | 'production' | 'test'

class ServerInfo {
  port: number
  timeZone: string
  excutionMode: exMode

  constructor() {
    this.port = parseInt(process.env.PORT, 10) || 3000
    this.timeZone = process.env.TIMEZONE || 'Asia/Seoul'

    // test 모드 배제
    this.excutionMode =
      process.env.NODE_ENV !== 'production' ? 'development' : 'production'
  }

  getPort(): number {
    return this.port
  }

  isExcutionModeIsDevelopment(): boolean {
    return this.excutionMode === 'development'
  }

  getTimeZone(): string {
    return this.timeZone
  }
  getExcutionMode(): exMode {
    return this.excutionMode
  }
}

export default new ServerInfo()
