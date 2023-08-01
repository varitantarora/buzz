import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from 'state';

import PostWidget from './PostWidget';

const PostsWidget = ({ userId, isProfile = false }) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const token = useSelector((state) => state.token);

    useEffect(() => {
        if (isProfile) {
            const getUserPosts = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${userId}/posts`, {
                    method: 'GET',
                    headers: { Authorization: `Bearer ${token}` },
                });
                const data = await response.json();
                console.log('data: ', data);
                dispatch(setPosts({ posts: data }));
            };

            getUserPosts();
        } else {
            const getPosts = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/posts`, {
                    method: 'GET',
                    headers: { Authorization: `Bearer ${token}` },
                });
                const data = await response.json();
                console.log('data:1 ', data);
                dispatch(setPosts({ posts: data }));
            };

            getPosts();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {posts.map(
                ({
                    _id,
                    userId,
                    firstName,
                    lastName,
                    description,
                    location,
                    picturePath,
                    userPicturePath,
                    likes,
                    comments,
                }) => (
                    <PostWidget
                        key={_id}
                        postId={_id}
                        postUserId={userId}
                        name={`${firstName} ${lastName}`}
                        description={description}
                        location={location}
                        picturePath={picturePath}
                        userPicturePath={userPicturePath}
                        likes={likes}
                        comments={comments}
                    />
                ),
            )}
        </>
    );
};

export default PostsWidget;
