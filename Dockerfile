# 1. Use an official Node.js runtime as the base image
FROM node:18

# 2. Set working directory inside container
WORKDIR /usr/src/app

# 3. package.json
COPY package.json ./
RUN npm install

# 4. the rest of the app
COPY server.js .

# 5. Expose port
EXPOSE 3000

# 6. Command to run app
CMD ["npm", "start"]
