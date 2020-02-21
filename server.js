const express = require('express')
const projectsRouter = require('./projects/projectsRouter')
const resourcesRouter = require('./resources/resourcesRouter')
const taskRouter = require('./tasks/tasksRouter')
const server = express()
server.use(express.json())
server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', taskRouter)

server.get('/', (req, res) =>
{
    res.status(200).json({message: 'Server is running!'})
})

module.exports = server