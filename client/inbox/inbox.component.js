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
    var InboxComponent;
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
            InboxComponent = (function () {
                function InboxComponent(_router, _service) {
                    this._router = _router;
                    this._service = _service;
                }
                InboxComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.emails = [];
                    this._service.getEmails().subscribe(function (emails) { _this.emails = emails; });
                };
                InboxComponent.prototype.onSelect = function (email) {
                    this._router.navigate(['EmailDetail', { id: email.id }]);
                };
                InboxComponent = __decorate([
                    core_1.Component({
                        templateUrl: './client/inbox/inbox-list.template.html',
                        directives: [router_1.RouterOutlet],
                        providers: [email_service_1.EmailService],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, email_service_1.EmailService])
                ], InboxComponent);
                return InboxComponent;
            })();
            exports_1("InboxComponent", InboxComponent);
        }
    }
});
//# sourceMappingURL=inbox.component.js.map