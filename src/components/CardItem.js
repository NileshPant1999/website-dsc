import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function MediaCard(props) {
    return (
        <Card className='root'>
            <CardActionArea>
                <CardMedia
                    className='media'
                    image={props.src}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondry">
                    <a href='https://forms.gle/GW65YGiKBrrzvtaW6' target='_blank'>Join Us</a>
                </Button>
                <Button size="small" color="secondry">
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
}