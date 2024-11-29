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

# Etapa 2: Servir a aplicação
FROM node:16

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos construídos da etapa anterior
COPY --from=build /app/build /app/build

# Instalar um servidor HTTP simples para servir a aplicação
RUN npm install -g serve

# Expor a porta 3000
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["serve", "-s", "build"]