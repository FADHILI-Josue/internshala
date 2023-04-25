/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { FC, useEffect } from 'react'
import { user } from '../App'

interface Table1Props {
  data: Array<user>
}

const Table1: FC<Table1Props> = ({data}) => {
console.log(data)
  return <div className='table'>
    <h1 className='text-sm'>Users with income less than $5 with cars like BMW or mercedes</h1>
    <table border={2} cellPadding={0} cellSpacing={0}>
      <tr>
        <th colSpan={10}>Users with income less than $5 with cars like BMW of mercedes</th>
      </tr>
      <tr>
        <th>id</th>
        <th>first_name</th>
        <th>last_name</th>
        <th>email</th>
        <th>gender</th>
        <th>income</th>
        <th>city</th>
        <th>car</th>
        <th>quote</th>
        <th>phone_price</th>
      </tr>
      {
        data.map((data:user)=>(

      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.first_name}</td>
        <td>{data.last_name}</td>
        <td>{data.email}</td>
        <td>{data.gender}</td>
        <td>{data.income}</td>
        <td>{data.city}</td>
        <td>{data.car}</td>
        <td>{data.quote}</td>
        <td>{data.phone_price}</td>
      </tr>
        ))
      }
    </table>
  </div>
}

export default Table1