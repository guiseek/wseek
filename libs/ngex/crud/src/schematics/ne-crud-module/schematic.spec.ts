import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path'

import { NeCrudModuleSchematicSchema } from './schema';

describe('ne-crud-module schematic', () => {
  let appTree: Tree;
  const options: NeCrudModuleSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@wseek/ne-crud-module',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(testRunner.runSchematicAsync(
        'ne-crud-module',
        options,
        appTree
      ).toPromise()
    ).resolves.not.toThrowError();
  })
});
