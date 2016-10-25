import {Component, OnInit} from "@angular/core";
import {FutService} from "../../services/fut.services";
import {ActivatedRoute} from "@angular/router";
import {Fixture} from "../../../fixture";


@Component({
  selector:'fixtures',
  templateUrl:'./app/components/fixtures/fixtures.component.html'
})
export class FixturesComponent implements OnInit{
  fixtures:Fixture[];
  leagueId: string;
  constructor(
    private _futService: FutService,
    private _activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
    this._activatedRoute.parent.params
      .map((params)=> params['id']).subscribe((par)=>{
      this.leagueId = par;
      this._futService.getFixtures(par).subscribe((res)=>{
        this.fixtures = res.fixtures;
      });
    });
  }

}


