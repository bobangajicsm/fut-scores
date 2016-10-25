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
var StandingsComponent = (function () {
    function StandingsComponent(_futService, _activatedRoute) {
        this._futService = _futService;
        this._activatedRoute = _activatedRoute;
        this.keyArr = [];
        this.groupsObj = [];
    }
    StandingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.parent.params
            .map(function (params) { return params['id']; }).subscribe(function (par) {
            _this._futService.getStandings(par).subscribe(function (res) {
                _this.standings = res.standing;
                _this.leagueCaption = res.leagueCaption;
                // first taking key values of groups
                for (var i in res.standings) {
                    _this.keyArr.push(i);
                }
                ;
                // iterating true key values of groups and pushing to obj
                for (var i in _this.keyArr) {
                    _this.groupsObj.push(res.standings[_this.keyArr[i]]);
                }
            });
        });
    };
    StandingsComponent = __decorate([
        core_1.Component({
            selector: 'standings',
            templateUrl: './app/components/standings/standings.component.html'
        }), 
        __metadata('design:paramtypes', [fut_services_1.FutService, router_1.ActivatedRoute])
    ], StandingsComponent);
    return StandingsComponent;
}());
exports.StandingsComponent = StandingsComponent;
//# sourceMappingURL=standings.component.js.map