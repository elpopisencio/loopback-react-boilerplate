"use strict";
// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-express-composition
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@loopback/core");
/**
 * This class will be bound to the application as a `LifeCycleObserver` during
 * `boot`
 */
let HelloObserver = class HelloObserver {
    constructor() {
        this.events = [];
    }
    /*
    constructor(
      @inject(CoreBindings.APPLICATION_INSTANCE) private app: Application,
    ) {}
    */
    /**
     * This method will be invoked when the application starts
     */
    async start() {
        this.events.push(`${new Date()}: hello-start`);
    }
    /**
     * This method will be invoked when the application stops
     */
    async stop() {
        this.events.push(`${new Date()}: hello-stop`);
    }
};
HelloObserver = __decorate([
    core_1.lifeCycleObserver()
], HelloObserver);
exports.HelloObserver = HelloObserver;
//# sourceMappingURL=hello.observer.js.map