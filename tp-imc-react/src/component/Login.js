import React, { useEffect, useRef, useState } from 'react'

export const Login = () => {
    const userRef = useRef()
    const errRef = useRef()

    const [user,setUser] = useState("")
    const [pwd,setPwd] = useState("")
    const [errMsg,setErrMsg] = useState("")
    const [success,setSuccess] = useState(false)

    useEffect(()=>{
        userRef.current.focus()
    },[])

  return (
    <div>Login</div>
  )
}
