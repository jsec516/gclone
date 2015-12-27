System.register(['angular2/core', 'angular2/router', '../email.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, email_service_1;
    var EmailDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (email_service_1_1) {
                email_service_1 = email_service_1_1;
            }],
        execute: function() {
            EmailDetailComponent = (function () {
                function EmailDetailComponent(_router, _routeParams, _service) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._service = _service;
                    // let id = this._routeParams.get('id');
                    // this._service.getEmailById(id).subscribe(email => { this.email = email[0]; });
                }
                EmailDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("Callend ngOnInit");
                    var id = this._routeParams.get('id');
                    console.log(id);
                    // this.email = id;
                    this._service.getEmailById(id).subscribe(function (email) { return _this.email = email[0]; });
                };
                EmailDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: './client/email-detail/email-detail.template.html',
                        providers: [email_service_1.EmailService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, email_service_1.EmailService])
                ], EmailDetailComponent);
                return EmailDetailComponent;
            })();
            exports_1("EmailDetailComponent", EmailDetailComponent);
        }
    }
});
//# sourceMappingURL=email-detail.component.js.map