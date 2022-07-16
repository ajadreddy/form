import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

//import components
import SignIn from './SignIn';
import SignUp from "./SignUp"

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }} >
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 },backgroundColor:'#383434' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor:'#383434',color:'white' }}>
          <Tabs value={value} onChange={handleChange}
          // inkBarStyle={{background: 'blue'}} 
          TabIndicatorProps={{style: {background:'white'}}}
          >
            <Tab label="Sign in" 
            style={{color:'white'}}
            />
            <Tab label="Sign up" 
            style={{color:'white'}}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}  >
          <SignIn />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignUp />
        </TabPanel>
      </Paper>
    </Container>
  );
}