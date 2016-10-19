"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require("@angular/forms");
var app_router_1 = require("./app.router");
var http_1 = require("@angular/http");
var app_component_1 = require('./app.component');
var navbar_component_1 = require("./components/navbar/navbar.component");
var about_component_1 = require("./components/about/about.component");
var competitions_component_1 = require("./components/competitions/competitions.component");
var teams_component_1 = require("./components/teams/teams.component");
var competition_component_1 = require("./components/competition/competition.component");
var league_info_component_1 = require("./components/league-info/league-info.component");
var team_component_1 = require("./components/teams/team.component");
var standings_component_1 = require("./components/standings/standings.component");
var fixtures_component_1 = require("./components/fixtures/fixtures.component");
var players_component_1 = require("./components/players/players.component");
var team_fixtures_component_1 = require("./components/fixtures/team-fixtures.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_router_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                about_component_1.AboutComponent,
                competitions_component_1.CompetitionsComponent,
                teams_component_1.TeamsComponent,
                competition_component_1.CompetitionComponent,
                league_info_component_1.LeagueInfoComponent,
                team_component_1.TeamComponent,
                standings_component_1.StandingsComponent,
                fixtures_component_1.FixturesComponent,
                players_component_1.PlayersComponent,
                team_fixtures_component_1.TeamFixturesComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map