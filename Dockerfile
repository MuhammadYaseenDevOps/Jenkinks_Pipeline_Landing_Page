# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install any needed packages specified in package.json
RUN npm install --force

# Build the React application
RUN npm run build

# Make the application available on port 3000
EXPOSE 3000

# Define the command to run the app
CMD ["npx", "serve", "-s", "build"]