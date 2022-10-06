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
		<header>
			<div className='flex flex-row px-4'>
				<Link to='/'>
					<h1>
					
						Apex
						<span>
							
							<FontAwesomeIcon icon={faHomeLg}></FontAwesomeIcon>
						</span>
					</h1>
				</Link>
				
				<nav>
					{Auth.loggedIn() ? (
						<>
							<div className='px-2 flex flex-row content-end'>
								<div>
									<Link to='/profile'>Profile</Link>
								</div>

								<a
									className='px-2 flex flex-row content-end'
									href='/'
									onClick={logout}
								>
									Logout
								</a>
							</div>
						</>
					) : (
						<>
							<div className='px-2 flex flex-row content-end'>
								<Link className='mr-4' to='/login'>
									Login
								</Link>

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
