const branches = ['main'];

const plugins = [
	'@ds/semrel-plugin',
  '@semantic-release/commit-analyzer',
  '@semantic-release/release-notes-generator',
  [
    '@semantic-release/npm',
    {
      npmPublish: false,
    },
  ],
	'@semantic-release/github'
];

module.exports = {
  branches,
  plugins,
	dryRun: false,
	ci: true,
	debug: true
};
