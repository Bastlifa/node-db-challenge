const express = require('express')
const tasks = require('./tasksHelper')
const router = express.Router()

router.get('/', (req, res) =>
{
    tasks.findTasks()
        .then(response =>
            {
                res.status(200).json(response.map(task => task.completed === 0 ? {...task, completed: false} : {...task, completed: true}))
            })
        .catch(error =>
            {
                // console.log(error)
                res.status(500).json({ errorMessage: "Could not retrieve tasks" })
            })
})

router.get('/:id', (req, res) =>
{
    const id = req.params.id
    tasks.findTaskById(id)
        .then(response =>
            {
                if(response)
                {
                    responseTF = response.completed === 0 ? {...response, completed: false} :{...response, completed: true}
                    res.status(200).json(responseTF)
                }
                else
                {
                    res.status(404).json({ errorMessage: "Bad Task id" })
                }
            })
        .catch(err =>
            {
                console.log(err)
                res.status(500).json({ errorMessage: `Could not get Task` })
            })
})

router.post('/', (req, res) =>
{
    if(!req.body.description || !req.body.project_id)
    {
        res.status(400).json({ errorMessage: "Please provide Task description and project id" })
    }
    else
    {
        tasks.addTask(req.body)
            .then(response =>
                {
                    responseTF = response.completed === 0 ? {...response, completed: false} :{...response, completed: true}
                    res.status(201).json(responseTF)
                })
            .catch(error =>
                {
                    res.status(500).json({ errorMessage: `Could not add Task` })
                })
    }
})



module.exports = router