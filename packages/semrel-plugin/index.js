function prepare(pluginConfig, context) {
	console.log('Prepare function')
	console.log(pluginConfig)
	console.log(context)
}

function analyzeCommits(pluginConfig, context) {
	console.log('analyzeCommits function')
	console.log(pluginConfig)
	console.log(context)
}


module.exports = {
	prepare,
	analyzeCommits
}
