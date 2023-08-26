FROM node:18

RUN mkdir -p /home/app
WORKDIR /home/app

COPY package.json ./

RUN npm i 

COPY . .

EXPOSE 5002

CMD ["node", "index.js"]


#----- run the imge inside the docker terminal
#----- port 80 means just localhost
#----- docker run -dit -p 80:5001 <image-name>