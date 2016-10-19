import {Component, OnInit} from "@angular/core";
import {FutService} from "../../services/fut.services";
import {ActivatedRoute} from "@angular/router";
import {TEAM} from "../../../team";

@Component({
  selector:'teams',
  templateUrl:'./app/components/teams/teams.component.html'
})
export class TeamsComponent implements OnInit{
    teams: TEAM[];
    constructor(
      private _futService: FutService,
      private _activatedRoute: ActivatedRoute
    ){}

  ngOnInit(){
    this._activatedRoute.params
      .map((par) => par['id']).subscribe((par)=>{
        this._futService.getTeams(par).subscribe((res)=>{
          this.teams = res.teams;
          console.log(res);
        });
    });
  }

  }





