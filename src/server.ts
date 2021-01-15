import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import bodyParser from 'body-parser'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet' 

const app = express();

app.set('trust proxy', 1)

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 100, // limit each IP addr to 100 requests per hour
  message: 'Too many requests from this IP address. try again in an hour',
})

// set various headers
app.use(helmet());

// apply to all requests
app.use(limiter);

app.disable('x-powered-by');
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("Server started on port 3333")
});