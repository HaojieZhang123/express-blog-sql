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
    // query
    const sql = 'SELECT * FROM posts WHERE id = ?';

    // get id
    const id = req.params.id;

    // handle not found
    if (!id) return res.status(404).send('post not found');

    // execute query
    connection.query(sql, [id], (err, results) => {
        // error handler
        if (err) return res.status(500).send(err);

        // response
        res.send(results);
    });
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
    // query
    const sql = 'DELETE FROM posts WHERE id = ?';

    // get id
    const id = req.params.id;

    // execute query
    connection.query(sql, [id], (err, results) => {
        // error handler
        if (err) return res.status(500).send(err);

        // response
        res.send(`data ${id} deleted`);
    });
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
};