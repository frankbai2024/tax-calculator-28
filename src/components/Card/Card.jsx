import './Card.css';
// obj 是缩写，我们的代码里面不应该缩写，因为缩写不可读
// es6 解构赋值，在 object 对象名称不重要的情况下，应该优先使用解构赋值

// React 中的 Props 使用方法
// 我们可以通过抽象 Component 组件来实现代码的复用
// 我们可以在复用的过程中通过传递 key=value 的方式来实现对组件的个性化定制
// 这种 key=value 的传递方式在 React 里面被称为 Props 属性传递

// children 是 React 里面的一个特殊的属性名称
// children 专门用来传递组件的节点内容的，开扩号到关扩号之间的内容
const Card = ({ children }) => <div className='card'>{children}</div>;
// 如果我们想要在 JSX 里面引用 JS 变量或者方法，需要使用花括号包裹
// 在 JSX 中，所有尖括号开到尖括号关之间的内容，都会被当作是 HTML 代码来处理
// 在 JSX 中，所有花括号开到花括号关之间的内容，都会被当作是 JS 代码来处理
export default Card;