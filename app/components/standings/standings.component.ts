import {Component, OnInit} from "@angular/core";
import {FutService} from "../../services/fut.services";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector:'standings',
  templateUrl:'./app/components/standings/standings.component.html'
})
export class StandingsComponent implements OnInit{
  standings: STANDING[];
  leagueCaption:string;
  constructor(
    private _futService: FutService,
    private _activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
    this._activatedRoute.params
      .map((params)=> params['id']).subscribe((par)=>{
          this._futService.getStandings(par).subscribe((res)=>{
            this.standings = res.standing;
            this.leagueCaption = res.leagueCaption;
            console.log(res);
          });
    });
  }

}

export class STANDING{
  away:{
    draws:number;
    goals:number;
    goalsAgainst:number;
    losses:number;
    wins:number;
  };
  crestURI:string;
  draws:number;
  goalDifference:number;
  goals:number;
  goalsAgainst:number;
  home:{
    draws:number;
    goals:number;
    goalsAgainst:number;
    losses:number;
    wins:number;
  }
  losses:number;
  playedGames:number;
  points:number;
  position:number;
  teamName:string;
  wins:number;
 }



