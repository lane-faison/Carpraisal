const express = require('express')
const router = express.Router()
var knex = require('../db/knex')

function Users() { return knex('users') }
