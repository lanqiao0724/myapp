import React from 'react';
import './assets/style/base.css'
import './assets/style/inx.css'
import Week from './components/Week'
import Total from './components/Total'
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            switchTab:1
        }
    }
    render(){
        return (
            <div className="container">
                <header>
                    <div className="header_con">
                        <p>
                            <i className="iconfont iconxiangzuo"></i>
                            <b>微光最萌</b>
                        </p>
                        <p>这里是收到猫耳最多的小可爱们~</p>
                        <p>
                            <span ref={"week"} id={this.state.switchTab===1?"activBtn":""}>本周</span>
                            <span ref={"total"} id={this.state.switchTab===2?"activBtn":""}>累计</span>
                        </p>
                        <p>
                            <img src={require("./assets/img/cat.png")} alt={""} />
                        </p>
                    </div>
                </header>
                <section ref={"section"}>
                    {
                        this.state.switchTab === 1?<Week/>:<Total/>
                    }
                </section>
                <footer>
                    <span style={{display:this.state.switchTab ===1?"block":"none"}}></span>
                    <span style={{display:this.state.switchTab ===2?"block":"none"}}></span>
                </footer>
            </div>
        )
    }
    eventBind(){
        this.refs.week.addEventListener("click",()=>{
            this.setState({
                switchTab:1
            })
        })
        this.refs.total.addEventListener("click",()=>{
            this.setState({
                switchTab:2
            })
        })
    }
    slideTab(){
        let startX,endX;
        const _section =this.refs.section;
        _section.addEventListener("touchstart",(e)=>{
            e.preventDefault();
            startX = e.changedTouches[0].pageX
        })
        _section.addEventListener("touchend",(e)=>{
            e.preventDefault();
            endX = e.changedTouches[0].pageX;
            //console.log(startX,endX);
            if(endX - startX > 10){
                this.setState({
                    switchTab:1
                })
            }
            if(endX - startX < -10){
                this.setState({
                    switchTab:2
                })
            }
        })
    }
    componentDidMount(){
        this.eventBind();
        this.slideTab();
    }
}
export default App;
