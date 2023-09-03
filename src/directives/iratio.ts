import type {Directive, Ref} from "vue";
import {WatchElementStuck, WatchIntersectionRatio} from "@/tools/intersection";
import {ref} from "vue";


export interface IRatioConfig {
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

export const iratio: Directive<HTMLElement,iRatioObject> = (el:HTMLElement, binding) => {
    WatchIntersectionRatio(el,(ratio, isVisible) => {
        binding.value.ratio.value=ratio
        binding.value.isVisible.value=isVisible
        el.style.setProperty("--iratio",ratio.toString())

    },binding.value.config.thresholds,binding.value.config.invert,binding.value.config.exit)

}

export class iRatioObject{
    public config: IRatioConfig;
    public ratio: Ref<number> = ref(0)
    public isVisible: Ref<boolean> = ref(false)
    constructor(config:IRatioConfig) {
        this.config = config
    }

}
export class IRatioObject extends iRatioObject{}