## Usage with elastic-apm

This repo contains a locally cloned version of [meteor-elastic-apm](https://github.com/kschingiz/demo-meteor-elastic-apm) v2.4.1 inside the 'packages' folder.

To run all necessary elastic stack servers:

- `mkdir ~/elasticdata`
- `cd docker-yml/elastic-apm && docker-compose up`

This will start elasticsearch (port 9200), elastic-apm (port 8200), kibana (port 5601).  
Start the meteor app.  
Open localhost:5601 -> Home -> Add data -> APM -> Lauch APM  
There should be meteor-demo-app showing up, and transactions 'method', 'sub' etc. preconfigured.  
More configuration: Stack management -> Index patterns -> Search, e.g. `nodejs.memory.heap.allocated.bytes`, this can be added to Dashboard via Dashboard -> Create new dashboard -> Create new
