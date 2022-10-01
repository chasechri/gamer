import React from 'react'
import UserList from '../components/UserList'
import UserCards from '../components/UserCard'

const Homepage = () => {
	// const { loading, data } = useQuery(QUERY_THOUGHTS)
	// const { data: userData } = useQuery(QUERY_ME_BASIC)
	// const users = data?.users || []

	// const loggedIn = Auth.loggedIn()
	return (
		<main>
			<div className=''>
				<h1 className='text-xl mx-10 px-5'>Player list</h1>
				<button
					type='dropdown'
					className='rounded-xl bg-red-500 text-black px-1 py-1 mx-5'
				>
					FILTER
				</button>
			</div>
			<div
				name='user-list'
				className=''
			>
				<UserList
					// users={users}
					title='Player List'
				/>
			</div>
		</main>
	)
}

export default Homepage
