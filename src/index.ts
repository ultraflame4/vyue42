import type {App} from "vue";
import toPx from "to-px";

export {default as TestComponent} from "./components/TestComponent.vue"

const plugin ={
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
            console.log(`${top} ${right} ${bottom} ${left}`)
            const observer = new IntersectionObserver(entries => {
                console.log(entries[0])
                if (!entries[0].isIntersecting){
                    console.log("Stickied!",entries[0].intersectionRatio)
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

export default plugin
