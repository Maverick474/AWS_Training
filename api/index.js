const express = require('express')
const { fetchTasks, createTasks, updateTasks, deleteTasks } = require('./task')
const cors = require('cors')
const serverless = require('serverless-http')
const PORT = 8000

const app = express()

app.use(express.json())
if (process.env.DEVELOPMENT) {
    app.use(cors())
}

app.get('/', async (req, res)=> {
    try{
        const task = await fetchTasks()
        res.send(task.Items)
    }
    catch(err) {
        res.status(400).send({err: "Error fetching"})
    }
})

app.post('/task', async (req, res)=> {
    try {
        const create = req.body
        const response = await createTasks(create)

        res.send(response)

    }

    catch(err) {
        res.status(400).send({err: "Error creating"})
    }
})

app.put('/task', async(req, res)=> {
    try {
        const update = req.body
        const response = await updateTasks(update)
        res.send(response)
    }

    catch(err) {
        res.status(400).send({err: "error updating tasks"})
    }
})

app.delete('/task/:id', async (req, res) => {
    try {
        const {id} = req.params
        const response = await deleteTasks(id)
        res.send(response)
    }

    catch(err) {
        res.status(400).send({err: "Error deleting"})
    }
})

if (process.env.DEVELOPMENT) {
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  }

export const handler = serverless(app)