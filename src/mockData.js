import HomeScreen from "./screens/HomeScreen/HomeScreen"
import Login from "./screens/Login/Login"
import Purpose from "./screens/Purpose/Purpose"
import SignUp from "./screens/SignUp/SignUp"
import Signature from "./screens/Signature/Signature"
import Splash from "./screens/Splash/Splash"
import Sprints from "./screens/Sprints/Sprints"

export const pages = [
	{
		id: 1,
		name: 'Splash',
		component: Splash
	},
	{
		id: 2,
		name: 'Login',
		component: Login
	},
	{
		id: 3,
		name: 'SignUp',
		component: SignUp
	},
	{
		id: 4,
		name: 'HomeScreen',
		component: HomeScreen
	},
	{
		id: 5,
		name: 'Signature',
		component: Signature
	},
	{
		id: 6,
		name: 'Sprints',
		component: Sprints
	},
	{
		id: 7,
		name: 'Purpose',
		component: Purpose
	},
]