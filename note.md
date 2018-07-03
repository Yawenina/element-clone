## Typescript
- 定义 none-reactive data: 数据的初始值为`undefined`将不会被observed.
    - https://github.com/vuejs/vue-class-component/issues/99
    - https://github.com/vuejs/vue-class-component#undefined-will-not-be-reactive
    ```
    // should be acquired class property values -- vue-class-property
        var data = new Component();
        // restore original _init to avoid memory leak (#209)
        Component.prototype._init = originalInit;
        // create plain data object
        var plainData = {};
        Object.keys(data).forEach(function (key) {
            if (data[key] !== undefined) {
                plainData[key] = data[key];
            }
        });
    ```
## CSS
- 禁用： `cursor: not-allowed`