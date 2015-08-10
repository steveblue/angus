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
import { Component, View, Parent, onInit, onChange } from 'angular2/angular2';
import { FaNode } from '../core/node';
export let FaDomElement = class {
    constructor(parent) {
        var DOMElement = famous.domRenderables.DOMElement;
        this.element = new DOMElement(parent.node);
    }
    setClasses(classes) {
        for (let i = 0; i < classes.length; i++) {
            if (!this.element.hasClass(classes[i])) {
                this.element.addClass(classes[i]);
            }
        }
    }
    setProperties(prop) {
        if (prop) {
            for (let key in prop) {
                if (prop.hasOwnProperty(key)) {
                    this.element.setProperty(key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), prop[key]);
                }
            }
        }
    }
    setAttributes(attr) {
        if (attr) {
            for (let key in attr) {
                if (attr.hasOwnProperty(key)) {
                    this.element.setAttribute(key, attr[key]);
                }
            }
        }
    }
    onInit() {
        let elem = this;
        this.content ? this.element.setContent(elem.content) : false;
    }
    onChange(changes) {
        changes.id ? this.element.setId(changes.id.currentValue) : false;
        changes.classes ? this.setClasses(changes.classes.currentValue) : false;
        changes.attr ? this.setAttributes(changes.attr.currentValue) : false;
        changes.properties ? this.setProperties(changes.properties.currentValue) : false;
    }
};
FaDomElement = __decorate([
    Component({
        selector: 'fa-element',
        properties: ['properties', 'attr', 'content', 'id', 'classes'],
        lifecycle: [onInit, onChange]
    }),
    View({
        template: ``
    }),
    __param(0, Parent()), 
    __metadata('design:paramtypes', [FaNode])
], FaDomElement);
