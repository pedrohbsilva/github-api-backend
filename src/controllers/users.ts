import { Request, Response } from "express";
import api from  '../services/api'
class Users {

  async getAllUsers(request: Request, response: Response) {
    const { since } = request.query;

    const token = request.headers.authorization;

    const config = { headers: { accept: 'application/json', authorization: `token ${token}` } };

    
    try {
      const info = await api.get(`/users?since=${since}`, config)
      
      return response.status(200).json({message: info.data});
    } catch (error) {
      return response.status(400).json(error.response.data.message);
    }
  }

  async details(request: Request, response: Response) {

    const { username } = request.params;
    const token = request.headers.authorization;

    const config = { headers: { accept: 'application/json', authorization: `token ${token}` } };
    try {
      const info = await api.get(`/users/${username}`, config)
      
      return response.status(200).json({message: info.data});
    } catch (error) {
      return response.status(400).json(error.response.data.message);
    }
  }

  async repos(request: Request, response: Response) {

    const { username } = request.params;
    const token = request.headers.authorization;

    const config = { headers: { accept: 'application/json', authorization: `token ${token}` } };
    try {
      const info = await api.get(`/users/${username}/repos`, config)
      
      return response.status(200).json({message: info.data});
    } catch (error) {
      return response.status(400).json(error.response.data.message);
    }
  }

}

export default new Users();
