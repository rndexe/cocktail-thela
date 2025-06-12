/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1111862459")

  // remove field
  collection.fields.removeById("json3165162696")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1111862459")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "json3165162696",
    "maxSize": 0,
    "name": "thela_info",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
})
