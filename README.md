# react-basic-study
[
](https://www.bilibili.com/video/av798144910)
# 学习内容
**学习链接**[**https://www.bilibili.com/video/av798144910**](https://www.bilibili.com/video/av798144910)

- React 基础
- React 脚手架
- React-Router
- PubSub
- Redux
- Ant-Design
- React 扩展知识
# TodoList Demo
https://sean-lgt.github.io/react-basic-study/
# React基础
## React简介
> React，是用于构建用户界面的 Javascript 库，也就是说，是一个将数据渲染成 HTML 视图的开源 Javascript 库。由 Facebook 于2011年诞生，2013年宣布开源。

学习 React 需要具备的前置知识：

- 判断 this 的指向 （[https://juejin.cn/post/6844903746984476686](https://juejin.cn/post/6844903746984476686)）
- class 类  （[https://es6.ruanyifeng.com/#docs/class](https://es6.ruanyifeng.com/#docs/class)）
- ES6 语法  ([https://juejin.cn/post/6844903775329583112](https://juejin.cn/post/6844903775329583112))
- npm 包管理器  ([http://nodejs.cn/learn/an-introduction-to-the-npm-package-manager](http://nodejs.cn/learn/an-introduction-to-the-npm-package-manager))
- 原型、原型链  ([https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain))
- 数组常用方法  ([https://juejin.cn/post/6844904194919366669](https://juejin.cn/post/6844904194919366669))
- 模块化  （[https://segmentfault.com/a/1190000023711059](https://segmentfault.com/a/1190000023711059)）
## React优缺点
### 为什么要学（原生JS痛点）

- 原生 Javascript **操作 DOM 繁琐，效率低** （DOM-API 操作 UI）
- 使用 Javascript 直接操作 DOM，浏览器会进行大量的**重绘重排**
- 原生 Javascript 没有**组件化**编码方案，代码复用率低
### 优点

- 采用**组件化**模式，**声明式编码**，提高开发效率及组件复用率
- 在 React Native 中可以使用 React 语法进行**移动端开发**
- 使用**虚拟DOM**+优秀的**dIffing算法**，尽量减少与真实DOM的交互



### 缺点

- 陡峭的学习曲线
- 由于复杂的设置过程，属性，功能和结构，它需要深入的知识来构建应用程序。
- 对 JS 基础知识有较高的要求



## Hello Word 入门教程
**基础准备**

- 入门学习类似学习 JQuery，新建 HTML 后引入 JQ
- 引入 React 核心库`react.development.js`
- 引入 React 扩展库，`react-dom.development.js`,用于支持 React 操作 DOM
- 引入 Babel，`babel.min.js`,主要用于将 JSX 转为 JS，ES6 转为 ES5
```html
 <!-- 准备好一个容器 -->
  <div id="test"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react扩展库 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel 用于将ES5转为ES6 jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>

  <!-- 此处一定要写babel 因为要写的是 jsx -->
  <script type="text/babel">
    // 1、创建虚拟DOM
    const VDOM = <h1>Hello,React</h1> // 此处一定不要写引号 因为不是字符串
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(VDOM,document.getElementById('test'))
  </script>
```
## 虚拟DOM的两种创建方式
### 两种创建方式
#### 1、使用JSX创建虚拟DOM
```html
  <!-- 此处一定要写babel 因为要写的是 jsx -->
  <script type="text/babel">
    // 1、创建虚拟DOM
    const VDOM = <h1 id="title">使用jsx创建虚拟DOM</h1> // 此处一定不要写引号 因为不是字符串
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(VDOM,document.getElementById('test'))
  </script>
```
#### 2、使用JS创建虚拟DOM
```html
 <!-- 准备好一个容器 -->
  <div id="test"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react扩展库 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>

  <script type="text/javascript">
    // 1、创建虚拟DOM
    const VDOM = React.createElement('h1',{'id':'title'},'使用js创建虚拟DOM')
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(VDOM,document.getElementById('test'))
  </script>
```
### 虚拟DOM与真实DOM对比

- 虚拟 DOM 本质上是一个 **Object** 类型的对象（一般对象） 
- 虚拟 DOM 比较**轻**，真实 DOM 比较**重**，因为虚拟 DOM 是 React 内部使用，无需真实 DOM 上那么多属性
- 虚拟 DOM 最终会被 React 转化为真实 DOM，呈现在页面上



## JSX
### 语法规则

- 定义虚拟 DOM 时，不要写引号
- 标签中混入 JS 表达式要用 { }，**需要区别表达式与语句**​
- 样式的类名指定不要用 class，需要用 **className**
- 内联样式，要用 **style={{ key:value }}**  形式去写
- 虚拟 DOM 必须只能有一个根标签
- 标签必须闭合
- 标签首字符，如果是小写字母开头，则会转成 html 中同名元素，如果没有对应元素，则报错；若大写字母开头，则会渲染对应的组件，如果未定义该组件，则报错
```html
 // 创建虚拟DOM
 const myId = 'title'
 const myData = 'jsx语法规则'
 // 创建虚拟DOM
 const VDOM =(
   <div>
     <h2 className="title" id={myId}>
       <span style={{color:'white',fontSize:'16px'}}>{myData}</span>
     </h2>
     <h2 className="title" id={myId+'1'}>
       <span style={{color:'white',fontSize:'16px'}}>{myData}</span>
     </h2>
     <input type="text"></input>
     <Good></Good>
   </div>
 ) 
 // 2、渲染虚拟DOM到页面
 ReactDOM.render(VDOM,document.getElementById('test'))
```
### 小练习
```html
 <!-- 准备好一个容器 -->
  <div id="test"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react扩展库 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel 用于将ES5转为ES6 jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>

  <!-- 此处一定要写babel 因为要写的是 jsx -->
  <script type="text/babel">
    //模拟数据
    const data = ['Angular','React','Vue']
    // 创建虚拟DOM
   const  VDOM =(
     <div>
        <h1>前端JS框架列表</h1>
        <ul>
         {data.map((item,index)=>{
           return <li key={index}>{item}</li>
         })}
        </ul>
     </div>
   )
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(VDOM,document.getElementById('test'))
  </script>
```
## 事件绑定
### 原生事件绑定
```html
	<button id="btn1">按钮1</button>
	<button id="btn2">按钮2</button>
	<button onclick="demo()">按钮3</button>

	<script type="text/javascript" >
			const btn1 = document.getElementById('btn1')
			btn1.addEventListener('click',()=>{
				alert('按钮1被点击了')
			})

			const btn2 = document.getElementById('btn2')
			btn2.onclick = ()=>{
				alert('按钮2被点击了')
			}

			function demo(){
				alert('按钮3被点击了')
			}

	</script>
```
### React 中事件绑定

1. 通过 onXxxx 属性指定事件处理函数（注意大小写），为了更好的兼容性

      - React 使用的是自定义（合成）事件，而不是使用的原生 DOM 事件
      - React 中的事件是通过事件委托方式处理的（委托给组件最外层的元素）

2. 通过 event.target 得到发生事件的 DOM 元素对象
```jsx
	<!-- 准备好一个“容器” -->
	<div id="test"></div>
	
	<!-- 引入react核心库 -->
	<script type="text/javascript" src="../js/react.development.js"></script>
	<!-- 引入react-dom，用于支持react操作DOM -->
	<script type="text/javascript" src="../js/react-dom.development.js"></script>
	<!-- 引入babel，用于将jsx转为js -->
	<script type="text/javascript" src="../js/babel.min.js"></script>

	<script type="text/babel">
		//创建组件
		class Demo extends React.Component{
			/* 
				(1).通过onXxx属性指定事件处理函数(注意大小写)
						a.React使用的是自定义(合成)事件, 而不是使用的原生DOM事件 —————— 为了更好的兼容性
						b.React中的事件是通过事件委托方式处理的(委托给组件最外层的元素) ————————为了的高效
				(2).通过event.target得到发生事件的DOM元素对象 ——————————不要过度使用ref
			 */
			//创建ref容器
			myRef = React.createRef()
			myRef2 = React.createRef()

			//展示左侧输入框的数据
			showData = (event)=>{
				console.log(event.target);
				alert(this.myRef.current.value);
			}

			//展示右侧输入框的数据
			showData2 = (event)=>{
				alert(event.target.value);
			}

			render(){
				return(
					<div>
						<input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>&nbsp;
						<button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
						<input onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>&nbsp;
					</div>
				)
			}
		}
		//渲染组件到页面
		ReactDOM.render(<Demo a="1" b="2"/>,document.getElementById('test'))
	</script>
```
## 组件与模块
### 模块

- 向外提供特定功能的 JS 程序，一般就是一个 JS 文件
- 为什么要拆分成模块：随着业务逻辑的增加，代码越来越多且复杂
- 作用：复用 JS，简化 JS 的编写，提高运行效率
### 组件

- 用来实现布局功能效果的代码和资源的集合
- 一个界面的功能更复杂
- 复用编码，简化项目编码，提高运行效率
### 模块化与组件化

- 当应用的 js 都是以模块来编写，那么这个应用就是模块化的应用
- 当应用时以多组件的方式实现的，那么这个应用就是一个组件化应用



## React组件化编程
### 组件分类

- 函数式组件
- 类式组件
### 函数式组件
```html
<!-- 准备好一个容器 -->
  <div id="test"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react扩展库 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel 用于将ES5转为ES6 jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>

  <!-- 此处一定要写babel 因为要写的是 jsx -->
  <script type="text/babel">
    // 1、创建函数式组件 必须大写字母开头
    function Demo(){
      console.log(this)  //此处的this是undefined，因为babel开启了严格模式
      return <h2>我是用函数定义的组件（适用于【简单组件】的定义）</h2>
    }
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(<Demo/>,document.getElementById('test'))
    // React解析组件标签，找到组件，发现是函数式组件，调用函数，将返回的虚拟DOM转为真实DOM，最终呈现到页面中
</script>
```
### 类式组件
#### 类的基本知识复习
```javascript
/* 
			总结：
				1.类中的构造器不是必须要写的，要对实例进行一些初始化的操作，如添加指定属性时才写。
				2.如果A类继承了B类，且A类中写了构造器，那么A类构造器中的super是必须要调用的。
				3.类中所定义的方法，都放在了类的原型对象上，供实例去使用。
		*/
		//创建一个Person类
		class Person {
			//构造器方法
			constructor(name,age){
				//构造器中的this是谁？—— 类的实例对象
				this.name = name
				this.age = age
			}
			//一般方法
			speak(){
				//speak方法放在了哪里？——类的原型对象上，供实例使用
				//通过Person实例调用speak时，speak中的this就是Person实例
				console.log(`我叫${this.name}，我年龄是${this.age}`);
			}
		}

		//创建一个Student类，继承于Person类
		class Student extends Person {
			constructor(name,age,grade){
				super(name,age)
				this.grade = grade
				this.school = '尚硅谷'
			}
			//重写从父类继承过来的方法
			speak(){
				console.log(`我叫${this.name}，我年龄是${this.age},我读的是${this.grade}年级`);
				this.study()
			}
			study(){
				//study方法放在了哪里？——类的原型对象上，供实例使用
				//通过Student实例调用study时，study中的this就是Student实例
				console.log('我很努力的学习');
			}
		}
		
		class Car {
			constructor(name,price){
				this.name = name
				this.price = price
				// this.wheel = 4
			}
			//类中可以直接写赋值语句,如下代码的含义是：给Car的实例对象添加一个属性，名为a，值为1
			a = 1
			wheel = 4
			static demo = 100
		}
		const c1 = new Car('奔驰c63',199)
		console.log(c1);
		console.log(Car.demo);
```
#### 类组件写法
```html
 <!-- 此处一定要写babel 因为要写的是 jsx -->
  <script type="text/babel">
    // 1、创建类式组件
    // 必须继承父类 React.Component
    // 必须有 render 和 return
    class MyComponent extends React.Component{
      // render 放在类（MyComponent）的原型对象上，供实例使用
      render(){
        console.log('🚀【render中的this】',this); // MyComponent 组件实例对象 
        return <h2>我是用类式定义的组件（使用于【复杂组件】的定义）</h2>
      }
    }
  
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(<MyComponent/>,document.getElementById('test'))
    /*
      1.React 解析组件标签，找到 MyComponent 组件
      2.发现组件是使用类定义的，随后 new 出来该类的实例，并且通过该实例调用到原型上的 reander实例
      3.将 render 返回的虚拟 DOM 转为真实 DOM,最终呈现在页面上
    */

  </script>
```
## 
## 组件实例三大属性之 state
### 理解
> 1、state 是组件对象最**重要**的属性，值是对象（可以包含多个 key-value 的组合）
> 2、组件被称为“状态机”，通过更新组件的 state 来更新对应的页面显示（重新渲染组件）

### 注意

- 组件中的 **render** 方法中的 **this 为组件实例对象**
- 组件自定义的方法中 this 为 **undefined**，可通过**强制绑定 this，即通过函数对象 bind()** 或者使用**箭头函数**解决此问题
- 状态数据，**不能直接修改或更新，需要借助 setState**
### 示例
#### 基本使用
```html
 <!-- 准备好一个容器 -->
  <div id="test"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react扩展库 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel 用于将ES5转为ES6 jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>

  <!-- 此处一定要写babel 因为要写的是 jsx -->
  <script type="text/babel">
    // 1、创建类式组件
    class Weater extends React.Component{
      // 构造器调用几次？——1次
      constructor(props){
        super(props)
        this.state = {
          isHot:false
        }
        // 解决事件绑定中的this 方法1：改变this的指向
        this.changeWeater = this.changeWeater.bind(this)
      }
      changeWeater(){
        //changeWeater 是放在 Weater 原型对象上，供实例使用
        //由于 changeWeater 是作为 onClick 的回调，所以不是通过实例调用的，是直接调用
        //类中的方法默认开启了局部的严格模式，所以此时 this 的指向为undefined
        console.log(this)
        //获取 isHot 的值 

        // 注意 状态不可直接更改，需要借助内置API this,setState  更新时一种合并
        // const isHot = !this.state.isHot
        this.setState({
          isHot : !this.state.isHot
        })
        //
      }
      // render 调用 n+1 次，改变state会重新触发
      render(){
        return <h1 onClick={this.changeWeater}>今天天气很{this.state.isHot ? '炎热':'凉爽'}</h1>
      }
    }
  
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(<Weater/>,document.getElementById('test'))
  
  </script>
```
#### 简写方式
**初始化state状态，自定义方法使用箭头函数**​
```html
 <!-- 准备好一个容器 -->
  <div id="test"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react扩展库 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel 用于将ES5转为ES6 jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>

  <!-- 此处一定要写babel 因为要写的是 jsx -->
  <script type="text/babel">
    // 1、创建类式组件
    class Weater extends React.Component{
      // 初始化状态
      state = {
          isHot:false
      }
      // 自定义方法 -- 赋值语句 + 箭头函数
      // 自定义方法使用箭头函数 改变this指向
      // 箭头函数没有this 会自动找外层函数this  组件实例
      changeWeater=()=>{
        console.log(this)
        this.setState({
          isHot : !this.state.isHot
        })
      }
      // render 调用 n+1 次，改变state会重新触发
      render(){
        return <h1 onClick={this.changeWeater}>今天天气很{this.state.isHot ? '炎热':'凉爽'}</h1>
      }
    }
  
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(<Weater/>,document.getElementById('test'))
  
  </script>
```
## 组件实例三大属性之 props
### 理解
> - 每个组件对象都会有 props 属性(properties 的简写)
> - 组件标签的所有属性都保存在 props 中

### 作用

- **通过标签属性从组件外向组件内传递变化的数据**
- **注意：组件内部不要修改props数据**​



### 示例
#### 基本使用
```html
 <!-- 准备好一个容器 -->
  <div id="test"></div>
  <div id="test1"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react扩展库 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel 用于将ES5转为ES6 jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>

  <!-- 此处一定要写babel 因为要写的是 jsx -->
  <script type="text/babel">
    // 1、创建类式组件
    class Person extends React.Component{
     
      render(){
        return (
          <ul>
            <li>姓名：{this.props.name}</li>
            <li>性别：{this.props.sex}</li>
            <li>年龄：{this.props.age}</li>
          </ul>
        )
      }
    }
  
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(<Person name="tom" age="18" sex="女"/>,document.getElementById('test'))
    const pObj = {
      name:'haha',
      age:'25',
      sex:'女'
    }
    // 批量传递 props 使用扩展运算符
    ReactDOM.render(<Person {...pObj}/>,document.getElementById('test1'))
  </script>
```
#### 高级使用 对props进行限制
**需要引入 prop-types 库对组件标签属性进行限制**
**组件名.propTypes 进行限制，注意函数为func**
**组件名.defaultProps 设置默认值**​
```html
  <!-- 准备好一个容器 -->
  <div id="test"></div>
  <div id="test1"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react扩展库 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel 用于将ES5转为ES6 jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>
  <!-- 引入 prop-types 用于对组件标签属性进行限制 -->
  <script type="text/javascript" src="../js/prop-types.js"></script>

  <!-- 此处一定要写babel 因为要写的是 jsx -->
  <script type="text/babel">
    // 1、创建类式组件
    class Person extends React.Component{
      render(){
        return (
          <ul>
            <li>姓名：{this.props.name}</li>
            <li>性别：{this.props.sex}</li>
            <li>年龄：{this.props.age}</li>
          </ul>
        )
      }
    }
    // 增加限制
    Person.propTypes = {
      name:PropTypes.string.isRequired,
      sex:PropTypes.string,
      age:PropTypes.number,
      speak:PropTypes.func, //限制为函数
    }
    // 设置默认值
    Person.defaultProps = {
      sex:'男',
      age:18
    }
  
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(<Person name="tom" age={18} sex="女"/>,document.getElementById('test'))
    const pObj = {
      name:"jerry",
      age:25,
      sex:'女'
    }
    // 批量传递 props 使用扩展运算符
    ReactDOM.render(<Person {...pObj}/>,document.getElementById('test1'))
  </script>
```
#### 简写方式
**使用 static 定义类的属性**
```html
 <!-- 准备好一个容器 -->
  <div id="test"></div>
  <div id="test1"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react扩展库 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel 用于将ES5转为ES6 jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>
  <!-- 引入 prop-types 用于对组件标签属性进行限制 -->
  <script type="text/javascript" src="../js/prop-types.js"></script>

  <!-- 此处一定要写babel 因为要写的是 jsx -->
  <script type="text/babel">
    // 1、创建类式组件
    class Person extends React.Component{
       // 增加限制
      static propTypes = {
        name:PropTypes.string.isRequired,
        sex:PropTypes.string,
        age:PropTypes.number,
        speak:PropTypes.func, //限制为函数
      }
      // 设置默认值
      static defaultProps = {
        sex:'男',
        age:18
      }
  
      render(){
        return (
          <ul>
            <li>姓名：{this.props.name}</li>
            <li>性别：{this.props.sex}</li>
            <li>年龄：{this.props.age}</li>
          </ul>
        )
      }
    }
   
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(<Person name="tom" age={18} sex="女"/>,document.getElementById('test'))
    const pObj = {
      name:"jerry",
      age:25,
      sex:'女'
    }
    // 批量传递 props 使用扩展运算符
    ReactDOM.render(<Person {...pObj}/>,document.getElementById('test1'))
  </script>
```
#### 函数式组件使用props
```html
 <!-- 准备好一个容器 -->
  <div id="test"></div>
  <div id="test1"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react扩展库 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel 用于将ES5转为ES6 jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>
  <!-- 引入 prop-types 用于对组件标签属性进行限制 -->
  <script type="text/javascript" src="../js/prop-types.js"></script>

  <!-- 此处一定要写babel 因为要写的是 jsx -->
  <script type="text/babel">
    // 1、创建函数式组件
    function Person(props){
      console.log(props)
      return(
        <ul>
            <li>姓名：{props.name}</li>
            <li>性别：{props.sex}</li>
            <li>年龄：{props.age}</li>
        </ul>
      )
    }
     // 增加限制
     Person.propTypes = {
        name:PropTypes.string.isRequired,
        sex:PropTypes.string,
        age:PropTypes.number,
        speak:PropTypes.func, //限制为函数
    }
    // 设置默认值
    Person.defaultProps = {
        sex:'男',
        age:18
    }


    // 2、渲染虚拟DOM到页面
    ReactDOM.render(<Person name="tom" age={18} sex="女"/>,document.getElementById('test'))
    const pObj = {
      name:"jerry",
      age:25,
      sex:'女'
    }
    // 批量传递 props 使用扩展运算符
    ReactDOM.render(<Person {...pObj}/>,document.getElementById('test1'))
  </script>
```
## 组件实例三大属性之 refs
### 理解
> 组件内的标签可以定义 ref 属性来标识自己

### 作用

- 减少直接操作 DOM 元素
### 示例
#### 字符串形式的 ref --过时
```html
 <!-- 准备好一个容器 -->
  <div id="test"></div>
  <div id="test1"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react扩展库 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel 用于将ES5转为ES6 jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>
  <!-- 引入 prop-types 用于对组件标签属性进行限制 -->
  <script type="text/javascript" src="../js/prop-types.js"></script>

  <script type="text/babel">
    // 1、创建类式组件
    class Demo extends React.Component{
      //展示数据
      showData = ()=>{
        console.log(this.refs.input1)
        alert(this.refs.input1.value)
      }
      // 失去焦点展示数据
      showData2 = ()=>{
        alert(this.refs.input2.value)
      }
      render(){
        return(
          <div>
            <input ref="input1" type="text" placeholder="点击按钮提示数据"></input>
            <button ref="btn" onClick={this.showData}>点我提示左侧的数据</button>
            <input ref="input2" onBlur={this.showData2} type="text"placeholder="失去焦点提示数据"/>
          </div>
        )
      }
    }
   
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(<Demo/>,document.getElementById('test'))
  </script>

```
#### 回调函数形式的 ref
```html
 <!-- 准备好一个容器 -->
  <div id="test"></div>
  <div id="test1"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react扩展库 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel 用于将ES5转为ES6 jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>
  <!-- 引入 prop-types 用于对组件标签属性进行限制 -->
  <script type="text/javascript" src="../js/prop-types.js"></script>

  <script type="text/babel">
    // 1、创建类式组件
    class Demo extends React.Component{
      //展示数据
      showData = ()=>{
        console.log(this.refs.input1)
        alert(this.input1.value)
      }
      // 失去焦点展示数据
      showData2 = ()=>{
        alert(this.input2.value)
      }
      saveInput = (c)=>{
        this.input2 = c
      }
      // 回调韩式形式ref 会执行两侧 第一次为null
      render(){
        return(
          <div>
            <input ref={c=>this.input1 = c} type="text" placeholder="点击按钮提示数据"></input>
            <button onClick={this.showData}>点我提示左侧的数据</button>
            {/* class的自身上 避免执行两次*/}
            <input ref={this.saveInput} onBlur={this.showData2} type="text"placeholder="失去焦点提示数据"/>
          </div>
        )
      }
    }
   
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(<Demo/>,document.getElementById('test'))
  </script>

```
#### createRef 的使用
```html
  <!-- 准备好一个容器 -->
  <div id="test"></div>
  <div id="test1"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react扩展库 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel 用于将ES5转为ES6 jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>
  <!-- 引入 prop-types 用于对组件标签属性进行限制 -->
  <script type="text/javascript" src="../js/prop-types.js"></script>

  <script type="text/babel">
    // 1、创建类式组件
    class Demo extends React.Component{
      // React.createRef 调用后可以返回一个容器，该容器可以存储被ref所标识的节点
      // 该容器是专人专用的
      myRef = React.createRef()
      myRef2 = React.createRef()
      //展示数据
      showData = ()=>{
        console.log(this.myRef.current)
        alert(this.myRef.current.value)
      }
      // 失去焦点展示数据
      showData2 = ()=>{
        alert(this.myRef2.current.value)
      }
      render(){
        return(
          <div>
            <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"></input>
            <button onClick={this.showData}>点我提示左侧的数据</button>
            <input ref={this.myRef2} onBlur={this.showData2} type="text"placeholder="失去焦点提示数据"/>
          </div>
        )
      }
    }
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(<Demo/>,document.getElementById('test'))
  </script>
```
## 收集表单中的数据
### 分类

- 非受控组件，现用现取
- 受控组件，输入类的 dom，随着输入就存到 state 中，**推荐**​
### 非受控组件
```html
  <!-- 准备好一个容器 -->
  <div id="test"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react扩展库 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel 用于将ES5转为ES6 jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>
  <!-- 引入 prop-types 用于对组件标签属性进行限制 -->
  <script type="text/javascript" src="../js/prop-types.js"></script>

  <script type="text/babel">
    // 1、创建类式组件
    class Login extends React.Component{
      handleSubmit = (event)=>{
        //form表单会自动触发提交，需要阻止默认行为，防止页面刷新或者跳转
        event.preventDefault()
        const {username,password} = this
        alert(`您输入的用户名是：${username.value}，输入的密码是：${password.value}`)
      }
      render(){
        return(
          <form action="http://atguigu.com" onSubmit={this.handleSubmit}>
            用户名：<input ref={c => this.username = c} type="text" name="username"/><br/>
            密码：<input ref={c => this.password = c} type="password" name="password"/><br/>
            <button>登录</button>
          </form>
        )
      }
    }
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(<Login/>,document.getElementById('test'))
  </script>
```
### 受控组件
```html
 <!-- 准备好一个容器 -->
  <div id="test"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react扩展库 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel 用于将ES5转为ES6 jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>
  <!-- 引入 prop-types 用于对组件标签属性进行限制 -->
  <script type="text/javascript" src="../js/prop-types.js"></script>

  <script type="text/babel">
    // 1、创建类式组件
    class Login extends React.Component{

      //初始化状态
      state = {
        username:'',
        password:''
      }
      // 监听input框改变
      setUsername = (event)=>{
        this.setState({
          username:event.target.value
        })
      }

      setPassword = (event)=>{
        this.setState({
          password:event.target.value
        })
      }

      handleSubmit = (event)=>{
        //form表单会自动触发提交，需要阻止默认行为，防止页面刷新或者跳转
        event.preventDefault()
        const {username,password} = this.state
        alert(`您输入的用户名是：${username}，输入的密码是：${password}`)
      }
      render(){
        return(
          <form action="http://atguigu.com" onSubmit={this.handleSubmit}>
            用户名：<input onChange={this.setUsername} type="text" name="username"/><br/>
            密码：<input onChange={this.setPassword} type="password" name="password"/><br/>
            <button>登录</button>
          </form>
        )
      }
    }
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(<Login/>,document.getElementById('test'))
  </script>
```
## 高阶函数_函数柯里化
**高阶函数**

- 若 A 函数接收的参数是一个函数，那么 A 就可以称为高阶函数
- 若 A 函数调用的返回值依旧是一个函数，那么 A 就可以称为高阶函数

**函数柯里化**

- 通过函数调用继续返回函数的方式，实现多次接收参数统一处理的函数编码形式。
```html
  <script type="text/babel">
    // 1、创建类式组件
    class Login extends React.Component{

      //初始化状态
      state = {
        username:'',
        password:''
      }

      // 封装监听事件改变，保存表单数据到state中，是一个高阶函数
      setFormData = (dataType)=>{
        // onChange真正的事件回调
        return (event) =>{
          console.log(dataType,event.target.value)
          this.setState({
            
          })
        }
      }

      handleSubmit = (event)=>{
        //form表单会自动触发提交，需要阻止默认行为，防止页面刷新或者跳转
        event.preventDefault()
        const {username,password} = this.state
        alert(`您输入的用户名是：${username}，输入的密码是：${password}`)
      }
      render(){
        return(
          <form action="http://atguigu.com" onSubmit={this.handleSubmit}>
            用户名：<input onChange={this.setFormData('username')} type="text" name="username"/><br/>
            密码：<input onChange={this.setFormData('password')} type="password" name="password"/><br/>
            <button>登录</button>
          </form>
        )
      }
    }
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(<Login/>,document.getElementById('test'))
  </script>
```
## 组件生命周期

- 组件对象从创建到死亡它所会经历的阶段
- React 组件对象包含一系列钩子函数（生命周期回调函数），在特定的时刻调用
- 我们在定义组件时，在特定的生命周期回调函数中做特定的工作
```html
//引出生命周期函数

    <script type="text/babel">
    //创建组件
    class Life extends React.Component{
      state ={
        opacity:1
      }
      // 销毁组件
      death = ()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('test'))
      }

      // 组件挂载完毕后调用
      componentDidMount(){
        this.timer = setInterval(()=>{
          let {opacity} = this.state
          opacity -= 0.1
          if(opacity <= 0) opacity = 1
          this.setState({opacity})
        },200)
      }

      // 组件即将被卸载
      componentWillUnmount(){
        clearInterval(this.timer)
      }

      // render调用的时机：初始化渲染、状态更新之后
      render(){
        return(
          <div>
            <h2 style={{opacity:this.state.opacity}}>React 学不会怎么办</h2>
            <button onClick={this.death}>不活了</button>
          </div>
        )
      }
    }
    //渲染组件
    ReactDOM.render(<Life />,document.getElementById("test"))
   </script>
```


## 旧版React生命周期
![react生命周期(旧).png](https://cdn.nlark.com/yuque/0/2022/png/2727826/1644732225330-9ebda2aa-1a49-454f-93da-5d41142b5e60.png#clientId=ufc69c95a-515a-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=uc528e04b&margin=%5Bobject%20Object%5D&name=react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%28%E6%97%A7%29.png&originHeight=670&originWidth=841&originalType=binary&ratio=1&rotation=0&showTitle=false&size=44022&status=done&style=none&taskId=u108d2ff4-e522-432b-a6cd-1926149b7cb&title=)
### constructor
含义：构造器
### componentWillMount
含义：组件将要挂载时执行的钩子函数
### render
含义：组件渲染，**必须存在的钩子函数**​
### componentDidMount
含义：组件已经挂载到页面上执行的钩子函数，**常用的钩子函数**，一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求，订阅消息等。
​

### componentWillReceiveProps
含义：父组件 render 后，子组件所执行的钩子函数，代表子组件即将要接收参数，**首次渲染不执行，后面重新  render 才会触发**
​

### shouldComponentUpdate
含义：组件是否应该更新，setState后执行，控制阀门
​

### componentWillUpdate
含义：组件将要更新，如果使用`forceUpdate`强制更新组件，即绕过了`shouldComponentUpdate`钩子函数，强制执行此钩子函数。
​

### componentDidUpdate
含义：组件已经更新完毕
### componentWillUnmount
含义：组件即将被卸载执行的钩子函数，**常用钩子**，一般做一些首尾工作，例如：关闭定时器、取消订阅消息等。


### 总结
#### 初始化阶段
由 ReactDOM.render() 触发，初次渲染

- constructor()
- componentWillMount()
- render() **必须用**，
- componentDidMount() **常用**，一般在这个钩子函数做初始化的事
#### 更新阶段
由组件内部 this.setState() 或者父组件重新 render 触发

- shouldComponentUpdate()
- componentWillUpdate()
- render()
- componentDidUpdate()
#### 卸载阶段
由 ReactDOM.unmountComponentAtNode() 触发

- componentWillUnmounted() **常用**，一般做一些首尾工作



## React生命周期
![react生命周期(新).png](https://cdn.nlark.com/yuque/0/2022/png/2727826/1644759966311-0a5471d3-6950-4b28-94c9-71c84deb27b8.png#clientId=ufc69c95a-515a-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=u0b52cbe3&margin=%5Bobject%20Object%5D&name=react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%28%E6%96%B0%29.png&originHeight=788&originWidth=1133&originalType=binary&ratio=1&rotation=0&showTitle=false&size=66531&status=done&style=none&taskId=u1a69e843-e057-4408-b201-e1f32789900&title=)
### getDerivedStateFromProps

- 从 props 得到派生状态，及其少用
- 此此方法适用于罕见案例，即 state 的值在任何时候都取决于 props，了解即可
- 不是给实例调用的，所以需要给静态 static
- 需要返回 state object，或者 null
```javascript
static getDerivedStateFromProps(props){
   console.log('🚀【count-getDerivedStateFromProps】',props);
   return props
}
```
### getSnapshotBeforeUpdate

- 在更新前获取快照
- -在最近一次渲染输出之前调用，能够让组件在发生更改之前从 DOM 中获取一些信息，会传递给  componentDidUpdate 
- 有两个参数，prevProps 为之前的 props , prevState 为之前的 state
```html
 <style>
    .list {
      width: 200px;
      height: 150px;
      background: skyblue;
      overflow: auto;
    }

    .news {
      height: 30px;
    }
  </style>


<body>
  <!-- 准备好一个容器 -->
  <div id="test"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/17.0.1/react.development.js"></script>
  <!-- 引入react扩展库 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/17.0.1/react-dom.development.js"></script>
  <!-- 引入babel 用于将ES5转为ES6 jsx转为js -->
  <script type="text/javascript" src="../js/17.0.1/babel.min.js"></script>
  <!-- 引入 prop-types 用于对组件标签属性进行限制 -->
  <script type="text/javascript" src="../js/17.0.1/prop-types.js"></script>

  <script type="text/babel">
    //创建组件
    class NewsList extends React.Component{
      // 构造器
      // constructor(props){
      //   console.log('🚀【NewsList-constructor】');
      //   super(props)
      // }

      state = {
        newsArr:[]
      }

      // 在更新前获取快照
      // 在最近一次渲染输出之前调用，能够让组件在发生更改之前从DOM中获取一些信息，会传递给 componentDidUpdate
      // 有两个参数，prevProps 为之前的props,prevState为之前的state
      getSnapshotBeforeUpdate(){
        return this.refs.list.scrollHeight
      }

      // 组件已经挂载在页面上
      componentDidMount(){
        const that = this
        setInterval(()=>{
          //获取原状态
          let { newsArr } = this.state
          //模拟一条新闻
          const news = `新闻${newsArr.length+1}`
          this.setState({
            newsArr:[news,...newsArr]
          })
        },1000)
      }

      // 组件更新完毕
      // 参数为 之前的props，之前的state ,getSnapshotBeforeUpdate 传递的快照值
      componentDidUpdate(preProps,preState,snapshotValue){
        this.refs.list.scrollTop += this.refs.list.scrollHeight - snapshotValue
      }

      
      // 组件即将被卸载
      componentWillUnmount(){
      
      }

      // render调用的时机：初始化渲染、状态更新之后
      render(){
        return(
          <div className="list" ref="list">
            {
              this.state.newsArr.map((item,index)=>{
                return <div className="news"key={index}>{item}</div>
              })
            }
          </div>
        )
      }
    }

    //渲染组件
    ReactDOM.render(<NewsList/>,document.getElementById("test"))
   </script>

</body>
```
### 重要的钩子函数
#### render

- 初始化渲染或者更新渲染调用
#### componentDidMount

- 开启监听，发送 ajax 获取数据
#### componentWillUnmount

- 做一些收尾的工作，如清理定时器等
### 总结
#### 初始化阶段
由 ReactDOM.render() 触发，初次渲染

- constructor
- getDerivedStateFromProps
- render
- componentDidMount
#### 更新阶段
由组件内部 this.setState() 或父组件重新 render 触发

- getDerivedStateFromProps
- shouldComponentUpdate
- render
- getSnapshotBeforeUpdate
- componentDidUpdate
#### 卸载阶段
由 ReactDOM.unmountComponentAtNode() 触发

- componentWillUnmount

​

## DOM中的diffing算法
### 验证diffing算法
```html
  <!-- 准备好一个容器 -->
  <div id="test"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/17.0.1/react.development.js"></script>
  <!-- 引入react扩展库 用于支持react操作DOM -->
  <script type="text/javascript" src="../js/17.0.1/react-dom.development.js"></script>
  <!-- 引入babel 用于将ES5转为ES6 jsx转为js -->
  <script type="text/javascript" src="../js/17.0.1/babel.min.js"></script>
  <!-- 引入 prop-types 用于对组件标签属性进行限制 -->
  <script type="text/javascript" src="../js/17.0.1/prop-types.js"></script>

  <script type="text/babel">
    //创建组件
    class Time extends React.Component{
     
      state = {
        date:new Date()
      }
      // 组件已经挂载在页面上
      componentDidMount(){
        setInterval(()=>{
          this.setState({
            date:new Date()
          })
        },1000)
      }
      
      // 组件即将被卸载
      componentWillUnmount(){
      
      }
      // render调用的时机：初始化渲染、状态更新之后
      render(){
        return(
          <div className="list" ref="list">
           <h1>Hello</h1>
           <input type="text"/>
           <span>
           现在是：{this.state.date.toTimeString()}
            <input type="text"/>
           </span>
          </div>
        )
      }
    }

    //渲染组件
    ReactDOM.render(<Time/>,document.getElementById("test"))
   </script>
```
### 虚拟DOM中的key
#### 虚拟DOM中key的作用

- 简单的说，key 是虚拟 DOM 对象的标识，在更新显示时 key 起着极其重要的作用
- 详细的说，当状态中的数据发生变化时，react 会根据**新数据**生成**新的虚拟DOM**，随后 React 进行**新虚拟DOM**与**旧虚拟DOM**的 diff 比较：

      1. 旧虚拟 DOM 中找到了新虚拟 DOM 相同的 key：
   * 若虚拟 DOM 中内容没变，直接使用之前的真实 DOM
   * 若虚拟 DOM 中内容变了，则生成新的 DOM，并替换掉之前页面的 DOM
       2. 旧虚拟 DOM 未找到与新虚拟 DOM相同的 key
          * 根据数据创建新的真实 DOM，随后渲染到页面上
#### 用index作为key可能会引发的问题

- 若对数据进行**逆序添加、逆序删除**等破坏顺序的操作，会产生没有必要的真实 DOM 更新，**界面效果没问题，但效率低**
- 如果结构中还包含**输入类的DOM**，会产生错误 DOM 更新，**界面会出现问题**
- 注意，如果不存在对数据的逆序添加、逆序删除等破坏顺序的操作，**仅用于渲染列表用于展示**，使用 index z作为 key 是没有问题的
#### 开发中如何选择key

- 最好使用每一条数据的**唯一标识**作为 key，比如 id、手机号、身份证号、学号等唯一值
- 如果确定只是**简单展示数据**，用 indexx 也是可行的
- 如果确定只是**简单的**用 index 也是可行的



# React脚手架
## 什么是脚手架
> 脚手架是用来帮助程序员快速创建一个基于 xxx 库的模板项目，里面包含了所需的配置，如语法检查、jsx 编译、devServer，下载好了所有相关依赖，可以直接运行一个简单效果。

- react 提供了一个用于创建 react 项目的脚手架库：**create-react-app**
- 项目的整体技术架构为：**react + webpack + es6 + eslint**
- 使用脚手架开发项目的特点：**组件化、模块化、工程化**​
## 使用react脚手架创建项目

1. 全局安装：`npm install -g create-react-app`
1. 使用命令：`create-react-app 项目名`来创建项目
1. 进入项目文件：`cd 项目名`
1. 启动项目：`npm start`
## 脚手架项目结构及文件介绍
```javascript
	public ---- 静态资源文件夹
		favicon.icon ------ 网站页签图标
		index.html -------- 主页面
		logo192.png ------- logo图
		logo512.png ------- logo图
		manifest.json ----- 应用加壳的配置文件
		robots.txt -------- 爬虫协议文件
src ---- 源码文件夹
		App.css -------- App组件的样式
		App.js --------- App组件
		App.test.js ---- 用于给App做测试
		index.css ------ 样式
		index.js ------- 入口文件
		logo.svg ------- logo图
		reportWebVitals.js
			--- 页面性能分析文件(需要web-vitals库的支持)
		setupTests.js
			---- 组件单元测试的文件(需要jest-dom库的支持)
```
## 一个简单的Hello组件
```jsx
import "./Hello.css"
import index from "./index.module.css"

function HelloWord() {
  return ( 
    <div className="test">
      Hello,react!
      <div className={index.testModule}>样式模块化</div>
    </div>
  );
}

export default HelloWord;
```
之后在 `App.js`中导入并引用组件
```jsx
import HelloWord from './components/Hello/Hello';

function App() {
  return ( 
    <div className="App">
     <HelloWord />
    </div>
  );
}

export default App;
```
## 样式模块化

- 需要将 css 文件名添加一个 **module **标识，如`index.module.css`
- 在组件中引入需为`import index from "./index.module.css"`
- 在组件中定义类名为`className={index.test}`



## 在vscode中编写React

- ES7 React/Redux/GraphQL snippets 插件，快捷键`rcc`、`rfc`
## 组件化编码流程

1. 拆分组件：拆分界面，抽取组件
1. 实现静态组件：使用组件实现静态页面效果
1. 实现动态组件

      - 动态显示初始化数据，即数据类型、数据名称、保存在哪个组件
      - 交互，即从绑定事件监听开始


## TodoList案例
### 编码
[https://github.com/sean-lgt/react-basic-study/tree/master/react_staging/02_todoList_demo/src](https://github.com/sean-lgt/react-basic-study/tree/master/react_staging/02_todoList_demo/src)
### 总结

1. 拆分组件、实现静态组件，注意：className、style 的写法
1. 动态初始化列表，如何确定将数据放在哪个组件的 state 中

       - **某个**组件使用，放在自身的 state 中
       - **某些**组件使用，放在他们共同的父组件的 state 中，即状态提升

3. 关于父子之间的通信

      - **父组件**给**子组件**传递数据，通过 **props**传递
      - **子组件**给**父组件**传递数据，通过 **props**传递，要求父组件提前给子组件传递一个**函数**​

4. 注意 defaultChecked 和 checked 的区别，类似的还有 defaultValue 和 value
4. 状态在哪里，操作状态的方法就再哪里



## react ajax
### 前置说明

1. React 本身只关注于界面，并不包内发送 ajax 请求的代码
1. 前端应用需要通过 ajax 请求与后台进行交互（json 数据）
1. react 应用中需要集成第三方 ajax 库（或者自己封装）
### 常用的ajax请求库
#### JQuery
比较重，如果需要另外引入不建议使用
#### axios
**简介**​

- 封装 XMLHttpRequest 对象的 ajax
- 基于 Promise 风格
- 可以在浏览器和 node 服务端中使用

**使用**

1. 安装`npm install axios`
1. 常规请求
```jsx
 axios.get("http://localhost:5000/students").then(res=>{
    console.log("请求成功",res)
 }).catch(err=>{
    console.log("请求失败",err)
  })
```
### 脚手架配置代理
#### 第一种方式
1、在 `package.json`中添加 `proxy`，`"proxy":"http://localhost:5000"`
2、将所有的请求地址改为当前项目启动的地址
#### 第二种方式

1. src 目录下新建：`setupProxy.js`，注意不能使用 es6 编写
1. 需要引入 `http-proxy-middleware`
```javascript
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
      target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值
      /*
      	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
      	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
      	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */
      pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
    }),
    createProxyMiddleware('/api2', { 
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {'^/api2': ''}
    })
  )
}
```
## github搜索案例
### 编码
[https://github.com/sean-lgt/react-basic-study/tree/master/react_staging/04_github_search_axios](https://github.com/sean-lgt/react-basic-study/tree/master/react_staging/04_github_search_axios)
### 总结

- 设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。
- ES6小知识点：解构赋值+重命名
```javascript
let obj = {a:{b:1}}
const {a} = obj; //传统解构赋值
const {a:{b}} = obj; //连续解构赋值
const {a:{b:value}} = obj; //连续解构赋值+重命名
```

- 消息订阅与发布机制

       - 先订阅，再发布（理解：有一种隔空对话的感觉）
       - 适用于任意组件间通信
       -要在组件的 componentWillUnmount 中取消订阅
## 消息订阅与发布机制
### 抛砖引玉
**订阅报纸**
1、交钱，说好地址，订阅哪一种报纸
2、邮递员送报纸
**订阅消息**

- 消息名
- 发布消息



### PubSubJS

- 工具库：`pubsub-js`
- 下载：`npm install pubsub-js`
- 使用：
```javascript
// 引入
import Pubsub from "pubsub-js"

// 发布消息  
// PubSub.publish('消息名',发布的数据)
PubSub.publish('updateState',{
   isFirst:false,
   isLoading:true
})

// 订阅消息
// PubSub.subscribe('消息名',回调函数接收两个参数，一个是消息名，一个是数据)
this.token = Pubsub.subscribe('updateState',(msg,data)=>{
   console.log("消息订阅",data)
})

// 注意，需要在页面卸载时取消订阅
// Pubsub.unsubscribe('消息名')
 Pubsub.unsubscribe("updateState")

```
# 项目打包运行

1. 打包项目：`npm run build`
1. 安装 serve 库：`npm install -g serve`
1. 运行项目：`serve -S build`



# 组件间通信方式总结
## 组件间的关系

- 父子组件
- 兄弟组件（非嵌套组件）
- 祖孙组件 （跨级组件）
## 几种通信方式
### prop

- `.children props`
- `.render props`
### 消息订阅-发布

- `pub-sub`
- `event`
### 集中式管理

- `redux`
- `react-redux`
- `dva`
- `mobx`
### conText

- `生产者-消费者模式`
## 推荐搭配方式

- 父子组件：`props`
- 兄弟组件：`消息订阅-发布、集中式管理`
- 祖孙组件（跨级组件）:`消息订阅-发布、集中式管理、conText`
# React路由--V5/V6
## SPA

- 单页 web 应用（single page web application，SPA）
- 整个应用只有**一个完整的页面**
- 点击页面中的链接**不会刷新页面**，只会做页面的**局部更新**
- 数据都需要通过 ajax 请求获取，并且在前端异步展现
### 路由概念
#### 什么是路由

- 一个路由就是一个映射关系（key : value）
- key 为路径，value 可能是 function 或者 component
#### 路由分类
##### 后端路由

- 理解：value 是 function，用来处理客户端提交的请求
- 注册路由：`router.get(path,function(req,res))`
- 工作过程：当 node 接收到一个请求时，根据请求路径找到匹配的路由，调用路由中的函数来处理请求，返回响应数据。
##### 前端路由

- 浏览器端路由，value 是 component，用于展示页面内容
- 注册路由：`<Route path="/test" component={Test}`
- 工作过程：当浏览器的 path 变为 /test 时，当前路由组件就会变为 Test 组件
## react-router-dom

- react 的一个插件库
- 专门用来实现一个 SPA 应用
- 基于 react 的项目基本都会用到这个库



### 内置组件

- <**BrowserRouter**>
- <**HashRouter**>
- <**Router**>
- <**Redirect**>
- <**Link**>
- <**NavLink**>
- <**Switch**>
### 其他

- **history对象**
- **match对象**
- **withRouter函数**​



## 基本路由使用

- 安装：`npm install react-router-dom`
- 引进路由：`import { Link,Route,Routes } from "react-router-dom"`
- 使用 BrowserRouter 包裹标签，`<BrowserRouter><App/></BrowserRouter>`
- 编写路由链接
```javascript
 <Link  className="list-group-item" to="/about">About</Link>
 <Link  className="list-group-item" to="/home">Home</Link>
```

- 注册路由
```javascript
 <Routes>
    <Route exact path="/about"  element={ <About/> } ></Route>
    <Route path="/home" element={ <Home/> } ></Route>   
</Routes>
```
## 路由组件与一般组件
### 写法不同

- 一般组件 `<Demo />`
- 路由组件  ` <Route path="/home" element={ <Home/> } ></Route> `
### 存放位置不同

- 一般组件：components
- 路由组件：pages
### 接收到的props不同

- 一般组件：写组件标签时传递了什么，就能收到什么
- 路由组件：接收到三个固定的属性：`history`、`location`、`match`



## NavLink的使用
使用 NavLink 谁是激活项，就会自动在那一项添加类名为：`active`
使用其自带属性 `activeClassName` 可以自定义激活项的类名
通过 `this.props.children`可以获取标签体的内容
```jsx
  <NavLink  className="list-group-item" to="/about">About</NavLink>
  <NavLink activeClassName="test" className="list-group-item" to="/home">Home</NavLink>
```
### 封装NavLink组件
```jsx
import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class MyNavLink extends Component {
  render() {
    const {children} = this.props
    return (
       <NavLink  className="list-group-item" {...this.props}>{children}</NavLink>
    )
  }
}
```
## Routes的使用

- 通常情况下，path 和 component 是一一对应的关系
- Routes 可以提高路由匹配效率
```jsx
 <Routes>
    <Route exact path="/about"  element={ <About/> } ></Route>
    <Route path="/home" element={ <Home/> } ></Route>
</Routes>
```
## 路由的模糊匹配与严格匹配

- 默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
- 开启严格匹配：`<Route exact={true} path="/about" element={ <About/> }/>`
- 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
## Navigate 进行重定向
需要放置最下方
```jsx
<Route path="*" element={<Navigate to="/about" />} />
```
## 嵌套路由
```jsx
{/* 注册路由 */}
 <Routes>
   <Route path="/about"  element={ <About/> } >
   </Route>
   <Route path="/home" element={ <Home/> } >
       <Route path="news" element={ <News/> } ></Route>
       <Route path="message" element={ <Message/> } ></Route>
   </Route>
   {/* 路由重定向 需要放置最下方 */}
   <Route path="*" element={<Navigate to="/about" />} />
 </Routes>
```
## 向路由组件传递参数
### params 参数

- 路由链接（携带参数）:`<Link to="/demo/test/tom/18">详情</Link>`
- 注册路由（声明接收）: `<Route path="/demo/test/:name/:age" component={Test} />`
- 接收参数：`this.props.match.params`
### search 参数

- 路由链接（携带参数）:`<Link to="demo/test?name=tom&age=18"/>`
- 注册路由（无需声明，正常注册即可）:`<Route path="/demo/test" component={Test}/>`
- 接收参数：`this.props.location.search`
- 备注：获取到的 search 是 urlencoded 编码字符串，需要借助 `querystring`解析
### state 参数

- 路由链接（携带参数）:`<Link to={{path:'/demo/test',state:{name:'tom',age:18}}}/>`
- 注册路由（无需声明，正常注册即可：`<Route path="/demo/test" component={Test}/>`
- 接收参数：`this.props.location.state`
- 备注：刷新也可以保留住参数



​

# React Router  V6
## React Router 6 概述

- react-router：路由的核心库，提供了很多：组件、钩子
- **react-router-dom：包含 react-router 所有内容，并添加一些专用用于 DOM 的组件，如**`<BrowserRouter>`**等等**
- react-router-native：包含 react-router 所有内容，并添加一些专门用于 ReactNative 的 API。
## 与 5.X 版本对比

- 内置组件的变化，移除`<Switch>`，新增`<Routes />`
- 语法的变化，`component={About}`变为`element={<Ablout}`
- 新增多个hook，`useParams`、`useNavigate`、`useMatch`等
- 明确推荐使用函数式组件



## Component
### <BrowserRouter>

- 用于包裹整个应用
- 一般在入口文件 index.js 中使用
```jsx
// 引入React
import React from "react"
// 引入reactDom
import ReactDOM from "react-dom"

import {BrowserRouter} from "react-router-dom"

// 引入App组件
import App from "./App"

ReactDOM.render(
<BrowserRouter><App /></BrowserRouter>
,document.getElementById("root"))
```
### <HashRouter>

- 修改的是地址栏的 Hash 值
- 用法与 5.x 版本相同
### <Routes>与<Route>

- `<Routes>`与`<Route>`需要配置使用，并且必须要`<Routes>`包裹`<Route>`
- `<Route>`相当于 if 语句，条件成立则呈现对应的组件
- `<Route caseSensitive>`属性用于指定，匹配时是否区分大小写，默认为 false
- 当 URL 发生变化时，`<Routes>`会查看其所有子`<Route>`元素以找到最佳匹配并呈现组件
- `<Route>`可以嵌套使用，且配合`useRoutes()`配置路由表，但需要通过`<Outlet>`组件来渲染其子路由。
#### 路由重定向
```jsx
<Routes>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/home" element={<Home/>}></Route>
  {/* 重定向 */}
  <Route path="/" element={<Navigate to="/about"></Navigate>}></Route>
</Routes>
```
#### 嵌套路由
```jsx
<Routes>
	/*定义嵌套路由，先一级路由*/
  <Route path="/home" element={<Home/>}>
  		/*定义二级路由，直接嵌套，不写绝对路径*/
    <Route path="test" element="{<Test/>}"></Route>
  </Route>
</Routes>
```
### <Link>

- 修改 URL，且不会发送网络请求（路由链接）
### <NavLink>

- 默认会加 active 类名，可自定义，会有高亮效果
- end 属性，若当前组件的子组件匹配成功，则当前组件的导航没有高亮效果
```jsx
 <NavLink className={({isActive})=>isActive?'list-group-item my-active':'list-group-item'}  to="/about">About</NavLink>
```
### <Navigate>

- 只要 `<Navigate>`组件被渲染，就会修改路径，切换视图
- `replace`属性用于控制跳转模式（push 或 replace，默认是 push）
```jsx
import React,{useState} from 'react'
import {Navigate} from "react-router-dom"

export default function Home() {
  const [sum,setSum] = useState(1)
  return (
    <div>
      <h3>我是Home</h3>
      {sum === 2?<Navigate to="/about"></Navigate>:<h4>当前sum的值是：{sum}</h4>}
      <button onClick={()=>setSum(2)}>点我讲sum变为2</button>
    </div>
  )
}
```
### <Outlet>

- 当`<Routes>`产生嵌套时，渲染其对应的后续子路由，类似于 vue 中的 `<route-view>`
#### 注册路由表实现嵌套路由
```jsx
// src/routes/index.js
import { Navigate } from "react-router-dom"
import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/home',
    element: <Home />,
    children:[
      {
        path:'news',
        element:<News/>
      },
      {
        path:'message',
        element:<Message/>
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to="/about" />,
  },
]


// Home.jsx
import React,{useState} from 'react'
import {NavLink,Outlet} from "react-router-dom"

export default function Home() {
  const [sum,setSum] = useState(1)
  return (
     <div>
       <h2>Home组件内容</h2>
       <div>
         <ul className="nav nav-tabs">
           <li>
             <NavLink className="list-group-item" to="news">News</NavLink>
           </li>
           <li>
             <NavLink className="list-group-item" to="message">Message</NavLink>
           </li>
         </ul>
         {/* 指定路由组件呈现的位置 */}
         <Outlet />
       </div>
      </div>
  )
}
```


## Hooks
### useRoutes

- 根据路由表，动态创建`<Routes>`和`<Route>`
#### 动态创建路由
```jsx
// 配置路由表
import { Navigate } from "react-router-dom"
import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/home',
    element: <Home />,
    children:[
      {
        path:'news',
        element:<News/>
      },
      {
        path:'message',
        element:<Message/>
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to="/about" />,
  },
]


// 使用 useRoutes() 动态创建
//App.js
import React from 'react'
import {NavLink,useRoutes} from "react-router-dom"
// 引进路由表
import routes from './routes'
import "./App.css"
export default function App() {

  // 路由表  根据路由表生成对应的路由规则
  const elementRoutes = useRoutes(routes)


  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          {/* 路由链接 */}

          <NavLink className={({isActive})=>isActive?'list-group-item my-active':'list-group-item'}  to="/about">About</NavLink>
          <NavLink className={({isActive})=>isActive?'list-group-item my-active':'list-group-item'} to="/home">Home</NavLink>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            {/* 注冊組件  useRoutes 注册路由表*/}
            {elementRoutes}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


```


### useNavigate()

- 作用：返回一个函数用来实现编程式导航
#### 编程式导航
```jsx
import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"

export default function Message() {
	 const navigate = useNavigate()
   const handle = ()=>{
   	//第一种方式，指定具体路径
     navigate('login',{
     	replate:false,
       state:{a:1,b:2}
     })
     
     // 第二种方式 传入数值实现前进和后退
     navigate(-1)
     
   }
   
   return (
   	<div>
       <button onClick={handle}></button>
     </div>
   )
}
```
### useParams()

- 返回当前匹配路由中的`params`参数，类似于 5.x 中的`match.params`
```jsx
import React from 'react'
import {Routes,Route,useParams} from "react-router-dom"

// 获取传递过来的params参数
const getParams = ()=>{
	let {id} = useParams()
	
}

function App(){
	return(
 		<Routes>
      <Route path="users/:id"></Route> 
     <Routes>
  )  
}
```


### useSearchParams()

- 用于读取和修改当前位置的 URL 中的查询字符串
- 返回一个包含两个值的数组，内容分别为，当前的 search 参数，更新 search 的函数
```jsx
import React from 'react'
import {useSearchParams} from "react-router-dom"

export default function Detail() {
  const [search,setSearch] = useSearchParams()
  console.log(search.get('id'));
  return (
    <ul>
      <li>{search.get('id')}</li>
      <li>{search.get('title')}</li>
      <li>{search.get('content')}</li>
    </ul>
  )
}
```
### useLocation()

- 获取当前 location 信息，对标 5.x 中的路由组件的`location`属性
### useMatch()

- 返回当前匹配信息，对标 5.x 中的路由组件中的`match`属性
### useinRouterContext()

- 判断是否处于路由上下文环境
- 我们的App组件由BrowserRouter包围 那么他就是处于路由上下文环境 `useInRouterContext()`为true
### useNavigationType()

- 返回当前的导航类型（用户是如何来到 用的是push还是replace 还是pop当前页面的）
- 返回值：POP、PUSH、REPLACE
### useOutlet()

- 用来呈现当前路由
- 如嵌套路由没挂载 为false，如果挂载了，就展示这个路由对象
### useResolvedPath()

- 作用给定一个url解析其中的path、search、hash值
## 一级路由
```jsx
{/* 路由链接 */}
<NavLink className="list-group-item" to="/about">About</NavLink>
<NavLink className="list-group-item" to="/home">Home</NavLink>

{/* 注冊組件 */}
<Routes>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/home" element={<Home/>}></Route>
</Routes>
```
## 路由重定向

- `<Navigate to="" >`一旦页面渲染此组件，并引起页面视图的更改
-  `replace`属性，默认为 false，如果为 true，则是直接替换当前页面，无浏览记录
```jsx
<Routes>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/home" element={<Home/>}></Route>
  {/* 重定向 */}
  <Route path="/" element={<Navigate to="/about"></Navigate>}></Route>
</Routes>
```
## useRouter路由表
```jsx
// src/routes/index.js

import About from "../pages/About";
import Home from "../pages/Home";
import { Navigate } from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/',
    element: <Navigate to="/about" />,
  },
]

```
```jsx
//  使用
// 引进路由表
import {useRoutes} from "react-router-dom"
import routes from './routes'

// 路由表  根据路由表生成对应的路由规则
const elementRoutes = useRoutes(routes)

 {/* 注冊組件  useRoutes 注册路由表*/}
 {elementRoutes}
```
## 嵌套路由
```jsx
// src/routes/index.js
import { Navigate } from "react-router-dom"
import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/home',
    element: <Home />,
    children:[
      {
        path:'news',
        element:<News/>
      },
      {
        path:'message',
        element:<Message/>
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to="/about" />,
  },
]
```
```jsx
import React,{useState} from 'react'
import {NavLink,Outlet} from "react-router-dom"

export default function Home() {
  const [sum,setSum] = useState(1)
  return (
     <div>
       <h2>Home组件内容</h2>
       <div>
         <ul className="nav nav-tabs">
           <li>
             <NavLink className="list-group-item" to="news">News</NavLink>
           </li>
           <li>
             <NavLink className="list-group-item" to="message">Message</NavLink>
           </li>
         </ul>
         {/* 指定路由组件呈现的位置 */}
         <Outlet />
       </div>
      </div>
  )
}
```
## 路由的params参数--useParams
```jsx
// 路由表
{
  path:'message',
  element:<Message/>,
  children:[
    {
      path:'detail/:id/:title/:content',
      element:<Detail/>
    }
   ]
}

// Message.jsx
import React,{useState} from 'react'
import {Link,Outlet} from "react-router-dom"
export default function Message() {

  const [messages] = useState([
    {
      id:'001',
      title:'消息01',
      content:'锄禾日当午'
    },
    {
      id:'002',
      title:'消息02',
      content:'汗滴禾下土'
    },
    {
      id:'003',
      title:'消息03',
      content:'谁知盘中餐'
    },
    {
      id:'004',
      title:'消息04',
      content:'粒粒皆辛苦'
    },
  ])

  return (
    <div>
      <ul>
        {
          messages.map((item,index) =>{
              return (
                <li key={item.id}>
                  <Link to={`detail/${item.id}/${item.title}/${item.content}`}>{item.title}</Link>&nbsp;&nbsp;
                </li>
              )
          })
        }
      </ul>
      <hr/>
      {/* 指定路由组件的展示位置 */}
      <Outlet></Outlet>
    </div>
  )
}


// Detail.jsx   获取

import React from 'react'
import {useParams} from "react-router-dom"

export default function Detail() {
  const {id,title,content} = useParams()
  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </ul>
  )
}
```
## 路由的search参数--useSearchParams
```jsx
// 路由表正常注册
{
  path:'message',
  element:<Message/>,
  children:[
    {
      path:'detail',
      element:<Detail/>
    }
  ]
}

// Message.jsx
<Link to={`detail?id=${item.id}&title=${item.title}&content=${item.content}`}>{item.title}</Link>&nbsp;&nbsp;

// Detail.jsx
import React from 'react'
import {useSearchParams} from "react-router-dom"

export default function Detail() {
  const [search,setSearch] = useSearchParams()
  console.log(search.get('id'));
  return (
    <ul>
      <li>{search.get('id')}</li>
      <li>{search.get('title')}</li>
      <li>{search.get('content')}</li>
    </ul>
  )
}
```
## 路由的state参数
```jsx
// 路由表正常注册
{
  path:'message',
  element:<Message/>,
  children:[
    {
      path:'detail',
      element:<Detail/>
    }
  ]
}


// Message.jsx
 <Link to={`detail`} state={{id:item.id,title:item.title,content:item.content}}>{item.title}</Link>&nbsp;&nbsp;

//Detail.jsx

import React from 'react'
import {useLocation} from "react-router-dom"

export default function Detail() {
  const {state} = useLocation()
  return (
    <ul>
      <li>{state.id}</li>
      <li>{state.title}</li>
      <li>{state.content}</li>
    </ul>
  )
}
```
## 编程式路由导航
```jsx
import React,{useState} from 'react'
import {Link,Outlet,useNavigate} from "react-router-dom"
export default function Message() {

  const [messages] = useState([
    {
      id:'001',
      title:'消息01',
      content:'锄禾日当午'
    },
    {
      id:'002',
      title:'消息02',
      content:'汗滴禾下土'
    },
    {
      id:'003',
      title:'消息03',
      content:'谁知盘中餐'
    },
    {
      id:'004',
      title:'消息04',
      content:'粒粒皆辛苦'
    },
  ])

  const navigate = useNavigate()
  const showDetail = (item)=>{
    navigate('detail',{
      replace:false,
      state:{
        id:item.id,
        title:item.title,
        content:item.content
      }
    })
  }

  return (
    <div>
      <ul>
        {
          messages.map((item,index) =>{
              return (
                <li key={item.id}>
                  <Link to={`detail`} state={{id:item.id,title:item.title,content:item.content}}>{item.title}</Link>&nbsp;&nbsp;
                  <button onClick={()=>showDetail(item)}>查看详情</button>
                </li>
              )
          })
        }
      </ul>
      <hr/>
      {/* 指定路由组件的展示位置 */}
      <Outlet></Outlet>
    </div>
  )
}
```
## 路由跳转的push与replace
### push

- `a-b-c`可以回到上一级
### replace

- 回不到上一级适用于登录后，不需要重新回到登页面
## withRouter的使用

- 用于一般组件调用路由相关的API
```jsx
import {withRouter} from "react-router-dom"

class Header extends Component {
	…………………………
}

export default withRouter(Header)
```
## BrowserRouter与HashRouter
**底层原理不一样**
`BrowserRouter`使用的是 H5 的 **history API**，不兼容 IE9 及以下版本。
`HashRouter`使用的是 URL 的**哈希值**。


**URL 表现形式不一样**
`BrowserRouter`的路径中没有**#**，例如：localhost:3000/demo/test。
`HashRouter`的路径中包含**#**，例如：localhost:3000/#/demo/test。
**刷新后对路由 state 参数的影响**
`BrowserRouter`没有任何影响，因为 state 保存在 history 中。
`HashRouter`刷新后会导致路由 state 参数丢失。
**备注：HashRouter 可以用于解决一些路径错误相关问题**​


# Ant-Design 基本使用
**文档：**[**https://ant.design/index-cn**](https://ant.design/index-cn)​
## 基础使用

- 安装：`npm install antd --save`。
### 常规组件

- 引入：`import { Button } from'antd';`
- 需要引入样式：`import "antd/dist/antd.css"`
- 使用：`<Buttontype="primary">Primary Button</Button>`
### Icon组件

- 安装：`npm install --save @ant-design/icons`
- 引入：`import { WechatOutlined } from'@ant-design/icons';`
- 使用：` <WechatOutlined/>`



## antd样式按需引入

1. 安装`react-app-rewired`和 `customize-cra`。`npm install react-app-rewired customize-cra`
1. 修改`package.json`配置，并使用新命令启动项目
```jsx
  "scripts": {
    "rstart":"react-app-rewired start", 
    "rbuild":"react-app-rewired build",
    "rtest":"react-app-rewired test"
  },
```

3. 需要使用 `babel-plugin-import`,是一个用于按需加载组件代码和样式的 babel 插件。
3. 项目根目录新建 `config-overrides.js`用于修改默认配置：
```jsx
// 配置具体的修改规则
const { override, fixBabelImports} = require("customize-cra")

module.exports = override(
  fixBabelImports('import',{
    libraryName:'antd',
    libraryDirectory:'es',
    style:'css'
  })
)
```
## antd自定义主题

1. 按照配置主题的要求，自定义主题需要用到 less 变量覆盖功能，`npm install less less-loader`
1. 引入`customize-cra`总提供的 `addLessLoader`来帮助加载 less 样式，在`config-overrides.js`中配置：
```jsx
// 配置具体的修改规则
const { override, fixBabelImports,addLessLoader} = require("customize-cra")

module.exports = override(
  fixBabelImports('import',{
    libraryName:'antd',
    libraryDirectory:'es',
    // style:'css'
    style:true
  }),
 addLessLoader({
   javascriptEnabled: true,
   modifyVars: { '@primary-color': '#1DA57A' },
 }),
)
```


# redux
**文档：**[**https://www.redux.org.cn/**](https://www.redux.org.cn/)​
## 简介
> Redux 是 Javascript 状态容器，提供可预测化的状态管理，可以让你构建一致化的引用，运行于不同的环境。

- redux 是一个专门用于做**状态管理**的 js 库（不是 react 插件库）
- 它可以用于在 react、angular、vue 等项目中，但基本与 react 配合使用。
- **作用：集中式管理 react 应用中多个组件共享的状态**​



## 使用redux时机

- 某个组件的状态，需要让其他组件可以随时拿到（共享）
- 一个组件需要改变另一个组件的状态（通信）
- 总体原则：能不用就不用，如果不用比较吃力才考虑使用



## redux工作流程
[https://www.bilibili.com/video/BV1wy4y1D7JT?p=98&spm_id_from=pageDriver](https://www.bilibili.com/video/BV1wy4y1D7JT?p=98&spm_id_from=pageDriver)
## ![redux原理图.png](https://cdn.nlark.com/yuque/0/2022/png/2727826/1646020628500-8a48a5ba-5542-4749-8394-187fb6e74228.png#clientId=u173d415b-3161-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=ub315b1ef&margin=%5Bobject%20Object%5D&name=redux%E5%8E%9F%E7%90%86%E5%9B%BE.png&originHeight=720&originWidth=1280&originalType=binary&ratio=1&rotation=0&showTitle=false&size=119476&status=done&style=none&taskId=ud42d0400-fda6-4723-b695-12e34d383d6&title=)
## redux的三个核心概念
### action

- 动作对象
- 包含两个属性

        1. **type**：标识属性，值为字符串，唯一，必要属性；
        2. **data**：数据属性，值为任意类型，可选属性；

- 例子：`{type:'ADD_STUDENT',data:{'name:'tom',age:'18'}}`
### reducer

- 用于初始化状态，加工状态；
- 加工时，根据旧的 state 和 action ，产生新的 state 的**纯函数**。
### store

- 将 state、action、reducer 联系在一起的对象。
- 如何得到此对象？

       1. `import {createStore} from 'redux'`
       2. `import reducer from './reducers'`
       3. `const store = createStore(reducer)`
​


- 此对象的功能有哪些？

       1. **getState()** ：得到 state
       2.**dispatch(action)**：分发 action，触发 reducer 调用，产生新的 state
       3.**subscribe(listener)**：注册监听，当产生新的 state 时，自动调用


## 求值计算案例
[https://github.com/sean-lgt/react-basic-study/tree/master/redux_study/03_src_%E5%AE%8C%E6%95%B4%E7%89%88%E8%AE%A1%E7%AE%97%E6%A1%88%E4%BE%8B](https://github.com/sean-lgt/react-basic-study/tree/master/redux_study/03_src_%E5%AE%8C%E6%95%B4%E7%89%88%E8%AE%A1%E7%AE%97%E6%A1%88%E4%BE%8B)
## 异步action

- 需要借助中间件**react-thunk**：`npm install react-thunk`

[https://github.com/sean-lgt/react-basic-study/blob/master/redux_study/04_src_redux%E5%BC%82%E6%AD%A5action%E7%89%88%E6%9C%AC/redux/count_action.js](https://github.com/sean-lgt/react-basic-study/blob/master/redux_study/04_src_redux%E5%BC%82%E6%AD%A5action%E7%89%88%E6%9C%AC/redux/count_action.js)
```jsx
incrementAsync = ()=>{
    const {value} = this.selectNumber
    store.dispatch(createIncrementAsyncAction(value * 1,1000))
     
 }

// 异步action，指的是 action 返回的是函数
// 异步action，返回的函数给store调用，可携带参数dispatch  一般都会调用同步action
export const createIncrementAsyncAction = (data,time) =>{
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch(createIncrementAction(data))
    },time)
  }
}
```
## react-redux理解
![react-redux模型图.png](https://cdn.nlark.com/yuque/0/2022/png/2727826/1645882857486-3fb0fe82-e92e-4b2b-9098-91e0557a4edc.png#clientId=uc6872497-d2e0-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=uc232e743&margin=%5Bobject%20Object%5D&name=react-redux%E6%A8%A1%E5%9E%8B%E5%9B%BE.png&originHeight=635&originWidth=1131&originalType=binary&ratio=1&rotation=0&showTitle=false&size=45184&status=done&style=none&taskId=u774a198f-66c3-4e3c-9b91-8d873675186&title=)
## react-redux的基本使用
[https://github.com/sean-lgt/react-basic-study/tree/master/redux_study/05_src_react-redux%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8](https://github.com/sean-lgt/react-basic-study/tree/master/redux_study/05_src_react-redux%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8)
## react-redux的完整案例
[https://github.com/sean-lgt/react-basic-study/tree/master/redux_study/06_src_react-redux%E5%AE%8C%E6%95%B4%E6%A1%88%E4%BE%8B](https://github.com/sean-lgt/react-basic-study/tree/master/redux_study/06_src_react-redux%E5%AE%8C%E6%95%B4%E6%A1%88%E4%BE%8B)
## 项目级数据共享案例
[https://github.com/sean-lgt/react-basic-study/tree/master/redux_study/09_src_react-redux%E6%95%B0%E6%8D%AE%E5%85%B1%E4%BA%AB%E6%9C%80%E7%BB%88%E7%89%88%E6%9C%AC](https://github.com/sean-lgt/react-basic-study/tree/master/redux_study/09_src_react-redux%E6%95%B0%E6%8D%AE%E5%85%B1%E4%BA%AB%E6%9C%80%E7%BB%88%E7%89%88%E6%9C%AC)
## redux开发者工具

- 谷歌应用商店安装`Redux DevTools`
- 项目安装：`npm install redux-devtools-extension`
- 使用
```jsx
// 引入开发工具扩展
import {composeWithDevTools} from "redux-devtools-extension"

const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
```


## react-redux数据共享最终版
[https://github.com/sean-lgt/react-basic-study/tree/master/redux_study/09_src_react-redux%E6%95%B0%E6%8D%AE%E5%85%B1%E4%BA%AB%E6%9C%80%E7%BB%88%E7%89%88%E6%9C%AC](https://github.com/sean-lgt/react-basic-study/tree/master/redux_study/09_src_react-redux%E6%95%B0%E6%8D%AE%E5%85%B1%E4%BA%AB%E6%9C%80%E7%BB%88%E7%89%88%E6%9C%AC)


# react扩展知识点
## setState
### 对象式SetState
`setState(stateChange, [callback])------对象式的setState`

- stateChange 为状态改变对象（该对象可以体现出状态的更改）
- callback 是可选回到函数，它在状态更新完毕、界面也更新后（render 调用后）才被调用，类似于 vue 中 的 nextTick。
### 函数式setState
`setState(updater, [callback])------函数式的setState`

- updater为返回stateChange对象的函数。
- updater可以接收到state和props。
- callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
### 总结

- 对象式的 setState 是函数式的 setState 的简写方式（语法糖）
- 使用原则
```jsx
(1).如果新状态不依赖于原状态 ===> 使用对象方式
(2).如果新状态依赖于原状态 ===> 使用函数方式
(3).如果需要在setState()执行后获取最新的状态数据, 要在第二个callback函数中读取
```
## lazyLoad
```jsx
import React, { Component,lazy,Suspense} from 'react'

//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
const Login = lazy(()=>import('@/pages/Login'))

// 使用
{/* 注册路由 */}
<Suspense fallback={<h1>加载中</h1>}>
  <Routes>
    <Route path="/about"  element={ <About/> } ></Route>
    <Route path="/home" element={ <Home/> } ></Route>
  </Routes>
</Suspense>
```
## Hooks
### React Hooks 是什么
> Hook 是 React 16.8.0 版本增加的新特性（新语法）,可以让你在函数组件中使用 state 以及其他的 React 特性。

### 三个常用的Hook

- **state**：`React.useState()`
- **Effect**：`React.useEffect()`
- **Ref**：`React.useRef()`
### useState
```jsx
(1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
(2). 语法: const [xxx, setXxx] = React.useState(initValue)  
(3). useState()说明:
        参数: 第一次初始化指定的值在内部作缓存
        返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
(4). setXxx()2种写法:
        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
        setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
```
### useEffect
```jsx
(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
(2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
        手动更改真实DOM
(3). 语法和说明: 
        useEffect(() => { 
          // 在此可以执行任何带副作用操作
          return () => { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
    
(4). 可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
    	  componentWillUnmount() 
```
### useRef
```jsx
(1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
(2). 语法: const refContainer = useRef()
(3). 作用:保存标签对象,功能与React.createRef()一样
```


## Fragment
> 可以不用必须有一个真实的DOM根标签了

```jsx
<Fragment><Fragment>
<></>
```
## Context
> 一种组件间通信方式，常用于【祖组件】与 【后代组件】间的通信

```jsx
1) 创建Context容器对象：
	const XxxContext = React.createContext()  
	
2) 渲染子组时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：
	<xxxContext.Provider value={数据}>
		子组件
    </xxxContext.Provider>
    
3) 后代组件读取数据：

	//第一种方式:仅适用于类组件 
	  static contextType = xxxContext  // 声明接收context
	  this.context // 读取context中的value数据
	  
	//第二种方式: 函数组件与类组件都可以
	  <xxxContext.Consumer>
	    {
	      value => ( // value就是context中的value数据
	        要显示的内容
	      )
	    }
	  </xxxContext.Consumer>
```
**在应用开发中一般不用context, 一般都用它的封装react插件**​
## 组件优化
### Component存在的问题

- 只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低
- 只当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低
### 解决
```jsx
// Component中的shouldComponentUpdate()总是返回true 
// 只有当组件的state或props数据发生改变时才重新render()

办法1: 
	重写shouldComponentUpdate()方法
	比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false
办法2:  
	使用PureComponent
	PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
	注意: 
		只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false  
		不要直接修改state数据, 而是要产生新数据
项目中一般使用PureComponent来优化
```
## render props
### 如何向组件内部动态传入带内容的结构(标签)?
```jsx
Vue中: 
	使用slot技术, 也就是通过组件标签体传入结构  <A><B/></A>
React中:
	使用children props: 通过组件标签体传入结构
	使用render props: 通过组件标签属性传入结构,而且可以携带数据，一般用render函数属性
```
### children props
```jsx
<A>
  <B>xxxx</B>
</A>
{this.props.children}
问题: 如果B组件需要A组件内的数据, ==> 做不到 
```
### render props
```jsx
<A render={(data) => <C data={data}></C>}></A>
A组件: {this.props.render(内部state数据)}
C组件: 读取A组件传入的数据显示 {this.props.data} 
```
## ErrorBoundary
> 错误边界(Error boundary)：用来捕获后代组件错误，渲染出备用页面，只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误。

```jsx
// getDerivedStateFromError配合componentDidCatch

// 生命周期函数，一旦后台组件报错，就会触发
static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发
    // 返回新的state
    return {
        hasError: true,
    };
}

componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error, info);
}
```
# ​













