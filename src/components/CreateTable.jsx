import { Box, styled, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddRow from './AddRow'

const StyledTableCell = styled(TableCell)`
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  border-collapse: collapse !important;
  padding: 7px 5px;
  text-align: left;
`;


const CreateTable = ({ text, data, setData }) => {

    const [rows, addRows] = useState([0]);
    return (
        <Box>
            <Typography mt={2} mb={2}>{text}</Typography>
            <Table sx={{ minWidth: '100%', border: '1px solid rgba(224, 224, 224, 1)' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell>KEY</StyledTableCell>
                        <StyledTableCell>VALUE</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row, index) => (
                            <AddRow 
                                addRows={addRows}
                                rowId={index} 
                                key={index}
                                data={data}
                                setData={setData}
                            />
                        ))
                    }
                </TableBody>
            </Table>
        </Box>
    )
}

export default CreateTable