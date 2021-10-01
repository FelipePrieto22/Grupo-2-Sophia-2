import * as React from 'react';
import TextField from '@mui/material/TextField';
import {IconButton, InputAdornment} from "@mui/material";
import Image from "next/image";


export default function buscador(){
    function respuesta(valor,click) {
        let elemento = "";
        if (valor.keyCode == 13 || click) { /* al presionar enter o click */
          elemento = document.getElementById("buscar").value;  /* obtengo para la id = "buscar" el valor que posee */
          localStorage.setItem("buscar",elemento);
          document.location.href="/respuesta"
        }
    }
  return (
    <div className="menuBusqueda">
      <TextField variant="standard"
                 id="buscar" 
                 onKeyPress={()=> respuesta(event)} 
                 className="busqueda" 
                 label="Escribe el pais que deseas buscar"
                 InputProps={{endAdornment: (
                      <InputAdornment position="end">
                        <IconButton aria-label="buscar" onClick={()=> respuesta(event,true)}>
                        <Image
                            src="/lupa.png"
                            height={20} 
                            width={20} 
                            alt="ojo"/>
                        </IconButton>
                      </InputAdornment>
                    )
                  }}/>    
        
    </div>
  )
}
