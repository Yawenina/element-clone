<template>
  <div class="example">
    <aside class="example__aside">
      <nav>
        <ul>
          <li><router-link to="/layout">Layout</router-link></li>
          <li><router-link to="/container">Container</router-link></li>
          <li><router-link to="/icon">Icon</router-link></li>
          <li><router-link to="/button">Button</router-link></li>
          <li><router-link to="/input">Input</router-link></li>
          <li><router-link to="/radio">Radio</router-link></li>
          <li><router-link to="/checkbox">Checkbox</router-link></li>
          <li><router-link to="/notification">Notification</router-link></li>
          <li><router-link to="/steps">Steps</router-link></li>
          <li><router-link to="/timeline">Timeline</router-link></li>
          <li><router-link to="/switch">Switch</router-link></li>
          <li><router-link to="/alert">Alert</router-link></li>
          <li><router-link to="/badge">Badge</router-link></li>
          <li><router-link to="/tag">Tag</router-link></li>
          <li><router-link to="/input-number">InputNumber</router-link></li>
          <li><router-link to="/progress">Progress</router-link></li>
          <li><router-link to="/upload">Upload</router-link></li>
          <li><router-link to="/collapse">Collapse</router-link></li>
          <li><router-link to="/carousel">Carousel</router-link></li>
          <li><router-link to="/card">Card</router-link></li>
          <li><router-link to="/tree">Tree</router-link></li>
          <li><router-link to="/rate">Rate</router-link></li>
          <li><router-link to="/circle">Circle</router-link></li>
          <li><router-link to="/tabs">Tabs</router-link></li>
          <li><router-link to="/tooltip">Tooltip</router-link></li>
          <li><router-link to="/poptip">Poptip</router-link></li>
          <li><router-link to="/slider">Slider</router-link></li>
          <li><router-link to="/dropdown">Dropdown</router-link></li>
          <li><router-link to="/breadcrumb">Breadcrumb</router-link></li>
          <li><router-link to="/menu">Menu</router-link></li>
          <li><router-link to="/spin">Spin</router-link></li>
          <li><router-link to="/cascader">Cascader</router-link></li>
          <li><router-link to="/select">Select</router-link></li>
          <li><router-link to="/backtop">Backtop</router-link></li>
          <li><router-link to="/page">Page</router-link></li>
          <li><router-link to="/transfer">Transfer</router-link></li>
          <li><router-link to="/date">Date</router-link></li>
          <li><router-link to="/form">Form</router-link></li>
          <li><router-link to="/table">Table</router-link></li>
          <li><router-link to="/loading">Loading</router-link></li>
          <li><router-link to="/loading-bar">LoadingBar</router-link></li>
          <li><router-link to="/modal">Modal</router-link></li>
          <li><router-link to="/message">Message</router-link></li>
          <li><router-link to="/notice">Notice</router-link></li>
          <li><router-link to="/avatar">Avatar</router-link></li>
          <li><router-link to="/color-picker">ColorPicker</router-link></li>
          <li><router-link to="/auto-complete">AutoComplete</router-link></li>
          <li><router-link to="/scroll">Scroll</router-link></li>
        </ul>
      </nav>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  export default {
    name: "App"
  }
</script>

<style lang="scss">
  /*nav {*/
    /*margin-bottom: 40px;*/
    /*ul { display: flex; flex-wrap: wrap; }*/
    /*li { display: inline-block; }*/
    /*li + li { border-left: solid 1px #bbb; padding-left: 10px; margin-left: 10px; }*/
  /*}*/
  body {
    padding: 0;
    margin: 0;
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  }

  .example {
    display: flex;
    &__aside {
      width: 250px;
      height: 100vh;
      overflow: scroll;
      background: #F5F7FB;
      ul {
        padding: 0 15px;
      }
      li {
        list-style: none;
        a {
          display: block;
          background: none;
          border: 0;
          padding: .5rem 1rem;
          border-radius: 3px;
          color: #495057;
          text-decoration: none;
          &.router-link-active {
            z-index: 2;
            color: #467fcf;
            background: rgba(70, 127, 207, 0.06);
            font-weight: 600;
          }
        }
      }
    }
    main {
      flex: 1;
      padding: 0 20px;
    }
  }

</style>