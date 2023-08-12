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

const CompletedDeliveriesTable = ({ deliveryData }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Completed Deliveries Table">
        <TableHead>
          <TableRow>
            <TableCell>Delivery ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Recipient</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Items</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deliveryData.map((delivery) => (
            <TableRow key={delivery.id}>
              <TableCell>{delivery.id}</TableCell>
              <TableCell>{delivery.date}</TableCell>
              <TableCell>{delivery.recipient}</TableCell>
              <TableCell>{delivery.address}</TableCell>
              <TableCell>{delivery.items.join(", ")}</TableCell>
              <TableCell>${delivery.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompletedDeliveriesTable;
