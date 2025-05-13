## © 2025 Little Shilling, Inc.
## Shon Little
## Created: 2025-05-11

# Build the React app first
FROM node:18-slim AS build
# Install dependencies, including CA certs
RUN apt-get update && apt-get install -y ca-certificates curl && rm -rf /var/lib/apt/lists/*
# Set the working directory in the container to /app
WORKDIR /app
# Copy tiles to the working directory
COPY . .
# Install any needed packages specified in package.json
RUN npm install
# Build the app for production
RUN npm run build

# Use an official Python runtime as a base image.
FROM nginx:alpine
# Copy the default nginx configuration file
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# Copy the current directory contents into the container.
COPY --from=build /app/build /usr/share/nginx/html
# Expose port 80 to the outside world.
EXPOSE 80
