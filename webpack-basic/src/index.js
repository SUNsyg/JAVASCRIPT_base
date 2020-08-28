import './style.css'
import './style2.css'
// const style = require('./style.css')
// const style = require('./style.css')
import Icon from './icon.png' // 1. 引入图片

function component() {
    var element = document.createElement('div');

    element.innerHTML = '孔子曰：中午不睡，下午崩溃!孟子曰：孔子说的对!';
    element.classList.add('color_red') // 2. 添加类名

    var img = new Image(200, 200)
    img.src = Icon

    element.appendChild(img);

    return element;
}


document.body.appendChild(component());
