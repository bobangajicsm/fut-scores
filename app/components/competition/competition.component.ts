import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector:'competition',
  templateUrl:'./app/components/competition/competition.component.html'
})
export class CompetitionComponent implements OnInit{
  leagueId: number;

  constructor(
    private _activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
    this._activatedRoute.params
      .map((params)=>params['id']).subscribe((par)=>{
        this.leagueId = par;
    });
  }
  getBack(){
    window.history.back();
  }

}



