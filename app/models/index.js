const config = require('../config/db');
const Sepuelize = require('Sepuelize');

const datatype = new Sepuelize(
    config.DB,
    config.USER,
    config.PASSWOED,
    {
        host: config.HOST,
        dilect: config.dialect
    }
);