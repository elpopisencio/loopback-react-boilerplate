import { ApplicationConfig } from '@loopback/core';
import { NoteApplication } from './application';
export declare class ExpressServer {
    private app;
    readonly lbApp: NoteApplication;
    private server?;
    constructor(options?: ApplicationConfig);
    boot(): Promise<void>;
    start(): Promise<void>;
    stop(): Promise<void>;
}
