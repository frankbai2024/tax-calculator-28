import "./Button.css";

const Button = ({ onClick, color, children }) => {
  return (
    <button onClick={onClick} className={`button ${color}`}>
      {children}
    </button>
  )
}

export default Button;
// Button 的 isActive 属性
// Button 的 color 属性

// 组件的 props 名称应该描述组件自己的行为，而且足够 generic，不受调用者影响
// 符合人类思维方式的代码才是好的代码
// Open Close 原则