# [React](https://reactjs.org/)

> React is a JavaScript library to manipulate trees that represent user interfaces, including the browser's DOM tree.

* The UI for a browser window is defined by the contents of the **DOM (Document Object Model) tree**;
  * This tree is composed by **DOM nodes**, which include **element nodes** or **text nodes**;

### Declarative 

React is **declarative**, meaning that we define the UI by describing the tree:

* We don't manipulate the DOM directly, but we manipulate the **[virtual DOM](https://reactjs.org/docs/faq-internals.html)**;
* The virtual DOM is a tree that is kept in memory and is updated when the UI changes;
* React then compares the virtual DOM with the real DOM and updates the real DOM only where necessary;
* **The virtual tree elements are never mutated after hey are created -> changing the UI is done by creating a new virtual tree.**

### Component-Based

React is **component-based**, meaning that we define the UI by composing components:

* A **component** is a **function that returns a tree**;
* We can compose components by **nesting** them;
* Component logic is written in **JavaScript** instead of templates, which makes it easier to pass rich data through your app and keep state out of the DOM;

---

## React Packages

React is divided into a **host-independent** package and a **host-dependent** package:

* **[react](https://www.npmjs.com/package/react)** is the host-dependent package, and knows how to **manipulate the DOM tree** (or any other tree, like Android's View tree) - it is the **core** of React and its called a **_renderer_**;
* **[react-dom](https://www.npmjs.com/package/react-dom)** is the host-independent package, and it used to create **tree representations**, before they are applied to a host specific tree - it is called a **_reconciler_** (reconciliation is the process of updating the DOM tree to match the virtual DOM tree);

---
---

## React Components


> **Note:** A component is made of **elements** and other components. An **element** is a **plain object** describing a component instance or a DOM node. Elements are created by calling `React.createElement()` or JSX.

* A **component** is a function that implements a `render()` method, which takes **props** as input and returns a **tree** as output;
* This uses the **[JSX](https://reactjs.org/docs/introducing-jsx.html)** syntax, which is a **JavaScript extension** that allows us to write XML-like code inside JavaScript; (this is not required to use React, but it is recommended);
* The Babel compiler transforms JSX into `React.createElement()` calls;

Example:

```jsx
<div>
  <p>Note the use of a component below</p>
  <MyComponent awesome="of-course" />
</div> 
```

This can be written as:

```js
React.createElement('div', null, 
  React.createElement('p', null, 'Note the use of a component below'), 
  React.createElement(MyComponent, { awesome: 'of-course' })
)
```

JSX uses the following convention to distinguish between HTML elements and components:

* If the identifier in JSX starts with a **lower case**, it is converted to a createElement call using a **string** containing the identifier;
  * `<something />` is converted to `React.createElement('something')`;
* If the identifier in JSX starts with an **upper case**, it is converted to a createElement call using the **identifier directly**:
  * `<Something />` is converted to `React.createElement(Something)`;


> **Note - [createElement](https://beta.reactjs.org/reference/react/createElement)**:
> The React.createElement lets you create a React element, serving as an alternative to writing JSX: `React.createElement(type, props, [...children])`.
> * `type` is a string (e.g. 'div', 'span', etc.) or a React component (e.g. MyComponent);
> * `props` is an object containing the properties of the element, or `null` (treated as an empty object) - `ref` and `key` are special, and will not be available as `element.props.ref` or `element.props.key`, but will be available as `element.ref` and `element.key`;
> * `children` are the children of the element, as an array of React elements (e.g. `React.createElement('div', null, 'Hello World')`).
> This function must not be confused with the `document.createElement` function, which returns a DOM element, not a React element (object that represents a DOM element) - this happens because React operates a Virtual DOM.

Example of a component:

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

### [React Hooks](https://reactjs.org/docs/hooks-overview.html)

* Hooks are **functions** that let you **hook into React state and lifecycle features** from function components (instead of class components);
* Hooks don't work inside classes - they let you use React without classes;

> **Note:** There are two rules for using Hooks:
> * _Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders._
> * Only call Hooks from **React function components**. Don't call Hooks from regular JavaScript functions.

**You can also build your own Hooks to reuse stateful behavior between different components.**

#### [`useState`](https://beta.reactjs.org/reference/react/useState#usestate)

> The `useState()` hook lets us add React state to function components.

* We call it inside a function component to **add some local state** to it;
* React will **preserve** this state between re-renders;
* Returns a **pair** of values: the **current state** and a **function** that lets us **update it**, and the convention is to name these variables like `[something, setSomething]`, using array destructuring:

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

The `useState` has the following signature: `useState(initialState)`, where `initialState` is the initial state argument (the only argument) and it is only used during the **first render**. If a function is passed as the `initialState`, it will be treated as an **initializer function** and will be called only during the **first render** to compute the initial state.

The `setSomething` function has the following signature: `setSomething(nextState)`, where `nextState` is the new state argument (the only argument) and it can be either an object or a function. If a function is passed as the `nextState`, it will be treated as an **updater function** and will receive the previous state as the first argument and the props at the time the update is applied as the second argument.

> **WARN** - Calling the set function does not change the current state in the already executing code:
> ```jsx
> function example {
>   setCount(count + 1);
>   console.log(count); // Still the previous value
> }
> ```

#### [`useEffect`](https://beta.reactjs.org/reference/react/useEffect#useeffect)

> The `useEffect()` hook lets us perform **side effects** in function component.

* It is a close replacement for `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()` in class components;
* When you call `useEffect()`, you're telling React to run your "effect" function **after flushing changes** to the DOM;
* Has the following signature: `useEffect(setup, dependencies?)`:
  * `setup` is a function that will be executed after flushing changes to the DOM; this function may also optionally return a **cleanup function**;
    * When the component is first added to the DOM, React will run your setup function;
    * After every re-render with changed dependencies, React will first run the cleanup function and then run your setup function;
    * When the component is removed from the DOM, React will run the cleanup function one last time;
    * When **Strict Mode** is on, React will run one extra development-only setup+cleanup cycle before the first real setup;
  * `dependencies` is an array of all reactive values referenced inside of the setup code;
    * If the dependencies are not specified, React will run the setup function after every re-render;

> **Note** - _If you’re not trying to synchronize with some external system, you probably don’t need an Effect._

#### [`useReducer`](https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer)

> The `useReducer()` hook is an alternative to the `useState()` hook.

* Reducers are **pure functions** that **take the previous state and an action**, and return the **next state**;
* Reducer: function from State and an Action to a new a new State `((State, Action) => State)`;

<!--TODO: Add more info about useReducer-->

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

> React Router is a collection of navigational components that compose declaratively with your application, and we use it to create **single-page applications** with React, using **Client-Side Routing**.

Some [main concepts](https://reactrouter.com/en/main/start/concepts):

* **Location** - React Router specific object that is based on the built-in browser's `window.location` object, but it is not the same;
* **History Stack** - as the user navigates, the browser keeps track of each location in a stack;
* **Client Side Routing (CSR)** - _A plain HTML document can link to other documents and the browser handles the history stack itself. Client Side Routing enables developers to manipulate the browser history stack without making a document request to the server_;

> **Note: [History API](https://developer.mozilla.org/en-US/docs/Web/API/History)**
> _The History interface allows manipulation of the browser session history, that is the pages visited in the tab or frame that the current page is loaded in._

* To create a router, we use the `createBrowserRouter()` function, and we use it via `Router.Provider`:

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

To navigate between pages, we use the [`Link`](https://reactrouter.com/en/main/components/link) component:

```jsx
<Link to="/about">About</Link>
```

_A `<Link>` is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a `<Link>` renders an accessible `<a>` element with a real `href` that points to the resource it's linking to._

Or we can use the [`useNavigate()`](https://reactrouter.com/en/main/hooks/use-navigate) hook:

```jsx
const navigate = useNavigate();

function handleClick() {
  navigate('/about');
}
```

### [Path Templates](https://reactrouter.com/en/main/route/route#dynamic-segments)

* In a `<Route>` element, if a `path` segment starts with `:` then it becomes a **dynamic segment**;
* The dynamic segment will be parsed from the URL and provided as `params` to other router APIs:

```jsx
<Route
  path="/users/:userId"
  loader={({params}) => {
    console.log(params.userId);
  }}
  element={<Profile />}
/>
```

To access the `params`, its used the `useParams()` hook:

```jsx
function Profile() {
  const { userId } = useParams();
}
```

### [Loaders](https://reactrouter.com/en/main/route/loader)

* Each route can define a "loader" function to provide data to the route element before it renders.
* To access the value returned from the route loader, the route element can use the [`useLoaderData()`](https://reactrouter.com/en/main/hooks/use-loader-data) hook;
* To access te loading state, the [`useNavigation()`](https://reactrouter.com/en/main/hooks/use-navigation) hook can be used; this hook tells us everything about the page navigation;
* The [`useFetcher()`](https://reactrouter.com/en/main/hooks/use-fetcher) hook can be used to fetch data from the server.
