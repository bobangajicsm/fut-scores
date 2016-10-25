import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {routing} from "./app.router";
import {HttpModule} from "@angular/http";

import { AppComponent }  from './app.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {AboutComponent} from "./components/about/about.component";
import {CompetitionsComponent} from "./components/competitions/competitions.component";
import {TeamsComponent} from "./components/teams/teams.component";
import {CompetitionComponent} from "./components/competition/competition.component";
import {LeagueInfoComponent} from "./components/league-info/league-info.component";
import {TeamComponent} from "./components/teams/team.component";
import {StandingsComponent} from "./components/standings/standings.component";
import {FixturesComponent} from "./components/fixtures/fixtures.component";
import {PlayersComponent} from "./components/players/players.component";
import {TeamFixturesComponent} from "./components/fixtures/team-fixtures.component";
import {SingleFixtureComponent} from "./components/fixtures/single-fixture.component";

@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    CompetitionsComponent,
    TeamsComponent,
    CompetitionComponent,
    LeagueInfoComponent,
    TeamComponent,
    StandingsComponent,
    FixturesComponent,
    PlayersComponent,
    TeamFixturesComponent,
    SingleFixtureComponent
  ]
  ,
  bootstrap: [ AppComponent ]
})
export class AppModule { }
