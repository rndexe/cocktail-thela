/// <reference path="../pb_data/types.d.ts" />

onBootstrap((e) => {
    e.next();
    console.log('App initialized!');
});

routerAdd('GET', '/health/', (e) => {
    return e.string(200, 'Cocktail Thela is ready to serve.');
});

routerAdd('POST', '/api/addThela', (e) => {
    const thela_info = e.requestInfo().body;
    const collection = $app.findCollectionByNameOrId('thela');
    const record = new Record(collection);
    const thumbnail = e.findUploadedFiles('image');

    record.set('image', thumbnail);
    record.set('name', thela_info.name);
    record.set('theme', thela_info.theme);
    record.set('modules', thela_info.modules);
    record.set('display', thela_info.display);
    record.set('top', thela_info.top);
    record.set('appliances', thela_info.appliances);
    record.set('glasses', thela_info.glasses);

    $app.save(record);

    return e.string(200, record.get('id'));
});

routerAdd('GET', '/api/getThelaById/{id}', (e) => {
    const id = e.request.pathValue('id');

    if (id) {
        const result = new DynamicModel({
            name: '',
            appliances: '',
            display: '',
            glasses: '',
            modules: '',
            theme: '',
            top: '',
        });

        $app.db()
            .select('name', 'appliances', 'display', 'glasses', 'modules', 'theme', 'top')
            .from('thela')
            .where($dbx.exp('id = {:id}', { id: id }))
            .one(result);

        return e.json(200, result);
    }
});

routerAdd('GET', '/api/getThelas', (e) => {
    const result = arrayOf(
        new DynamicModel({
            id: '',
            image: '',
            name: '',
        }),
    );
    $app.db().select('id', 'name', 'image').from('thela').orderBy('updated DESC').all(result);

    return e.json(200, result);
});
