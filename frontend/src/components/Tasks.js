import { Checkbox, Typography, Button } from '@mui/material';
import UpdateTaskForm from '../components/UpdateTaskForm'
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import clsx from 'clsx';
import axios from 'axios'
import { API_URL } from '../utils';


const Tasks = ({task, fetchTasks}) => {
    const {id, name, completed} = task;
    const [isComplete, setIsComplete] = useState(completed)
    const [isDiaglogue, setIsDiaglogue] = useState(false)

    const handleUpdateTaskCompletion = async () => {
      try {
        await axios.put(API_URL, {
          id, 
          name, 
          completed: !isComplete,
        })
        setIsComplete((prev)=> !prev)
      }
      catch(err) {}
  }  

    const handleDeleteTask = async() => {
        await axios.delete(`${API_URL}/${task.id}`)
        await fetchTasks()
    }
  return (
    <div className='task'>
      <div className={clsx('flex', {
        done: isComplete
      })}>
        <Checkbox checked={isComplete} onChange={handleUpdateTaskCompletion} />
        <Typography variant='h4'>{name}</Typography>
      </div>

      <div className='taskButtons'>
        <Button variant='contained' onClick={()=> setIsDiaglogue(true)}> <EditIcon /> </Button>
        <Button color='error' variant='contained' onClick={handleDeleteTask}> <DeleteIcon /> </Button>
      </div>
      <UpdateTaskForm fetchTasks={fetchTasks} isDiaglogue={isDiaglogue} setIsDiaglogue={setIsDiaglogue} task={task} />
    </div>
  )
}

export default Tasks
