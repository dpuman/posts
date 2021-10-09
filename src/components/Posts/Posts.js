import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import PostDetails from '../PostDetails/PostDetails';
const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setPosts(data)
            });
    }, [])
    return (
        <div>
            <div >

                <Box style={{ 'margin': '10px 700px' }}
                    sx={{

                        bgcolor: 'success.main',
                        color: '#fff',
                        width: 200,
                        p: 1,
                        m: 1,
                        borderRadius: 1,
                        textAlign: 'center',
                    }}
                >
                    Total Posts: {posts.length}
                </Box>

                {posts.map(p => <PostDetails key={p.id} post={p} />)}



            </div>

        </div >
    );
};

export default Posts;