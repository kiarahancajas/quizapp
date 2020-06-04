import axios from 'axios'

const state = {
	questions: []
}

const getters = {
	allQuestions: state => {
		return state.questions
	}
}

const actions = {
	async fetchQuestions({commit}){
		const response = await axios.get(
			'https://opentdb.com/api.php?amount=10&category=31&type=multiple'
		)

		console.log(response.data.results)
		commit('setQuestions', response.data.results);
	}
}

const mutations = {
	setQuestions: (state, questions) => {state.questions = questions}
}

export default {
	state,
	getters,
	actions,
	mutations
}