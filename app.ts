/// <reference path="typings/angular2/angular2.d.ts" />import {Component,View,onInit,Parent,bootstrap,} from 'angular2/angular2';import {FaNode} from './angus/core/node';import {FaDomElement} from './angus/core/dom-element';import {FaMesh} from './angus/webgl-renderables/mesh';// App@Component({  selector: 'fa-app'})@View({  directives: [ FaNode, FaDomElement, FaMesh ],  template: `    <fa-node [origin]="[0.5,0.5,0.0]"             [align]="[0.5,0.5,0.0]"             [sizeMode]="['absolute','absolute', 'absolute']"             [absoluteSize]="[100,100,100]">             <fa-element [properties]="{backgroundColor:'#F78E69', borderRadius:'50px', paddingTop:'20px', textAlign:'center'}"                         [content]="'<h5>Angus!</h5>'">             </fa-element>    </fa-node>    <fa-node [origin]="[0.5,0.5,0.0]"             [align]="[0.25,0.25,0.0]"             [sizeMode]="['absolute','absolute', 'absolute']"             [absoluteSize]="[200,200,200]">             <fa-element [properties]="{backgroundColor:'#ABE188', textAlign:'center'}"                         [content]="'<h5>Hello</h5>'">             </fa-element>    </fa-node>    <fa-node [origin]="[0.5,0.5,0.0]"             [align]="[0.6,0.6,0.0]"             [scale]="[1.0,1.0,1.0]"             [sizeMode]="['absolute','absolute', 'absolute']"             [absoluteSize]="[40,40,40]"             [rotate]="[0,45,45]"             [opacity]="0.75">             <fa-mesh [geometry]="'Tetrahedron'"                      [color]="'#F7EF99'"></fa-mesh>    </fa-node>  `})class App {  elemProps: Object;  constructor() {  }}bootstrap(App);