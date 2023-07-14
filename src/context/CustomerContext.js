import React, { useState, createContext } from 'react';

export const CustomerContext = createContext();

export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState([
        /* Your default customers here */
    ]);

    const [showPassword, setShowPassword] = useState(false);
    const [selectedOption, setSelectedOption] = useState("user");

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        password: ''
    });

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleRadioChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <CustomerContext.Provider value={[customers, setCustomers]}>
            {props.children}
        </CustomerContext.Provider>
    );
};
