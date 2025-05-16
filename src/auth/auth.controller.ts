import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { CreateUserDto } from '../users/dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';
import { Response } from 'express';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("sign-up")
  async signUp(@Body() createUserDto:CreateAdminDto){
    return this.authService.signUp(createUserDto)
  }

  @Post("sign-in")
  async signIn(
    @Body() signInDto:SignInDto ,
    @Res({passthrough:true}) res:Response
  ){
    return this.authService.signIn(signInDto, res)
  }
  
}
