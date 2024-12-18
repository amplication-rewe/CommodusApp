// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// eslint-disable-next-line @nx/enforce-module-boundaries
import packageJson from '../../../../package.json';

export const version = `${packageJson.version} (DEVELOPMENT)`;

export const environment = {
  production: false,
};
