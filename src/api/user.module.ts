import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/auth/schema/user.schema";
import { UserService } from "./user.service";

@Module({
    imports:[MongooseModule.forFeature([{name:User.name, schema:UserSchema}])],
    controllers:[],
    providers:[UserService],
})

export class UserModule{}