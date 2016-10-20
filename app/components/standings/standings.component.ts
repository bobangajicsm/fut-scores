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
  keyArr:string[] = [];
  groupsObj:any[] = [];

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
            // first taking key values of groups
            for(let i in res.standings){
              this.keyArr.push(i);
            };
            // iterating true key values of groups and pushing to obj
            for(let i in this.keyArr){
              this.groupsObj.push(res.standings[this.keyArr[i]]);
            }

            console.log('groups obj');
            console.log(this.groupsObj);
            console.log('standings');
            console.log(this.standings);

          });
    });
  }

}




