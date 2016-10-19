import {Component, OnInit} from "@angular/core";
import {LEAGUE} from "../../../league";
import {FutService} from "../../services/fut.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector:'league-info',
  templateUrl:'./app/components/league-info/league-info.component.html'
})
export class LeagueInfoComponent implements OnInit{
  leagueId: number;
  leagues: LEAGUE[];

  constructor(
    private _futService: FutService,
    private _activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
    this._activatedRoute.params
      .map((params)=>params['id']).subscribe((par)=>{
      this.leagueId = par;

    });

    this._futService.showLeagues().subscribe((res)=>{
      this.leagues = res;
    });

  }

}



