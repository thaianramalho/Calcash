# Etapa 1: Construir a aplicação
FROM node:16 AS build

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos da aplicação
COPY . .

# Construir a aplicação
RUN npm run build

# Expor a porta 80
EXPOSE 3000

# Comando para iniciar o nginx
CMD ["npm", "start"]