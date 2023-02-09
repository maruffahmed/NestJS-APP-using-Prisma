import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[] | null> {
    return await this.userService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string): Promise<User> {
    return this.userService.getUser({ id: +id });
  }

  @Post()
  async createUser(@Body() createUserDto: User): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  async updateUser(
    @Body() updateUserDto: User,
    @Param('id') id: string,
  ): Promise<User> {
    return this.userService.updateUser({
      where: {
        id: +id,
      },
      data: updateUserDto,
    });
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser({ id: +id });
  }
}
