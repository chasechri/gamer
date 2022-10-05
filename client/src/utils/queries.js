import { gql } from '@apollo/client'

export const QUERY_CARDS = gql`
	query cards($username: String) {
		cards(username: $username) {
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
				createdAt
				username
				commentBody
			}
		}
	}
`

// export const QUERY_USER = gql`
// 	query user($username: String!) {
// 		user(username: $username) {
// 			_id
// 			username
// 			email
// 			friendCount
// 			friends {
// 				_id
// 				username
// 			}
// 			cardInfo {
// 				username
// 				rank
// 				platform
// 				hours
// 				voiceChat
// 				createdAt
// 			}
// 			cards {
// 				_id
// 				username
// 				createdAt
// 				commentCount
// 			}
// 		}
// 	}
// `

export const QUERY_ME = gql`
	{
		me {
			_id
			username
			email
			friendCount
			cards {
				_id
				createdAt
				commentCount
				comments {
					_id
					createdAt
					commentBody
					username
				}
			}
			cardInfo {
				username
				rank
				platform
				hours
				voiceChat
				createdAt
			}
			friends {
				_id
				username
			}
		}
	}
`
