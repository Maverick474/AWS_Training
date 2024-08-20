import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddTaskForm = () => {
    const [newTask, setTask] = useState('')
    const addNewTask = () => {
        console.log('New task added')
    }
  return (
    <div>
        <Typography align='center' paddingBottom={2} paddingTop={2} variant='h2'>My Task List</Typography>
       <div className='addTaskForm'>
        <TextField size='small' label="Task" variant="outlined" value={newTask} onChange={(e)=> setTask(e.target.value)} />
        <Button disabled={!newTask.length} variant='outlined' onClick={addNewTask}> <AddIcon /> </Button>
       </div>
    </div>
  )
}

export default AddTaskForm
