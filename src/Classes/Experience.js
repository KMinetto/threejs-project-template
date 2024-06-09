/**
 * Imports
 */

// Instance
let instance = null;

/**
 * Class Experience
 */
export default class Experience {

    /** Experience constructor */
    constructor(canvas)
    {
        if (instance) return instance;
        instance = this;

        // Global access
        window.experience = this;

        // Properties
        this.canvas = canvas;

        // Setup
    }
}

resize()
{

}

update()
{

}

destroy()
{

}
