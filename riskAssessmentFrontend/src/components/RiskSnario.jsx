import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'
import Sidebar from './Sidebar'
import styled from 'styled-components';


const RiskSnario = () => {

    return (
        <Container>
            <Sidebar />
            <div className='riskScenario'>
                <div style={{width:'80vw',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px',marginTop:'20px'}}>
                    <h4>library/<span style={{ color: 'blue' }}>Risk Scenarios</span></h4>
                    <NavLink className="btn btn-primary" to='/risksnario/addRiskScenario'>Add Risk Scenario</NavLink>
                </div>
                 <Outlet />
            </div>
        </Container>
    )
}

const Container = styled.div`
display:flex;
flex-direction:row;
align-items:flex-start;
.riskScenario {
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
background-color:#f0eded;
}
.libraryCards {
display:flex;
padding-left:20px;
flex-direction:column;
height:80vh;
margin-left:20px;
margin-top:40px;
}
`

export default RiskSnario
