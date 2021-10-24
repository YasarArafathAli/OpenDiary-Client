import React, { useContext}from 'react'
import { AuthContext } from '../context/auth';
import {
  Grid,
  Image,
  Transition
} from 'semantic-ui-react';
import PostCard from '../components/PostCard';
import { FETCH_POSTS_QUERY } from '../util/graphql';
import { useQuery } from '@apollo/react-hooks';


function Profile() {
    let { user } = useContext(AuthContext);
  const { loading, data: { getPosts: posts } } = useQuery(FETCH_POSTS_QUERY);

    console.log(user)
    console.log(posts)
    return (
        <div>
            <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Image
              src="https://semantic-ui.com/images/avatar2/large/matthew.png"
              size="small"
              float="right"
            />
                    </Grid.Column>
          <Grid.Column width={2}>
                        <h1>
                        {user ? user.username : "Login First"} <br />
           {user && user.email}<br />
                        </h1>   
           {user && user.college}<br />
                            
</Grid.Column>
          </Grid.Row>
          <Grid.Row>
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
          <Transition.Group>
                {posts && user &&
              posts.map((post) => (
                post.college === user.college &&
                post.username === user.username &&
                <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                  <PostCard post={post} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
      </Grid.Row>
            </Grid>
            
        </div>
    )
}

export default Profile
