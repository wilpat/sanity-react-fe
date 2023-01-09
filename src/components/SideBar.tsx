import { Dispatch, forwardRef, SetStateAction } from 'react'
import { User } from '../utils/interfaces'

export interface SideBarProps {
  user: User | null
  closeToggle?: Dispatch<SetStateAction<boolean>>
}

const SideBar = forwardRef((props: SideBarProps, ref) => {
  return (
    <div>SideBar</div>
  )
})

export default SideBar