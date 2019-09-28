import { City } from '../models/city'; 

export interface Branch {
    id: BigInteger;
    name: string; 
    address: string;
    city: City;
    homeNumber: string;
}