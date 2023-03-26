import type {Directive} from "vue";
import {WatchElementStuck, WatchIntersectionRatio} from "@/tools/intersection";


export interface IRatioOptions{
    /**
     * The ratio of the element that is visble / intersected
     */
    ratio:number,
    /**
     * Whether the element was visible
     */
    isVisible:boolean,
    /**
     * If true, the ratio will range from -1 to 1 instead of -1/1 to 0 (-1 to 0 during entry and 0 to 1 during exit)
     */
    exit?:boolean,
    /**
     * Whether to invert the ratio. if true, ratio is 0 when fully visible and 1/-1 when not visible. Useful for css styling
     */
    invert?:boolean,
    /**
     * The thresholds before the ratios are updated and the callbacks are called.
     * See <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold"> Intersection_Observer_API#threshold <a/> for more info
     */
    thresholds?:number[]| number
}

export const iratio: Directive<HTMLElement,IRatioOptions> = (el:HTMLElement, binding) => {

    WatchIntersectionRatio(el,(ratio, isVisible) => {
        binding.value.ratio=ratio
        binding.value.isVisible=isVisible
        el.style.setProperty("--iratio",ratio.toString())

    },binding.value.thresholds,binding.value.invert,binding.value.exit)

}
