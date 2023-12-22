import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schema/user.schema";
import { Model } from "mongoose";
import { UserService } from "src/api/user.service";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from "bcrypt"
@Injectable()

export class AuthService{
    constructor(@InjectModel(User.name) private authmodel :Model<User> , private userservice:UserService){}


    async login(username:string, password : string){
        const userdetail = await this.userservice.findbyusername(username);
        if(!userdetail){
            throw new UnauthorizedException(`Username not found`)
        }

        const validpassword = await bcrypt.compare(password,)
    }
}