import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';

import { DashboardNavbar } from '../components/login-navbar';
import FormHelperText from '@mui/material/FormHelperText';
import Card from '@mui/material/Card';
import styled from '@emotion/styled'

//select menu
import PropTypes from 'prop-types';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';



const Login = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Password is required')
    }),
    onSubmit: () => {
      router.push('/');
    }
  });

  const inputProps = {
    height: 300,
  };


  const styles = {

    bglogin: {
      backgroundImage: `url("https://media.istockphoto.com/photos/hipster-girl-practicing-yoga-pose-on-beach-picture-id513482896?b=1&k=20&m=513482896&s=170667a&w=0&h=dLmKiN4N6ZDS4NUGk5BMvj9nOcKh4Vzy5c1auNeIu_k=")`,
      backgroundRepeat  : 'no-repeat',
      backgroundSize: 'cover',
    },
    
    bgcard: {
      backgroundColor: 'rgb(242 242 242)',
    }
  
  }
  const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    600: '#0072E5',
    456: 'rgb(242 242 242)',
  };
  
  const grey = {
    10: '#ffff',
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  };
 
  const TextField = styled('input')(({ theme }) => 
    `width: 250px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.4;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[10] : grey[10]};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 8px;
    padding: 12px 12px;
    margin: 5px  0px;
    &:hover {
      background: ${theme.palette.mode === 'dark' ? null : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:focus {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }`,
  );
  

  //select menu
  const StyledButton = styled('button')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    min-height: calc(1.5em + 22px);
    min-width: 195px;
    border: none;
    margin: 0px -9px;
    padding: 10px;
    text-align: left;
    line-height: 1.5;
  
    &:hover {

    }
  
    &.${selectUnstyledClasses.focusVisible} {

    }
  
    &.${selectUnstyledClasses.expanded} {
      background: ${theme.palette.mode === 'dark' ? blue[456] : '#fff'};

      &::after {
        content: '▴';
      }
    }
  
    &::after {
      content: '▾';
      float: right;
    }
    `,
  );
  
  const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 5px;
    margin: -2px 15px;
    min-width: 270px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 0.35em;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    overflow: auto;
    outline: 0px;
    `,
  );
  
  const StyledOption = styled(OptionUnstyled)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `,
  );
  
  const StyledPopper = styled(PopperUnstyled)`
    z-index: 1;
  `;

  const selectmenu = ["BPI to Cash", "Inquire remittance status", "Inquire prepaid card balance"]
  
  function CustomSelect(props) {
    const components = {
      Root: StyledButton,
      Listbox: StyledListbox,
      Popper: StyledPopper,
      ...props.components,
    };
  
    return <SelectUnstyled {...props} components={components} />;
  }
  
  CustomSelect.propTypes = {
    /**
     * The components used for each slot inside the Select.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components: PropTypes.shape({
      Listbox: PropTypes.elementType,
      Popper: PropTypes.elementType,
      Root: PropTypes.elementType,
    }),
  };
  
  function renderValue(option) {
    if (option == null) {
      return <span>Inquiry and other services</span>;
    }
  
    return (
      <span>
        {option.label}
      </span>
    );
  }
  

  return (
    <>
      <Head>
        <title>Login | Material Kit</title>
      </Head>
      <DashboardNavbar />
      <div style={styles.bglogin}>
      <Card style={styles.bgcard} sx={{ maxWidth: 345, height: 445, my: 10, ml: 16, width: 300}}>
      <Box
        sx={{    
          display: 'flex',  
          minHeight: '100%',
          width: 320,
          height: 250,
          my: 1,
          
          
        }}
      >       
        <Container maxWidth="sm">
         
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 2 }}>
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Login to your account
              </Typography>
              
            </Box>
    

        <FormHelperText id="outlined-weight-helper-text">Username</FormHelperText>

            <TextField 
              placeholder="Username"  
              name="email"   
              type="email"   
            />

<FormHelperText id="outlined-weight-helper-text">Password</FormHelperText>

            <TextField
              type="password"
              placeholder="password"
            />
            <Box sx={{ py: 1 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                size="large"
                type="submit"
                variant="contained"
              >
                Login
              </Button>
            </Box>

            <Box sx={{pb: 2, pt: 2}} >  </Box>

            <Typography
              color="textSecondary"
              variant="body2"
            >  
              <NextLink
                href="/register"
              >
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  Register Now
                </Link>
              </NextLink>
            </Typography>

            <Typography
              color="textSecondary"
              variant="body2"
            >
              Forgot
              {' '}
              <NextLink
                href="/register"
              >
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                 Username
                </Link>
              </NextLink>
              {' '}
              or
              {' '}
              <NextLink
                href="/register"
              >
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                 Password
                </Link>
              </NextLink>
            </Typography>


            <Typography
              color="textSecondary"
              variant="body2"
            >  
              <NextLink
                href="/register"
              >
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  Lock My Access
                </Link>
              </NextLink>
            </Typography>
  <hr></hr>

  <CustomSelect renderValue={renderValue}>
  {selectmenu.map((selected) => (
    <StyledOption value={selected} key={selected}> {selected}</StyledOption> ))}
    </CustomSelect>

          </form>
        </Container>
      </Box>
      </Card>
      </div>
    </>
  );
};

export default Login;
