import type {Directive} from "vue";
import {WatchElementStuck, WatchIntersectionRatio} from "@/tools/intersection";

export interface IRatioOptions{
    ratio:number,
    isVisible:boolean,
    exit?:boolean,
    invert?:boolean,
    thresholds?:number[]| number
}

export const iratio: Directive<HTMLElement,IRatioOptions> = (el:HTMLElement, binding) => {

    WatchIntersectionRatio(el,(ratio, isVisible) => {
        binding.value.ratio=ratio
        binding.value.isVisible=isVisible
        el.style.setProperty("--iratio",ratio.toString())

    },binding.value.thresholds,binding.value.invert,binding.value.exit)

}
