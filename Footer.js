import React from 'react'

const Footer = () => {
  let footerStyle = {

    position: "relative",
    top: "70vh",
    width: "100%",

  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className="text-center">
        Copyright &copy; MyToDosList.com By Riyash Patel
      </p>
    </footer>
  )
}

export default Footer
