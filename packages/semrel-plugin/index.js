function prepare(pluginConfig, context) {
	const { logger } = context
	logger(pluginConfig)
	logger(context)
	logger('Prepare function')
}

module.exports = {
	prepare
}
