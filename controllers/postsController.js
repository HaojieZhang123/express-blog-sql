// import connection
const connection = require('../data/db');

const index = (req, res) => {
    // query
    const sql = 'SELECT * FROM posts';

    // execute query
    connection.query(sql, (err, results) => {
        // error handler
        if (err) return res.status(500).send(err);

        // response
        res.send(results);
    });
}

const show = (req, res) => {
    res.send('show placeholder');
}

const store = (req, res) => {
    res.send('store placeholder');
}

const update = (req, res) => {
    res.send('update placeholder');
}

const modify = (req, res) => {
    res.send('modify placeholder');
}

const destroy = (req, res) => {
    res.send('destroy placeholder');
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
};