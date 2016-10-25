import {Component, OnInit} from "@angular/core";
import {FutService} from "../../services/fut.services";
import {ActivatedRoute} from "@angular/router";
import {STANDING} from "../../../standings";


@Component({
  selector:'standings',
  templateUrl:'./app/components/standings/standings.component.html'
})
export class StandingsComponent implements OnInit{
  standings: STANDING[];
  groupsObj:any[] = [];
  leagueId:string;

  leagueCaption:string;
  constructor(
    private _futService: FutService,
    private _activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
    this._activatedRoute.parent.params
      .map((params)=> params['id']).subscribe((par)=>{
          this.leagueId = par;
          this._futService.getStandings(par).subscribe((res)=>{
            this.standings = res.standing;
            this.leagueCaption = res.leagueCaption;
            // first taking key values of groups
            for(let i in res.standings){
              this.groupsObj.push(res.standings[i]);
            };
          });
    });
  }

}




