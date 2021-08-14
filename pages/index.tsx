import React, { ReactElement } from 'react'
import SideNav from '../components/SideNav/SideNav'

interface Props {
  
}

export default function index({}: Props): ReactElement {
  return (
    <div>
      <SideNav />
      <h1>Home Page</h1>
      <div className='shadow text-muted bg-white'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam possimus eaque recusandae eligendi, saepe ratione ipsam at, voluptates quibusdam nam fuga velit cupiditate repudiandae esse omnis dicta perferendis voluptatem illo.
      </div>
    </div>
  )
}
