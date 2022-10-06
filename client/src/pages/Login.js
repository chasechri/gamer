import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
	const [formState, setFormState] = useState({ email: '', password: '' });

	const [login, { error }] = useMutation(LOGIN_USER);

	// update state based on form input changes
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	// submit form
	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await login({
				variables: { ...formState },
			});

			Auth.login(data.login.token);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<main className='py-40 mx-auto align-center flex-row'>
			<div className='content-around mx-auto'>
				<div className='flex flex-row border-black border-2 rounded-xl pr-5'>
					<h4 className='flex px-4 my-2'>Login</h4>
					<div className='flex-row'>
						<form onSubmit={handleFormSubmit}>
							<input
								className='form-input flex-row border-gray border-2 mx-1'
								placeholder='Your email'
								name='email'
								type='email'
								id='email'
								value={formState.email}
								onChange={handleChange}
							/>
							<input
								className='form-input flex-row border-gray border-2 mx-1'
								placeholder='******'
								name='password'
								type='password'
								id='password'
								value={formState.password}
								onChange={handleChange}
							/>
							<button className='button flex-row mx-2' type='submit'>
								Submit
							</button>
						</form>

						{error && <div>Login failed</div>}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Login;
