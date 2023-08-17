# สร้าง image สำหรับการ build แอปฯ
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# สร้าง image สำหรับการ serve แอปฯ
FROM nginx:alpine

# คัดลอก output จากการ build ไปยังไดเร็กทอรีของ nginx
COPY --from=builder /app/build /usr/share/nginx/html

# คัดลอกไฟล์ configuration ของ nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
