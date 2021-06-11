import { Button, CardActions, makeStyles, Typography } from '@material-ui/core'
import { Card, CardContent } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles ({
    title: {
        fontSize:40,
        fontFamily:"Montserrat"
    },

    cover: {
        backgroundImage:`url(https://images.unsplash.com/photo-1501236570302-906143a7c9f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80)`,
        backgroundPosition:"center",
        padding:"35px 25px"
    },

    btn:{},
});
//gutterBottom => gives small gap between two typography component
const FeaturedPost = () => {

    const classes=useStyles();

    return (
        <Card className={classes.cover}>
            <CardContent className={classes.textContainer}>
                <Typography className={classes.title} gutterBottom>Title of a longer featured blog post</Typography>
                <Typography variant="h5" className={classes.cover}>
                    Multiple lines of text that form the lede,informing new readers quickly and efficiently about what's most interesting in this post's contents.
                </Typography>
            </CardContent>

            <CardActions>  <Button className={classes.btn}>READ MORE...</Button> </CardActions>
               
            
        </Card>
    )
}

export default FeaturedPost
