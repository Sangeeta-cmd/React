import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';

export default function MaterialUI(){
    let handleClick = ()=>{
        console.log("Btn was clicked!")
    }
      
    return(
    <>
      <h1>Material UI</h1>
      <Button variant="contained"onClick={handleClick}  color="success">Click me!</Button>
      <Button variant="outlined" color="error" startIcon={<DeleteIcon />} >Click Me2!</Button>
      <br />
      <Alert severity="warning">Delete button is given!</Alert>
    </>
    )
}