// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  appVersion: require('../../package.json').version + '-dev',
  production: false,
  firebase: {
    apiKey: "AIzaSyALRRW6a3ScxXIj-mNNwnb4_GK8M6XS4Uk",
    authDomain: "ttplayers.com.au",
    projectId: "ttplayers-c589c",
    storageBucket: "ttplayers-c589c.appspot.com",
    messagingSenderId: "577838485972",
    appId: "1:577838485972:web:0d13f5f6349c780f9d0641",
    measurementId: "G-9WP9TL1Y2E"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
