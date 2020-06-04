<template>
	<div>
	<b-jumbotron>
		<template v-slot:lead>
			<p>{{ allQuestions[0] }}</p>
			<div v-for="(item, key) in allQuestions" :key="key">{{ item.question }}> </div>
		</template>
		<hr class="my-4">
		<p>answers</p>
		<b-button variant="success">Submit</b-button>
	</b-jumbotron>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
	name: "QuestionItems",
	data: function() {
		return{
			questions: Object
		}
	},
	methods: {
		...mapActions(['fetchQuestions'])
	},
	computed: mapGetters(["allQuestions"]),
	created() {
		this.currentQuestion = this.fetchQuestions()
	}
}
</script>