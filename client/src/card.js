import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardMedia} from '@mui/material';
export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.name}
        </Typography>
        <CardMedia
        component="img"
        height="194"
        image={props.imgurl}
        alt="Paella dish"
      />
        <CardActions>
        <Button size="small">Add to Cart</Button>
      </CardActions>
      </CardContent>
    </Card>
  );
}
