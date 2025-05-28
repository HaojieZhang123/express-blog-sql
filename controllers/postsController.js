const index = (req, res) => {
    res.send('index placeholder');
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