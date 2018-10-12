import * as React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
    Avatar,
    Button,
    CssBaseline,
    createStyles,
    FormControl,
    FormControlLabel,
    Checkbox,
    Input,
    InputLabel,
    Paper,
    Theme,
    Typography
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';
import withStyles from '@material-ui/core/styles/withStyles';

// TODO: Look at theme object
const styles = (theme: Theme) => createStyles({
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing.unit,
  },
  form: {
    marginTop: theme.spacing.unit,
    width: '100%', // Fix IE11 issue.
  },
  layout: {
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    width: 'auto',
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 400
    }
  },
  paper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

function SignIn(props: any) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography variant="headline">Sign in</Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Router>
              <div>
                <Link to="/signIn">
                  <Button
                    type="submit"
                    fullWidth
                    variant="raised"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign in
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    type="submit"
                    fullWidth
                    variant="raised"
                    color="default"
                    className={classes.submit}
                  >
                    Register
                  </Button>
                </Link>
              </div>
            </Router>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  );
}

export default withStyles(styles)(SignIn);
