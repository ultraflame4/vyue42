import type {Directive, Ref} from "vue";
import toPx from "to-px";
import {GetScrollParent} from "@/tools";

export const vstuck: Directive<HTMLElement,{stuck:boolean}> = (el:HTMLElement, binding) => {
    const style = window.getComputedStyle(el)

    function formatVal(n: string) {
        let val = toPx(n)
        if (val)
            return `-${val+1}px`
        return "100%"
    }

    const top = formatVal(style.top)
    const bottom = formatVal(style.bottom)
    const left = formatVal(style.left)
    const right = formatVal(style.right)

    const observer = new IntersectionObserver(entries => {
        let isIntersecting = entries[0].isIntersecting

        if (binding.value) {
            binding.value.stuck=!isIntersecting
        }
        if (!isIntersecting){
            el.setAttribute("stuck","");
        }
        else {
            el.removeAttribute("stuck");
        }
    },{
        threshold:[1],
        root: GetScrollParent(el),
        rootMargin: `${top} ${right} ${bottom} ${left}`
    })
    el.removeAttribute("stuck")
    observer.observe(el)

}
