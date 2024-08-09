import React from 'react'
import { Box, styled, Typography } from '@mui/material'

const Image = styled('img')({
    width: '35%',
    height: 'auto',
    margin: 'auto',
    objectPosition: 'center 0%'
})

const ErrorScreen = () => {

    const error = 'https://global.discourse-cdn.com/getpostman/original/3X/4/6/46159a3e1a81d70958e7ade4ea8fbf96c4141028.png';

    return (
        <Box>
            <Typography mt={2} mb={2}>Response</Typography>
            <Box style={{ display: 'flex' }}>
                <Image src={error} alt='error' />
            </Box>
        </Box>
    )
}

export default ErrorScreen