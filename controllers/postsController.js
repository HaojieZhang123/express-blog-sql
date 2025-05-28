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

    // tags query
    const tagSql = `
        SELECT tags.id, tags.label 
        FROM tags
        JOIN post_tag ON tags.id = post_tag.tag_id
        WHERE post_tag.post_id = ?
    `;

    // execute query
    connection.query(sql, [id], (err, results) => {
        // error handler
        if (err) return res.status(500).send(err);

        // verify if post exists
        if (results.length === 0) return res.status(404).send('post not found');

        // get post
        const post = results[0];

        // execute tags query
        connection.query(tagSql, [id], (err, tags) => {
            // error handler
            if (err) return res.status(500).send(err);

            // response
            post.tags = tags;
            res.send(post);
        });
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