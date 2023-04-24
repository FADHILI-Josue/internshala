/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { FC, useEffect } from 'react'
interface props{
    _id: any,
    count: number,
    avgIncome: number
}
interface propsI{
    data: Array<props>
}

const Table1: FC<propsI> = ({ data }) => {
    return <div className='table'>
        <h1 className='text-sm'>top 10 cities which have the highest number of users and their average income.</h1>
        <table border={2} cellPadding={0} cellSpacing={0}>
            <tr>
                <th colSpan={3}>top 10 cities which have the highest number of users and their average income.</th>
            </tr>
            <tr>
                <th>city</th>
                <th>number of people</th>
                <th>Average Income</th>
            </tr>
            {
                data.map((data: any) => (

                    <tr key={data._id}>
                        <td>{data._id}</td>
                        <td>{data.count}</td>
                        <td>{data.avgIncome}</td>
                    </tr>
                ))
            }
        </table>
    </div>
}

export default Table1