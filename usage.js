require('./src/functions')
const { run, listen, reply, broadcast } = require('./src/server')
const { register, send } = require('./src/client')

LOGGING = false

// SERVER
listen(msg => {
    console.log(msg)
})

// CLIENT
register('some_name')
send('Hello!')