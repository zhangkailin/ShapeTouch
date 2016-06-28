# ShapeTouch
ShapeTouch 该Javascript库用于实现H5中不规则图形按钮可点击区域的判断，特别用于H5游戏中的某些场景<br/>
This Library used for testing the alpha value of a pixel on the irregular image, for example, the irregular button touch on the H5Game.<br/>
有问题可联系QQ：46194470

API 调用接口
-------------------
```javascript
king.shape.touch(src,x,y,callback)
king.shape.touchPoint(src,point,callback)
```
point对象示例：<br/>
The point object like this: 
```javascript
{x:9,y:25}
```
Return 返回值
-------------------
```javascript
Object {touch: true, alpha: 255} Or Object {touch: false, alpha: 0}
```
touch为true时，该点非透明，点击生效，alpha值大于0，touch为false时，该点透明，alpha为0.<br/>
（开发者也可以根据alpha的值自行判断点击是否生效）<br/>
The touch is true, the point is not transparent, the alpha value is greater than 0.

Use 使用
-------------------
Html：添加引用后直接使用
```html
<script type="text/javascript" src="ShapeTouch-min.js"></script>
<script type="text/javascript">
(function() {
  king.shape.touch('images/logo.png',20,40,function(result){
    console.log(result);
  });
});
</script>
```
Cocos creator：将文件放入assets即可，不需require
```javascript
this.node.on('touchend', function (event) {
  var touchPoint = event.getLocation();
  var node = event.currentTarget;
  var nodePoint = node.convertToNodeSpace(touchPoint);
  var nodeSrc = node.getComponent(cc.Sprite).spriteFrame.getTexture().url;
  king.shape.touchPoint(nodeSrc,nodePoint,function(result){
    console.log(result);
  });
}, this);
```
