import React from 'react';
import {Input, Button,Icon, Divider,Select} from 'antd';
import './index.less';
const { Option } = Select;
const all  = {
    Customer:[{
        name:"客户编号",
        flag:false,
        key:"custNo"
    },{
        name:"客户名称",
        flag:false,
        key:"custName"
    },{
        name:"客户类型",
        flag:false,
        key:"custType"
    },{
        name:"证件类型",
        flag:false,
        key:"custType"
    },{
        name:"证件号码",
        flag:false,
        key:"certId"
    },{
        name:"业务属性",
        flag:false,
        key:"businessProperty"
    },{
        name:"国标行业",
        flag:false,
        key:"industry"
    },{
        name:"业务经理",
        flag:false,
        key:"createdUser"
    },{
        name:"事业部",
        flag:false,
        key:"createdOrg"
    },{
        name:"省份",
        flag:false,
        key:"province"
    },{
        name:"城市",
        flag:false,
        key:"city"
    },{
        name:"机构性质",
        flag:false,
        key:"enterpriseNature"
    },{
        name:"税务资质",
        flag:false,
        key:"taxQualification"
    },{
        name:"注册资本",
        flag:false,
        key:"registerCapital"
    },{
        name:"成立时间",
        flag:false,
        key:"establishDate"
    },{
        name:"法定代表人",
        flag:false,
        key:"artificialPerson"
    },{
        name:"实际控制人",
        flag:false,
        key:"actualController"
    }
    // ,{
    //     name:"婚姻状况",
    //     flag:false,
    //     key:"customID"
    // },{
    //     name:"性别",
    //     flag:false,
    //     key:"customID"
    // },{
    //     name:"出生日期",
    //     flag:false,
    //     key:"customID"
    // },{
    //     name:"证件起始日",
    //     flag:false,
    //     key:"customID"
    // },{
    //     name:"证件到期日",
    //     flag:true,
    //     key:""
    // },{
    //     name:"证件地址",
    //     flag:false,
    //     key:"customID"
    // },{
    //     name:"手机号码",
    //     flag:false,
    //     key:"customID"
    // },{
    //     name:"电子邮件",
    //     flag:false,
    //     key:"customID"
    // }
    ],
    credit:[{
        name:"客户编号",
        flag:false,
        key:"customID"
    },{
        name:"客户名称",
        flag:true,
        key:""
    },{
        name:"客户类型",
        flag:false,
        key:"customID"
    },{
        name:"证件类型",
        flag:false,
        key:"customID"
    },{
        name:"证件号码",
        flag:false,
        key:"customID"
    },{
        name:"业务属性",
        flag:false,
        key:"customID"
    },{
        name:"国标行业",
        flag:true,
        key:""
    },{
        name:"业务经理",
        flag:false,
        key:"customID"
    },{
        name:"事业部",
        flag:false,
        key:"customID"
    },{
        name:"省份",
        flag:false,
        key:"customID"
    },{
        name:"城市",
        flag:false,
        key:"customID"
    },{
        name:"机构性质",
        flag:true,
        key:""
    },{
        name:"税务资质",
        flag:false,
        key:"customID"
    },{
        name:"注册资本",
        flag:false,
        key:"customID"
    },{
        name:"成立时间",
        flag:false,
        key:"customID"
    },{
        name:"法定代表人",
        flag:false,
        key:"customID"
    },{
        name:"实际控制人",
        flag:true,
        key:""
    },{
        name:"婚姻状况",
        flag:false,
        key:"customID"
    },{
        name:"性别",
        flag:false,
        key:"customID"
    }],
    project:[{
        name:"客户编号",
        flag:false,
        key:"customID"
    },{
        name:"客户名称",
        flag:true,
        key:""
    },{
        name:"客户类型",
        flag:false,
        key:"customID"
    },{
        name:"证件类型",
        flag:false,
        key:"customID"
    },{
        name:"证件号码",
        flag:false,
        key:"customID"
    },{
        name:"业务属性",
        flag:false,
        key:"customID"
    },{
        name:"国标行业",
        flag:true,
        key:""
    },{
        name:"业务经理",
        flag:false,
        key:"customID"
    },{
        name:"事业部",
        flag:false,
        key:"customID"
    },{
        name:"省份",
        flag:false,
        key:"customID"
    },{
        name:"城市",
        flag:false,
        key:"customID"
    },{
        name:"机构性质",
        flag:true,
        key:""
    },{
        name:"税务资质",
        flag:false,
        key:"customID"
    },{
        name:"注册资本",
        flag:false,
        key:"customID"
    },{
        name:"成立时间",
        flag:false,
        key:"customID"
    },{
        name:"法定代表人",
        flag:false,
        key:"customID"
    },{
        name:"实际控制人",
        flag:true,
        key:""
    },{
        name:"婚姻状况",
        flag:false,
        key:"customID"
    },{
        name:"性别",
        flag:false,
        key:"customID"
    }],
    money:[{
        name:"客户编号",
        flag:false,
        key:"customID"
    },{
        name:"客户名称",
        flag:true,
        key:""
    },{
        name:"客户类型",
        flag:false,
        key:"customID"
    },{
        name:"证件类型",
        flag:false,
        key:"customID"
    },{
        name:"证件号码",
        flag:false,
        key:"customID"
    },{
        name:"业务属性",
        flag:false,
        key:"customID"
    },{
        name:"国标行业",
        flag:true,
        key:""
    },{
        name:"业务经理",
        flag:false,
        key:"customID"
    },{
        name:"事业部",
        flag:false,
        key:"customID"
    },{
        name:"省份",
        flag:false,
        key:"customID"
    },{
        name:"城市",
        flag:false,
        key:"customID"
    },{
        name:"机构性质",
        flag:true,
        key:""
    },{
        name:"税务资质",
        flag:false,
        key:"customID"
    },{
        name:"注册资本",
        flag:false,
        key:"customID"
    },{
        name:"成立时间",
        flag:false,
        key:"customID"
    },{
        name:"法定代表人",
        flag:false,
        key:"customID"
    },{
        name:"实际控制人",
        flag:true,
        key:""
    },{
        name:"婚姻状况",
        flag:false,
        key:"customID"
    },{
        name:"性别",
        flag:false,
        key:"customID"
    }]
}     


