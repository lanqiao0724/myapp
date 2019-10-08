import React from 'react'
import '../assets/style/week.css'
import axios from 'axios'
class Week extends React.Component{
    constructor(){
        super();
        this.state={
            rankList:[],
            resList:[]
        }
    }
    render(){
        const resList = this.state.resList;
        const rankList = this.state.rankList;
        console.log(rankList,6767)
        return(
           <div className={"rank_con"}>
               <ul className={"rank_top"}>
                   <li>
                       <div>
                           <img style={{width:"100%",height:"100%"}} src={resList[0]?"//www.lgstatic.com/"+resList[0].companyLogo:""} alt=""/>
                           <span>
                               <img src={require("../assets/img/top2.png")} alt=""/>
                           </span>
                       </div>

                       <p>
                           <b>
                               {
                                   resList[0]?resList[0].city:""
                               }
                           </b>
                           <img src={resList[0]?(resList[0].companyId % 2 === 0?require("../assets/img/manlogo.png"):require("../assets/img/womanlogo.png")):""} alt=""/>
                       </p>
                       <strong>4859个猫耳</strong>
                   </li>
                   <li>
                       <div>
                           <img style={{width:"100%",height:"100%"}} src={resList[0]?"//www.lgstatic.com/"+resList[1].companyLogo:""} alt=""/>
                           <p>
                               <img src={require("../assets/img/crown.png")} alt=""/>
                           </p>
                           <span>
                               <img src={require("../assets/img/top1.png")} alt=""/>
                           </span>
                       </div>

                       <p>
                           <b>{resList[0]?resList[1].city:""}</b>
                           <img src={resList[0]?(resList[1].companyId % 2 === 0?require("../assets/img/manlogo.png"):require("../assets/img/womanlogo.png")):""} alt=""/>
                       </p>
                       <strong>4859个猫耳</strong>
                   </li>
                   <li>
                   <div>
                       <img style={{width:"100%",height:"100%"}} src={resList[0]?"//www.lgstatic.com/"+resList[2].companyLogo:""} alt=""/>
                       <span>
                               <img src={require("../assets/img/top3.png")} alt=""/>
                           </span>
                   </div>

                   <p>
                   <b>{resList[0]?resList[2].city:""}</b>
                       <img src={resList[0]?(resList[2].companyId % 2 === 0?require("../assets/img/manlogo.png"):require("../assets/img/womanlogo.png")):""} alt=""/>
                   </p>
                   <strong>4859个猫耳</strong>
               </li>
               </ul>
               <ul className={"rank_list"}>
                   {/* <li>
                        <div>
                            <b>1</b>
                            <span className={"headLogo"}><img src="" alt=""/></span>
                            <span className={"nickname"}>最爱汉堡王</span>
                            <span className={"sexLogo"}><img src={require("../assets/img/womanlogo.png")} alt=""/></span>
                        </div>
                       <span>2454个猫耳</span>
                   </li> */}
                   {
                       rankList.map((v,i)=>(
                        <li key={i}>
                            <div>
                                <b>{i+4}</b>
                                <span className={"headLogo"}><img src={v?"//www.lgstatic.com/"+v.companyLogo:""} alt=""/></span>
                                <span className={"nickname"}>{v.positionName}</span>
                                <span className={"sexLogo"}><img src={v.companyId % 2 === 0?require("../assets/img/manlogo.png"):require("../assets/img/womanlogo.png")}alt=""/></span>
                            </div>
                            <span>2454个猫耳</span>
                        </li>
                       ))
                   }
               </ul>
           </div>
        )
    }
    async getData(){
        const {data}= await axios.post("/listmore.json?pageNo=1&pageSize=10");
        const result = data.content.data.page.result
        this.setState({
            rankList:result.splice(3,6),
            resList:result
        })
    }
    componentDidMount(){
        this.getData()
    }
}
export default Week;