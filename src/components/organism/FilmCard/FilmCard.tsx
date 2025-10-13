
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import type { IMovie } from '../../../shared/types/movie.types';
import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';



type FilmCardPropsType = {
  movie: IMovie
}
const imgUrl = "https://image.tmdb.org/t/p/w500/"


export default function FilmCard({ movie }: FilmCardPropsType) {


  return (
    <Card sx={{ width: 245, height: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={imgUrl + movie.poster_path}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Link
              component={NavLink}
              to={`/${movie.id}`}
              underline='none'
              sx={{ color: 'black' }}
            >

              {
                movie.title.length <= 25 ? movie.title : `${movie.title.slice(0, 25)} ...`
              }
            </Link>

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
