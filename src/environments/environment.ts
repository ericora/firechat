// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB8IJSfLDlYulPkQ4B1agDgJbNlAEuvGU8',
    authDomain: 'firechat-1ceb5.firebaseapp.com',
    databaseURL: 'https://firechat-1ceb5.firebaseio.com',
    projectId: 'firechat-1ceb5',
    storageBucket: 'firechat-1ceb5.appspot.com',
    messagingSenderId: '1015868826883',
    appId: '1:1015868826883:web:30b402aef71d6464e03536',
    measurementId: 'G-CB8D2NSNY3',
  },
  dialogflow: { angularBot: 'cbf69554ad8b49b9812d01848ed118c9' },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
