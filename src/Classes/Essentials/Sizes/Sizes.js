/**
 * Imports
 */

/**
 * class Sizes
 */
export default class Sizes
{
    /** Sizes constructor */
    constructor()
    {
        // Properties
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    }
}
