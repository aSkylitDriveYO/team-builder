import React from 'react';
import '../App.css'

export default function Form(props) {
    const { values,updater,submitter } = props;
    
    const onChange = event => {
        const { name, value } = event.target;
        updater(name,value);
    }

    const onSubmit = event => {
        event.preventDefault();
        const{ name,value} = event.target;
        submitter(name,value);
    }

    return (
        <div className="container">
            <h1>Member Form</h1>

            <form onSubmit={onSubmit}>
                <label>Name: <br/>
                    <input
                    type='text'
                    name='name'
                    value={values.name}
                    placeholder='Enter Name'
                    onChange={onChange}
                    />
                </label>

                <label>Email: <br/>
                    <input
                    type='email'
                    name='email'
                    value={values.email}
                    placeholder='Enter Email'
                    onChange={onChange}
                    />
                </label>

                <label>Role: <br/>
                    <select
                    name='role'
                    value={values.role}
                    onChange={onChange}
                    >
                        <option value="">---Choose a role---</option>
                        <option value="Front End">Front End</option>
                        <option value="Back End">Back End</option>
                        <option value="UI/UX">UI/UX</option>
                        <option value="Full Stack">Full Stack</option>
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}