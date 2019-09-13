const express = require('express')
const projects = require('./projectsHelper')
const router = express.Router()

router.get('/', (req, res) =>
{
    projects.find()
        .then(response =>
            {
                res.status(200).json(response)
            })
        .catch(error =>
            {
                res.status(500).json({ errorMessage: "Could not retrieve projects" })
            })
})