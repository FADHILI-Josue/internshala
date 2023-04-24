/**1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”. */

import User, { user } from '../models/userModel'
import { Request, Response } from 'express'

export const col1 = async (req:Request,res:Response)=>{
    try {
       const users =await User.find({currecy: "USD",  income: {$gt: 1}});
       console.log(users)
       res.send(users)
    } catch (error) {
        console.log(error)
    }
}


/**2. Male Users which have phone price greater than 10,000. */
export const col2 = async (req:Request,res:Response)=>{
    try {
       const users =await User.find({gender: 'Male', phone_price:{$gt: 10000}});
       console.log(users)
       res.send(users)
    } catch (error) {
        console.log(error)
    }
}

/**Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name. */

export const col3 = async (req:Request,res:Response)=>{
    try {
       const users =await User.find({currecy: "USD",  income: {$gt: 100}});
       console.log(users)
       res.send(users)
    } catch (error) {
        console.log(error)
    }
}
/**Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit. */
export const col4 = async (req:Request,res:Response)=>{
    try {
       const users =await User.find({car:{$in:["BMW", "Mercedes"]}});
       res.send(users)
    } catch (error) {
        console.log(error)
    }
}
/**Show the data of top 10 cities which have the highest number of users and their average income. */
export const col5 = async (req:Request,res:Response)=>{
    try {
       const users =await     User.aggregate([
      { $group: { _id: "$city", count: { $sum: 1 } } },
      { $project: { _id: 0, city: "$_id", count: 1 } },
    //   { $project: { _id: 0, income: "$_id", count: 1 } },
    ]).sort({count:-1}).limit(10)
    res.send(users)
  }
 catch (error) {
        console.log(error)
    }
}