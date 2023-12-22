import { Body, Controller, HttpException, Post } from "@nestjs/common";
import { UserService } from "src/api/user.service";
import { UserDto } from "./dto/user.dto";

@Controller("auth")
export class AuthController {
  constructor(private userservice: UserService) {}

  @Post("add")
  async usercreate(@Body() userdto: UserDto) {
    try {
      return await this.userservice.createuser(userdto);
    } catch (error) {
      throw new HttpException(error.message, error.statuscode ?? 400);
    }
  }
}
