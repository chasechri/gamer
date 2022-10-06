import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeLg } from '@fortawesome/free-solid-svg-icons';
import Auth from '../../utils/auth';

const Header = () => {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};
	return (
		<header className=''>
			<div>
				<Link to='/'>
					<h1>
						{' '}
						Gamer
						<span>
							{' '}
							<FontAwesomeIcon icon={faHomeLg}></FontAwesomeIcon>{' '}
						</span>
					</h1>
				</Link>
				<nav className='flex flex-row'>
					{Auth.loggedIn() ? (
						<>
							<Link to='/profile'>Me</Link>
							<a href='/' onClick={logout}>
								Logout
							</a>
						</>
					) : (
						<>
							<div>
								<Link to='/login'>Login</Link>
							</div>
							<div className='flex mx-5 flex-row'>
								<Link to='/signup'>Signup</Link>
							</div>
						</>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Header;
