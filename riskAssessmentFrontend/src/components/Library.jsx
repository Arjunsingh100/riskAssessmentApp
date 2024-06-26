import React from 'react'
import Sidebar from './Sidebar';
import styled from 'styled-components'
import { NavLink,Outlet } from 'react-router-dom';


const Library = () => {
    return (
        <Container>
            <Sidebar />
            <div className="libraryCards">
                <div><h4>Library</h4></div>
                <div className="cardsContainer">
                    <NavLink to='/risksnario/riskscenariolists' className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Risk Scenarios</h5>
                                <p className="card-text">Anticipate and address potential cybersecurity risks to business.</p>
                                <hr />
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/assessment' className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Assessment</h5>
                                <p className="card-text">Assess risk scenarios to identify net risk scores</p>
                                <hr />
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/reports' className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Reports</h5>
                                <p className="card-text">Generate reports for the business and security leaders.</p>
                                <hr />
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
*{
text-decoration:none;
}
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
.cardsContainer {
display:flex;
flex-direction:row;
flex-wrap:wrap;
align-items:flex-start;
gap:25px;
}
}
`

export default Library
