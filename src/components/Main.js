import { Divider, Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import Markdown from 'markdown-to-jsx'
import React from 'react'
import { posts } from '../data/data'

const Main = ({title}) => {
    return (
       <Grid item xs={12} md={8}>
           <Typography variant="h6" gutterBottom>
               {title}
           </Typography>
           <Divider />
           {posts.map((post)=> (
               <Markdown key={post.body}>{post.body}</Markdown>  //if you use real api ,then you can replace this from that real api
           ))}
       </Grid>
    )
}

export default Main
