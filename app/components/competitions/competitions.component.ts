import {Component, OnInit} from "@angular/core";

import {FutService} from "../../services/fut.services";
import {LEAGUE} from "../../../league";
@Component({
  selector:'search',
  templateUrl:'./app/components/competitions/competitions.component.html'
})
export class CompetitionsComponent implements OnInit{
  leagues: LEAGUE[];

  constructor(private _spotifyService: FutService){}
  ngOnInit(){
    this._spotifyService.showLeagues().subscribe((res)=>{
      this.leagues = res;
    },(err)=>{
    });
  }

}



