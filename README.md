# Employee Management System

## Project Overview
The **Employee Management System** is a backend service built using **Node.js** and **MongoDB**. It enables the management of employees, departments, and projects with features for CRUD operations and relational data handling.

---

## Features
1. Manage Employees:
   - Add, update, view, and delete employee records.
   - Link employees to departments and projects.

2. Manage Departments:
   - Create and update department details.
   - Assign a manager to each department.

3. Manage Projects:
   - Track project details including budget and associated department.

4. Relational Data:
   - Employees are linked to projects and departments.
   - Departments have managers (employees).

5. Robust Validation:
   - Validation for required fields and relationships.

---

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **ODM**: Mongoose

---

## Prerequisites
1. Node.js (v16 or higher)
2. MongoDB (v5 or higher)
3. npm (v8 or higher)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and configure the following:
   ```env
   MONGO_URI=mongodb://localhost:27017/employee_management
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

---
=
## Database Schema

### 1. **Employee**
```javascript
{
  "firstName": String,
  "lastName": String,
  "email": String,
  "phone": String,
  "hireDate": Date,
  "jobTitle": String,
  "salary": Number,
  "deptId": ObjectId (ref: "Department"),
  "projectId": ObjectId (ref: "Project")
}
```

### 2. **Department**
```javascript
{
  "deptName": String,
  "managerId": ObjectId (ref: "Employee"),
  "location": String
}
```

### 3. **Project**
```javascript
{
  "projectName": String,
  "startDate": Date,
  "endDate": Date,
  "budget": Number,
  "deptId": ObjectId (ref: "Department")
}
```

---

## Testing

You can use Postman or any API client to test the endpoints. Below is an example configuration for testing:

- **Base URL**:
  ```http
  http://localhost:5000
  ```

- **Example Headers**:
  ```json
  {
    "Content-Type": "application/json"
  }
  ```

---






