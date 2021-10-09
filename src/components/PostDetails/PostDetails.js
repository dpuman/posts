import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


const PostDetails = (props) => {
    const { title, body, id } = props.post
    return (
        <div>
            <Box sx={{ boxShadow: 1, my: 5, mx: 'auto', minWidth: 275, maxWidth: 800 }}>
                <Card variant="outlined">
                    <React.Fragment>
                        <CardContent>


                            <Typography style={{ color: "#00adb5" }} variant="h5" component="div">
                                {title}
                            </Typography>
                            <br />

                            <Typography style={{ color: "gray" }} variant="body2">
                                {body}
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Link to={`/post-details/${id}`} style={{ textDecoration: 'none' }} >

                                <Button variant="contained" style={{ backgroundColor: '#00adb5', }} size="small">Details</Button>

                            </Link>
                        </CardActions>
                    </React.Fragment>
                </Card>
            </Box>
        </div >
    );
};

export default PostDetails;