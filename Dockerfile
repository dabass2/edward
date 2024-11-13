FROM nginx:alpine

COPY ./build /usr/share/nginx/html/edward

EXPOSE 80