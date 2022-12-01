# [React](https://reactjs.org/)

> React is a JavaScript library to manipulate trees that represent user interfaces, including the browser's DOM tree.

* The UI for a browser window is defined by the contents of the **DOM (Document Object Model) tree**;
  * This tree is composed by **DOM nodes**, which include **element nodes** or **text nodes**;

### Declarative 

React is **declarative**, meaning that we define the UI by describing the tree:

* We don't manipulate the DOM directly, but we manipulate the **[virtual DOM](https://reactjs.org/docs/faq-internals.html)**;
* The virtual DOM is a tree that is kept in memory and is updated when the UI changes;
* React then compares the virtual DOM with the real DOM and updates the real DOM only where necessary;

### Component-Based

React is **component-based**, meaning that we define the UI by composing components:

* A **component** is a **function that returns a tree**;
* We can compose components by **nesting** them;
* Component logic is written in **JavaScript** instead of templates, which makes it easier to pass rich data through your app and keep state out of the DOM;

---

## React Packages

React is divided into a **host-independent** package and a **host-dependent** package:

* **[react](https://www.npmjs.com/package/react)** is the host-dependent package, and knows how to **manipulate the DOM tree** (or any other tree, like Android's View tree) - it is the **core** of React and its called a **_renderer_**;
* **[react-dom](https://www.npmjs.com/package/react-dom)** is the host-independent package, and it used to create **tree representations**, before they are applied to a host specific tree - it is called a **_reconciler_**.

---
---

## React Components


> **Note:** A component is made of **elements** and other components. An **element** is a **plain object** describing a component instance or a DOM node. Elements are created by calling `React.createElement()` or JSX.

* A **component** is a function that implements a `render()` method, which takes **props** as input and returns a **tree** as output;
* This uses the **[JSX](https://reactjs.org/docs/introducing-jsx.html)** syntax, which is a **JavaScript extension** that allows us to write XML-like code inside JavaScript; (this is not required to use React, but it is recommended);
* The Babel compiler transforms JSX into `React.createElement()` calls;

```jsx
class Hello extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

root.render(<Hello name="World" />);
```

This can also be written as a **function component**:

```jsx
function Hello(props) {
  return <h1>Hello {props.name}</h1>;
}

root.render(<Hello name="World" />);
```

---

### State

* A component can maintain internal state by implementing a `constructor()` method, which is called when the component is created;
* This state can be accessed via `this.state` and can be updated via `this.setState()`:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

root.render(<Counter />);
```

To use state correctly, we need to to know three things:

* **Do not modify state directly** - use `setState()` instead; the only place where you can assign `this.state` is the constructor;
* **State updates may be asynchronous** - do not rely on `this.state` immediately after calling `setState()`; instead, use `componentDidUpdate()` or a `setState()` callback;
* **State updates are merged** - when you call `setState()`, React merges the object you provide into the current state;

---

### Lifecycle

* _In applications with many components, it's very important to free up resources taken by the components when they are destroyed_;
* **Mounting** is the process of **inserting a component into the DOM**; the following methods are called in this order when a component is inserted into the DOM:
  * `constructor()`
  * `static getDerivedStateFromProps()`
  * `render()`
  * `componentDidMount()`;
* **Unmounting** is the process of **removing a component from the DOM**; the `componentWillUnmount()` method is called when a component is removed from the DOM;
* We want to set up the **event listeners** when the component is mounted, and remove them when the component is unmounted;

---

### [Hooks](https://reactjs.org/docs/hooks-overview.html)

* Hooks are **functions** that let you **hook into React state and lifecycle features** from function components (instead of class components);
* Hooks don't work inside classes - they let you use React without classes;

#### State Hook (`useState`)

* The `useState()` hook lets us add React state to function components;
* We call it inside a function component to **add some local state** to it;
* React will **preserve** this state between re-renders;
* Returns a **pair** of values: the **current state** and a **function** that lets us **update it**;

```jsx
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

#### Effect Hook (`useEffect`)

* The `useEffect()` hook lets us perform **side effects** in function components;
* It is a close replacement for `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()` in class components;
* When you call `useEffect()`, you're telling React to run your "effect" function **after flushing changes** to the DOM;

> **Note:** There are two rules for using Hooks:
> * Only call Hooks at the **top level**. Don't call Hooks inside loops, conditions, or nested functions;
> * Only call Hooks from **React function components**. Don't call Hooks from regular JavaScript functions.

**You can also build your own Hooks to reuse stateful behavior between different components.**

#### [Reducer Hook (`useReducer`)](https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer)

* The `useReducer()` hook is an alternative to the `useState()` hook;
* Reducers are **pure functions** that **take the previous state and an action**, and return the **next state**;

---
---

## [React Context](https://beta.reactjs.org/learn/passing-data-deeply-with-context)  

> Context provides a way to **pass data through the component tree** without having to pass props down manually at every level.

* Created by calling `React.createContext()`;
* To make a context available to all components in the subtree below a certain component, you need to **use the `Provider` component**:

```jsx
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

In this example, the **default value** for the current theme is `'light'`, but the **`Toolbar`** component is inside a **`ThemeContext.Provider`** with a value of `'dark'`. So the **`Toolbar`** will **receive `'dark'`** as its current context value.

* To use a context value, we need to use the `useContext()` hook, which takes a context object (the value returned from `React.createContext()`) and returns the current context value for that context:

```jsx
const theme = useContext(ThemeContext);
```

---
---

## [React Router](https://reactrouter.com/en/main)

> React Router is a collection of navigational components that compose declaratively with your application.

* To create a router,we use the `createBrowserRouter()` function, and we use it via `Router.Provider`:

```jsx
import { createBrowserRouter } from 'react-router';

const Router = createBrowserRouter();

function App() {
  return (
    <Router.Provider>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </div>
      <Router.Switch>
        <Router.Route path="/" exact>
          <Home />
        </Router.Route>
        <Router.Route path="/about">
          <About />
        </Router.Route>
        <Router.Route path="/users">
          <Users />
        </Router.Route>
      </Router.Switch>
    </Router.Provider>
  );
}
```

To navigate between pages, we use the `Link` component:

```jsx
<Link to="/about">About</Link>
```

Or we can use the `useNavigate()` hook:

```jsx
const navigate = useNavigate();

function handleClick() {
  navigate('/about');
}
```

<!--Add more content (Loaders, Outlet, etc)-->
