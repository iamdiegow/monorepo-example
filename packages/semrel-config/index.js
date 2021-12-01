const branches = ['main'];

const plugins = [
  '@semantic-release/commit-analyzer',
  '@semantic-release/release-notes-generator',
  [
    '@semantic-release/npm',
    {
      npmPublish: false,
    },
  ],
  [
    '@semantic-release/github',
    {
      successComment: false,
      failComment: false,
    },
  ],
];

module.exports = {
	extends: 'semantic-release-monorepo',
  branches,
  plugins,
	dryRun: true,
	ci: true,
	debug: process.env.DEBUG_SEMATIC_RELEASE || true
};
