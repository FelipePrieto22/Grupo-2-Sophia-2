import { IconButton, InputAdornment, TextField} from '@mui/material';
import * as React from 'react';

export default function buscarProfesion() {
  function estado(valor,valida) {
    let elemento = "";
    if (valor.keyCode == 13 || valida) {
        elemento = document.getElementById("profesion").value;  
        document.location.href="/respuestaGrafico?profession=" + elemento
    }
  }
  return (
      <TextField id="profesion"label="Escribe una profesion" sx={{ width: 300 }}
      /* variant="standard" */
      InputProps={{
        endAdornment: <InputAdornment position="end"> {
            <IconButton edge="end" onClick={()=> estado(event,true)}>
              <img src="/lupa.png" width="30"/>
            </IconButton> 
          }
      </InputAdornment>,
      }}
      autoHighlight
      onKeyPress={()=> estado(event)
      
      }/>

  );
}