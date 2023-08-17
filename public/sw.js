importScripts('https://cdn.bootcdn.net/ajax/libs/workbox-sw/6.5.4/workbox-sw.min.js')

workbox.recipes.pageCache()
workbox.recipes.staticResourceCache()
workbox.recipes.imageCache()