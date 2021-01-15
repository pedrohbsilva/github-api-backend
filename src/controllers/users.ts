import { Request, Response } from "express";
import api from  '../services/api'
class Users {

  async getAllUsers(request: Request, response: Response) {
    const { since } = request.query;

    try {
      const info = await api.get(`/users?since=${since}`)
      
      return response.status(200).json({message: info.data});
    } catch (error) {
      return response.status(400).json(error.response.data.message);
    }
  }

  async details(request: Request, response: Response) {

    const { username } = request.params;
   
    try {
      const info = await api.get(`/users/${username}`)
      
      return response.status(200).json({message: info.data});
    } catch (error) {
      return response.status(400).json(error.response.data.message);
    }
  }

  async repos(request: Request, response: Response) {

    const { username } = request.params;
    
    try {
      const info = await api.get(`/users/${username}/repos`)
      
      return response.status(200).json({message: info.data});
    } catch (error) {
      return response.status(400).json(error.response.data.message);
    }
  }

}

export default new Users();
