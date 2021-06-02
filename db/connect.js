const mongoose = require('mongoose');
const { dbUrl, options } = require('./config');

function connect() {

    // Здесь вам нужно реализовать логику подключения сервера к базе данных
    // Не забудьте вызвать эту функцию в главном файле с настройками сервера!
}

function disconect() {
    // Здесь вам нужно реализовать логику отключения сервера к базе данных
    // Не забудьте вызвать эту функцию в файле засеивания БД !
}

module.exports = { connect, disconect };

