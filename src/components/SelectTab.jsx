import { Box, styled, Tab, Tabs } from '@mui/material'
import React, { useContext, useState } from 'react'
import CreateTable from './CreateTable';
import CreateJsonText from './CreateJsonText';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    margin-top: 20px;
`;

const TabContainer = styled(Tab)({
    textTransform: 'none', // Correct syntax for CSS properties
});

const SelectTab = () => {

    const [value, setValue] = useState(0);

    const { paramData, setParamData, headerData, setHeaderData } = useContext(DataContext);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Container>
            <Tabs value={value} onChange={handleChange}
                TabIndicatorProps={{ sx: { backgroundColor: '#F26B3A', height: 4, bottom: 2 } }}
                textColor='none'>
                <TabContainer label="Params" />
                <TabContainer label="Headers" />
                <TabContainer label="Body" />
            </Tabs>
            <Box
                role="tabpanel"
                hidden={value !== 0}
                id={`simple-tabpanel-${0}`}
                aria-labelledby={`simple-tab-${0}`}
            >
                <CreateTable text={'Query Params'} data={paramData} setData={setParamData} />
            </Box>
            <Box
                role="tabpanel"
                hidden={value !== 1}
                id={`simple-tabpanel-${1}`}
                aria-labelledby={`simple-tab-${1}`}
            >
                <CreateTable text={'Headers'} data={headerData} setData={setHeaderData} />
            </Box>
            <Box
                role="tabpanel"
                hidden={value !== 2}
                id={`simple-tabpanel-${2}`}
                aria-labelledby={`simple-tab-${2}`}
            >
                <CreateJsonText />
            </Box>
        </Container>
    )
}

export default SelectTab