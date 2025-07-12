---
title: 'Tag Archive'
layout: 'layouts/feed.html'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ['all', 'nav', 'blog', 'work', 'people', 'rss']
permalink: '/tag/{{ tag | slugify }}/'
---