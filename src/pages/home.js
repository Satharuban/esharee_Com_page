import  React from 'react'
import {Grid} from '@material-ui/core/'
import Navbar from '../components/navbar/navbar'
import  Leaderboard from '../components/leadboard'
import  PostCard from '../components/CreatePost/postCard'
import  AddCard from '../components/CreatePost/addCard'

export default function Home() {
    return(
        <div 
        // style={{backgroundColor:"#DAE0E6",height:"100%"}}
        >


<Navbar/>   
<Grid container>
<Grid container direction='row'>
<Grid item xs={false} sm={false} md={1} lg={1} xl={1} >

</Grid>

<Grid item xs={12} sm={12} md={7} lg={7} xl={7} >
<AddCard/>
<PostCard/>
</Grid>
<Grid item xs={12} sm={12} md={3} lg={3} xl={3}  >
    <br/>
<div style={{borderRadius:10,margin:"10px 5px 5px 5px",position:'fixed'}}><Leaderboard/></div>
</Grid>
<Grid item xs={false} sm={false} md={1} lg={1} xl={1} >

</Grid>
</Grid>
</Grid>
 </div>
    );
}