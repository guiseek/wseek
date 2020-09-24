import { AutoMapper, ProfileBase, Profile, mapFrom } from 'nestjsx-automapper';
import { Role } from '../models/role.model';
import { RoleVm } from '../view-models/role.vm';

@Profile()
class RoleProfile extends ProfileBase {
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
    // mapper
    //   .createMap(Role, RoleVm)
    //   .forMember(
    //     d => d.permissions,
    //     opts => opts.mapFrom(s => s.permissions)
    //   )
    //   .reverseMap()
    //   .forPath(
    //     s => s.permissions,
    //     opts => opts.mapFrom(d => d.permissions)
    //   );
  }
}
