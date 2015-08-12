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
};System.register(['angular2/angular2', '../core/node'], function(exports_1) {
    var angular2_1, node_1;
    var FaGestureHandler;
    return {
        setters:[
            function (_angular2_1) {
                angular2_1 = _angular2_1;
            },
            function (_node_1) {
                node_1 = _node_1;
            }],
        execute: function() {
            FaGestureHandler = (function () {
                function FaGestureHandler(parent) {
                    var GestureHandler = famous.components.GestureHandler;
                    this.node = parent.node;
                    this.gestures = new GestureHandler(this.node);
                }
                FaGestureHandler.prototype.onInit = function () {
                };
                FaGestureHandler.prototype.onChange = function (changes) {
                    changes.drag ? this.gestures.on({ event: 'drag' }, changes.drag.currentValue.bind(this.node)) : false;
                    changes.tap ? this.gestures.on({ event: 'tap' }, changes.tap.currentValue.bind(this.node)) : false;
                    changes.rotate ? this.gestures.on({ event: 'rotate' }, changes.rotate.currentValue.bind(this.node)) : false;
                    changes.pinch ? this.gestures.on({ event: 'drag' }, changes.pinch.currentValue.bind(this.node)) : false;
                };
                FaGestureHandler = __decorate([
                    angular2_1.Component({
                        selector: 'fa-gesture-handler',
                        properties: ['drag', 'tap', 'rotate', 'pinch'],
                        lifecycle: [angular2_1.onInit, angular2_1.onChange]
                    }),
                    angular2_1.View({
                        template: ""
                    }),
                    __param(0, angular2_1.Parent()), 
                    __metadata('design:paramtypes', [node_1.FaNode])
                ], FaGestureHandler);
                return FaGestureHandler;
            })();
            exports_1("FaGestureHandler", FaGestureHandler);
        }
    }
});
