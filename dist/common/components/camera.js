var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var node_1 = require('../core/node');
var FaCamera = (function () {
    function FaCamera(parent) {
        var Camera = famous.components.Camera;
        this.camera = new Camera(parent.node);
    }
    FaCamera.prototype.onInit = function () {
    };
    FaCamera.prototype.onChange = function (changes) {
        changes.depth ? this.camera.setDepth(changes.depth.currentValue) : false;
    };
    FaCamera = __decorate([
        angular2_1.Component({
            selector: 'fa-camera',
            properties: ['depth'],
            lifecycle: [angular2_1.onInit, angular2_1.onChange]
        }),
        angular2_1.View({
            template: ""
        }),
        __param(0, angular2_1.Parent()), 
        __metadata('design:paramtypes', [node_1.FaNode])
    ], FaCamera);
    return FaCamera;
})();
exports.FaCamera = FaCamera;
