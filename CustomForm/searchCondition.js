import React from 'react';
import {Input,Select, InputNumber, DatePicker,Form,Button} from 'antd';
import './index.less';
const { Option } = Select;
const all = {
    Customer:[{
        name:"客户编号",
        condition:"包含/等于",
        content:<Input style={{'width':130}} size={"small"}/>
    },{
        name:"客户名称",
        condition:"包含/等于",
        content:<Input style={{'width':130}} />
    },{
        name:"客户类型",
        condition:"等于",
        content:<Select style={{'width':200}} mode="multiple" getPopupContainer={triggerNode => triggerNode.parentElement}>
            <Option value='法人客户'>法人客户</Option>
            <Option value='自然人客户'>自然人客户</Option>
            <Option value='集团客户'>集团客户</Option>
            <Option value='第三方客户'>第三方客户</Option>
        </Select>
    },{
        name:"证件号码",
        condition:"包含/等于",
        content:<Input style={{'width':130}} />
    },{
        name:"业务属性",
        condition:"等于",
        content:<Select style={{'width':200}} mode="multiple" onChange={value => this.onChange(value,"select")} getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='评审对象'>评审对象</Option>
        <Option value='承租人'>承租人</Option>
        <Option value='担保方'>担保方</Option>
        <Option value='债权人'>债权人</Option>
        <Option value='债务人'>债务人</Option>
        <Option value='其他'>其他</Option>
    </Select>
    },{
        name:"省份",
        condition:"等于",
        content:<Select style={{'width':200}} mode="multiple" getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='评审对象'>评审对象</Option>
        <Option value='承租人'>承租人</Option>
        <Option value='担保方'>担保方</Option>
        <Option value='债权人'>债权人</Option>
        <Option value='债务人'>债务人</Option>
        <Option value='其他'>其他</Option>
    </Select>
    },{
        name:"城市",
        condition:"等于",
        content:<Select style={{'width':200}} mode="multiple" getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='评审对象'>评审对象</Option>
        <Option value='承租人'>承租人</Option>
    </Select>
    },{
        name:"业务经理",
        condition:"等于",
        content:<Input style={{'width':130}} />
    },{
        name:"事业部",
        condition:"等于",
        content:<Select style={{'width':200}} mode="multiple" getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='评审对象'>评审对象</Option>
        <Option value='承租人'>承租人</Option>
    </Select>
    }],
    credit:[{
        name:"授信类型",
        condition:"等于",
        content:<Select style={{'width':200}} mode="multiple" getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='客户授信'>客户授信</Option>
        <Option value='项目授信'>项目授信</Option>
        <Option value='厂商授信'>厂商授信</Option>
        <Option value='供应商授信'>供应商授信</Option>
    </Select>
    },{
        name:"业务条线",
        condition:"等于",
        content:<Select style={{'width':200}} mode="multiple" getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='客户授信'>客户授信</Option>
        <Option value='项目授信'>项目授信</Option>
        <Option value='厂商授信'>厂商授信</Option>
        <Option value='供应商授信'>供应商授信</Option>
    </Select>
    },{
        name:"评审对象",
        condition:"包含/等于",
        content:<Input style={{'width':130}} />
    },{
        name:"授信额度",
        condition:"包含/等于",
        content:<InputNumber style={{'width':130}} />
    },{
        name:"是否循环",
        condition:"等于",
        content:<Select style={{'width':100}} onChange={value => this.onChange(value,"select")} getPopupContainer={triggerNode => triggerNode.parentElement} >
        <Option value='是'>是</Option>
        <Option value='否'>否</Option>
    </Select>
    },{
        name:"授信有效期起",
        condition:"包含/等于",
        content:<DatePicker placeholder="选择日期" />
    },{
        name:"授信有效期止",
        condition:"包含/等于",
        content:<DatePicker placeholder="选择日期" onChange/>
    },{
        name:"可用额度",
        condition:"包含/等于",
        content:<InputNumber style={{'width':130}} onChange={value => this.onChange(value,"inputNumber")} />
    },{
        name:"额度状态",
        condition:"等于",
        content:<Select style={{'width':200}} mode="multiple" getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='客户授信'>客户授信</Option>
        <Option value='项目授信'>项目授信</Option>
    </Select>
    },{
        name:"业务经理",
        condition:"等于",
        content:<Input style={{'width':130}} />
    },{
        name:"事业部",
        condition:"等于",
        content:<Select style={{'width':200}} mode="multiple" getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='评审对象'>评审对象</Option>
        <Option value='承租人'>承租人</Option>
    </Select>
    }],
    project:[{
        name:"项目编号",
        condition:"包含/等于",
        content:<Input style={{'width':130}} />
    },{
        name:"项目名称",
        condition:"包含/等于",
        content:<Input style={{'width':130}} />
    },{
        name:"合同编号",
        condition:"包含/等于",
        content:<Input style={{'width':130}} />
    },{
        name:"产品类型",
        condition:"包含/等于",
        content:<Select style={{'width':100}} getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='评审对象'>评审对象</Option>
        <Option value='承租人'>承租人</Option>
    </Select>
    },{
        name:"授信类型",
        condition:"等于",
        content:<Select style={{'width':200}} mode="multiple" getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='客户授信'>客户授信</Option>
        <Option value='项目授信'>项目授信</Option>
        <Option value='厂商授信'>厂商授信</Option>
        <Option value='供应商授信'>供应商授信</Option>
    </Select>
    },{
        name:"业务条线",
        condition:"等于",
        content:<Select style={{'width':200}} mode="multiple" getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='评审对象'>评审对象</Option>
        <Option value='承租人'>承租人</Option>
    </Select>
    },{
        name:"评审对象",
        condition:"包含/等于",
        content:<Input style={{'width':130}} />
    },{
        name:"客户名称",
        condition:"包含/等于",
        content:<Input style={{'width':130}} />
    },{
        name:"业务经理",
        condition:"等于",
        content:<Input style={{'width':130}} />
    },{
        name:"事业部",
        condition:"等于",
        content:<Select style={{'width':200}} mode="multiple" getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='评审对象'>评审对象</Option>
        <Option value='承租人'>承租人</Option>
    </Select>
    },{
        name:"业务主状态",
        condition:"包含/等于",
        content:<Select style={{'width':100}} getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='客户授信'>客户授信</Option>
        <Option value='项目授信'>项目授信</Option>
    </Select>
    },{
        name:"或有状态",
        condition:"包含/等于",
        content:<Select style={{'width':100}}  getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='客户授信'>客户授信</Option>
        <Option value='项目授信'>项目授信</Option>
    </Select>
    }],
    money:[{
        name:"项目编号",
        condition:"包含/等于",
        content:<Input style={{'width':130}} />
    },{
        name:"项目名称",
        condition:"包含/等于",
        content:<Input style={{'width':130}} />
    },{
        name:"合同编号",
        condition:"包含/等于",
        content:<Input style={{'width':130}} />
    },{
        name:"产品类型",
        condition:"包含/等于",
        content:<Select style={{'width':100}} getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='评审对象'>评审对象</Option>
        <Option value='承租人'>承租人</Option>
    </Select>
    },{
        name:"业务条线",
        condition:"等于",
        content:<Select style={{'width':200}} mode="multiple" getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='评审对象'>评审对象</Option>
        <Option value='承租人'>承租人</Option>
    </Select>
    },{
        name:"客户名称",
        condition:"包含/等于",
        content:<Input style={{'width':130}} />
    },{
        name:"业务经理",
        condition:"等于",
        content:<Input style={{'width':130}} />
    },{
        name:"事业部",
        condition:"等于",
        content:<Select style={{'width':200}} mode="multiple" getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='评审对象'>评审对象</Option>
        <Option value='承租人'>承租人</Option>
    </Select>
    },{
        name:"业务主状态",
        condition:"包含/等于",
        content:<Select style={{'width':100}} getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='客户授信'>客户授信</Option>
        <Option value='项目授信'>项目授信</Option>
    </Select>
    },{
        name:"起租日",
        condition:"包含/等于",
        content:<DatePicker placeholder="选择日期"/>
    },{
        name:"计划收付日期",
        condition:"包含/等于",
        content:<DatePicker placeholder="选择日期" onChange={(date,value) => this.onChange(value,"datePicker")} />
    },{
        name:"核销状态",
        condition:"等于",
        content:<Select style={{'width':200}} mode="multiple" getPopupContainer={triggerNode => triggerNode.parentElement}>
        <Option value='评审对象'>评审对象</Option>
        <Option value='承租人'>承租人</Option>
    </Select>
    }]
}

