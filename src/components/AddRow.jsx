import { Checkbox, styled, TableCell, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'

const StyledTableCell = styled(TableCell)`
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  border-collapse: collapse;
  padding: 7px 5px;
`;

const CheckContainer = styled(Checkbox)`
  padding: 2px 5px;
`;

const InputContainer = styled(TextField)`
  width: 100%;
  text-align: left;
`;


const AddRow = ({ addRows, rowId, data, setData }) => {
    const [checkCheckbox, setCheckCheckbox] = useState(false);

    const handleChange = (e) => {
        let result = data.filter(entry => entry.id === Number(e.target.name))[0];
        
        if (!checkCheckbox) {
            setCheckCheckbox(true);
            addRows(oldArr => [...oldArr, rowId]);
            result = { ...result, id: rowId, check: true }
        } else {
            setCheckCheckbox(false);
            result = { ...result, id: rowId, check: false }
        }
        
        let index = data.findIndex((value) => value.id === Number(e.target.name));
        if (index === -1) {
            setData(oldArr => [...oldArr, result]);
        } else {
            const newArray = Object.assign([...data], {
                [index]: result
            });
            setData(newArray)    
        }
    }

    const onTextChange = (e) => {
        let result = data.filter(entry => entry.id === rowId)[0];
        result = { ...result, id: rowId, [e.target.name]: e.target.value }

        let index = data.findIndex((value) => value.id === rowId);

        if (index === -1) {
            setData(oldArr => [...oldArr, result]);
        } else {
            const newArray = Object.assign([...data], {
                [index]: result
            });
            setData(newArray)
        }
        console.log(data);
    }

    return (
        <TableRow>
            <StyledTableCell>
                <CheckContainer
                    checked={checkCheckbox}
                    size='large'
                    onChange={(e) => handleChange(e)}
                    name={rowId}
                />
            </StyledTableCell>
            <StyledTableCell>
                <InputContainer
                    inputProps={{ style: { height: 30, padding: '0 50px', textAlign: 'left' } }}
                    onChange={(e) => onTextChange(e)}
                    name='key'
                />
            </StyledTableCell>
            <StyledTableCell>
                <InputContainer
                    inputProps={{ style: { height: 30, padding: '0 50px' } }}
                    onChange={(e) => onTextChange(e)}
                    name='value'
                />
            </StyledTableCell>
        </TableRow>
    )
}

export default AddRow