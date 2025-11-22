docker run -d --name my-mongo -p 27017:27017 \
      -e MONGO_INITDB_ROOT_USERNAME=admin \
      -e MONGO_INITDB_ROOT_PASSWORD=password \
      -v my-mongo-data:/data/db mongo:latest



docker run -d --name mongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=mongopassword -v portfolioVolume:/data/db mongo


mongodb://[username:password@]host[:port]/[database][?options]