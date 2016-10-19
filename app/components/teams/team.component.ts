import {Component, OnInit} from "@angular/core";
import {FutService} from "../../services/fut.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector:'team',
  templateUrl:'./app/components/teams/team.component.html'
})
export class TeamComponent implements OnInit{
  teamName: string;
  teamUrl:string;
  teamValue: string;

  constructor(
    private _futService: FutService,
    private _activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
    this._activatedRoute.params
      .map((par) => par['teamId']).subscribe((par)=>{
      this._futService.getTeam(par).subscribe((res)=>{
        this.teamName = res.name;
        this.teamUrl= res.crestUrl;
        this.teamValue= res.squadMarketValue;
      });
    });
  }

}





