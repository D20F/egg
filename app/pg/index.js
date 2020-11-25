const { Pool } = require('pg')

// // 连接数据库
const pool = new Pool({
    user: 'd',
    host: '106.55.6.193',
    database: 'admin',
    password: '750411',
    port: 5432,
})

// 监控错误
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})

module.exports = {
    pool
}