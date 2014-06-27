var res = {
    json: {
        heroinePanel: 'res/publish/HeroinePanel.json',
        datePanel: 'res/publish/DatePanel.json',
        playerPanel: 'res/publish/PlayerPanel.json',
        controlPanel: 'res/publish/ControlPanel.json',
        heartLovePanel: 'res/publish/HeartLovePanel.json',
        barLovePanel: 'res/publish/BarLovePanel.json',
        enthusiasmPanel: 'res/publish/EnthusiasmPanel.json',
        mainScene: 'res/MainScene.json',
        dateScene: 'res/DateScene.json',
        cursor: 'res/Cursor.json',
        resultScene: 'res/ResultScene.json',
        playerGrid: 'res/publish/PlayerGrid.json',
        resultPanel: 'res/publish/ResultPanel.json',
    },
    image: {
        enthusiasm: 'res/enthusiasm.png',
        measure15: 'res/measure15.png',
        measure45: 'res/measure45.png',
    },
};

var g_resources = [
    res.json.heroinePanel,
    res.json.datePanel,
    res.json.playerPanel,
    res.json.controlPanel,
    res.json.heartLovePanel,
    res.json.barLovePanel,
    res.json.enthusiasmPanel,
    res.json.mainScene,
    res.json.dateScene,
    res.json.cursor,
    res.json.resultScene,
    res.json.playerGrid,
    res.json.resultPanel,
    res.image.enthusiasm,
];

function addNumberedResources(directory, count, extension) {
    var resources = _.map(_.range(count), function (i) {
        return 'res/' + directory + '/' + i + '.' + extension;
    });
    _.each(resources, function (resource) {
        g_resources.push(resource);
    });
    return resources;
}

res.image.heroines = addNumberedResources('heroine', 8, 'png');
res.image.hearts = addNumberedResources('heart', 4, 'png');
res.image.revealedBars = addNumberedResources('bar/revealed', 4, 'png');
res.image.realBars = addNumberedResources('bar/real', 4, 'png');
res.image.dates = addNumberedResources('date', 8, 'png');
res.image.faces = addNumberedResources('face', 8, 'png');
res.image.playerBackgrounds = addNumberedResources('playerBackground', 4, 'png');
