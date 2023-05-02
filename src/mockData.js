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
		component: Splash,
		options: {headerShown: false}
	},
	{
		id: 2,
		name: 'Login',
		component: Login,
		options: {headerShown: false}
	},
	{
		id: 3,
		name: 'SignUp',
		component: SignUp,
		options: {headerShown: false}
	},
	{
		id: 4,
		name: 'HomeScreen',
		component: HomeScreen,
		options: {headerShown: false}
	},
	{
		id: 5,
		name: 'Signature',
		component: Signature,
		options: {headerShown: false}
	},
	{
		id: 6,
		name: 'Sprints',
		component: Sprints,
		options: {headerShown: false}
	},
	{
		id: 7,
		name: 'Purpose',
		component: Purpose,
		options: {headerShown: false}
	},
]