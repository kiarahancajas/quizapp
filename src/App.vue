<template>
  <div id="app">
    <HeaderMenu/>
	<b-container class="bv-example-row">
		<b-row>
			<b-col fluid="sm">
				<QuestionItems/>
			</b-col>
		</b-row>
	</b-container>
  </div>
</template>

<script>
import HeaderMenu from './components/HeaderMenu.vue'
import QuestionItems from './components/QuestionItems.vue'

export default {
  name: 'App',
  components: {
	HeaderMenu,
	QuestionItems
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
