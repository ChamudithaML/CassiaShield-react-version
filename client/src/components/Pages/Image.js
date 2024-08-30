import React, { useState } from 'react'
import './Image.css'
import axios from 'axios';

function Image() {

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleClick = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);

        axios.post('http://localhost:5000/upload', formData)
            .then((response) => {
                alert('File uploaded successfully');
            })
            .catch((error) => {
                alert('Error uploading file');
            });
    };

    return (
        <div className='image-container'>
            <h1>CassiaShield Image Upload</h1>
            <p>Click on Submit to Classify Disease</p>

            <form className='form-container'>
                <label className="file-label" htmlFor="file-upload">
                    Choose File
                    <i className="fas fa-upload"></i>
                </label>
                <input type='file' id="file-upload" onChange={handleChange} />
                <button className='btn btn-primary' onClick={handleClick}>Submit</button>
            </form>

        </div>
    )
}

export default Image;
