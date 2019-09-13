const express = require('express')
const projects = require('./projectsHelper')
const router = express.Router()

router.get('/', (req, res) =>
{
    projects.findProjects()
        .then(response =>
            {
                res.status(200).json(response.map(proj => proj.completed === 0 ? {...proj, completed: false} : {...proj, completed: true}))
            })
        .catch(error =>
            {
                // console.log(error)
                res.status(500).json({ errorMessage: "Could not retrieve projects" })
            })
})

router.get('/:id', (req, res) =>
{
    const id = req.params.id
    projects.findProjectById(id)
        .then(response =>
            {
                if(response)
                {
                    responseTF = response.completed === 0 ? {...response, completed: false} :{...response, completed: true}
                    res.status(200).json(responseTF)
                }
                else
                {
                    res.status(404).json({ errorMessage: "Bad project id" })
                }
            })
        .catch(err =>
            {
                console.log(err)
                res.status(500).json({ errorMessage: `Could not get Project` })
            })
})

router.post('/', (req, res) =>
{
    if(!req.body.name)
    {
        res.status(400).json({ errorMessage: "Please provide project name" })
    }
    else
    {
        projects.addProject(req.body)
            .then(response =>
                {
                    responseTF = response.completed === 0 ? {...response, completed: false} :{...response, completed: true}
                    res.status(201).json(responseTF)
                })
            .catch(error =>
                {
                    res.status(500).json({ errorMessage: `Could not add project` })
                })
    }
})



module.exports = router