FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build the React app
RUN npm run build:prod

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]