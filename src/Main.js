import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { width } from 'window-size';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
  root: {
    flexGrow: 1,
    marginTop: 0,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }, appBar: {
    boxShadow: '0 0.8px 0.8px rgba(0,0,0,0.3)',
  },
  card2: {
    display: 'flex',
  },
  media: {
    height: 500,
  },
  details: {
    marginTop: 125,
    display: 'flex',
    flexDirection: 'column',
    width: 800,
  }, content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 600,
    height: 351,
  },
};

const theme = createMuiTheme({

});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  render() {
    const { classes } = this.props;

    const standardActions = (
      <Button
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider theme={theme}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://preview.ibb.co/gj0EXn/FotoJet.jpg"

              />
              <CardContent>
                <Typography variant="display1" component="h1" align="center">
                  Test Website
          </Typography>
                <Typography variant="subheading" component="p" align="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
              </CardContent>
            </Card>


            <Card className={classes.card2}>
              <div className={classes.details}>

                <CardContent className={classes.content}>
                  <Typography variant="display1" component="h1" align="center">
                    Test section 1
          </Typography>
                  <Typography variant="subheading" component="p" align="center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
          </Typography>
                </CardContent>

              </div>
              <CardMedia
                className={classes.cover}
                image="https://preview.ibb.co/gj0EXn/FotoJet.jpg"

              />
            </Card>
          </Grid>
        </Grid>

      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Main);