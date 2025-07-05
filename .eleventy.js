module.exports = (config) => {
	config.addPassthroughCopy('src/images');
	config.addPassthroughCopy('src/styles');
	return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist',
		},
	};
};