# Development Dockerfle
# Create .dockerignore file in root folder
# List files to ignore while building this image

# node version to use, selected from docker registry
# alpine is light-weight, https://hub.docker.com/_/node
ARG NODE_VERSION=16-alpine3.12

# initialize new build, base image using above version
FROM node:${NODE_VERSION}

# label instruction to add image meta data
LABEL name="mongilo-invoice"
LABEL license="MIT"
LABEL description="Mongilo invoice image"

# environment instruction from .env
ENV NODE_ENV=development

# home directory for entire app
ARG APP_HOME=/app

# workin directory using home directory above
WORKDIR ${APP_HOME}

# by default, docker runs root user with all priviledges
# run containers as non-root user, create group & user as below
RUN addgroup --system admin \
  && adduser --system --ingroup admin oreofe

# RUN apk --update add ttf-freefont fontconfig && rm -rf /var/cache/apk/*

# RUN apk add --no-cache curl && \
#    cd /tmp && curl -Ls https://github.com/dustinblackman/phantomized/releases/download/2.1.1/dockerized-phantomjs.tar.gz | tar xz && \
#    cp -R lib lib64 / && \
#    cp -R usr/lib/x86_64-linux-gnu /usr/lib && \
#    cp -R usr/share /usr/share && \
#    cp -R etc/fonts /etc && \
#    curl -k -Ls https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2 | tar -jxf - &&\
#    cp phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin/phantomjs && \
#    rm -fR phantomjs-2.1.1-linux-x86_64 && \
#    apk del curl

# copy dependencies to root directory
COPY package*.json ./

# install dependencies
RUN npm install

# change ownership to allow access of user in the group
# user:group to working directory above
COPY --chown=oreofe:admin . ${APP_HOME}

# execute change of ownership to working directory
RUN chown oreofe:admin ${APP_HOME}

# switch to newly created user
USER oreofe

# start development server with 'npm run dev'
# note its already stated in package.json
CMD [ "npm","run","dev" ]