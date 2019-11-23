import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from '../../hooks/redux'
import { selectAttributes } from '../../Redux/selectors'

const useStyles = createUseStyles({

})

export default function Attributes() {
  const attributes = useSelector<Attributes>(selectAttributes)
  return (
    <table>
      <tbody>
        {
          Object.entries(attributes).map(([name, value]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{value}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
