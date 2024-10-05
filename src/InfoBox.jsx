import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import rain from './assets/Rain.png';
import sun from './assets/sun.jpg';
import snow from './assets/snow.jpg';


export default function InfoBox({info})
{
    const INIT_URL=
        "https://images.unsplash.com/photo-1575214997383-a3592741c334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
  
          const HOT_URL=sun ;
        //  "https://images.unsplash.com/photo-1577985759186-0854dfd3f218?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          const COLD_URL = snow;
          // "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"

          const RAIN_URL=rain;
          // "https://media.istockphoto.com/id/1254778015/photo/woman-crossing-street-downtown-in-rain.webp?b=1&s=170667a&w=0&k=20&c=clwiJ6mkTx7spVMDOfYYQhLdYRJEFfuOFTuO5lSVGMU="
       
          return(
        <div className= 'InfoBox' >
     <div className='cardContainer'>

    <Card sx={{ maxWidth: 600, width: '100%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80
           ?RAIN_URL 
           :info.temp >15
           ?HOT_URL
           :COLD_URL}
        title="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {
        info.humidity>80
        
        ?<ThunderstormIcon/>
        :info.temp >15
        ?<WbSunnyIcon/>
        :<AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>Temperature={info.temp}&deg;C</div>
         <div>Humidity={info.humidity}</div>
         <p>Min Temp={info.tempMin}&deg;C</p>
         <p>Max Temp={info.tempMax}&deg;C</p>
         <p>The Weather can be described as
           
            <i>{info.weather}</i> and  feels like = {info.feelsLike}&deg;C</p>
      
        </Typography>
        </CardContent>
      
    </Card>


    </div>
      </div>
    );
}
