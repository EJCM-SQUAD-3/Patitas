import express from 'express';
import configDotenv from './src/config/dotenv';
// import cors from 'cors';
import routes from './src/routes/routes';
import passport from 'passport';
import configAuth from './src/middlewares/checkAuth';
import uploadRoutes from './src/routes/routes'

configAuth();
configDotenv();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(passport.initialize());
app.use(express.urlencoded({ extended: true }));
//app.use(cors());
app.use(routes);

app.use('/upload', uploadRoutes);

// Middleware de tratamento de erros
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
console.log(`${process.env.APP_NAME} app listening at http://localhost:${port}`);
});
    
