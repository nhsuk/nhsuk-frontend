FROM node:8.12.0-alpine

# Set working directory
WORKDIR /code

# Copy package.json & install packages
COPY package.json .
RUN npm install --quiet

# Copy all files to working directory
COPY . .

# Expose port to the outside
EXPOSE 3000

 # Launch application
CMD [ "node", "app.js" ]
