const branches = ['main'];

const plugins = [
  '@semantic-release/commit-analyzer',
  '@semantic-release/release-notes-generator',
	'./node_modules/semrel-plugin',
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