class SearchConditionclass extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
            custom:all["Customer"],
        }
        console.log(this.state)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    changeCustom = (type) => {
        this.setState({
            custom:all[type]
        })
    }

    onChange = (value,type) => {
        switch(type){
            case "input":
                console.log(value.target.value);
                break;
            case "select":
                console.log(value)
                break;
            case "datePicker":
                console.log(value)
                break;
            case "inputNumer":
                console.log(value)
        }
    }

    render(){
        const {
            custom
        } = this.state;
        const { getFieldDecorator } = this.props.form;
        const tdtr = custom.map((item,index) => {
           if((index+1)%2 == 1){
                return <tr key={index+1}>
                <td>{custom[index].name}</td>
                <td>{custom[index].condition}</td>
                <td width={200}>
                    <Form.Item>
                        {getFieldDecorator(custom[index].name)(
                            custom[index].content
                        )}
                    </Form.Item>
                </td>
                {custom[index+1] ? 
                    <td>{custom[index+1].name}</td>
                  : ''}
                {custom[index+1] ? 
                    <td>{custom[index+1].condition}</td>
                  : ''}
                {custom[index+1] ? 
                    <td width={200}>
                    <Form.Item>
                        {getFieldDecorator(custom[index+1].name)(
                            custom[index+1].content
                        )}
                    </Form.Item>
                </td>
                  : ''}
            </tr>
            }
        })
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <table border="1" cellSpacing="0" bordercolor='gray'>
                        <tbody>
                            {tdtr}
                        </tbody>
                    </table>
                    <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

// const SearchCondition = Form.create()(SearchConditionclass);

export default SearchConditionclass;