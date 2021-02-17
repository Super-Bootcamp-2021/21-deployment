const { createConnection } = require('typeorm');
function connect(entities, config) {
    return createConnection(Object.assign(Object.assign({}, config), { synchronize: true, timezone: 'Asia/Jakarta', entities }));
}
module.exports = {
    connect,
};
