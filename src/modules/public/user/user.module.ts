import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '../../config';
import { User } from './user.entity';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
import { PassportModule } from '@nestjs/passport';
import { Mail } from 'utils/Mail';
import { JwtStrategy } from '../auth/jwt.strategy';
import { UserToken } from './user-token.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserToken]),
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get('JWT_SECRET_KEY'),
          signOptions: {
            ...(configService.get('JWT_EXPIRATION_TIME')
              ? {
                  expiresIn: Number(configService.get('JWT_EXPIRATION_TIME')),
                }
              : {}),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [UserController],
  exports: [UsersService],
  providers: [UsersService, JwtStrategy, Mail],
})
export class UserModule {}
