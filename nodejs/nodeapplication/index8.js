import { hash } from "bcrypt"
import bcrypt from 'bcrypt'
const pwd = "pass1234"
const hashpwd = await bcrypt.hash(pwd,10)
// console.log(hashpwd)

const check = await bcrypt.compare("pass1234","$2b$10$WznMTVoul4/v92UA8Mvjmu0gV6qtC3x3a3ILKTTC8AX856IE2GqV6")
console.log(check)