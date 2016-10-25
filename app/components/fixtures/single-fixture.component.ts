import {Component, OnInit} from "@angular/core";
import {FutService} from "../../services/fut.services";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector:'single-fixture',
  templateUrl:'./app/components/fixtures/single-fixture.component.html'
})
export class SingleFixtureComponent implements OnInit{
  fixture = {};
  result = {};
  halftime = {};
  headToHead : {};

  constructor(
    private _futService: FutService,
    private _activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
    this._activatedRoute.params
      .map((params)=> params['id']).subscribe((par)=>{
      this._futService.getFixture(par).subscribe((res)=>{
        this.fixture = res.fixture;
        this.result = res.fixture.result;
        this.halftime = res.fixture.result.halfTime;
        this.headToHead = res.head2head.fixtures;
        console.log(res.head2head);
      });
    });
  }
}

