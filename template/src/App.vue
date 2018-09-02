<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#vuex}}
    <h1 class="red">在这里，你可以使用vuex了$store.state.isSuccess</h1>
    {{/vuex}}

    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import HelloWorld from './components/HelloWorld'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/unless}}
export default {
  name: 'app'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
  components: {
    HelloWorld{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  h1.red{
    color: red;
  }
}
</style>
