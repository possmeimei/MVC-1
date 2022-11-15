import './app1.css'
import $ from 'jquery'
// 数据相关放到M
const m ={
    // 初始化数据
    data:{
        n : parseInt(localStorage.getItem('n'))
    }
}
// 视图相关的放到V
const v = {
    el: null,
    container: null,
    html :`
        <div>
            <div class="output">
                <span id="number">{{n}}</span>
            </div>
            <div class="actions">
                <button id="add1">+1</button>
                <button id="minus1">-1</button>
                <button id="mul2">*2</button>
                <button id="divide2">÷2</button>
            </div>
        </div>
`,
    init(container) {
            v.container = $(container)
            v.render()
        },
    render(){
        if (v.container.children.length === 0){
           $(v.html.replace('{{n}}',m.data.n)).prependTo(v.container)
        }else {
            v.container.empty()
            $(v.html.replace('{{n}}',m.data.n)).prependTo(v.container)
        }
    }
}
//其他都到C
const c = {
    init(container){
        v.init(container)
        c.bindEvents()
    },
    bindEvents(){
        v.container.on('click','#add1',()=>{
            m.data.n += 1
            v.render()
        })
        v.container.on('click','#minus1',()=>{
            m.data.n -= 1
            v.render()
        })
        v.container.on('click','#mul2',()=>{
            m.data.n *= 2
            v.render()
        })
        v.container.on('click','#divide2',()=>{
            m.data.n /= 2
            v.render()
        })
    },
}
export default c


