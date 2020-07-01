import React from 'react';
import canvasUtil from './canvas';
import './index.css';

export default class HelloWord extends React.Component {
    componentDidMount(){
        this.draw();
    }
    draw = () => {
        const canvas = window.document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        canvasUtil.strokeRect(ctx,50,20,115,50);
        canvasUtil.drawText(ctx,'独立监督人',70,27);
        canvasUtil.drawText(ctx,'xxxx公司',75,47);
        canvasUtil.drawLineArrow(ctx,165,45,400,45);//独立监督人到主融资人
        canvasUtil.drawText(ctx,'监督项目运营',250,27,14);
        canvasUtil.drawLineArrow(ctx,160,70,160,220);//独立监督人到受托人
        canvasUtil.drawText(ctx,'监督',130,145,14);

        canvasUtil.strokeRect(ctx,400,20,115,50);
        canvasUtil.drawText(ctx,'主融资人',425,27);
        canvasUtil.drawText(ctx,'xxxx公司',425,47);

        canvasUtil.strokeRect(ctx,750,10,130,70);
        canvasUtil.drawText(ctx,'增信措施',785,17,18);
        canvasUtil.drawText(ctx,'担保人：xxx',758,37,14);
        canvasUtil.drawText(ctx,'抵质押品：xxx',758,57,14);
        canvasUtil.drawLineArrow(ctx,750,45,515,45);//增信措施到主融资人
        canvasUtil.drawText(ctx,'提供担保',600,27,14);

        canvasUtil.strokeRect(ctx,150,220,115,50);
        canvasUtil.drawText(ctx,'受托人（平',170,227);
        canvasUtil.drawText(ctx,'安资产）',178,247);
        canvasUtil.drawLineArrow(ctx,265,245,400,245);//受托人到产品
        canvasUtil.drawText(ctx,'发起',315,227,14);
        canvasUtil.drawPolyLineArrow(ctx,207,220,207,65,400,65);//受托人到主融资人
        canvasUtil.drawText(ctx,'签订合同',290,68,14);


        canvasUtil.strokeRect(ctx,400,220,115,50);
        canvasUtil.drawText(ctx,'产品',442,227);
        canvasUtil.drawText(ctx,'xxxxx',437,247);
        canvasUtil.drawLineArrow(ctx,457,220,457,70);//产品到主融资人
        canvasUtil.drawText(ctx,'投资',425,145,14);


        canvasUtil.strokeRect(ctx,630,220,115,50);
        canvasUtil.drawText(ctx,'托管行',665,227);
        canvasUtil.drawText(ctx,'xxxx银行',658,247);
        canvasUtil.drawPolyLineArrow(ctx,687,220,687,65,515,65);//拖管行到主融资人
        canvasUtil.drawText(ctx,'资金划拨',580,68,14);

        canvasUtil.strokeRect(ctx,50,420,115,50);
        canvasUtil.drawText(ctx,'受益人',85,427);
        canvasUtil.drawText(ctx,'xxxxx',86,447);
        canvasUtil.drawLineArrow(ctx,107,420,107,70);//受益人到独立监督人
        canvasUtil.drawText(ctx,'授权监督',50,235,14);

        canvasUtil.strokeRect(ctx,400,420,115,50);
        canvasUtil.drawText(ctx,'委托人',435,427);
        canvasUtil.drawText(ctx,'xxxxx',437,447);
        canvasUtil.drawLineArrow(ctx,457,420,457,270);//委托人到产品
        canvasUtil.drawText(ctx,'认购',425,345,14);
        canvasUtil.drawLineArrow(ctx,400,445,165,445);//委托人到受益人
        canvasUtil.drawText(ctx,'指定',270,428,14);
        canvasUtil.drawPolyLineArrow(ctx,400,425,207,425,207,270);//委托人到受托人
        canvasUtil.drawText(ctx,'设立投资计划',210,330,14);
        canvasUtil.drawPolyLineArrow(ctx,515,425,687,425,687,270);//委托人到托管行
        canvasUtil.drawText(ctx,'资金托管',580,407,14);

    }
    render() {
        return (
            <React.Fragment>
                <canvas id='canvas' height="700" width="1500"></canvas>
            </React.Fragment>
        );
    }
}

