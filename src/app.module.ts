import { Module } from '@nestjs/common';

import { CatsModule } from './cats/cats.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [CatsModule, UserModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
