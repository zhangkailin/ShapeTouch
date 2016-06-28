/*!
 * ShapeTouch JavaScript Library v1.0.0
 * https://github.com/zhangkailin/ShapeTouch
 * Email:46194470@qq.com
 *
 * Copyright AiSouNet
 * Released under the GNU General Public License Version 3
 * https://github.com/zhangkailin/ShapeTouch/blob/master/LICENSE
 * 
 * Date: 2016-06-28 10:00
 */
(function(king){
    console.info("组件信息:window.king.shape");
    console.debug("API:window.shape.touch(src,x,y,callback)");
    console.debug("    window.shape.touchPoint(src,point,callback)");
    console.debug("返回值：Object {touch: true, alpha: 255} Or Object {touch: false, alpha: 0}");
    console.log("https://github.com/zhangkailin/ShapeTouch");
    king.shape = king.shape||{};
    let shape = king.shape;
    shape.touch = function(src,x,y,callback){
        let img = new Image();
        img.onload = function(){
            let canvas = document.createElement("Canvas");
            let ctx=canvas.getContext("2d");
            ctx.drawImage(img,0,0);
            let imgData=ctx.getImageData(x,img.height-y,1,1);
            let alpha=imgData.data[3];
            if(callback)
                callback({touch:alpha>0,alpha:alpha});
        };
        img.src = src;
    };
    shape.touchPoint = function(src,point,callback){
        shape.touch(src,point.x,point.y,callback);
    };
}(window.king = window.king||{}));