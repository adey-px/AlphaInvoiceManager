# Dockerfile with Multi-stage-build using statements
# - each statement begins a new stage of the build
# - create .dockerignore file in root folder
# - list files to ignore while building images

# Set node version to use, from docker hub registry
# alpine is light-weight, https://hub.docker.com/_/node
ARG NODE_VERSION=16-alpine3.12

# Initialize new build, base image using above version
FROM node:${NODE_VERSION}

# Set label instruction to add image meta data
LABEL name="mongilo-beta-invoice"
LABEL license="MIT"
LABEL description="Mongilo Invoice Image"

# Set environment type from .env
ENV NODE_ENV=development

# Create home directory named app
ARG APP_HOME=/app

# Set workin directory from home directory
WORKDIR ${APP_HOME}

# By default, docker runs root user with all priviledges
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
#    cp phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/development/bin/phantomjs && \
#    rm -fR phantomjs-2.1.1-linux-x86_64 && \
#    apk del curl

# Copy dependencies to root directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Change ownership to allow access of user in the group
# user:group to working directory above
COPY --chown=oreofe:admin . ${APP_HOME}

# Execute change of ownership to working directory
RUN chown oreofe:admin ${APP_HOME}

# Switch to newly created user
USER oreofe

# Start development server with 'npm run dev'
# note its already stated in package.json
CMD [ "npm","run","dev" ]