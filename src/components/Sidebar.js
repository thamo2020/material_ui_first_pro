import { Link, Typography } from '@material-ui/core';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import React from 'react';

const useStyles = makeStyles((theme) => ({
    sidebarAboutBox: {
      padding: theme.spacing(2),
    },
    sidebarSection: {
      marginTop: theme.spacing(3),
    },
  }));
    

export default function Sidebar  (props)  {
    const classes = useStyles();
    const {description,title,archives} = props;

    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom >
                    {title}
                </Typography>
                <Typography>{description}</Typography>
            </Paper>

            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Archives
            </Typography>
            {archives.map((archive) => (
                <Link
                display="block"
                variant="body1"
                href={archive.url}
                key={archive.title}
                >
                {archive.title}
                </Link>
      ))}
        </Grid>
    )
}


