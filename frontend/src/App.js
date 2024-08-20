import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AddTaskForm from './components/AddTaskForm';
import Tasks from './components/Tasks';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { API_URL } from './utils';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const App = ()=> {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(API_URL);

      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AddTaskForm />
      {tasks.map((task) => (
        <Tasks task={task} key={task.id} fetchTasks={fetchTasks} />
      ))}
    </ThemeProvider>
  );
}

export default App;