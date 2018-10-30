**Cheap Flight Alerts Frontend**

How to start project locally for development:

- **npm i**
- **npm run dev**

How to build and deploy project for prod:

- Access server with ip and pwd given.
- Enter the project folder **cd cheapflightalerts**
- Get all fresh changes from git repo **git pull**
- Install all dependencies if something new was installed during development **npm i**
- Stop server **pm2 stop all**
- Build the project **npm run build**
- Start server **pm2 start npm --name "next" -- start**
