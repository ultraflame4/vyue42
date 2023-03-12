import type {App} from "vue";
import toPx from "to-px";

export {default as TestComponent} from "./components/TestComponent.vue"

export const vyue42 ={
    install: (app:App)=>{
        app.directive('stuck',(el:HTMLElement, binding) => {
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
                if (!entries[0].isIntersecting){

                    el.setAttribute("stuck","")
                }
                else {
                    el.removeAttribute("stuck")
                }
            },{
                threshold:[1],
                rootMargin: `${top} ${right} ${bottom} ${left}`
            })

            observer.observe(el)

        })
    }
}


