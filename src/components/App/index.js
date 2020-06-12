import React from 'react';
import EmailForm from '../EmailForm';
import Grid from '@material-ui/core/Grid';

const firstHead = "Build a landing page for your business or project and generate more leads!";

function App() {

	return (
		<div className="App">
			<EmailForm title={firstHead} />

		</div>
	);

}

export default App;
