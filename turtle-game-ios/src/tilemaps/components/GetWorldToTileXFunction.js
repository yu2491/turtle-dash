/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = require('../const');
var NOOP = require('../../utils/NOOP');
var WorldToTileX = require('./WorldToTileX');

/**
 * Gets the correct function to use to translate tiles, based on the map orientation.
 *
 * @function Phaser.Tilemaps.Components.GetWorldToTileXFunction
 * @since 3.50.0
 *
 * @param {number} orientation - The Tilemap orientation constant.
 *
 * @return {Phaser.Tilemaps.Components.WorldToTileX)} The function to use to translate tiles for the given map type.
 */
var GetWorldToTileXFunction = function (orientation)
{
    if (orientation === CONST.ORTHOGONAL)
    {
        return WorldToTileX;
    }
    else
    {
        return NOOP;
    }
};

module.exports = GetWorldToTileXFunction;
