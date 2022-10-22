# Or whatever Node version/image you want
FROM node:lts

# Create app directory
WORKDIR '/var/www/app'

# Copy all files starts with package and ends wit .json 
COPY package*.json ./

# Install app dependencies
RUN npm i 
RUN npm install pm2 -g

# Copy all files from current directory to app directory
COPY . .

# Listen on port 8000
EXPOSE 8000

# Run the app
CMD [ "npm", "run", "start:pm2-runtime" ]
