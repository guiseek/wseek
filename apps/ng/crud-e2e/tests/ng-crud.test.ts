import {
  checkFilesExist,
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';
describe('ng-crud e2e', () => {
  it('should create ng-crud', async (done) => {
    const plugin = uniq('ng-crud');
    ensureNxProject('@wseek/crud', 'dist/libs/ng/crud');
    await runNxCommandAsync(`generate @wseek/crud:ngCrud ${plugin}`);

    const result = await runNxCommandAsync(`build ${plugin}`);
    expect(result.stdout).toContain('Builder ran');

    done();
  });

  describe('--directory', () => {
    it('should create src in the specified directory', async (done) => {
      const plugin = uniq('ng-crud');
      ensureNxProject('@wseek/crud', 'dist/libs/ng/crud');
      await runNxCommandAsync(
        `generate @wseek/crud:ngCrud ${plugin} --directory subdir`
      );
      expect(() =>
        checkFilesExist(`libs/subdir/${plugin}/src/index.ts`)
      ).not.toThrow();
      done();
    });
  });

  describe('--tags', () => {
    it('should add tags to nx.json', async (done) => {
      const plugin = uniq('ng-crud');
      ensureNxProject('@wseek/crud', 'dist/libs/ng/crud');
      await runNxCommandAsync(
        `generate @wseek/crud:ngCrud ${plugin} --tags e2etag,e2ePackage`
      );
      const nxJson = readJson('nx.json');
      expect(nxJson.projects[plugin].tags).toEqual(['e2etag', 'e2ePackage']);
      done();
    });
  });
});
