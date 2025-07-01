# 🆚 ES5 vs ES6 Differences in JavaScript

| Feature              | ES5                            | ES6 (ES2015)                        |
|----------------------|---------------------------------|-------------------------------------|
| Variable Declaration | `var`                          | `let`, `const`                      |
| Scoping              | Function Scope                 | Block Scope                         |
| Functions            | Regular Functions              | Arrow Functions (`()=>{}`)         |
| String Templates     | "Hello " + name                | \`Hello ${name}\`                  |
| Classes              | Function-based, prototype      | `class` keyword                     |
| Modules              | Not supported                  | `import` / `export` supported       |
| Default Params       | Manual via `if` checks         | Directly in function signature      |
| Destructuring        | Not available                  | `let [a,b] = [1,2]`                 |
| Spread / Rest        | Manual loops, concat           | `...array`, `...args`              |
| Promises             | Not available (use callbacks)  | Native `Promise` support            |

## 🔹 Code Examples

### ES5

```js
var name = "Ved";
console.log("Hello " + name);
```

### ES6

let name = "Ved";
console.log(`Hello ${name}`);

### Arrow Function

const greet = () => {
  console.log("Hello from ES6");
};
