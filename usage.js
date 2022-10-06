const { server, client } = require('./main')

// SERVER
server.listen(msg => {
    console.log(msg)
})

// CLIENT
client.register('some_name')
client.send('Hello!')