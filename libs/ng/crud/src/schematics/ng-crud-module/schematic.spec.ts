import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path'

import { NgCrudModuleSchematicSchema } from './schema';

describe('ng-crud-module schematic', () => {
  let appTree: Tree;
  const options: NgCrudModuleSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@wseek/ng-crud-module',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(testRunner.runSchematicAsync(
        'ng-crud-module',
        options,
        appTree
      ).toPromise()
    ).resolves.not.toThrowError();
  })
});
