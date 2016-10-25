import {Component, OnInit} from "@angular/core";
import {FutService} from "../../services/fut.services";
import {ActivatedRoute} from "@angular/router";
import {PLAYER} from "../../../player";

@Component({
  selector:'players',
  templateUrl:'./app/components/players/players.component.html'
})
export class PlayersComponent implements OnInit{
players: PLAYER[];
  constructor(
    private _futService: FutService,
    private _activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
      this._activatedRoute.params
        .map((params)=>params['teamId']).subscribe((par)=>{
            this._futService.getPlayers(par).subscribe((res)=>{
              this.players = res.players;
            });
      });
  }

}




