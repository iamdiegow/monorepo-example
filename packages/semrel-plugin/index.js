function prepare(pluginConfig, context) {
	console.log('this is prepare function')
	console.log(process.cwd())
	const packageJson = require('./package.json')
	console.log(JSON.stringify(packageJson, null, 2))
}

function analyzeCommits(pluginConfig, context) {
	console.log('analyzeCommits function')
}


module.exports = {
	prepare,
	analyzeCommits
}
