# KeycloakMfe

Angular 15 application with Keycloak as an authentication provider for a micro frontend architecture.

Using keycloak-angular 13 and keycloak-js 20;
when I start the application on localhost:4200, I get the following errors:

```
core.mjs:8506 ERROR TypeError: keycloak_js__WEBPACK_IMPORTED_MODULE_5__ is not a constructor
at keycloak-angular.mjs:114:26
at Generator.next (<anonymous>)
at asyncGeneratorStep (asyncToGenerator.js:3:1)
at _next (asyncToGenerator.js:22:1)
at asyncToGenerator.js:27:1
at new ZoneAwarePromise (zone.js:1432:21)
at asyncToGenerator.js:19:1
at KeycloakService.init (keycloak-angular.mjs:120:30)
at Array.<anonymous> (initializer.ts:5:14)
at ApplicationInitStatus.runInitializers (core.mjs:23473:52)
```

```
TypeError: keycloak_js__WEBPACK_IMPORTED_MODULE_5__ is not a constructor
at keycloak-angular.mjs:114:26
at Generator.next (<anonymous>)
at asyncGeneratorStep (asyncToGenerator.js:3:1)
at _next (asyncToGenerator.js:22:1)
at asyncToGenerator.js:27:1
at new ZoneAwarePromise (zone.js:1432:21)
at asyncToGenerator.js:19:1
at KeycloakService.init (keycloak-angular.mjs:120:30)
at Array.<anonymous> (initializer.ts:5:14)
at ApplicationInitStatus.runInitializers (core.mjs:23473:52)
```
