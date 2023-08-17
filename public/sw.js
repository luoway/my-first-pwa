importScripts('https://cdn.bootcdn.net/ajax/libs/workbox-sw/6.5.4/workbox-sw.min.js')

workbox.routing.setDefaultHandler(new workbox.strategies.StaleWhileRevalidate())
workbox.recipes.pageCache()
workbox.recipes.staticResourceCache()
workbox.recipes.imageCache()
workbox.recipes.offlineFallback()