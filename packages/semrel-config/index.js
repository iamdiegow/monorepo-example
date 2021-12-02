const branches = ['main'];

const plugins = [
	'semrel-plugin',
  '@semantic-release/commit-analyzer',
  '@semantic-release/release-notes-generator',
  [
    '@semantic-release/npm',
    {
      npmPublish: false,
    },
  ]
];

module.exports = {
  branches,
  plugins,
	dryRun: true,
	ci: false,
	debug: true
};
