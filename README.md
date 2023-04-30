# 📝 Back-end API Node.js case Todo-list
The Back-end API Node.js case Todo-list challenge is a project to create a to-do list RESTful API using Node.js. The goal is to create a simple, yet functional API that allows users to create, read, update, and delete to-do list items. The API should be designed according to RESTful principles and should use appropriate HTTP methods for each operation. It should also include validation and error handling to ensure data consistency and reliability. The challenge is intended to test the candidate's understanding of Node.js, RESTful API design, and data validation and error handling techniques.

### 🚀 Getting Started
To build the Docker image, run:

```bash
./script/build.sh
```
To run the Docker image, run:

```
./script/run.sh
```

To test the application, run:
```
./script/test.sh
```
To run all of the above commands in sequence, run:
```
./script/all.sh
```

To run the application locally, you will need to create a .env file based on the `.env.example` file provided.

To start the application in development mode, run:
```
npm run dev
```
To run database migrations, run:
```
npx prisma migrate dev
```
To generate Prisma client, run:
```
npx prisma generate
```
to start the server, run:
```
npm run start
```

You can also change the port forwarded, mysql configuration in build.sh script. For the case when you run it locally, you can change mysql configuration simply by changing the variable inside `.env` file

### 🔍 Dependencies
* Morgan
* CORS
* Express
* Prisma
* Body-parser
* Nodemon
* MySQL
  
### 👨‍💻 Author
Firizky Ardiansyah