import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { JwtSecretRequestType, JwtService } from "@nestjs/jwt";
import { ref } from "process";
import { SignInDto } from "./dto/sign-in.dto";
import * as bcrypt from "bcrypt";
import { Response } from "express";
import { AdminDocument } from "../admin/schemas/admin.schema";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { AdminService } from "../admin/admin.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: AdminService,
    private readonly jwtService: JwtService
  ) {}

  

  async signIn(signInDto: SignInDto, res: Response) {
    const user = await this.usersService.findUserByEmail(signInDto.email);

    if (!user) {
      throw new BadRequestException("email yoki password notogri");
    }
  
    if (!user.is_active) {
      throw new BadRequestException("avval emailni tasqidlang");
    }

    const isValidPassword = await bcrypt.compare(
      signInDto.password,
      user.hashed_password
    );
  
    if (!isValidPassword) {
      throw new BadRequestException("email yoki password notogri");
    }
  
    const { accessToken, refreshToken } = await this.usersService.generateTokens(user);

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      maxAge: Number(process.env.COOKIE_TIME),
    });
  
    user.hashed_refresh_token = await bcrypt.hash(refreshToken, 7);
    await user.save();
  
    return {
      messsage: "user signed in",
      accessToken,
    };
  }

  async signOut(refreshToken:string, res:Response){
    const userData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });

    if (!userData) {
      throw new ForbiddenException("User not verified")
    }
  }
}
