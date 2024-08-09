import { TextareaAutosize, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

const textareaStylt = {
    width: '100%',
    padding: 10,
    background: `url(http://i.imgur.com/2cOaJ.png)`,
    backgrounfAttachment: 'local',
    backgroundRepeat: 'no-repeat',
    paddingLeft: 35,
    paddingTop: 10,
    borderColer: '#ccc',
}
const CreateJsonText = () => {

    const { setJsonText } = useContext(DataContext);

    const onValueChange = (e) => {
        setJsonText(e.target.value);
    }
    
    return (
        <>
            <Typography mt={2} mb={2}>JSON</Typography>
            <TextareaAutosize
                minRows={3}
                maxRows={5}
                style={textareaStylt}
                onChange={(e) => onValueChange(e)}
            />
        </>
    )
}

export default CreateJsonText