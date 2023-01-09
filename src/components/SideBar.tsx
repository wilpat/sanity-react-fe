import React, { Dispatch, MutableRefObject, SetStateAction } from 'react'
import { User } from '../utils/interfaces'

export interface SideBarProps {
  user: User | null
  closeToggle?: Dispatch<SetStateAction<boolean>>
  ref?: MutableRefObject<HTMLDivElement | null>
}

const SideBar = (props: SideBarProps) => {
  return (
    <div>SideBar</div>
  )
}

export default SideBar