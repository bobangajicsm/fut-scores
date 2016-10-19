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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var FutService = (function () {
    function FutService(_http) {
        this._http = _http;
    }
    FutService.prototype.showLeagues = function () {
        var headers = new http_1.Headers({ 'X-Auth-Token': '3e3003ffe85b4d7a80cd596b02172aa7' });
        return this._http.get("https://api.football-data.org/v1/competitions/?season=2016", {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    FutService.prototype.getTeams = function (id) {
        var headers = new http_1.Headers({ 'X-Auth-Token': '3e3003ffe85b4d7a80cd596b02172aa7' });
        headers.append('X-Response-Control', 'minified');
        return this._http.get('https://api.football-data.org/v1/competitions/' + id + '/teams', {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    FutService.prototype.getTeam = function (teamId) {
        var headers = new http_1.Headers({ 'X-Auth-Token': '3e3003ffe85b4d7a80cd596b02172aa7' });
        headers.append('X-Response-Control', 'minified');
        return this._http.get('https://api.football-data.org/v1/teams/' + teamId, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    FutService.prototype.getStandings = function (id) {
        var headers = new http_1.Headers({ 'X-Auth-Token': '3e3003ffe85b4d7a80cd596b02172aa7' });
        return this._http.get('https://api.football-data.org/v1/competitions/' + id + '/leagueTable', {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    FutService.prototype.getFixtures = function (id) {
        var headers = new http_1.Headers({ 'X-Auth-Token': '3e3003ffe85b4d7a80cd596b02172aa7' });
        return this._http.get('https://api.football-data.org/v1/competitions/' + id + '/fixtures', {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    FutService.prototype.getTeamFixtures = function (id) {
        var headers = new http_1.Headers({ 'X-Auth-Token': '3e3003ffe85b4d7a80cd596b02172aa7' });
        return this._http.get('https://api.football-data.org/v1/teams/' + id + '/fixtures', {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    FutService.prototype.getPlayers = function (id) {
        var headers = new http_1.Headers({ 'X-Auth-Token': '3e3003ffe85b4d7a80cd596b02172aa7' });
        headers.append('X-Response-Control', 'minified');
        return this._http.get('https://api.football-data.org/v1/teams/' + id + '/players', {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    FutService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FutService);
    return FutService;
}());
exports.FutService = FutService;
//# sourceMappingURL=fut.services.js.map