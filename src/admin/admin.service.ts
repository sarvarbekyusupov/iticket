import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Admin, AdminDocument } from './schemas/admin.schema';
import { Model } from 'mongoose';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminSchema: Model<Admin>,
    private readonly jwtService: JwtService
  ) {}
  async create(createAdminDto: CreateAdminDto) {
    const { password, confirm_password, email } = createAdminDto;

    const admin = await this.adminSchema.findOne({ email });

    if (admin) {
      throw new BadRequestException("Bunday email mavjud");
    }

    if (password !== confirm_password) {
      throw new BadRequestException("parollar mos emas");
    }

    const hashed_password = await bcrypt.hash(password, 7);

    return this.adminSchema.create({
      ...createAdminDto,
      hashed_password,
      messsage: "Foydalanuvchi qo'shildi",
    });

  }

  findAll() {
    return this.adminSchema.find();
  }

  findOne(id: string) {
    return this.adminSchema.findById(id);
  }

  findUserByEmail(email: string) {
    return this.adminSchema.findById({email});
  }

  update(id: string, updateAdminDto: UpdateAdminDto) {
    return this.adminSchema.findByIdAndUpdate(id, updateAdminDto);
  }

  remove(id: string) {
    return this.adminSchema.findByIdAndDelete(id);
  }

  async generateTokens(admin: AdminDocument) {
    const payload = {
      id: admin._id,
      is_active: admin.is_active,
      is_owner: admin.email,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),

      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
