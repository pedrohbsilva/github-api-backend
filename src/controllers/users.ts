import { Request, Response } from "express";
import api from  '../services/api'

interface UserProps{
  id: number;
  html_url: string;
  login: string;
  avatar_url?: string;
  created_at?: Date;
}
interface RepositoryProps{
  id:number;
  name: string;
  html_url: string;
}
class Users {

  async getAllUsers(request: Request, response: Response) {
    const { since } = request.query;

    try {
      const info = await api.get(`/users?since=${since}`)
      
      const data = info.data.map((user: UserProps)=>{
        const response = {
          id: user.id,
          html_url: user.html_url,
          login: user.login
        }
        return response;
      })
      return response.status(200).json({message: data});
    } catch (error) {
      return response.status(400).json(error.response.data.message);
    }
  }

  async details(request: Request, response: Response) {
    const { username } = request.params;
   
    try {
      const info = await api.get(`/users/${username}`);
      const data = {
          id: info.data.id,
          html_url: info.data.html_url,
          login: info.data.login,
          avatar_url: info.data.avatar_url,
          created_at: info.data.created_at
        }
      
      return response.status(200).json({message: data});
    } catch (error) {
      return response.status(400).json(error.response.data.message);
    }
  }

  async repos(request: Request, response: Response) {

    const { username } = request.params;
   
    try {
      const info = await api.get(`/users/${username}/repos`)
      const data = info.data.map((repository: RepositoryProps)=>{
        const response = {
          id: repository.id,
          html_url: repository.html_url,
          name: repository.name
        }
        return response;
      })
      return response.status(200).json({message: data});
    } catch (error) {
      return response.status(400).json(error.response.data.message);
    }
  }

}

export default new Users();
