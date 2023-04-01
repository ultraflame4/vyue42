import toPx from "to-px";
import {GetScrollParent} from "@/tools";

/**
 * Watches a target element and calls the callback every time the element is stuck / unstuck when on position sticky
 * @param target The element to target.
 * @param callback The callback that is called.
 * @return The intersection observer used to watch the element
 */
export function WatchElementStuck(target: HTMLElement, callback: (is_stuck: boolean) => void): IntersectionObserver {
    const style = window.getComputedStyle(target)

    function formatVal(n: string) {
        let val = toPx(n)
        if (val)
            return `-${val + 1}px`
        else if (n!=='auto') {
            return "-1px"
        }
        return "100%";
    }

    const top = formatVal(style.top)
    const bottom = formatVal(style.bottom)
    const left = formatVal(style.left)
    const right = formatVal(style.right)
    const scrollParent = GetScrollParent(target)

    const observer = new IntersectionObserver(entries => {
        let isIntersecting = entries[0].isIntersecting

        callback(!isIntersecting)
    }, {
        threshold: [1],
        root: scrollParent ?? undefined,
        rootMargin: `${top} ${right} ${bottom} ${left}`
    })
    observer.observe(target)
    return observer
}

const defaultThresholds: number[] = []
for (let i = 0; i < 100; i++) {
    defaultThresholds.push(i / 100)
}

/**
 * Watches a target element and calls the callback everytime it's intersection ratio is called
 * @param target Target element to watch
 * @param callback Callback to call
 * @param thresholds Thresholds passed to the intersection observer
 * @param invert Whether to invert the ratio such that the ratio is at 0 when fully visible and -1 when not
 * @param exit Whether to make the ratio range from -1 to 1, (0 to 1 as its exits to the top)
 * @return The intersection observer used to watch the element
 */
export function WatchIntersectionRatio(target: HTMLElement,
                                       callback: (ratio: number, isVisible: boolean) => void,
                                       thresholds?: number[] | number,
                                       invert: boolean = true,
                                       exit: boolean = true
): IntersectionObserver {
    const observer = new IntersectionObserver(entries => {
        let e = entries[0]
        let isNegative = (e.boundingClientRect.y < 0 && exit) ? -1 : 1

        let toInvert = invert ? 1 : 0
        callback((e.intersectionRatio - toInvert) * isNegative, e.isIntersecting)
    }, {
        threshold: thresholds ?? defaultThresholds,
        root: GetScrollParent(target),
    })

    observer.observe(target)
    return observer
}
