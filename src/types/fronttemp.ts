export interface IFrontTemp {
  data: {
    matches: IMatches[]
  }
  ok: boolean
}

export enum EStatus {
  FINISHED = "Finished",
  ONGOING = "Ongoing",
  SCHEDULED = "Scheduled",
}

interface IPlayer {
  kills: number
  username: string
}

interface ITeam {
  name: string
  place: number
  points: number
  total_kills: number
  players: IPlayer[]
}

export interface IMatches {
  awayScore: number
  homeScore: number
  status: EStatus
  time: Date | string
  title: string
  awayTeam: ITeam
  homeTeam: ITeam
}
