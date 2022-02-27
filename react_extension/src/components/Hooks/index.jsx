import React,{useState,useEffect,useRef} from 'react'
import  ReactDOM  from 'react-dom'

export default function Demo() {

  const [count,setCount] = useState(0)

  const addCount = ()=>{
    // 第一种写法
    // setCount(count+1)

    // 第二种写法 是函数
    setCount(count => count+1)
  }
  // 卸载组件
  const unmount = ()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById("root"))
  }

  // 提示输入数据
  const show = ()=>{
    console.log(myRef)
    alert(myRef.current.value)
  }

  // 可以让你在函数组件执行副作用的操作，模拟类组件的生命周期钩子
  // 可以发送 ajax请求获取数据，设置订阅、启动定时器，手动更新真实DOM，有两个参数，第一个是函数，第二个是数组
  // 第二个参数如果指定的是 []，则只会在第一个 render 后执行
  // 类似于 vue 中的 watch
  useEffect(()=>{
    let timer = setInterval(() => {
      setCount(count => count+1)
    }, 1000);
    // return 出一个函数，会在组件卸载前调用 相当于componentWillUnmount
    return ()=>{
      clearInterval(timer)
    }
  },[])

  const myRef = useRef()

  return (
     <div>
        <input type="text" ref={myRef}/>
        <h1>当前求和为：{count}</h1>
        <button onClick={addCount}>点我+1</button>
        <button onClick={unmount}>卸载组件</button>
        <button onClick={show}>点我提示数据</button>
    </div>
  )
}
