'use strict';

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

if (config.use_env_variable) {
  mongoose.connect(
    process.env[config.use_env_variable],
    { useNewUrlParser: true }
  );
} else {
  const { host, port, database, username, password } = config;

  if (username) {
    mongoose.connect(
      `mongodb://${username}:${password}@${host}:${port}/${database}`,
      { useNewUrlParser: true }
    );
  } else {
    mongoose.connect(
      `mongodb://${host}:${port}/${database}`,
      { useNewUrlParser: true }
    );
  };
};


module.exports = mongoose.connection;
