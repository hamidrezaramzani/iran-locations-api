import { cors } from '../../../../middlewares/cors'

const data = require('../../../../public/iran_cities_in_english.json')

const searchByName = (name) =>
	data.find((item) =>
		item.name.toLocaleLowerCase().includes(name.toLowerCase())
	)

const searchById = (id) => {
	return data.find((item) => item.id.toString() === id)
}

export default async function handler(req, res) {
	cors(req, res)
	const { state, state_id } = req.query
	const stateItem = state ? searchByName(state) : searchById(state_id)

	if ((!state && !state_id) || !stateItem) {
		return res.status(400).json({
			message: 'Send a valid state name with `state` or `state_id` parameter',
		})
	}

	res.status(200).json(stateItem)
}
