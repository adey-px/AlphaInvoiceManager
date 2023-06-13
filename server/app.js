import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

/* instance of express app */
const app = express();

/* run morgan in dev mode */
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

/* parse incoming req with json payload */
app.use(express.json());

/* parse incoming req with urlencoded payload  */
/* ext false means can't posted nested object */
app.use(express.urlencoded({ extended: false }));

/* handle cookies */
app.use(cookieParser());

/* testing */
app.get('/', (req, res) => {
  // res.send('Hello')
	res.json({ Test: 'welcome' });
});

//
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log('Starting development server');
});
