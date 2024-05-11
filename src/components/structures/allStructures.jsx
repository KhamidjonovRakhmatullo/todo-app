import React from 'react'
import UseStateCounterComponent from '.'
import CounterComponent from './counter'
import TextAddComponent from './textAdd'
import TodosComponent from './todos'
import UseStateChangesComponent from './useStateChanges'
import WorkingApiData from './workingApiData'

const AllStructures = () => {
  return (
    <div>AllStructures
        <UseStateCounterComponent/>
        {/* <CounterComponent/> */}
        <TextAddComponent/>
        <TodosComponent/>
        <UseStateChangesComponent/>
        <WorkingApiData/>
    </div>
  )
}

export default AllStructures