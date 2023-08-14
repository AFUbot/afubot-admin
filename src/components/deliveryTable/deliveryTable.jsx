import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import UserCell from "./userCell";
import completedDeliveries from "./completedDeliveries";

const CompletedDeliveriesTable = ({ deliveryData }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Completed Deliveries Table">
        <TableHead>
          <TableRow>
            <TableCell width="45%">Name</TableCell>
            <TableCell>Restaurant</TableCell>
            <TableCell>Delivery Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {completedDeliveries().map((delivery) => (
            <TableRow key={delivery.id}>
              <TableCell><UserCell name={delivery.user.name} email={delivery.user.email} /></TableCell>
              <TableCell>{delivery.restaurant}</TableCell>
              <TableCell>{delivery.deliveryDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompletedDeliveriesTable;
