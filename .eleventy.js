// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

module.exports = (config) => {
	config.addPassthroughCopy('src/images');
	config.addPassthroughCopy('src/styles');

	// Add filters
	config.addFilter('dateFilter', dateFilter);
	config.addFilter('w3DateFilter', w3DateFilter);

	config.addCollection('events', (collection) => {
		return [...collection.getFilteredByGlob('./src/events/*.md')].reverse();
	});

	// Returns a collection of blog posts in reverse date order
	config.addCollection('blog', (collection) => {
		return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
	});

	config.addTemplateFormats("scss");

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