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
var fut_services_1 = require("../../services/fut.services");
var router_1 = require("@angular/router");
var TeamComponent = (function () {
    function TeamComponent(_futService, _activatedRoute) {
        this._futService = _futService;
        this._activatedRoute = _activatedRoute;
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params
            .map(function (par) { return par['teamId']; }).subscribe(function (par) {
            _this._futService.getTeam(par).subscribe(function (res) {
                _this.teamName = res.name;
                _this.teamUrl = res.crestUrl;
                _this.teamValue = res.squadMarketValue;
            });
        });
    };
    TeamComponent = __decorate([
        core_1.Component({
            selector: 'team',
            templateUrl: './app/components/teams/team.component.html'
        }), 
        __metadata('design:paramtypes', [fut_services_1.FutService, router_1.ActivatedRoute])
    ], TeamComponent);
    return TeamComponent;
}());
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=team.component.js.map