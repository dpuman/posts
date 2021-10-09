import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Comment = (props) => {
    const { email, body, id } = props.comments
    return (
        <div>
            <Box sx={{ boxShadow: 2, ml: 2, mb: -1, minWidth: 275, maxWidth: 800 }}>
                <Card variant="outlined">
                    <React.Fragment>
                        <CardContent>
                            <img style={{ 'float': 'left', 'margin': '0 10px 10px 0', 'borderRadius': '35px' }} sx={{ m: 10 }} src={`https://randomuser.me/api/portraits/med/men/${id}.jpg`} alt="" />


                            <Typography style={{ color: "tomato" }} variant="p" component="div">
                                {email}
                            </Typography>
                            <br />

                            <Typography style={{ color: "gray" }} variant="body2">
                                {body}
                            </Typography>

                        </CardContent>

                    </React.Fragment>
                </Card>
            </Box>
        </div>
    );
};

export default Comment;