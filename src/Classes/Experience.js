/**
 * Imports
 */
import { Mesh, Scene } from "three";

import Sizes from "./Essentials/Sizes/Sizes";
import Camera from "./Essentials/Camera/Camera";
import Renderer from "./Essentials/Renderer/Renderer";
import Time from "./Utils/Time/Time";
import World from "./World/World";

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
        this.time = new Time();
        this.scene = new Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.world = new World();

        /** Sizez resize event */
        this.sizes.on('resize', () => {
            this.resize();
        });

        /** Time tick event */
        this.time.on('tick', () => {
            this.update();
        });
    }

    resize()
    {
        this.camera.resize();
        this.renderer.resize();
    }

    update()
    {
        this.camera.update();
        this.renderer.update();
    }

    destroy()
    {
        this.sizes.off('resize');
        this.time.off('tick');

        // Traverse the whole scene
        this.scene.traverse((child) => {
            if (child instanceof Mesh) {
                child.geometry.dispose();

                for (const key in child.material) {
                    const value = child.material[key];

                    if (value && typeof value.dispose === "function") {
                        value.dispose();
                    }
                }
            }
        })

        this.camera.controls.dispose();
        this.renderer.instance.dispose();
    }
}
