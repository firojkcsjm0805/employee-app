import React, { useState, useEffect } from 'react';


function Dialogbox(props) {

    const [state, setState] = useState({ name: "", empId: "", dept: "", emailId: "", doj: "" })


    useEffect(() => {
        if (!props.open) {
            setState({
                name: "", empId: "", dept: "", emailId: "", doj: ""
            })
        }
    }, [props.open])

    const _handleFormData = event => {
        event.preventDefault();
        props.onSubmit(state);
    }

    const onChange = (id, value) => {
        setState({
            ...state,
            [id]: value
        });
    }
    const openForm = () => {
        return (
            <form style={{ display: 'flex', flexDirection: 'column', marginTop: '20px', padding: '20px' }} onSubmit={_handleFormData}>
                <label>Name</label>
                <input type="text" value={state.name} onChange={(e) => onChange('name', e.target.value)} ></input>
                <label>Employee ID</label>
                <input type="text" value={state.empId} onChange={(e) => onChange('empId', e.target.value)}></input>
                <label>Department</label>
                <input type="text" value={state.dept} onChange={(e) => onChange('dept', e.target.value)}></input>
                <label>Email ID</label>
                <input type="text" value={state.emailId} onChange={(e) => onChange('emailId', e.target.value)}></input>
                <label>Date of Joining</label>
                <input type="date" name="dateRequired" value={state.doj} onChange={(e) => onChange('doj', e.target.value)}/>
                <div>
                    <button className="submit-btn" type="submit" value="submit"><span>SUBMIT</span></button>
                </div>
            </form>

        )
    }

    return (
        <div id="myModal" style={{ display: props.open ? 'block' : 'none' }} class="modal">
            <div class="modal-content">
                <span onClick={props.onClose} class="close float-r">&times;</span>
                {openForm()}
            </div>
        </div>
    )
}
export default Dialogbox;