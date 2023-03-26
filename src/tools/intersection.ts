import toPx from "to-px";
import {GetScrollParent} from "@/tools";

/**
 * Watches a target element and calls the callback every time the element is stuck / unstuck when on position sticky
 * @param target The element to target.
 * @param callback The callback that is called.
 * @return The intersection observer used to watch the element
 */
export function WatchElementStuck(target:HTMLElement, callback: (is_stuck:boolean)=>void):IntersectionObserver {
    const style = window.getComputedStyle(target)

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
        callback(!isIntersecting)
    },{
        threshold:[1],
        root: GetScrollParent(target),
        rootMargin: `${top} ${right} ${bottom} ${left}`
    })
    observer.observe(target)
    return observer
}
