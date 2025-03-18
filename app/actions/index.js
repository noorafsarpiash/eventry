'use server'

import { createUser } from "@/db/queries"
import { redirect } from "next/navigation"

async function registerUser(fromData){
    const user = Object.fromEntries(fromData)
   const created = await createUser(user)
   redirect('/login')

}

export {
    registerUser,
}