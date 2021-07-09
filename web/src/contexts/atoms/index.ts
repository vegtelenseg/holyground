import { atom } from 'recoil'
import { UsersPermissionsUser } from '../../generated/graphql'

export const userAtom = atom<UsersPermissionsUser | undefined>({
  key: 'user',
  default: undefined
})
