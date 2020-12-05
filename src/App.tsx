import React from 'react'
import NavBar from './components/navbar'
import MainPage from './page/MainPage'

const App: React.FC = () => {
	return (
		<React.Fragment>
			<NavBar />
			<MainPage />
		</React.Fragment>
	)
}

export default App
