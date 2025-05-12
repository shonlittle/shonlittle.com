## © 2025 Little Shilling, Inc.
## Shon Little
## Created: 2025-05-11

# Build the React app first
FROM node:18-slim as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Use an official Python runtime as a base image.
FROM nginx:alpine
# Copy the current directory contents into the container.
COPY public /usr/share/nginx/html
# Expose port 80 to the outside world.
EXPOSE 80
