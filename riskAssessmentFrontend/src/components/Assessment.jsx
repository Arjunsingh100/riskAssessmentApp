import React from 'react'
import Sidebar from './Sidebar'
import styled from 'styled-components'

const Assessment = () => {
  return (
    <Container>
      <Sidebar />
      <div className="libraryCards">Assessment</div>
    </Container>
  )
}

const Container = styled.div`
display:flex;
flex-direction:row;
align-items:flex-start;
.libraryCards {
display:flex;
padding-left:20px;
flex-direction:column;
background-color:#f0eded;
height:80vh;
margin-left:20px;
margin-top:40px;
}
`

export default Assessment
