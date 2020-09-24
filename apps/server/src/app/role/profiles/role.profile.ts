import { AutoMapper, ProfileBase, Profile, mapFrom } from 'nestjsx-automapper';
import { Role } from '../models/role.model';
import { RoleVm } from '../view-models/role.vm';

@Profile()
export class RoleProfile extends ProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper
      .createMap(Role, RoleVm)
      .forMember(
        (d) => d.permissions,
        mapFrom((src) => src.permissions)
      )
      .reverseMap()
      .forPath(
        (s) => s.permissions,
        mapFrom((src) => src.permissions)
      );
  }
}
