import React from 'react'
import ButtonGrop from '@/components/Button-Group'
import Avatar from '@/components/avatar'
import { DATE_TYPE_DATA, IS_SHOW_WORKER_DATA } from '@/libs/const'
import '@/style/layout.scss'
const App = () => {
  return (
    <section className="task">
      <div className="task-header">
        <ButtonGrop className="mr20" data={DATE_TYPE_DATA} active="day" />
        <ButtonGrop data={IS_SHOW_WORKER_DATA} active="work" />
      </div>
      <div className="task-body">
        <Avatar />
      </div>
    </section>
  )
}

export default App
