import React, { useContext}from 'react'
import { AuthContext } from '../context/auth';
import {
  Grid,
  Image,
} from 'semantic-ui-react';
function Profile() {
    let { user } = useContext(AuthContext);
    console.log(user)
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
            </Grid>
            
        </div>
    )
}

export default Profile