export default class ListOUt extends React.Component{
    constructor(props){
        super(props);
            
        this.state = {
            able:all.Customer,
            selected:[],
            num:0,
            defaultselected:[]
        }
    }

    //数组去重
    unique = (oldArr) => {
        const allArr = [];
        for(var i=0;i<oldArr.length;i++){
      　　  var flag = true;
      　　  for(var j=0;j<allArr.length;j++){
      　　　　  if(oldArr[i].key == allArr[j].key){
      　　　　　　  flag = false;
      　　　　  };
      　　  }; 
      　　  if(flag){
      　　　　  allArr.push(oldArr[i]);
      　　  };
        };
        return allArr;
    }

    //根据选择的查询维度改变对应的列表输出项
    changeAble = (type) => {
        this.setState({
            able:all[type]
        })
    }

    //将左侧选中的赋值给已选择项
    selectAble = () => {
        const {
            able,
            selected
        } = this.state;
        for(let i = 0;i < able.length;i++){
            if(able[i].flag){
                able[i].flag2 = false;
                selected.push(able[i]);
            }
        }
        const newSelected = this.unique(selected);
        this.setState({
            selected:newSelected,
            defaultselected:newSelected
        })
    }

    //将全部选项赋值给已选项
    selectAllAble = () => {
        this.setState({
            selected:this.state.able,
            defaultselected:this.state.able
        })
    }

    //将选中的已选择项添加进选中数组中
    selectNoAble = (item,index) => {
        const {
            selected,
            able
        } = this.state;
        selected[index].flag2 = !selected[index].flag2;
        this.setState({
            selected
        })
    }

    //清除所有的已选择项
    noAllselectAble = () => {
        this.setState({
            selected:[],
            defaultselected:[]
        })
    }

    //清楚选中的已选择项
    noselectAble = () => {
        const selected = [];
        this.state.selected.map((item) => {
            if(!item.flag2){
                selected.push(item)
            }
        })
        console.log(selected)
        this.setState({
            selected,
            defaultselected:selected
        })
    }

    //选择排序类型
    changeUpOrDown = (e,item,index,type) => {
        e.stopPropagation()
        const {
            selected
        }=this.state;
        selected[index].sort = selected[index].sort == type ?  '' : type;
        console.log(selected)
        this.setState({
            selected
        })
    }

    //向下或者向上挪位置
    changeSort = (e,item,index,type) => {
        e.stopPropagation()
        const {
            selected
        }=this.state;
        if(type == 'up'){
            const temp = item;
            selected[index] = selected[index - 1];
            selected[index - 1] = temp;
        }else if(type == 'down'){
            const temp = item;
            selected[index] = selected[index + 1];
            selected[index + 1] = temp;
        }
        this.setState({
            selected
        })
    }

    //取消左侧已选择的部分
    cancle = () => {
        const able = this.state.able.map((item,index) => {
            item.flag = false;
            return item
        })
        this.setState({
            able,
            num:0
        })
    }

