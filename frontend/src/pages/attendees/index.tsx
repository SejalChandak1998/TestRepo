import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useEffect } from "react";
import { getAllClients } from "../../redux/clients/thunk";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 170 },
  { id: "mobile", label: "Mobile Number", minWidth: 170 },
];

function createData(name: string, email: string, mobile: string) {
  return { name, email, mobile };
}

export function Attendees() {
  const dispatch = useAppDispatch();

  const { clientList } = useAppSelector((state) => state.clients);
  const rows = [
    createData(clientList[0].name, clientList[0].email, clientList[0].mobile),
  ];

  useEffect(() => {
    dispatch(getAllClients());
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow key={row.name}>
              {columns.map((column) => (
                <TableCell key={column.id}>{row[column.id]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
