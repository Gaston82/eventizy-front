import { type JwtPayload } from "jwt-decode";
export interface User {
  id: string;
  username: string;
  token: string;
}

export interface UserState extends User {
  isLogged: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface CustomTokenPayload extends JwtPayload {
  id: string;
  username: string;
}

export interface Event {
  name: string;
  location: string;
  image: string;
  date: string;
  time: string;
  organizer: string;
  category: string[];
}

export type Events = Event[];
