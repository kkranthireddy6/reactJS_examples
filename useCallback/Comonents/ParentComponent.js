import React, { useCallback, useState } from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

function ParentComponent() {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(55000)

    const increamentAge = useCallback(() => {
      setAge(age+1)
  }, [age])

    const increamentSalary = useCallback(() => {
      setSalary(salary+5000)
  }, [salary])

  return (
    <div>
      <Title />
      <Count text="Age" value={age} />
      <Button handleClick={increamentAge} />
      <Count text="Salary" value={salary} />
      <Button handleClick={increamentSalary} />
    </div>
  )
}

export default ParentComponent
