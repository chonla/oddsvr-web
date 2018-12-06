# STEP 1 build static website
FROM trion/ng-cli-e2e:7.1.0 as builder

# Create app directory
WORKDIR /app
# COPY ./Caddyfile /app/Caddyfile

# RUN pwd
# COPY ./data /app/oddsvr-web
# RUN ls -al /app/oddsvr-web
# RUN ls -al /app/oddsvr-web/src
# RUN ls -al /app/oddsvr-web/src/environments

# Copy project files into the docker image
COPY . /app
# COPY ./data /app/html

# Clone project from github
# RUN git clone https://github.com/chonla/oddsvr-web.git

# WORKDIR /app/oddsvr-web

# RUN cat /app/oddsvr-web/src/environments/environment.prod.ts
# RUN cat /app/src/environments/environment.prod.ts
# RUN ls -al

# Install app dependencies
RUN npm install

# Run Unit Test
# RUN ng test --watch false

# Run e2e Test
# RUN ng e2e

# Build
RUN ng build --prod


# # STEP 2 build a small nginx image with static website
# FROM nginx:1.14.0-alpine

# ## Replace default nginx config
# COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
# ## From 'builder' copy website to default nginx public folder
# COPY --from=builder /app/dist/spyfall /app/dist/spyfall

FROM abiosoft/caddy

COPY --from=builder /app/Caddyfile /etc/Caddyfile

# COPY --from=builder /app/html /var/www
COPY --from=builder /app/dist/oddsvr /var/www

# FROM node:10.14.0-alpine

# RUN apk add --no-cache git \
#     && git clone https://github.com/chonla/oddsvr-web.git \
#     && cd oddsvr-web \
#     && npm install \
#     && node_modules/.bin/ng build --prod \
#     && cp -R dist/oddsvr /var/www