import React from 'react'
import classes from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={classes.navBar}>
      <div>
        <h1>Real</h1>
      </div>
      <div>
        <p>Home</p>
        <p>About</p>
        <p>Type of house</p>
        <p>Contact</p>
        <a href="">Login</a>
      </div>
    </div>
  )
}
