import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class FutService{

  constructor(private _http: Http){}

  showLeagues(){
      let headers = new Headers({'X-Auth-Token':'3e3003ffe85b4d7a80cd596b02172aa7'});
      return this._http.get("https://api.football-data.org/v1/competitions/?season=2016",{
        headers:headers
      })
        .map((res) => res.json() );
  }

  getTeams(id:number){
    let headers = new Headers({'X-Auth-Token':'3e3003ffe85b4d7a80cd596b02172aa7'});
    headers.append('X-Response-Control','minified');
    return this._http.get('https://api.football-data.org/v1/competitions/'+id+'/teams',{
      headers:headers
    }).map((res)=>res.json());
  }

  getTeam(teamId:number){
    let headers = new Headers({'X-Auth-Token':'3e3003ffe85b4d7a80cd596b02172aa7'});
    headers.append('X-Response-Control','minified');
    return this._http.get('https://api.football-data.org/v1/teams/'+ teamId,{
      headers:headers
    }).map((res)=>res.json());
  }

  getStandings(id:string){
    let headers = new Headers({'X-Auth-Token':'3e3003ffe85b4d7a80cd596b02172aa7'});
    return this._http.get('https://api.football-data.org/v1/competitions/'+id+'/leagueTable',{
      headers:headers
    }).map((res)=>res.json());
  }

  getFixtures(id:string){
    let headers = new Headers({'X-Auth-Token':'3e3003ffe85b4d7a80cd596b02172aa7'});
    return this._http.get('https://api.football-data.org/v1/competitions/'+id+'/fixtures',{
      headers:headers
    }).map((res)=>res.json());
  }

  getTeamFixtures(id:string){
    let headers = new Headers({'X-Auth-Token':'3e3003ffe85b4d7a80cd596b02172aa7'});
    return this._http.get('https://api.football-data.org/v1/teams/'+id+'/fixtures',{
      headers:headers
    }).map((res)=>res.json());
  }

  getPlayers(id:string){
    let headers = new Headers({'X-Auth-Token':'3e3003ffe85b4d7a80cd596b02172aa7'});
    headers.append('X-Response-Control','minified');
    return this._http.get('https://api.football-data.org/v1/teams/'+id+'/players',{
      headers:headers
    }).map((res)=>res.json());
  }

}
