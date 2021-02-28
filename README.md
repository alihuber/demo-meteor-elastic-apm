## Usage with elastic-apm

In `server/main.js`: comment in `import Agent from 'meteor/kschingiz:meteor-elastic-apm';` and `Agent.start({ ...`  
This repo contains a locally cloned version of [meteor-elastic-apm](https://github.com/kschingiz/demo-meteor-elastic-apm) v2.4.1 inside the 'packages' folder.

To run all necessary elastic stack servers:

- `mkdir ~/elasticdata`
- `cd docker-yml/elastic-apm && docker-compose up`

This will start elasticsearch (port 9200), elastic-apm (port 8200), kibana (port 5601).

- Start the meteor app
- Open localhost:5601 -> Home -> Add data -> APM -> Lauch APM

There should be meteor-demo-app showing up, and transactions 'method', 'sub' etc. preconfigured.  
More configuration: Stack management -> Index patterns -> Search, e.g. `nodejs.memory.heap.allocated.bytes`, this can be added to Dashboard via Dashboard -> Create new dashboard -> Create new

## Usage with kadira

- `mkdir ~/mongodb-kadira-data`
- In above directory, make sure to have MongoDB < 3.6 data with a replicaset 'kadira' configured:
  - `> config={"_id":"kadira","members":[{"_id":0,"host":"<localIP>:27017"}]}`
  - `> rs.initiate(config)`
- `cd docker-yml/kadira && docker-compose up`
- Comment out elastic-apm-stuff in `server/main.js`
- Open localhost:4000, login with admin/admin@gmail.com, -> Create New App, add the created secrets to settings.json, make sure to add

```
{
  "kadira": {
    "options": {
        "endpoint":"http://localhost:11011"
    }
    ...
  }
}
```

- Upgrade kadira plan: `db.apps.update({},{$set:{plan:'pro'}},{multi:true})`
- Start meteor app
