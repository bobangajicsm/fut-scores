import {Component, OnInit} from "@angular/core";
import {FutService} from "../../services/fut.services";
import {ActivatedRoute} from "@angular/router";
import {Fixture} from "../../../fixture";


@Component({
  selector:'team-fixtures',
  templateUrl:'./app/components/fixtures/team-fixtures.component.html'
})
export class TeamFixturesComponent implements OnInit{
  fixtures:Fixture[];

  constructor(
    private _futService: FutService,
    private _activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
    this._activatedRoute.params
      .map((params)=> params['teamId']).subscribe((par)=>{
      this._futService.getTeamFixtures(par).subscribe((res)=>{
        this.fixtures = res.fixtures;
        console.log(res);
      });
    });
  }

}


