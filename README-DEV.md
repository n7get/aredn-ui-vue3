
## Components

The resources are optimized to load only what is required for
the given components being rendered.  This requires that every
component adds and removes what resources it's using.  

This will be done using the `mounted()` and `unmounted()` lifecycle hooks.

Here's an example:
> onMounted(() => sysinfoStore.addSysinfoResource())  
> onUnmounted(() => sysinfoStore.removeSysinfoResource())

## Views

Every view will require that appStore.loadNodeData() be excuted to 
make sure the resources for components used have been loaded.  

This will also use the `onMounted()` lifecycle hook:

Here's an example:
> onMounted(() =>loadNodeData())

## Mock data

There is a mock backend feature that is meant for doing tests,
but it can be used when devploping the app thus allowing development
without having a device available.  To develope using the
mock backend, create a local environment file .env.local in the
project's root folder with the following:

> VITE_APP_MODE=test
