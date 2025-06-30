# 🛍️ E-commerce Product Admin Panel

A full-stack application to manage products in an e-commerce platform. It includes functionality to **add, edit, delete, and list** products with multiple images. Built using Angular (v9/10), Node.js, TypeScript, PostgreSQL, TypeORM, and Multer.

---

## 🔧 Tech Stack

### ✅ Frontend
- Angular 9/10
- Reactive Forms
- Angular Router
- HttpClient

### ✅ Backend
- Node.js
- TypeScript
- Express.js
- TypeORM
- PostgreSQL
- Multer (for file uploads)
- CORS

---

## 📁 Folder Structure
```
Angular_task/
│
├── backend/
│ ├── src/
│ │ ├── controller/
│ │ │ └── productController.ts
│ │ ├── entity/
│ │ │ └── product.ts
│ │ ├── routes/
│ │ │ └── productRoutes.ts
│ │ ├── data-source.ts
│ │ ├── index.ts
│ ├── uploads/ # Uploaded images saved here
│ ├── package.json
│ └── tsconfig.json
│
├── frontend/
│ ├── src/
│ │ ├── app/
│ │ │ ├── product-form/
│ │ │ ├── product-list/
│ │ │ └── services/
│ ├── angular.json
│ ├── package.json
│ └── tsconfig.json


```

Install dependencies:

```
npm install
Configure database in src/data-source.ts:
```
````
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your_username",
  password: "your_password",
  database: "your_db_name",
  synchronize: true,
  entities: ["src/entity/*.ts"]
});
Run the backend server:
````
```
npx ts-node-dev src/index.ts
2. 🌐 Frontend Setup
Navigate to the frontend folder:
```

```
bash
Copy code
cd ../frontend
Install dependencies:

bash
Copy code
npm install
Run Angular app:

bash
Copy code
ng serve
Open in browser:
```

```
http://localhost:4200
```

📸 Features
✅ Product CRUD operations (Create, Read, Update, Delete)

✅ Upload and manage multiple images per product

✅ Image previews and form validation

✅ RESTful API integration

✅ Angular form and route handling

✅ Clean and minimal admin UI

🛡️ API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get product by ID
POST	/api/products	Add new product
PUT	/api/products/:id	Update existing product
DELETE	/api/products/:id	Delete a product
