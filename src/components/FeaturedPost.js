import { Button, CardActions, Typography } from '@material-ui/core'
import { Card, CardContent } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles ({
    title: {
        fontSize:40,
        fontFamily:"Montserrat"
    },
});

const FeaturedPost = () => {

    const classes=useStyles();

    return (
        <Card className={classes.cover}>
            <CardContent className={classes.textContainer}>
                <Typography className={classes.title}>Title of a longer featured blog post</Typography>
                <Typography variant="h5" className={classes.cover}>
                    Multiple lines of text that form the lede,informing new readers quickly and efficiently about what's most interesting in this post's contents.
                </Typography>
            </CardContent>

            <CardActions>  <Button className={classes.btn}>READ MORE...</Button> </CardActions>
               
            
        </Card>
    )
}

export default FeaturedPost
