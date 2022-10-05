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

export const ADD_CARD = gql`
	mutation addCard($username: String!) {
		addCard(: $rank, platform: $platform, hours: $hours, comms: $comms) {
			_id
			createdAt
			username
			cardInfo {
				_id
				username
				rank
				platform
				hours
				voiceChat
				createdAt
			}
			commentCount
			comments {
				_id
			}
		}
	}
`

export const ADD_COMMENT = gql`
	mutation addComment($cardId: ID!, $commentBody: String!) {
		addComment(cardId: $cardId, commentBody: $commentBody) {
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
