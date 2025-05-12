## © 2025 Little Shilling, Inc.
## Shon Little
## Created: 2025-05-11

# Use an official Python runtime as a base image.
FROM nginx:alpine
# Copy the current directory contents into the container.
COPY public /usr/share/nginx/html
# Expose port 80 to the outside world.
EXPOSE 80
