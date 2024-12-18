# riag/tech/team-ca/commodus-app/spring-be

## Application Architecture Blueprint

Please refer to the Book of Standards and the Application Blueprint Inventory Service for guidance

- [Application Blueprint Inventory Service](https://gitlab.common.cloud.riag.digital/riag/tech/arch/app-arch/blueprint/inv-svc)
- [Book of Standards](https://confluence.rewe-group.at/x/N36sFQ)

## Application Platform Resources

This repository is integrated into the Application Platform. It comes with a preconfigured CI/CD which builds your application, runs tests, pushes a docker image to the container-registry and automatically deploys on our Kubernetes cluster.

Here are some useful links to resources we have already setup for you!

[**Rewe Application Portal (RAP)**](https://rap.common.cloud.riag.digital/clusters/tech/products/ap-team/applications/example-app/containers/spring-be) \*

[**Testing Dashboard (SonarQube)**](https://sonarqube.common.cloud.riag.digital/dashboard?id=at.rewe.riag.tech.ap-team.example-app%3Aspring-be) \*

**Deployment Spaces (ArgoCD)**

- [Development](https://argocd.development.cloud.riag.digital/applications/riag-tech-ap-team-example-app?resource=&node=apps%2FDeployment%2Friag-tech-ap-team-example-app%2Fspring-be)
- [Staging](https://argocd.staging.cloud.riag.digital/applications/riag-tech-ap-team-example-app?resource=&node=apps%2FDeployment%2Friag-tech-ap-team-example-app%2Fspring-be)
- [Production](https://argocd.production.cloud.riag.digital/applications/riag-tech-ap-team-example-app?resource=&node=apps%2FDeployment%2Friag-tech-ap-team-example-app%2Fspring-be)

**Service URLs**

- [Development](https://platform.development.cloud.riag.digital/riag/tech/team-ca/commodus-app/spring-be/) \*
- [Staging](https://platform.staging.cloud.riag.digital/riag/tech/team-ca/commodus-app/spring-be/) +
- [Production](https://platform.production.cloud.riag.digital/riag/tech/team-ca/commodus-app/spring-be/) +

\* _After the first CI/CD pipeline runs through (couple minutes after repo creation)._  
\+ _Run your products create_container [workflow](https://stackstorm.common.cloud.riag.digital/#/actions/riag_tech_ap_team.create_container) with the respective stage and start the manual (promote, deploy) CI/CD jobs afterwards._

To learn more about how to use these and other services (i.e. monitoring/alerting and load-testing), feel free to check out our [Confluence Guides](https://confluence.rewe-group.at/display/DP/Application+Platform) to get started!
