import React from 'react';
import { Input, Form, Select,Button } from 'antd';
// import {Fieldset} from 'roface';
import './index.less';
import SearchCondition from './searchCondition';
import ListOUt from './ListOUt';
import {get} from '../../../src/lib/rest'
const { Option } = Select;

class CustomFormClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'Customer'
        }
    }

    handleChange = (value) => {
        console.log(`selected ${value}`);
        this.setState({
            name:value
        })
        this.SearchCondition.changeCustom(value);
        this.ListOUt.changeAble(value);
    }

    search = () => {
        console.log(this.ListOUt.state);
        const {
            selected
        } = this.ListOUt.state;
        const {
            name
        } = this.state;
        let parmas = {
            dimension:{
                name:name,
                selectItem:{

                }
            },
            pageIndex:1,
            pageSize:10
        }
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        for(let i = 0;i < selected.length;i++){
            parmas.dimension.selectItem[selected[i].key] = {
                sortNo:i + 1,
                order:"Asc"
            }
        }
        parmas.dimension = JSON.stringify(parmas.dimension)
        console.log(parmas)
        get("/report/customer",parmas).then((data) => {

        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        const prefix = 'ro';
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return (
            <div className={`${prefix}-Header`}>
                <Form {...formItemLayout}>
                    <Form.Item label="查询维度::">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入查询维度',
                                },
                            ],
                            initialValue:"Customer"
                        })(
                                 <Select
                                    style={{ width: 120 }}
                                    onChange={this.handleChange}
                                    getPopupContainer={triggerNode => triggerNode.parentElement}
                                >
                                    <Option value="Customer">客户</Option>
                                    <Option value="credit">授信</Option>
                                    <Option value="project">项目</Option>
                                    <Option value="money">款项</Option>
                                </Select>
                        )}
                    </Form.Item>
                    <Form.Item label="查询方案名称::">
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入查询方案名称',
                                }
                            ],
                        })(<Input style={{"width":200}} />)}
                    </Form.Item>
                </Form>
                <div className={`${prefix}-search`}>
                    <Button onClick={this.search}>实时查询</Button>
                    <Button style={{"marginLeft":5}}>添加查询任务</Button>
                    <Button style={{"marginLeft":5}}>查询条件清空</Button>
                </div>
                {/* <Fieldset legend="查询条件" showArrow={true}> */}
                    <SearchCondition ref={instance => this.SearchCondition = instance} form={this.props.form}/>
                {/* </Fieldset> */}
                {/* <Fieldset legend="列表输出项" showArrow={true}> */}
                    <ListOUt ref={instance => this.ListOUt = instance} type={this.state.name} />
                {/* </Fieldset> */}
            </div>
        );
    }
}

const CustomForm = Form.create()(CustomFormClass);

export default CustomForm;
