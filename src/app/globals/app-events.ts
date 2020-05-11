import * as app from 'tns-core-modules/application';
import { setNativeEvents } from '@app/globals/app-events-native';
import { setStatusBarColors } from '@app/utils';

export const setAppEvents = () => {

    setNativeEvents();

    app.on(app.launchEvent, (args: app.ApplicationEventData) => {
        console.logNativeScript(args.eventName);
    });
    app.on(app.displayedEvent, (args: app.ApplicationEventData) => {
        console.logNativeScript(args.eventName);
    });
    app.on(app.suspendEvent,  (args: app.ApplicationEventData) => {
        console.logNativeScript(args.eventName);
    });
    app.on(app.resumeEvent,  (args: app.ApplicationEventData) => {
        console.logNativeScript(args.eventName);
        setStatusBarColors();
    });
    app.on(app.exitEvent,  (args: app.ApplicationEventData) => {
        console.logNativeScript(args.eventName);
    });
    app.on(app.lowMemoryEvent,  (args: app.ApplicationEventData) => {
        console.logNativeScript(args.eventName);
    });
    app.on(app.uncaughtErrorEvent,  (args: app.ApplicationEventData) => {
        console.logNativeScript(args.eventName);
    });
    app.on(app.orientationChangedEvent,  (args: app.ApplicationEventData) => {
        console.logNativeScript(args.eventName);
    });
};
