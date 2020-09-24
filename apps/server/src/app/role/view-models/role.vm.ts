import { BaseVm, PermissionDictionary } from '../../shared';
import {
  ExposedApiProperty,
  ExposedApiPropertyOptional,
} from '../../shared/decorators';

export class RoleVm extends BaseVm {
  @ExposedApiProperty()
  isGlobal: boolean;
  @ExposedApiPropertyOptional()
  parentId?: string;
  @ExposedApiProperty()
  roleName: string;
  @ExposedApiProperty()
  notes: string;
  @ExposedApiProperty({ default: {} })
  permissions: PermissionDictionary;
}
