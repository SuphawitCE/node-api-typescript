# Node.js REST API with TypeScript

The main purpose of this repository is to demonstrate a basic working Node.js API Server with Express and TypeScript.

## Prerequisite
- Node.js runtime version >= 14

## Getting Started

Install node modules
```
cd node-api-type-script
npm i
```

Build TypeScript or compile code to JavaScript
```
npm run build-ts
```

Run server at port 3000
```
npm start
```

## API ENDPOINTS

### Get all todo
```http
GET http://localhost:3000/
```

Example get todo response

```json
{
  "todos": [
    {
      "id": "2022-12-23T08:27:19.343Z",
      "text": "Dummy todo"
      }
  ]
}
```

### Add todo
```http
POST http://localhost:3000/todo
```

Example add todo payload:

```json
{
  "text": "TEST ADD TODO"
}
```

### Update specific todo by id
```http
PUT http://localhost:3000/<todoId>
```
`todoId`, specific ID eg: `2022-12-23T08:27:26.593Z`

### Delete specific todo by id
```http
DELETE http://localhost:3000/<todoId>
```
`todoId`, specific ID eg: `2022-12-23T08:27:26.593Z`