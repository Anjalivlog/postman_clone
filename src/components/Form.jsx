import { Box, Button, MenuItem, Select, styled, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    display: flex;
    align-item: center;
    justify-content: space-between;
`;

const SelectOption = styled(Select)`
    width: 150px;
    height: 40px;
`;

const Text = styled(TextField)`
    width: 100%;
    background: #F6F6F6;
`;

const SubmitButton = styled(Button)`
    width: 100px;
    height: 40px;
    margin-left: 5px;
`;

const Form = ({ onSendClick }) => {
    
    const { formData, setFormData } = useContext(DataContext);

    const handleChange = (e) => {
        setFormData({ ...formData, type: e.target.value })

    }

    const onUrlChange = (e) => {
        setFormData({ ...formData, url: e.target.value })

    }
    return (
        <Container>
            <SelectOption
                value={formData.type}
                label="POST"
                onChange={(e) => handleChange(e)}
            >
                <MenuItem value={'POST'}>POST</MenuItem>
                <MenuItem value={'GET'}>GET</MenuItem>
            </SelectOption>
            <Text size='small'
                onChange={(e) => onUrlChange(e)}
            />
            <SubmitButton
                variant='contained'
                onClick={() => onSendClick()}
            >
                Send
            </SubmitButton>
        </Container>
    )
}

export default Form