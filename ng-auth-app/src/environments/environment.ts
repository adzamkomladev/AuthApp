import * as authConfig from '../../auth.config.json';

export const environment = {
  production: false,
  auth: {
    ...authConfig,
    redirectUri: window.location.origin,
  },
  endpoint: 'http://localhost:8080'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
