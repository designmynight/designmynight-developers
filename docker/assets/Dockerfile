FROM node:7.8-alpine

RUN mkdir /usr/share/app
WORKDIR /usr/share/app

# Get the package file
ADD / /usr/share/app/

# Clear out any existing node_modules
RUN rm -rf node_modules

# Install JS dependencies
RUN npm install
RUN npm rebuild node-sass

# By default, run the develop script
CMD npm run develop