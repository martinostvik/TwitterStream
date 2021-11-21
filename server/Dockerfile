FROM node:17-alpine3.12@sha256:9dd79d902bfc8d0fc956527a9c41e2a0a70b452e97c13de27a5248bfa5341bc0

VOLUME ["/workspace"]
WORKDIR /workspace

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# reduce privileges
USER 9000

# add app
COPY . ./

# start app
CMD ["npm", "start"]
