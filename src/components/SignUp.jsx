import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = () => {

    const [getOTP, setOTP] = useState(false);
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');

    let flag = 0;
    const onClick = () => {
        if (flag == 0) {
            if (phone) {
                console.log(phone, "true");
                setOTP(true)
                flag = 1
            }
            else {
                console.log(phone, "false");
                setOTP(false)
            }
        }
        else {
            if (otp == '0000') {
                alert("true")
            }
        }
    }

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                className="mobileNum"
                                name="mobileNumber"
                                variant="outlined"
                                required
                                fullWidth
                                id="mobileNumber"
                                label="Mobile Number"
                                autoFocus
                                onChange={(e) => { setPhone(e.target.value) }}
                            />
                        </Grid>
                        {
                            getOTP ?
                                <Grid item xs={12} >
                                    <TextField
                                        name="otp"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="otp"
                                        label="Enter OTP"
                                        onChange={(e) => { setOtp(e.target.value) }}
                                    />
                                </Grid> : null
                        }

                    </Grid>

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onClick}
                    >
                        Get OTP
                    </Button>

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/SignIn" variant="body2">
                                Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Redirect to="/home" />

        </Container>
    );
}

export default SignUp