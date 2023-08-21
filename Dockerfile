# สร้าง image สำหรับการ build แอปฯ
FROM node:18 

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["node" , "/app/build/index.js"]
