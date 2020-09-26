import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AutoMapper, InjectMapper } from 'nestjsx-automapper';
import {} from '../shared/decorators';
import { ApiErrors, ApiOperationId, Permissions } from '../shared/decorators';
import { PermissionsGuard } from '../shared/guards/permissions.guard';
import { PermissionPrivilege } from '../shared/permission.enum';
import { User } from './models/user.model';
import { UserService } from './user.service';
import { UserVm } from './view-models/user.vm';

@Controller('users')
@ApiTags(User.modelName)
@ApiErrors()
@ApiBearerAuth()
export class UserController {
  constructor(
    private readonly _userService: UserService,
    @InjectMapper() private readonly _mapper: AutoMapper
  ) {}

  @Get()
  @UseGuards(AuthGuard(), PermissionsGuard)
  @Permissions({ user: PermissionPrivilege.Read })
  @ApiOkResponse({ type: UserVm, isArray: true })
  @ApiOperationId()
  async getUsers(): Promise<UserVm[]> {
    const users = await this._userService.findAllAsync();
    return this._mapper.mapArrayAsync(users, UserVm);
  }

  // @Put()
  // @UseGuards(AuthGuard(), PermissionsGuard)
  // @Permissions({ user: PermissionPrivilege.Update })
  // @ApiOkResponse({ type: UserVm, isArray: false })
  // @ApiOperationId()
  // async putUser(
  //   @Body() value: Partial<User> & Required<{ id: string }>
  // ): Promise<UserVm> {
  //   // const user = await this._userService.findByIdAsync(id);
  //   const user = await this._userService.updateUser(value);
  //   // const users = await this._userService.updateAsync();
  //   return this._mapper.map(user, UserVm);
  // }
}
