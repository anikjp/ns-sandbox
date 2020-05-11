import * as app from 'tns-core-modules/application';

export const setNativeEvents = () => {
    app.android.on(app.AndroidApplication.activityCreatedEvent, (args: app.AndroidActivityBundleEventData) => {
        console.logAndroid(args.eventName)
    });
    app.android.on(app.AndroidApplication.activityStartedEvent,  (args: app.AndroidActivityEventData) => {
        console.logAndroid(args.eventName);
    });
    app.android.on(app.AndroidApplication.activityDestroyedEvent,  (args: app.AndroidActivityEventData) => {
        console.logAndroid(args.eventName);
    });
    app.android.on(app.AndroidApplication.activityBackPressedEvent,  (args: app.AndroidActivityEventData) => {
        console.logAndroid(args.eventName);
    });
    app.android.on(app.AndroidApplication.activityPausedEvent,  (args: app.AndroidActivityEventData) => {
        console.logAndroid(args.eventName);
    });
    app.android.on(app.AndroidApplication.activityResumedEvent,  (args: app.AndroidActivityEventData) => {
        console.logAndroid(args.eventName);
    });
    app.android.on(app.AndroidApplication.activityStoppedEvent,  (args: app.AndroidActivityEventData) => {
        console.logAndroid(args.eventName);
    });
    app.android.on(app.AndroidApplication.saveActivityStateEvent,  (args: app.AndroidActivityEventData) => {
        console.logAndroid(args.eventName);
    });
    app.android.on(app.AndroidApplication.activityResultEvent,  (args: app.AndroidActivityEventData) => {
        console.logAndroid(args.eventName);
    });
};
