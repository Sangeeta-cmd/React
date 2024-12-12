import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';
import "./InfoBox.css"

export default function InfoBox({ info }) {
    const HOT_URL = "https://media.istockphoto.com/id/157696693/photo/crowded-people-over-sunny-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jf_cgxpxOHJnFHh-2r4jkyuY3iQeBcHhBlQq6RSFd0o=";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1704539395750-6d3ab4481521?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNreSUyMGF0JTIwdG9vJTIwbXVjaCUyMGNvbGR8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1705642194777-9b1a6add2a26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div style={{ textAlign: "center" }}>
            <div className='container'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 180 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} &nbsp;
                            {
                            info.humidity > 80 ? 
                            <ThunderstormRoundedIcon /> :
                            info.temp > 15 ? <LightModeIcon /> : 
                            <AcUnitIcon color='primary' />
                            } 
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>TempMax = {info.tempMax}&deg;C</p>
                            <p>TempMin = {info.tempMin}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}