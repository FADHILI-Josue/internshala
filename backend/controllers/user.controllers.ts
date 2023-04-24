/**1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”. */

import User, { user } from '../models/userModel'
import { Request, Response } from 'express'

export const table1 = async (req:Request,res:Response)=>{
    try {
       const users =await User.find({
        income: { $lt: "$5" },
        car: { $in: ["BMW", "Mercedes"] }
      });
       users? res.status(200).send(users) : res.status(500).json("server error in data fetching")
    } catch (error) {
        console.log(error)
    }
}


/**2. Male Users which have phone price greater than 10,000. */
export const table2 = async (req:Request,res:Response)=>{
    try {
       const users =await User.find({gender: 'Male', phone_price:{$gt: 10000}});
       users? res.status(200).send(users) : res.status(500).json("server error in data fetching")
    } catch (error) {
        console.log(error)
    }
}

/**Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name. */
export const table3= async (req:Request,res:Response)=>{
    try {
       const users =await User.find({
        last_name: /^M/,
        quote: { $regex: /^.{16,}$/ },
        //we removed case sensitiveness on last_names in emails
        email: { $regex: /M$/i }
      })
       users? res.status(200).send(users) : res.status(500).json("server error in data fetching")
    } catch (error) {
        console.log(error)
    }
}
/**Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit. */
export const table4 = async (req:Request,res:Response)=>{
    try {
       const users =await User.find({car:{$in:["BMW", "Mercedes"]},email: { $not: /\d/ }});
       users? res.status(200).send(users) : res.status(500).json("server error in data fetching")
    } catch (error) {
        console.log(error)
    }
}


/**Show the data of top 10 cities which have the highest number of users and their average income. */
export const table5 = async (req:Request,res:Response)=>{
    try {
       const users =await User.aggregate([
        {
          $group: {
            _id: '$city',
            count: { $sum: 1 },
            avgIncome: { $avg: { $toDouble: { $substr: ['$income', 1, -1] } } }
          }
        },
        { $sort: { count: -1 } },
        { $limit: 10 }
      ])
       users? res.status(200).send(users) : res.status(500).json("server error in data fetching")
  }
 catch (error) {
        console.log(error)
    }
}
