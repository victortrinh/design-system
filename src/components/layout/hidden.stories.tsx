import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Hidden, HiddenProps } from './hidden';
import { createStyles, makeStyles, Paper, Theme } from '@material-ui/core';

export default {
  title: 'Components/Layout/Hidden',
  component: Hidden
} as Meta;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      flex: '1 0 auto',
      margin: theme.spacing(1)
    }
  })
);

const Template: Story<HiddenProps> = (args) => {
  const classes = useStyles();

  return (
    <div className={classes.root} {...args}>
      <div className={classes.container}>
        <Hidden xsDown>
          <Paper className={classes.paper}>xsDown</Paper>
        </Hidden>
        <Hidden smDown>
          <Paper className={classes.paper}>smDown</Paper>
        </Hidden>
        <Hidden mdDown>
          <Paper className={classes.paper}>mdDown</Paper>
        </Hidden>
        <Hidden lgDown>
          <Paper className={classes.paper}>lgDown</Paper>
        </Hidden>
        <Hidden xlDown>
          <Paper className={classes.paper}>xlDown</Paper>
        </Hidden>
      </div>
    </div>
  );
};

export const Main = Template.bind({});
