import React, { useState } from 'react';
import { connect } from 'react-redux';
import { doAddEmail } from '../../actions';
import { Button, TextField } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import styles from './form.module.css';
import { getError } from '../../selectors';
import { FirebaseContext } from '../Firebase';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

const useStyles = makeStyles({
    input: {
        color: "white"
    },
});

const EmailForm = ({ title, onAddEmail, error }) => {

    const [text, setText] = useState(''); //non-critical state
    const classes = useStyles();

    const onChange = (event) => {
        setText(event.target.value);
    }

    const onSignUp = firebase => {
        return (event) => {
            event.preventDefault();
            firebase.addSubscriber(text);
            onAddEmail(text);
            setText('');
        }
    }

    return (
        <FirebaseContext.Consumer>
            {(firebase) =>{
                return <div className={styles.container}>
                    <div className={styles.content}>
                        <form className={styles.form} onSubmit={onSignUp(firebase)}>
                            <label><h1 className={styles.text}>{title}</h1></label>
                            <TextField className={styles.input} placeholder="Enter your email..." value={text} onChange={onChange} inputProps={{ className: classes.input }} error={error} />
                            <SubmitButton />
                        </form>
                    </div>
                </div>}
            }
        </FirebaseContext.Consumer>

    )
}

const SubmitButton = () => {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" disableElevation type="submit" >
                Sign Up!
            </Button>
        </ThemeProvider>
    )
}

const mapDispatchToProps = dispatch => ({
    onAddEmail: email => dispatch(doAddEmail(email))
});

const mapStateToProps = state => ({
    error: getError(state)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailForm);
