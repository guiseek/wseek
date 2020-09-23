const { createReleaseConfigWithScopeFilter } = require('../../tools/release');

module.exports = createReleaseConfigWithScopeFilter({
  projectScope: '@wseek/ui-kit',
  projectRoot: 'libs/common/ui-kit',
  buildOutput: 'dist/libs/common/ui-kit',
});
