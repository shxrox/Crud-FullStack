# Full Stack CRUD Application (Spring Boot + React + MySQL)

This is a simple full-stack CRUD (Create, Read, Update, Delete) application built with **Spring Boot** (Java) for the backend and **React** (Vite) for the frontend. The app allows you to manage a list of users (name, age, email) with a modern UI and RESTful API, using MySQL as the database.

---

## Features

- **Create** new users
- **Read**/list all users
- **Update** existing users
- **Delete** users
- Responsive, clean UI
- Spring Boot REST API backend
- React (Vite) frontend
- MySQL database integration
- Layered backend architecture: Model, Repository, Service, Controller
- CORS enabled for frontend-backend communication

---

## Project Structure

```
Crud-backend/
├── Crud-backend/      # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/crudbackend/
│   │   │   │   ├── Controller/CrudController.java
│   │   │   │   ├── Model/Crud.java
│   │   │   │   ├── Repository/CrudRepository.java
│   │   │   │   ├── Service/CrudService.java
│   │   │   │   └── CrudBackendApplication.java
│   │   │   └── resources/application.properties
│   │   └── test/java/com/example/crudbackend/CrudBackendApplicationTests.java
│   ├── pom.xml
│   ├── mvnw, mvnw.cmd
│   └── README.md
├── Crud-frontend/     # React frontend (Vite)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Componet/CrudApp.jsx
│   │   ├── ServiceApi/CrudApi.js
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── App.css
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for frontend)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Java 17+](https://adoptopenjdk.net/) (for backend)
- [Maven](https://maven.apache.org/) (for backend)
- [MySQL](https://www.mysql.com/) (for database)

---

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/your-repo.git
cd Crud-backend
```

---

### 2. Database Setup

Create a MySQL database named `crud`:

```sql
CREATE DATABASE crud;
```

Update your MySQL username and password in `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/crud
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
spring.jpa.hibernate.ddl-auto=update
```

---

### 3. Start the Backend (Spring Boot)

```sh
cd Crud-backend
mvn spring-boot:run
```

The backend will start on [http://localhost:8080](http://localhost:8080) by default.

---

### 4. Start the Frontend (React + Vite)

Open a new terminal:

```sh
cd Crud-frontend
npm install
npm run dev
```

The frontend will start on [http://localhost:5173](http://localhost:5173) by default.

---

## API Endpoints

| Method | Endpoint           | Description         |
|--------|--------------------|--------------------|
| GET    | `/crud`            | Get all users      |
| GET    | `/crud/{id}`       | Get user by ID     |
| POST   | `/crud`            | Add new user       |
| PUT    | `/crud/{id}`       | Update user        |
| DELETE | `/crud/{id}`       | Delete user        |

---

## Main Backend Classes

- `Crud`: JPA entity for user.
- `CrudRepository`: JPA repository.
- `CrudService`: Business logic.
- `CrudController`: REST API endpoints.

---

## Main Frontend Files

- `CrudApp.jsx`: Main UI component for CRUD operations.
- `CrudApi.js`: Axios API calls.
- `App.jsx`: App entry point.

---

## Usage

1. **Start MySQL** and ensure the `crud` database exists.
2. **Run the backend** (`mvn spring-boot:run`).
3. **Run the frontend** (`npm run dev` in `Crud-frontend`).
4. Open [http://localhost:5173](http://localhost:5173) in your browser.
5. Use the UI to add, edit, delete, and search users.

---

## Development Notes

- CORS is enabled for `http://localhost:5173` in the backend controller.
- The frontend expects the backend to run on port 8080.
- You can customize the database and ports as needed.

---

## License

This project is licensed under the MIT License.

---

## Author

- Sharon
- https://github.com/shxrox

---

## Acknowledgements

- [Spring Boot](https://spring.io/projects/spring-boot)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
