import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { NotesModule } from './notes/notes.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:
   [ ConfigModule.forRoot({

     isGlobal:true
   }
    ),
    PrismaModule,
    NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
