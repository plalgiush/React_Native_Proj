import HomeScreen from "./screens/HomeScreen/HomeScreen"
import Purpose from "./screens/Purpose/Purpose"
import Signature from "./screens/Signature/Signature"
import Sprints from "./screens/Sprints/Sprints"

export const pages = [
	{
		id: 1,
		name: 'HomeScreen',
		component: HomeScreen
	},
	{
		id: 2,
		name: 'Signature',
		component: Signature
	},
	{
		id: 3,
		name: 'Sprints',
		component: Sprints
	},
	{
		id: 4,
		name: 'Purpose',
		component: Purpose
	},
]