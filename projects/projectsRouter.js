const express = require('express')
const projects = require('./projectsHelper')
const router = express.Router()

router.get('/', (req, res) =>
{
    projects.findProjects()
        .then(response =>
            {
                res.status(200).json(response)
            })
        .catch(error =>
            {
                console.log(error)
                res.status(500).json({ errorMessage: "Could not retrieve projects" })
            })
})

module.exports = router