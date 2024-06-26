import { React, useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios'

const RiskScenariosList = () => {
    const [riskObjects, setRiskObjects] = useState();
    const fetchAllObjects = async () => {
        const { data } = await axios.get('https://riskassessmentapp.onrender.com/api/v1/risk/allriskobj');
        setRiskObjects(data?.riskObjects);
        console.log(data?.riskObjects)
    }
    useEffect(() => {
        fetchAllObjects();
    }, [])
    return (
        <Container>
            {
                riskObjects?.map((riskObj, index) => {
                    return (
                        <div key={index} className="card border-success mb-3" style={{ width: '78vw' }}>
                            <div className="card-header bg-transparent border-success">
                                <div>
                                    <p className="card-text" style={{ paddingTop: '15px' }}>{riskObj?._id}</p>
                                    <button aria-disabled>{`${riskObj?.riskKeyValueObj.key}:${riskObj?.riskKeyValueObj.values}`}</button>
                                </div>
                                <div>
                                    <p className="card-text" style={{ paddingTop: '15px' }}>Last Updated:12/0/2024</p>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                                        <label className="form-check-label" for="flexSwitchCheckChecked">Enabled</label>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-transparent border-success"><h6>{riskObj?.riskScenario}</h6>
                            </div>
                        </div>
                    )
                })
            }
        </Container>
    )
}

const Container = styled.div`
button {
outline:none;
border:none;
border-radius:8px;
cursor:none;
}
max-height:90vh;
display:flex;
flex-direction:column;
gap:20px;
align-items:center;
justify-content:center;
overflow-y:scroll;
.card {
.card-header{
height:40px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
div {
height:40px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:25px;
}
}
}
`

export default RiskScenariosList
