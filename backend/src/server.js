import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

// tive que instalar essa lib => https://github.com/fastify/fastify-cors
import cors from '@fastify/cors'

const server = fastify()

// aqui eu configuro ela para que eu possa usar no localhost, talvez ao realizar o deploy, eu possa tirar
await server.register(cors, {
    origin : '*'
})



const database = new DatabaseMemory()

server.get('/exercise', () => {

    const names = database.list()

    return names

})



server.post('/exercise',(request, reply) => {

    const { name } = request.body

    database.create({name})
    
    return reply.status(201).send()
})



server.listen({
    port: 3333
})