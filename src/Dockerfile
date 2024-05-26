#Paso 1 instanciar node js 
FROM node:20-alphine
WORKDIR /app
COPY pakage*.json
COPY pakage-lock..json
RUN npm i 
COPY ..
RUN npm run build

#CREACION DE 
FROM ngnix:1.19.0
WORKDIR /us/share/ngnix/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["ngnix","-g","daemon off;"]


