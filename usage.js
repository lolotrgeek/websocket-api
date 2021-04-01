require('./src/functions')
const { run, listen, reply, broadcast, send } = require('./src/server')
const { register, listen, send } = require('./src/client')

LOGGING = false

// SERVER
listen(msg => {
    console.log(msg)
})

// CLIENT
register({name: 'some_name'})
send('Hello!')