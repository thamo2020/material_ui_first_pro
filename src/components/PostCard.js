import { makeStyles, Typography } from '@material-ui/core'
import { Card, CardActionArea, Grid } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({});



const PostCard = ({ post }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <Typography component="h2" variant="h5">
                            {post.title}
                        </Typography>
                        <Typography  variant="subtitle1" color="textSecondary">
                            {post.date}
                        </Typography>
                        <Typography  variant="subtitle1" paragraph>
                            {post.description}
                        </Typography>
                        <Typography  variant="subtitle1" style={{color:"skyblue"}}>
                            Continue Reading....
                        </Typography>
                    </div>

                    
                </Card>
            </CardActionArea>
        </Grid>
    )
}

export default PostCard
