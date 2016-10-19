"use strict";
var router_1 = require("@angular/router");
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
var appRoutes = [
    {
        path: '',
        component: competitions_component_1.CompetitionsComponent,
    }, {
        path: 'about',
        component: about_component_1.AboutComponent
    }, {
        path: ':id/competition',
        component: competition_component_1.CompetitionComponent,
        children: [
            {
                path: '',
                component: league_info_component_1.LeagueInfoComponent
            },
            {
                path: ':id/teams',
                component: teams_component_1.TeamsComponent
            }, {
                path: ':id/standings',
                component: standings_component_1.StandingsComponent
            }, {
                path: ':id/fixtures',
                component: fixtures_component_1.FixturesComponent
            }, {
                path: ':id/teams/:teamId',
                component: team_component_1.TeamComponent
            }, {
                path: ':id/teams/:teamId/fixtures',
                component: team_fixtures_component_1.TeamFixturesComponent
            }, {
                path: ':id/teams/:teamId/squad',
                component: players_component_1.PlayersComponent
            }
        ]
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.router.js.map