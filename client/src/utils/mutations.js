import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`

export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`

export const ADD_POST = gql`
	mutation addPost($postText: String!) {
		addPost(postText: $postText) {
			_id
			profiles {
				gamertag
				rank
				platform
				hours
				comms
			}
			createdAt
			username
			commentCount
			comments {
				_id
			}
		}
	}
`

export const ADD_COMMENT = gql`
	mutation addComment($postId: ID!, $commentBody: String!) {
		addReaction(postId: $postId, commentBody: $commentBody) {
			_id
			commentCount
			comments {
				_id
				commentBody
				createdAt
				username
			}
		}
	}
`

export const ADD_PROFILE = gql`
	mutation addProfile($postId: ID!, $gamertag: String!, $rank: String!, $platform: String!, $hours: String!, $comms: String!) {
		addProfile(postId: $postId, gamertag: $gamertag, rank: $rank, platform: $platform, hours: $hours, comms: $comms ) {
			_id
			profiles {
				gamertag
				rank
				platform
				hours
				comms
			}
		}
	}
`

export const ADD_FRIEND = gql`
	mutation addFriend($id: ID!) {
		addFriend(friendId: $id) {
			_id
			username
			friendCount
			friends {
				_id
				username
			}
		}
	}
`

export const REMOVE_FRIEND = gql`
	mutation removeFriend($id: ID!) {
		removeFriend(id: $id) {
			_id
			username
			friends {
				_id
				username
			}
		}
	}
`
