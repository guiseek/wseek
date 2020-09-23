import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { NgCrudSchematicSchema } from './schema';

describe('ng-crud schematic', () => {
  let appTree: Tree;
  const options: NgCrudSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@wseek/ng-crud',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('ng-crud', options, appTree).toPromise()
    ).resolves.not.toThrowError();
  });
});
