// const express = require("express");
import express from 'express';
import bodyParser from 'body-parser';

import todosRoutes from './routes/todos';

const PORT: number = 3000;

const app = express();

app.use(bodyParser.json());

app.use(todosRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
