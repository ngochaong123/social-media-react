# Sử dụng image node LTS
FROM node:lts-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json (hoặc yarn.lock) vào thư mục làm việc
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .
# Port mà ứng dụng sẽ lắng nghe
EXPOSE 3000

# Khởi chạy ứng dụng
CMD ["npm", "start"]
