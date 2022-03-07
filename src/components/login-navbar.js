import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip, Button } from '@mui/material';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';

// import './style/custom.scss';


const pages = [{
  href: '/',
  title: 'Home'
},
{
  href: '/customers',
  title: 'Contact Us'
},
{
  href: '/customers',
  title: 'Privacy Policy'
},
];

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  
}));


const styles = {

  menu: {
     color: "#938f8f",
  },
  parentmenu :{
    // border-right: "1px solid #938f8f",
    height: "24px",
  }

}


export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          width: '100%', 
      }}
        {...other} >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
<Button variant="contained" href="#contained-buttons" className="card" >
  Link
</Button>
     
   <Box sx={{ flexGrow: 1}} />

          <Box sx={{ display: { xs: 'none', md: 'flex'} }} style={styles.parentmenu}>
    {pages.map((page) => (
    <Button key={page.title} href={page.href} style={styles.menu} > {page.title}</Button> ))}
      </Box>
          <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1
            }}
            src="/static/images/avatars/avatar_1.png"
          >
            <UserCircleIcon fontSize="small" />
          </Avatar>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};

