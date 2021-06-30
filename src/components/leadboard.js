import React from 'react'
import {Paper,Typography,Grid,Divider,Chip,Avatar} from '@material-ui/core'
var x=1;
const tasks=[
{
    name:'1',
    hostname:'Merry',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3zdKJN8lwjP2vTOiOIXnzQJnLQMygEe1LW5qLpWwDvhaI-re3XZNGbNJQ7KsDc3j-4E&usqp=CAU",
    percentage:"Level 80",
    color:"primary",
    date:"123378"
},
{
    name:'2',
    hostname:'John',
    image:"https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg",
    percentage:"Level 60",
    color:"secondary",
    date:"110024"
},{
    name:'3',
    hostname:'Charls',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1OiNaSSrnNfaI6dt9z6OBmf3Vpx3xwLGZpCn8AT6dzQjgL9oHa4a1EWJ8Yv1R_vtyoV0&usqp=CAU",
    percentage:"Level 55",
    color:"primary",
    date:"99999"
},{
    name:'4',
    hostname:'devid',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAq9SteMgB8dWlF-WpbnrlI0EnZFG4mSsuRKegfJbOkkVvP0RMLYD316PxlB0TN0q450&usqp=CAU",
    percentage:"Level 20",
    color:"secondary",
    date:"85523"
},
];


function Task (){
return(
<Paper elevation={0} style={{borderRadius:8}}>

    <Typography variant="caption" display="block" gutterBottom style={{fontSize:20,fontWeight:600, padding:20, background: `url('https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500') no-repeat center center` ,height:"100%",width:'auto',color:'white'}}>
                    Top Community Posts
    </Typography>

<Grid container direction="coloumn" style={{borderRadius:10,padding:"10px 5px 0 5px"}}>
        <Grid container direction="row">
            <Grid item xl={3} lg={3} sm={3} xs={3}>
                <Typography variant="caption" display="block" gutterBottom style={{fontSize:12,fontWeight:600, paddingLeft:20}}>
                        Rank
                </Typography>
            </Grid>
            <Grid item xl={9} lg={9} sm={9} xs={9}>
                <Typography variant="caption" display="block" gutterBottom style={{fontSize:12,fontWeight:600, paddingLeft:20}}>
                        Community Posts
                </Typography>
            </Grid>
            {/* <Grid item xl={3} lg={3} sm={3} xs={3}>
            <Typography variant="caption" display="block" gutterBottom style={{fontSize:12,fontWeight:600, paddingLeft:20}}>
                        Level
                </Typography>
            </Grid>
             <Grid item xl={3} lg={3} sm={3} xs={3}>
                <Typography variant="caption" display="block" gutterBottom style={{fontSize:12,fontWeight:600, paddingLeft:20}}>
                        Score
                </Typography>
            </Grid>
             */}
        </Grid>


        {tasks.map((t) => (
        <Grid container direction="row" style={{borderRadius:10,boxShadow:"1px 1px 10px 5px #dedcdc ",margin:"10px 5px 0 5px",padding:10}} spacing={0}>
{/*             
            <Grid item xl={2} lg={2} sm={2} xs={2}>
                <Typography variant="caption" display="block" gutterBottom style={{fontSize:13,fontWeight:400, paddingLeft:20}}>
                       {t.name}
                </Typography>
            </Grid>
            <Grid item xl={4} lg={4} sm={4} xs={4}>
                <Chip  label={t.hostname} avatar={<Avatar src={t.image} />} />
            </Grid>
            <Grid item xl={3} lg={3} sm={3} xs={3}>
            <Typography variant="caption" display="block" gutterBottom style={{fontSize:13,fontWeight:400, paddingLeft:20}}>
                    {t.percentage}
                </Typography>
            </Grid>
             <Grid item xl={3} lg={3} sm={3} xs={3}>
                <Typography variant="caption" display="block" gutterBottom style={{fontSize:13,fontWeight:400, paddingLeft:20}}>
                    {t.date}
                </Typography>
            </Grid> */}
            <Grid item xl={3} lg={3} sm={3} xs={3}>
                <Typography variant="caption" display="block" gutterBottom style={{fontSize:12,fontWeight:600, paddingLeft:20}}>
                {t.name}
                </Typography>
            </Grid>
            <Grid item xl={9} lg={9} sm={9} xs={9}>
                <Typography variant="caption" display="block" gutterBottom style={{fontSize:12,fontWeight:600, paddingLeft:20}}>
                        Community Posts {t.name}
                </Typography>
            </Grid>
            <div> <Divider orientation="horizontal" style={{width:"100%",height:1,color:"black"}}/></div>

        </Grid>
        
        ))}
        {/* <Grid container direction="row" style={{borderRadius:10,backgroundColor:"#F7F8FA",margin:10,padding:10,marginTop:40}} spacing={0}>
            
            <Grid item xl={2} lg={2} sm={2} xs={2}>
                <Typography variant="caption" display="block" gutterBottom style={{fontSize:13,fontWeight:400, paddingLeft:20}}>
                       502
                </Typography>
            </Grid>
            <Grid item xl={4} lg={4} sm={4} xs={4}>
                <Chip  label="Michal"  avatar={<Avatar src="https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg" />} />
            </Grid>
            <Grid item xl={3} lg={3} sm={3} xs={3}>
            <Typography variant="caption" display="block" gutterBottom style={{fontSize:13,fontWeight:400, paddingLeft:20}}>
                    Level 5
                </Typography>
            </Grid>
             <Grid item xl={3} lg={3} sm={3} xs={3}>
                <Typography variant="caption" display="block" gutterBottom style={{fontSize:13,fontWeight:400, paddingLeft:20}}>
                    5002
                </Typography>
            </Grid>
            
        </Grid> */}
    
        <br/>
</Grid>

</Paper>



);
}
export default Task;