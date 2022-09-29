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
			<div className='user-list'>
				<UserList
					// users={users}
					title='Player List'
				/>
			</div>
		</main>
	)
}

export default Homepage
