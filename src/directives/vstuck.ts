import type {Directive, Ref} from "vue";
import toPx from "to-px";
import {GetScrollParent} from "@/tools";
import {WatchElementStuck} from "@/tools/intersection";

export const vstuck: Directive<HTMLElement,{stuck:boolean}> = (el:HTMLElement, binding) => {

    WatchElementStuck(el, is_stuck => {
        el.toggleAttribute("stuck",is_stuck);
        binding.value.stuck=is_stuck
    })

}
