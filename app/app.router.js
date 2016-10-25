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
var single_fixture_component_1 = require("./components/fixtures/single-fixture.component");
var appRoutes = [
    {
        path: '',
        component: competitions_component_1.CompetitionsComponent,
    }, {
        path: 'about',
        component: about_component_1.AboutComponent
    }, {
        path: 'competition/:id',
        component: competition_component_1.CompetitionComponent,
        children: [
            {
                path: '',
                component: league_info_component_1.LeagueInfoComponent
            },
            {
                path: 'teams',
                component: teams_component_1.TeamsComponent
            }, {
                path: 'standings',
                component: standings_component_1.StandingsComponent
            }, {
                path: 'fixtures',
                component: fixtures_component_1.FixturesComponent
            }, {
                path: 'teams/:teamId',
                component: team_component_1.TeamComponent
            }, {
                path: 'teams/:teamId/fixtures',
                component: team_fixtures_component_1.TeamFixturesComponent
            }, {
                path: 'teams/:teamId/squad',
                component: players_component_1.PlayersComponent
            }, {
                path: 'fixtures/fixture/:id',
                component: single_fixture_component_1.SingleFixtureComponent
            }
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.router.js.map