const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(''))

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Shonen.0725619@',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );
  