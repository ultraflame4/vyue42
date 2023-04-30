import type {Directive, Ref} from "vue";
import toPx from "to-px";
import {GetScrollParent} from "@/tools";
import {WatchElementStuck} from "@/tools/intersection";

export const vstuck: Directive<HTMLElement, { stuck: boolean }> =
    (el: HTMLElement, binding, vnode, prevVNode) => {
        if (prevVNode?.observer) {
            prevVNode?.observer.disconnect()
        }

        // @ts-ignore
        vnode.observer = WatchElementStuck(el, is_stuck => {
            el.toggleAttribute("stuck", is_stuck);
            if (binding.value) {
                binding.value.stuck = is_stuck
            }
        })

    }
