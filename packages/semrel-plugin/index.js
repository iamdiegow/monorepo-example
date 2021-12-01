function prepare(pluginConfig, context) {
	const { logger } = context
	logger(pluginConfig)
	logger(context)
	logger('Prepare function')
}

function analyzeCommits(pluginConfig, context) {
	const { logger } = context
	logger(pluginConfig)
	logger(context)
	logger('analyzeCommits function')
}


module.exports = {
	prepare,
	analyzeCommits
}
