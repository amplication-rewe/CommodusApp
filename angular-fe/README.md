# commodus-app/angular-fe

## Application Platform Resources

This repository is integrated into the Application Platform. It comes with a preconfigured CI/CD which builds your
application, runs tests, pushes a docker image to the container-registry and automatically deploys on our Kubernetes cluster.

Here are some useful links to resources we have already setup for you!

[**Rewe Application Portal (RAP)**](https://rap.common.cloud.riag.digital/clusters/tech/products/ap-team/applications/example-app/containers/angular-fe) \*

[**Testing Dashboard (SonarQube)**](https://sonarqube.common.cloud.riag.digital/dashboard?id=application-example-app-angular-fe) \*

**Deployments (ArgoCD)**

- [Development](https://argocd.development.cloud.riag.digital/applications/riag-tech-ap-team-example-app?resource=&node=apps%2FDeployment%2Friag-tech-ap-team-example-app%2Fangular-fe)
- [Staging](https://argocd.staging.cloud.riag.digital/applications/riag-tech-ap-team-example-app?resource=&node=apps%2FDeployment%2Friag-tech-ap-team-example-app%2Fangular-fe)
- [Production](https://argocd.production.cloud.riag.digital/applications/riag-tech-ap-team-example-app?resource=&node=apps%2FDeployment%2Friag-tech-ap-team-example-app%2Fangular-fe)

**Service URLs**

- [Development](https://platform.development.cloud.riag.digital/riag/tech/team-ca/commodus-app/angular-fe/) \*
- [Staging](https://platform.staging.cloud.riag.digital/riag/tech/team-ca/commodus-app/angular-fe/) +
- [Production](https://platform.production.cloud.riag.digital/riag/tech/team-ca/commodus-app/angular-fe/) +

\* _After the first CI/CD pipeline runs through (couple minutes after repo creation)._  
\+ _Run your products `create_container` [workflow][workflow-link] with the respective stage and start the manual (promote, deploy) CI/CD jobs afterwards._

To learn more about how to use these and other services (i.e. monitoring/alerting and load-testing), feel free to check
out our [Confluence Guides](https://confluence.rewe-group.at/display/DP/Application+Platform) to get started!

## Pre-Configured Features

- [UNIFY Component Library](https://platform.development.cloud.riag.digital/riag/tech/app-arch/unify/unify-ng/main/storybook/)
- i18n: Transloco
- Jest Unit Tests
- Cypress UI Tests
- ESlint
- Prettier
- Husky & Pre-Commit Hook
- Version String Replacement

## Quick start

### Prerequisite

- [Node 20](https://confluence.rewe-group.at/x/aYABFQ)
- Be sure that you are already authenticated against the NPM Registry (Artifactory). [More Information](https://confluence.rewe-group.at/x/lQJjEg)

### Setup

- Install the app run `pnpm install`
- Run `pnpm start` to start the application.
- Navigate to http://localhost:4200/.

## Blueprint

Refer to the [Angular Blueprint](https://gitlab.common.cloud.riag.digital/riag/tech/arch/app-arch/blueprint/inv-web-ang) for more features.

[workflow-link]: https://stackstorm.common.cloud.riag.digital/#/actions/riag_tech_ap_team.create_container
