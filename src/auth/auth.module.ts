import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from "@nestjs/jwt";
import { toUSVString } from 'util';
import { AdminModule } from '../admin/admin.module';
// import { UsersModule } from '../users/users.module';


@Module({
  imports:[JwtModule.register({global:true}), AdminModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
