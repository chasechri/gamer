import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
	const [formState, setFormState] = useState({
		username: '',
		email: '',
		password: '',
	});

	const [addUser, { error }] = useMutation(ADD_USER);

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

		// use try/catch instead of promises to handle errors
		try {
			const { data } = await addUser({
				variables: { ...formState },
			});

			Auth.login(data.addUser.token);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<main className='py-40 mx-auto align-center flex-row'>
			<div className='content-around mx-auto'>
				<div className='flex flex-row border-black border-2 rounded-xl pr-5'>
					<h4 className='flex px-4 my-2'>Sign Up</h4>
					<div className='flex-row'>
						<form onSubmit={handleFormSubmit}>
							<input
								className='form-input flex-row border-gray border-2 mx-1'
								placeholder='Your username'
								name='username'
								type='username'
								id='username'
								value={formState.username}
								onChange={handleChange}
							/>
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
						{error && <div>Sign up failed</div>}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Signup;
