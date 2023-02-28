import { Controller, Get, UseGuards, Patch } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: any) {
    return user;
  }

  @Patch()
  editUser() {}
}
