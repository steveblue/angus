import {Component,View,onInit,onChange,} from 'angular2/angular2';import {$famous} from '../service/famous';// FaNode@Component({  selector: 'fa-node',  properties: ['component',               'mountpoint',               'origin',               'align',               'position',               'rotate',               'scale',               'sizemode',               'absolutesize',               'proportionalsize',               'differentialsize',               'opacity'],  lifecycle: [onInit, onChange]})@View({  template: ``})export class FaNode {  node: Object;  component: Object;  _component: Object;  mountpoint: Array<number>[];  origin: Array<number>[];  align: Array<number>[];  position: Array<number>[];  rotate: Array<number>[];  scale: Array<number>[];  sizemode: Array<number>[];  absolutesize: Array<number>[];  proportionalsize: Array<number>[];  differentialsize: Array<number>[];  opacity: Number;  constructor() {    this.node = $famous.get().scene.addChild();  }  setMountPoint(arr) {    this.node.setMountPoint(arr[0], arr[1], arr[2]);  }  setOrigin(arr) {    this.node.setOrigin(arr[0], arr[1], arr[2]);  }  setAlign(arr) {    this.node.setAlign(arr[0], arr[1], arr[2]);  }  setPosition(arr) {    this.node.setPosition(arr[0], arr[1], arr[2]);  }  setRotation(arr) {    this.node.setRotation(arr[0], arr[1], arr[2]);  }  setScale(arr) {    this.node.setScale(arr[0], arr[1], arr[2]);  }  setSizeMode(arr) {    this.node.setSizeMode(arr[0], arr[1], arr[2]);  }  setAbsoluteSize(arr) {    this.node.setAbsoluteSize(arr[0], arr[1], arr[2]);  }  setProportionalSize(arr) {    this.node.setProportionalSize(arr[0], arr[1], arr[2]);  }  setDifferentialSize(arr) {    this.node.setDifferentialSize(arr[0], arr[1], arr[2]);  }  setOpacity() {    this.node.setOpacity(this.opacity);  }  onInit() {    this.component ? this._component = this.node.addComponent(this.component) : false;  }  onChange(change) {    change.sizemode ? this.setSizeMode(change.sizemode.currentValue) : false;    change.absolutesize ? this.setAbsoluteSize(change.absolutesize.currentValue) : false;    change.proportionalsize ? this.setProportionalSize(change.proportionalsize.currentValue) : false;    change.differentialsize ? this.setDifferentialSize(change.differentialsize.currentValue) : false;    change.scale ? this.setScale(change.scale.currentValue) : false;    change.mountpoint ? this.setMountPoint(change.mountpoint.currentValue) : false;    change.origin ? this.setOrigin(change.origin.currentValue) : false;    change.align ? this.setAlign(change.align.currentValue) : false;    change.position ? this.setPosition(change.position.currentValue) : false;    change.rotate ? this.setRotation(change.rotate.currentValue) : false;    change.opacity ? this.setOpacity(change.opacity.currentValue) : false;  }}