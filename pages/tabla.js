import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {makeStyles} from '@material-ui/styles' ;

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
});

function createData(nombre, rank, profesion, edad, menciones, detail ) {
  return { nombre, rank, profesion, edad, menciones, detail };
}

const rows = [
  createData(
    'María de las Mercedes',
    1,
    'Profesora',
    24,
    43,
    '    2015:   '
  ),
  createData(
    'Amelia',
    2,
    'Enfermera',
    37,
    24,
    ''
  ),
  createData(
    'Esperanza',
    3,
    'Ingeniera Civil Informática',
    24,
    16,
    ''
  ),
  createData(
    'Angelica',
    4,
    'Gerente',
    67,
    6,
    ''
  ),
  createData(
    'Rosa',
    5,
    'Diputada',
    49,
    4,
    ' '
  )
];

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <TableRow {...otherProps}>
        <TableCell padding="checkbox">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell padding="checkbox" />
          {expandComponent}
        </TableRow>
      )}
    </>
  );
};

export default function Tabla() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" />
            <TableCell>Nombre    </TableCell>
            <TableCell align="right">Ranking</TableCell>
            <TableCell align="right">Profesion&nbsp;</TableCell>
            <TableCell align="right">Edad&nbsp;</TableCell>
            <TableCell align="right">Menciones&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map(row => (
            <React.Fragment key={row.name}>
              <TableRow>
                <TableCell padding="checkbox">
                  <IconButton>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            </React.Fragment>
          ))} */}
          {rows.map(row => (
            <ExpandableTableRow
              key={row.nombre}
              expandComponent={<TableCell colSpan="5">{row.detail}</TableCell>}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.rank}</TableCell>
              <TableCell align="right">{row.profesion}</TableCell>
              <TableCell align="right">{row.edad}</TableCell>
              <TableCell align="right">{row.menciones}</TableCell>
            </ExpandableTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
