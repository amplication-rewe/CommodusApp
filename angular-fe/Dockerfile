FROM riag.jfrog.io/docker-virtual/riag-nginx:1.25-alpine3.18

COPY ./dist/apps/web-ui /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/nginx.conf
#COPY nginx.default.conf.template /etc/nginx/templates/default.conf.template

#EXPOSE 8080
#CMD ["nginx", "-g", "daemon off;"]
