import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDto } from "src/auth/dto/user.dto";
import { User } from "src/auth/schema/user.schema";
import * as bcrypt from "bcrypt";
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private usermodel: Model<User>) {}

  async createuser(userdto: UserDto) {
    const { username, password, role, pnumber } = userdto;
    const hahshedpassword = await bcrypt.hash(password);
    const usercreation = await this.usermodel.create({
      username,
      password: hahshedpassword,
      role,
      pnumber,
    });
    if (!usercreation) {
      throw new BadRequestException(`Please enter valid Details`);
    }
    return usercreation;
  }

  async findbyusername(username: string) {
    return await this.usermodel.find({ username });
  }
}
