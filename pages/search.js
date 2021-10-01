import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button,IconButton, InputAdornment, MenuItem} from "@mui/material";
import Menu from '@mui/material/Menu';
import Image from "next/image";

export default function Search() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="menuBusqueda">
      <Button
        id="boton" className="boton"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="standar" > {/* generar un boton <Button> lo de dentro son propiedades tanto visuales y el onClick detecta si el boton fue clickeado*/}
        <b>Filtros</b>
      </Button>
      <Menu id="menu" anchorEl={anchorEl} open={open} onClose={handleClose}> {/* genera un menu el cual es clickeable y despliega opciones */}
        <MenuItem onClick={handleClose}> Año </MenuItem>
        <MenuItem onClick={()=>checkPais()}> pais </MenuItem>
      </Menu>

      <TextField variant="standard"
                 id="buscar" 
                 onKeyPress={()=> respuesta(event)} 
                 className="busqueda" 
                 label="Escribe el pais que deseas buscar"
                 InputProps={{endAdornment: (
                      <InputAdornment position="end">
                        <IconButton aria-label="buscar"  href="/respuesta" >
                        <Image
                            src="/lupa.png"
                            height={20} 
                            width={20} 
                            alt="ojo"/>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
       /> {/* barra de busqueda */}
    </div>
  );
}
function respuesta(valor,click) {
  let elemento = "";
  if (valor.keyCode == 13 || click) { /* al presionar enter  obtengo el valor del cuadro de texto */
    elemento = document.getElementById("buscar").value;  /* obtengo para la id = "buscar" el valor que posee */
    alert(elemento)
  }
  
}

function checkPais() {
  alert(":D")
}
