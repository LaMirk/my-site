---
title: 'Events'
layout: 'layouts/feed.html'
pagination:
  data: collections.events
  size: 10
permalink: 'events{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer events'
paginationNextText: 'Older events'
paginationAnchor: '#event-list'
---