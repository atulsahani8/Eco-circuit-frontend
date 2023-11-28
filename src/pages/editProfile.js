import React, { useState } from 'react';

const EditProfile = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleBirthdateChange = (event) => {
        setBirthdate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', { mobileNumber, name, email, gender, birthdate });
    };

    return (
        <div>
            <form className="update" onSubmit={handleSubmit}>
                <h1>Edit Profile</h1>
                <input type="text" placeholder="Mobile Number" value={mobileNumber} onChange={handleMobileNumberChange} />
                <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
                <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
                <label>
                    Gender:
                    <select value={gender} onChange={handleGenderChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <label>
                    Birthdate:
                    <input type="date" value={birthdate} onChange={handleBirthdateChange} />
                </label>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditProfile;
