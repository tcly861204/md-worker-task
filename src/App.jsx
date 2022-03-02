import React from 'react'
import ButtonGrop from '@/components/Button-Group'
const DATE_TYPE_DATA = [
  { label: '按天', value: 'day' },
  { label: '按周', value: 'week' },
  { label: '按月', value: 'month' },
]
const IS_SHOW_WORKER_DATA = [
  { label: '仅工作日', value: 'work' },
  { label: '显示周末', value: 'week' },
]
const App = () => {
  return (
    <section className="task">
      app
      <ButtonGrop data={DATE_TYPE_DATA} active="day" />
      <ButtonGrop data={IS_SHOW_WORKER_DATA} active="work" />
    </section>
  )
}

export default App
