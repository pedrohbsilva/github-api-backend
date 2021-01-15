import { Request, Response } from "express";
import axios from  'axios';
import dotenv from 'dotenv';

dotenv.config();

class Session {

  async login(request: Request, response: Response) {

    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;
    const body = {
      client_id: clientId,
      client_secret: clientSecret,
      code: request.params.code
    };
    console.log(body)
    const opts = { headers: { accept: 'application/json' } };
    try {
      const info = await axios.post(`https://github.com/login/oauth/access_token`, body, opts)
      return response.status(200).send({token: info.data['access_token']})

    } catch (error) {
      return response.status(500).send({message: error.message})
    }
  }

}

export default new Session();
