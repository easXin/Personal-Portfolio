import React from 'react'
import '../css/footer.css'

export default function FooterComponent() {
  return (
    <footer className='footer'>
      <p className='copyrights'>&copy; {new Date().getFullYear()} Dengxin</p>  
    </footer>
  )
}
