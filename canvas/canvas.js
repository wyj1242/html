//绘制矩形
const strokeRect = (ctx,x,y,width,height,strokeStyle = '#000',lineWidth = 1) => {
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.translate(0.5, 0.5);
    ctx.strokeRect(x,y,width,height);
}
/**
 * 
 *  @param ctx canvas上下文
 *  @param text 需要绘制的文字文字
 *  @param x 轴 坐标
 *  @param y 轴 坐标
 *  @param size 字体大小
 *  @param align 字体对齐方式
 *  @param color 字体颜色
 *  @param baseline 字体基线对齐方式
 *  @param fontWeight 字体粗细
 *
 */
const drawText = (ctx, text, x, y, size = '16', align = 'left', color = '#000', baseline = 'top', fontWeight = 'normal') => {
    size = parseInt(size)
    let font = `${fontWeight} ${size}px sans-serif`;
    ctx.font = font;
    ctx.textAlign = align;
    ctx.fillStyle = color;
    ctx.textBaseline = baseline;
    ctx.fillText(text, x, y);
}

/**
 * @param ctx canvas上下文
 * @param text 需要绘制的文字文字
 * @param x x轴 坐标值    
 * @param y y轴 坐标值
 * @param lineHeight 行高
 * @param maxW  文字最宽值
 * @param align 文字对齐方式
 * @param color 字体颜色
 * @param baseline 字体基线对齐方式
 * @param fontWeight 字体粗细
 *
 */
const drawBreakText = (ctx, text, x, y, size, maxWidth, lineHeight, align = 'center', color = '#333333', baseline = 'top', fontWeight = 'normal') => {
    if (typeof text != 'string' || typeof x != 'number' || typeof y != 'number') {
        return;
    }
    
    // var ctx = this;
    // var canvas = this.canvas;
    let font = `${fontWeight} ${size}px sans-serif`;
    ctx.font = font;
    ctx.textAlign = align;
    ctx.fillStyle = color;
    ctx.textBaseline = baseline;
    
    // if (typeof maxWidth == 'undefined') {
    //     maxWidth = (canvas && canvas.width) || 300;
    // }
    // if (typeof lineHeight == 'undefined') {
    //     lineHeight = (canvas && parseInt(window.getComputedStyle(canvas).lineHeight)) || parseInt(window.getComputedStyle(document.body).lineHeight);
    // }
    
    // 字符分隔为数组
    var arrText = text.split('');
    var line = '';
    
    for (var n = 0; n < arrText.length; n++) {
        var testLine = line + arrText[n];
        var metrics = ctx.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = arrText[n];
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    console.log(line,x,y)
    ctx.fillText(line, x, y);
}

/**
 * 绘制带有箭头的直线
 * @param ctx canvas画布变量
 * @param fromX/fromY 起点坐标
 * @param toX/toY 终点坐标
 * @param color 线与箭头颜色
 **/
const drawLineArrow = (ctx, fromX, fromY, toX, toY, color = "#000") => {
    var headlen = 8;//自定义箭头线的长度
    var theta = 45;//自定义箭头线与直线的夹角，个人觉得45°刚刚好
    var arrowX, arrowY;//箭头线终点坐标
    // 计算各角度和对应的箭头终点坐标
    var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI;
    var angle1 = (angle + theta) * Math.PI / 180;
    var angle2 = (angle - theta) * Math.PI / 180;
    var topX = headlen * Math.cos(angle1);
    var topY = headlen * Math.sin(angle1);
    var botX = headlen * Math.cos(angle2);
    var botY = headlen * Math.sin(angle2);
    ctx.beginPath();
    //画直线
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);

    arrowX = toX + topX;
    arrowY = toY + topY;
    //画上边箭头线
    ctx.moveTo(arrowX, arrowY);
    ctx.lineTo(toX, toY);
    ctx.strokeStyle = color;
    ctx.stroke();

    arrowX = toX + botX;
    arrowY = toY + botY;
    //画下边箭头线
    ctx.lineTo(arrowX, arrowY);
    
    ctx.fillStyle = color;
    ctx.fill();
}

/**
 * 绘制带有箭头的折线
 * @param ctx canvas画布变量
 * @param fromX/fromY 起点坐标
 * @param toX/toY 终点坐标
 * @param color 线与箭头颜色
 **/
const drawPolyLineArrow = (ctx, fromX, fromY, centerX, centerY, toX, toY, color = "#000") => {
    var headlen = 8;//自定义箭头线的长度
    var theta = 45;//自定义箭头线与直线的夹角，个人觉得45°刚刚好
    var arrowX, arrowY;//箭头线终点坐标
    // 计算各角度和对应的箭头终点坐标
    var angle = Math.atan2(centerY - toY, centerX - toX) * 180 / Math.PI;
    var angle1 = (angle + theta) * Math.PI / 180;
    var angle2 = (angle - theta) * Math.PI / 180;
    var topX = headlen * Math.cos(angle1);
    var topY = headlen * Math.sin(angle1);
    var botX = headlen * Math.cos(angle2);
    var botY = headlen * Math.sin(angle2);
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(centerX, centerY);
    //画直线
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(toX, toY);

    arrowX = toX + topX;
    arrowY = toY + topY;
    //画上边箭头线
    ctx.moveTo(arrowX, arrowY);
    ctx.lineTo(toX, toY);
    ctx.strokeStyle = color;
    ctx.stroke();

    arrowX = toX + botX;
    arrowY = toY + botY;
    //画下边箭头线
    ctx.lineTo(arrowX, arrowY);
    
    ctx.fillStyle = color;
    ctx.fill();
}

const canvasUtil = {
    strokeRect:strokeRect,
    drawText:drawText,
    drawBreakText:drawBreakText,
    drawLineArrow:drawLineArrow,
    drawPolyLineArrow:drawPolyLineArrow,
}
export default canvasUtil;