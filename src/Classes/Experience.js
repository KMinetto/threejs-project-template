/**
 * Imports
 */
import { Scene } from "three";

import Sizes from "./Essentials/Sizes/Sizes";
import Camera from "./Essentials/Camera/Camera";
import Renderer from "./Essentials/Renderer/Renderer";

// Instance
let instance = null;

/**
 * Class Experience
 */
export default class Experience
{

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
        this.sizes = new Sizes();
        this.scene = new Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();
    }

    resize()
    {
        this.camera.resize();
        this.renderer.resize();
    }

    update()
    {
        this.camera.update();
        this.renderer.upda();
    }

    destroy()
    {

    }
}
