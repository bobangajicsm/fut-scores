import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

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

const appRoutes:Routes = [
  {
    path:'',
    component: CompetitionsComponent,
  },{
    path:'about',
    component: AboutComponent
  },{
    path:':id/competition',
    component:CompetitionComponent,
    children:[
      {
        path:'',
        component:LeagueInfoComponent
      },
      {
        path:':id/teams',
        component:TeamsComponent
      },{
        path:':id/standings',
        component:StandingsComponent
      },{
        path:':id/fixtures',
        component:FixturesComponent
      },{
        path:':id/teams/:teamId',
        component:TeamComponent
      },{
        path:':id/teams/:teamId/fixtures',
        component:TeamFixturesComponent
      },{
        path:':id/teams/:teamId/squad',
        component: PlayersComponent
      }
    ]
  },
];


export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
