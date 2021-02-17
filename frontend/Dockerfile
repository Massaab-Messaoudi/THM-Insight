# pull official base image
FROM node:12

# set working directory
WORKDIR /app
# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 
RUN npm install react-scripts@4.0.2 -g

# add app
COPY . .
# expose the port
EXPOSE 3000
# start app
CMD [ "npm", "start" ]