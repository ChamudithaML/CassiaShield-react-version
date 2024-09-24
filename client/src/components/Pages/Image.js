import React, { useState } from 'react'
import './Image.css'
import axios from 'axios';

function Image() {

    const [file, setFile] = useState(null);
    const [prediction, setPrediction] = useState("")
    const [treatment, setTreatment] = useState("")
    const [imageUrl, setImageUrl] = useState('');

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            const url = URL.createObjectURL(selectedFile);
            setImageUrl(url);
            setPrediction("")
            setTreatment("")
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);

        axios.post('http://localhost:5000/upload', formData)
            .then((response) => {
                // console.log(response.data);
                // alert('File uploaded successfully ' + response.data.prediction);
                setPrediction(response.data.prediction)
                setTreatment(response.data.treatment)
            })
            .catch((error) => {
                console.log(error);
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

            {file &&
                <div className='uploaded-image'>
                    <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                </div>}

            {prediction && <p>Detected disease is: {prediction}</p>}
            {treatment && <p>Treatments for disease: {treatment}</p>}
        </div>
    )
}

export default Image;
