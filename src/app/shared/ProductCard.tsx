import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(prop: { data: any }) {
  return (
    <Card
      sx={{
        width: {
          xs: "250px",
          md: "250px",
        },
        height: "437px",
        margin: "0 20px 10px 20px",
      }}
    >
      <CardMedia sx={{ height: 140 }} image={prop.data?.src} title='green iguana' />
      <CardContent>
        <Typography gutterBottom variant='h4' component='div'>
          {prop.data.name}
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{}}>
          {prop.data.description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
