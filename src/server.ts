import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response)=> {
  return response.json({message: 'Hello world'})
})

app.listen(process.env.PORT || 3333, () => {
  console.log("Server started on port 3333")
})