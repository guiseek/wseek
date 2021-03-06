import { AutoMapper, ProfileBase, Profile, mapFrom, mapWith } from 'nestjsx-automapper';
import { AuthUser } from '../../auth/auth-user';
import { Role } from '../../role/models/role.model';
import { User } from '../models/user.model';
import { UserInformationVm } from '../view-models/user-information.vm';
import { UserVm } from '../view-models/user.vm';

@Profile()
class UserProfile extends ProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper
      .createMap(User, UserVm)
      .forMember(
        d => d.fullName,
        mapFrom(s => s.firstName + ' ' + s.lastName)
      )
      .forMember(
        d => d.roleName,
        mapFrom(s => (s.role as Role).roleName)
      )
      .forMember(
        d => d.roleId,
        mapFrom(s => (s.role as Role).id)
      )
      .reverseMap();

    mapper
      .createMap(User, UserInformationVm)
      .forMember(
        d => d.fullName,
        mapFrom(s => s.firstName + ' ' + s.lastName)
      )
      .reverseMap();

    mapper.createMap(User, AuthUser).forMember(
      d => d.role,
      mapWith(Role, s => s.role)
    );
  }
}
