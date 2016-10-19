export class Fixture{
  awayTeamName:string;
  date:string;
  homeTeamName:string;
  matchday:number;
  odds:{
    awayWin:number;
    draw:number;
    homeWin:number;
  };
  result:{
    goalsAwayTeam:number;
    goalsHomeTeam:number;
  }
  status:string;
}
