/// <reference path="typings/angular2/angular2.d.ts" />import {Component,View,onInit,onChange,EventEmitter,bootstrap,} from 'angular2/angular2';import {$famous} from './ngus/service/famous';import {FaNode} from './ngus/core/node';import {FaDomElement} from './ngus/core/dom-element';import {FaMesh} from './ngus/webgl-renderables/mesh';// App@Component({  selector: 'ngus-app',  lifecycle: [onInit]})@View({  directives: [ FaNode, FaDomElement, FaMesh ],  template: `    <fa-node [origin]="[0.5,0.5,0.5]"             [mountPoint]="[0.5,0.5,0.5]"             [align]="[0.25,0.5,0.0]"             [sizeMode]="['absolute','absolute', 'absolute']"             [absoluteSize]="[200,200,200]"             [scale]="[2.0,2.0,2.0]"             [rotate]="rotate.famous"             [component]="famousComponent">             <fa-element [properties]="{backgroundImage:'url(screenshots/famous.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top left'}"                         [content]="''">             </fa-element>    </fa-node>    <fa-node [origin]="[0.5,0.5,0.5]"             [mountPoint]="[0.5,0.5,0.5]"             [align]="[0.75,0.5,0.0]"             [scale]="[2.0,2.0,2.0]"             [sizeMode]="['absolute','absolute', 'absolute']"             [absoluteSize]="[200,200,200]"             [rotate]="rotate.angular"             [component]="angularComponent">             <fa-element [properties]="{backgroundImage:'url(screenshots/angular-2.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top left'}"                         [content]="''">             </fa-element>    </fa-node>  `})class App {  rotate: Object;  constructor() {      var app = this;      var scene = $famous.get().scene;      this.rotate = {          famous:[0,0,0],          angular:[0,0,0]      };      this.famousComponent = {        id: null,        node: null,        onMount: function (node) {            this.id = node.addComponent(this);            node.requestUpdate(this.id);            this.node = node;        },        onUpdate: function (time) {            this.node.setRotation(0,time / 832,0);            this.node.requestUpdateOnNextTick(this.id);        }      };      this.angularComponent = {        id: null,        node: null,        onMount: function (node) {            this.id = node.addComponent(this);            node.requestUpdate(this.id);            this.node = node;        },        onUpdate: function (time) {            this.node.setRotation(0,time / 1139,0);            this.node.requestUpdateOnNextTick(this.id);        }      };  }  onInit(){     // console.log(this.rotate);  }  setRotate(obj) {      this.rotate = obj;  }  onChange(x) {      console.log(x);  }}bootstrap(App);