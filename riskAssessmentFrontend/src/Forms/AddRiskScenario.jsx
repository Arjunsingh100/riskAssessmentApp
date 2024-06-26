import { React, useState } from 'react'
import styled from 'styled-components'
import { Select } from 'antd'
const { Option } = Select;
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddRiskScenarioForms = () => {
    const navigate = useNavigate();
    const [riskScenario, setRiskScenario] = useState('');
    const [riskDescription, setRiskDescription] = useState('');
    const [riskField1, setRiskField1] = useState('');
    const [riskField2, setRiskField2] = useState('');
    const [key, setKey] = useState('');
    const [values, setValues] = useState('');
    const [keyValue, setKeyValue] = useState({ keyName: '', value: '' })
    const handleCancel = () => {
        navigate('/risksnario/riskscenariolists')
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setKeyValue({ keyName: key, value: values })
        const { data } = await axios.post('https://riskassessmentapp.onrender.com/api/v1/risk/addRiskScenario', {
            riskScenario, riskDescription, riskField1,
            riskField2,
            keyValueObj: { key: key, values: values }
        });
        if(data?.success){
            navigate('/risksnario/riskscenariolists');
        }
    }
    return (
        <Container>
            <form onSubmit={handleSubmit} style={{ border: '2px solid gray', padding: '15px', marginBottom: '20px', borderRadius: '8px' }}>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label htmlForr="validationServer01">Risk Scenario</label>
                        <input style={{ width: '300px' }}
                            type="text" className="form-control" id="validationServer01"
                            placeholder="Enter Risk Scenario"
                            onChange={(e) => { setRiskScenario(e.target.value) }}
                            required />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationServer02">Risk Description</label>
                        <input style={{ width: '300px' }} type="text" className="form-control" id="validationServer02"
                            placeholder="Enter risk description" onChange={(e) => { setRiskDescription(e.target.value) }} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationServer03">Risk Field1</label>
                        <input style={{ width: '300px' }} type="text" className="form-control" id="validationServer03"
                            placeholder="Enter risk field1" onChange={(e) => { setRiskField1(e.target.value) }} />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="validationServer04">Risk Field2</label>
                        <input style={{ width: '300px' }} type="text" className="form-control" id="validationServer04"
                            placeholder="Enter risk field2" onChange={(e) => { setRiskField2(e.target.value) }} />
                    </div>
                </div>
                <div className="form-row" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="validationServer04">Key</label>
                        <Select style={{ width: '120px' }}
                            placeholder='Select a category'
                            showSearch
                            size='large'
                            onChange={(value) => { setKey(value) }}>
                            <Option value='Industry'>Industry</Option>
                            <Option value='Domain'>Domain</Option>
                            <Option value='Client'>Client</Option>
                        </Select>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="validationServer04">Value</label>
                        <input type="text" className="form-control" id="validationServer04"
                            placeholder="State" onChange={(e) => { setValues(e.target.value) }} required />
                    </div>
                </div>
                <button className="btn btn-outline-danger" onClick={handleCancel}>Cancel</button>
                <button style={{ marginLeft: '150px' }} className="btn btn-primary" type="submit">Publish</button>
            </form>
        </Container>
    )
}

const Container = styled.div``

export default AddRiskScenarioForms
