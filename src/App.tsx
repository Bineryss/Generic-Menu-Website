import React from 'react'
import SwipeableDrawer from './components/drawer/SwipeableDrawer'
import NavBar from './components/navbar/NavBar'
import MainPage from './page/MainPage'
import { MuiThemeProvider } from '@material-ui/core'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const App: React.FC = () => {
	const theme = createMuiTheme({
		palette: {
			primary: {
				main: '#733C46'
			},
			secondary: {
				main: '#F2D399'
			}
		}
	})

	return (
		<MuiThemeProvider theme={theme}>
			<NavBar />
			<SwipeableDrawer />
			<MainPage />
		</MuiThemeProvider>
	)
}

export default App
