import React from "react";
import { format, parseISO, isToday, isYesterday } from "date-fns";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Grid,
    TableFooter,
    IconButton,
} from "@mui/material";
import UserCell from "./userCell";
import completedDeliveries from "./completedDeliveries";
import { TablePagination } from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

// Date formatting
function formatDate(dateString) {
    const parsedDate = parseISO(dateString);

    if (isToday(parsedDate)) {
        return "Today";
    } else if (isYesterday(parsedDate)) {
        return "Yesterday";
    } else {
        return format(parsedDate, "dd MMMM, yyyy");
    }
}

const CompletedDeliveriesTable = ({ deliveryData }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0
            ? Math.max(
                  0,
                  (1 + page) * rowsPerPage - completedDeliveries().length
              )
            : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper sx={{ overflow: "hidden" }}>
            <Grid style={{ padding: "0.5em 1em" }}>
                <Typography variant="h5" style={{ fontWeight: 700 }}>
                    Completed Deliveries
                </Typography>
            </Grid>
            <TableContainer sx={{ maxHeight: "32em" }}>
                <Table aria-label="Completed Deliveries Table" stickyHeader>
                    <TableHead>
                        <TableRow style={{ fontWeight: 700 }}>
                            <TableCell width="45%">Name</TableCell>
                            <TableCell width="25%">Restaurant</TableCell>
                            <TableCell width="25%" align="right">Delivery Date</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? completedDeliveries().slice(
                                  page * rowsPerPage,
                                  page * rowsPerPage + rowsPerPage
                              )
                            : completedDeliveries()
                        ).map((delivery) => (
                            <TableRow key={delivery.id}>
                                <TableCell>
                                    <UserCell
                                        name={delivery.user.name}
                                        email={delivery.user.email}
                                    />
                                </TableCell>
                                <TableCell>{delivery.restaurant}</TableCell>
                                <TableCell align="right">{formatDate(delivery.deliveryDate)}</TableCell>
                                <TableCell>
                                    <IconButton>
                                        {" "}
                                        {/* onCLick function to be added */}
                                        <MoreVertIcon />
                                    </IconButton>
                                </TableCell>{" "}
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter sx={{ position: "sticky" }}>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[4]}
                                colSpan={3}
                                count={completedDeliveries().length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        "aria-label": "rows per page",
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default CompletedDeliveriesTable;
