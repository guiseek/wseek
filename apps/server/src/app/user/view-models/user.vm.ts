import { BaseVm, ExposedApiProperty } from '../../shared';

export class UserVm extends BaseVm {
  @ExposedApiProperty()
  email: string;
  @ExposedApiProperty()
  firstName: string;
  @ExposedApiProperty()
  lastName: string;
  @ExposedApiProperty()
  fullName: string;
  @ExposedApiProperty()
  roleName: string;
  @ExposedApiProperty()
  roleId: string;
}
