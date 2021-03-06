/**
 * Slider is a scrollbar with just one selection grip.
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { Scrollbar, IScrollbarProperties, IScrollbarAdapters, IScrollbarEvents } from "../../core/elements/Scrollbar";
import { SpriteEventDispatcher, AMEvent } from "../../core/Sprite";
/**
 * ============================================================================
 * REQUISITES
 * ============================================================================
 * @hidden
 */
/**
 * Defines properties for [[Slider]].
 */
export interface ISliderProperties extends IScrollbarProperties {
}
/**
 * Defines events for [[Slider]].
 */
export interface ISliderEvents extends IScrollbarEvents {
}
/**
 * Defines adapters for [[Slider]].
 *
 * @see {@link Adapter}
 */
export interface ISliderAdapters extends IScrollbarAdapters, ISliderProperties {
}
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Creates a slider - a version of scrollbar with just one grip.
 *
 * @see {@link ISliderEvents} for a list of available events
 * @see {@link ISliderAdapters} for a list of available Adapters
 */
export declare class Slider extends Scrollbar {
    /**
     * Defines available properties.
     *
     * @ignore Exclude from docs
     * @type {ISliderProperties}
     */
    _properties: ISliderProperties;
    /**
     * Defines available adapters.
     *
     * @ignore Exclude from docs
     * @type {ISliderAdapters}
     */
    _adapter: ISliderAdapters;
    /**
     * Event dispacther.
     *
     * @type {SpriteEventDispatcher<AMEvent<Slider, ISliderEvents>>} Event dispatcher instance
     */
    events: SpriteEventDispatcher<AMEvent<Slider, ISliderEvents>>;
    /**
     * Constructor
     */
    constructor();
    /**
     * @return {number} [description]
     */
    protected __end: number;
    /**
     * @return {number} [description]
     */
    /**
     * Relative position (0-1) of the end grip.
     *
     * @param {number}  position  Position (0-1)
     */
    end: number;
    /**
     * @return {number} Position (0-1)
     */
    /**
     * Relative position (0-1) of the start grip.
     *
     * @param {number}  position  Position (0-1)
     */
    start: number;
}
