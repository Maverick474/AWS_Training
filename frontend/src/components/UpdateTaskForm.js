import { Dialog, DialogTitle, TextField, Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import React, { useState } from 'react'

const UpdateTaskForm = ({isDiaglogue, setIsDiaglogue, task, fetchTasks}) => {
  const { id, completed } = task;
  const [taskName, setTaskName] = useState("");

  const handleUpdateTaskName = async () => {
    try {
      await axios.put(API_URL, {
        id,
        name: taskName,
        completed,
      });

      await fetchTasks();

      setTaskName("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Dialog open={isDiaglogue}>
        <DialogTitle>Edit Task</DialogTitle>
        <div className='dialog'>
            <TextField size='small' variant='outlined' label='task' onChange={(e)=> setTaskName(e.target.value)} />
            <Button variant='contained' onClick={async()=>{
              await handleUpdateTaskName;
              setIsDiaglogue(false)
            }}>
                <CheckIcon />
            </Button>
        </div>
    </Dialog>
  )
}

export default UpdateTaskForm
