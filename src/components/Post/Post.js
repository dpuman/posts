import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setPost(data)
            });
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setComments(data)
            });
    }, [])


    return (
        <div>

            <div>
                <Box sx={{ boxShadow: 1, my: 5, mx: 'auto', minWidth: 275, maxWidth: 800 }}>
                    <Card variant="outlined">
                        <React.Fragment>
                            <CardContent>

                                <Typography style={{ color: "#00adb5" }} variant="h5" component="div">
                                    {post.title}
                                </Typography>
                                <br />

                                <Typography style={{ color: "gray" }} variant="body2">
                                    {post.body}

                                </Typography>

                            </CardContent>

                        </React.Fragment>

                        <Typography style={{ 'fontSize': '13px' }} sx={{ ml: 2, mb: 1.5 }} color="text.secondary">
                            Comments
                        </Typography>


                        {comments.map(com => <Comment comments={com} />)}


                    </Card>
                </Box>
            </div >
        </div>
    );
};

export default Post;