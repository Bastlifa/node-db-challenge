const express = require('express')
const resources = require('./resourcesHelper')
const router = express.Router()

router.get('/', (req, res) =>
{
    resources.findResources()
        .then(response =>
            {
                res.status(200).json(response)
            })
        .catch(error =>
            {
                // console.log(error)
                res.status(500).json({ errorMessage: "Could not retrieve resources" })
            })
})

router.get('/:id', (req, res) =>
{
    const id = req.params.id
    resources.findResourceById(id)
        .then(response =>
            {
                if(response)
                {
                    res.status(200).json(response)
                }
                else
                {
                    res.status(404).json({ errorMessage: "Bad resource id" })
                }
            })
        .catch(err =>
            {
                // console.log(err)
                res.status(500).json({ errorMessage: `Could not get resource` })
            })
})

router.post('/', (req, res) =>
{
    if(!req.body.name)
    {
        res.status(400).json({ errorMessage: "Please provide resource name" })
    }
    else
    {
        resources.addResource(req.body)
            .then(response =>
                {
                    res.status(201).json(response)
                })
            .catch(error =>
                {
                    res.status(500).json({ errorMessage: `Could not add resource` })
                })
    }
})



module.exports = router