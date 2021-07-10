import { atom } from 'recoil'

export const readMoreAtom = atom({
  key: 'readMore',
  default: {
    id: '',
    isOpen: false,
    title: '',
    description: '',
    breakdown: ''
  }
})
