/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var BuildGameObject = require('../gameobjects/BuildGameObject');
var GameObjectCreator = require('../gameobjects/GameObjectCreator');
var Layer3DScene = require('./Layer3DScene');

/**
 * Creates a new Layer3DScene Game Object and returns it.
 *
 * Note: This method will only be available if the Layer3DScene Game Object and WebGL support have been built into Phaser.
 *
 * @method Phaser.GameObjects.GameObjectCreator#layer3d
 * @since 3.50.0
 *
 * @param {object} config - The configuration object this Game Object will use to create itself.
 * @param {boolean} [addToScene] - Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object.
 *
 * @return {Phaser.Layer3D.Layer3DScene} The Game Object that was created.
 */
GameObjectCreator.register('layer3d', function (config, addToScene)
{
    if (config === undefined) { config = {}; }

    var layer = new Layer3DScene(this.scene, 0, 0);

    if (addToScene !== undefined)
    {
        config.add = addToScene;
    }

    BuildGameObject(this.scene, layer, config);

    return layer;
});

//  When registering a factory function 'this' refers to the GameObjectCreator context.
