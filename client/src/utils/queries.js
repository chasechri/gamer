import { gql } from '@apollo/client'

export const QUERY_CARDS = gql`
	query cards($username: String) {
		cards(username: $username) {
			_id
			createdAt
			username
			rank
			platform
			hours
			voiceChat
			commentCount
			comments {
				_id
				createdAt
				username
				commentBody
			}
		}
	}
`

export const QUERY_CARD = gql`
	query card($id: ID!) {
		card(_id: $id) {
			_id
			createdAt
			username
			rank
			platform
			hours
			voiceChat
			commentCount
			comments {
				_id
				createdAt
				username
				commentBody
			}
		}
	}
`

export const QUERY_USER = gql`
	query user($username: String!) {
		user(username: $username) {
			_id
			username
			email
			rank
			platform
			hours
			voiceChat
			friendCount
			friends {
				_id
				username
			}
			cards {
				_id
				username
				createdAt
				commentCount
			}
		}
	}
`

export const QUERY_ME = gql`
	{
		me {
			_id
			username
			email
			rank
			platform
			hours
			voiceChat
			friendCount
			cards {
				_id
				createdAt
				commentCount
				comments {
					_id
					username
					createdAt
					commentBody
					username
				}
			}
			friends {
				_id
				username
			}
		}
	}
`