    //搜索框
    onInput = (e,type) => {
        const value = e.target.value.split("");
        if(type == 'able'){
            if(value.length == 0){
                this.setState({
                    able:all[this.props.type]
                });
                return
            }
            const able = [];
            for(let i = 0;i < all[this.props.type].length;i++){
                var flag = false;
                for(let j = 0;j < value.length;j++){
                    if(all[this.props.type][i].name.indexOf(value[j]) != -1){
                        flag = true;
                        break
                    } 
                }
                if(flag){
                    able.push(all[this.props.type][i]) 
                }
            }
            this.setState({
                able
            })
        }else if(type == 'selected'){
            if(value.length == 0){
                this.setState({
                    selected:this.state.defaultselected
                });
                return
            }
            const selected = [];
            for(let i = 0;i < this.state.defaultselected.length;i++){
                var flag = false;
                for(let j = 0;j < value.length;j++){
                    if(this.state.defaultselected[i].name.indexOf(value[j]) != -1){
                        flag = true;
                        break
                    } 
                }
                if(flag){
                    selected.push(this.state.defaultselected[i]) 
                }
            }
            this.setState({
                selected
            })
        }
    }

    render(){
        const {
            num,
            selected,
            able
        } = this.state;
        const prefix = 'ro';
        const ableItem = this.state.able.map((item,index) => {
            return <div key={index} style={{"background":item.flag ? "#EDEFFF" : "#FFFFFF"}} onClick={() => {
                const {
                    able,
                } = this.state;
                able[index].flag = !able[index].flag;
                let num = 0;
                able.map((item1) => {
                    if(item1.flag){
                        num++
                    }
                })
                this.setState({
                    able,
                    num
                })
            }}>
                {item.name}
            </div>
        })
        const selectedItem = this.state.selected.map((item,index) => {
            return <div key={index} onClick={() => this.selectNoAble(item,index)} style={{"background":!item.flag2 ? "#FFFFFF" : "#EDEFFF"}}>
                <span>{item.name}</span>
                {index != 0  ? <Icon type="arrow-up" onClick={e => this.changeSort(e,item,index,"up")} /> : ''}
                {index != this.state.selected.length - 1  ? <Icon type="arrow-down" onClick={e => this.changeSort(e,item,index,"down")} /> : ''}
                <Button  onClick={e => this.changeUpOrDown(e,item,index,"Asc")}style={{"color":item.sort == "Asc" ? "blue" : "black",background:'#f8f8f8'}} >升序 </Button>
                <Button  onClick={e => this.changeUpOrDown(e,item,index,"Desc")} style={{"color":item.sort == "Desc" ? "blue" : "black",background:'#f8f8f8'}} >降序 </Button>
                {/* <span type="minus" onClick={e => this.changeSort(e,item,index,"no")} style={{"color":item.sort == "no" ? "blue" : "black"}} > </span> */}
            </div>
        })
        return(
            <div className={`${prefix}-List`}>
                <div className={`${prefix}-List-able`}>
                    <p>可选字段列表</p>
                    <div className={`${prefix}-List-able-content`}>
                        <div className={`${prefix}-List-able-content-total`}>
                            <Icon type="minus-square" style={{color:"#3382fa",marginRight:5}} onClick={this.cancle}/>
                            已选:{num}/{able.length}
                        </div>
                        <div className={`${prefix}-List-able-content-input`}>
                            <Input style={{"width":260}}  suffix={ <Icon type="search" />} onChange={e => this.onInput(e,"able")} />
                        </div>
                        <div className={`${prefix}-List-able-content-scroll`}>
                            {ableItem}
                        </div>
                    </div>
                </div>
                <div className={`${prefix}-List-center`}>
                    <div className={`${prefix}-List-center-dbleftIcon`} onClick={this.noAllselectAble}>
                        <Icon type="double-left" />
                    </div>
                    <div className={`${prefix}-List-center-leftIcon`} onClick={this.noselectAble}>
                        <Icon type="left"/>
                    </div>
                   <div className={`${prefix}-List-center-rightIcon`} onClick={this.selectAble}>
                        <Icon type="right" />
                   </div>
                   <div className={`${prefix}-List-center-dbrightIcon`} onClick={this.selectAllAble}>
                        <Icon type="double-right" />
                    </div>
                </div>
                <div className={`${prefix}-List-abled`}>
                    <p>已选字段列表</p>
                    <div className={`${prefix}-List-abled-content`}>
                        <div className={`${prefix}-List-abled-content-input`}>
                            <Input style={{"width":260}}  suffix={ <Icon type="search" />} onChange={e => this.onInput(e,"selected")} />
                        </div>
                        <div className={`${prefix}-List-abled-content-scroll`}>
                            {selectedItem}  
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}