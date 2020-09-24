import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AutomapperModule } from 'nestjsx-automapper';

import { environment } from './../environments/environment';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PingModule } from './ping/ping.module';

@Module({
  imports: [
    AutomapperModule.withMapper(),
    MongooseModule.forRoot(environment.mongo.uri, {
      retryAttempts: 5,
      retryDelay: 1000,
      useFindAndModify: false,
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }),
    RoleModule,
    UserModule,
    AuthModule,
    PingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
