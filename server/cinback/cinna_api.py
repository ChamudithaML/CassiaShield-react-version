# importing required python libraries
import os
from flask import Flask, request, render_template, send_from_directory, Response, jsonify
from cinback import app
from cinback.img_classify import prediction_func
from cinback.img_classify_ensemble import prediction_func2
from cinback.img_classify_dense import prediction_func3
from cinback.img_classify_vgg import prediction_func4
from cinback.img_classify_inception import prediction_func5
from cinback.camera import Video

import tensorflow as tf
gpus = tf.config.list_physical_devices('GPU')
if gpus:
    try:
        # Currently, memory growth needs to be the same across GPUs
        for gpu in gpus:
            tf.config.experimental.set_memory_growth(gpu, True)
        logical_gpus = tf.config.experimental.list_logical_devices('GPU')
        print(len(gpus), "Physical GPUs,", len(logical_gpus), "Logical GPUs")
    except RuntimeError as e:
        # Memory growth must be set before GPUs have been initialized
        print(e)

diseases = ['Lower Mite Galls', 'Healthy', 'Yellow Cholorosis']

treatments =["නුහුරු පෑහීම, කොළ කඩා ඉවත් කිරීම, සංස්ථානික කෘමි නාශක යෙදීම. ඇබමසිටින් මිලි ලීටර 6ක් ජලය ලීටර 10ක් සමග එක් කර ඉසින්න ",
             "නීරෝගී පත්‍රයකි ",
             "මැග්නීසියම් ඌනතාවක් නිසා ඇතිවේ. ඩොලමිටේ, කීසරයිට් යෙදීම මගින් වලක්වා ගත හැකිය "]


# ---------------------------------------------------------------------------------------------------------------------------------------------

UPLOAD_FOLDER = 'cinback/images'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['image']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file:
        filepath = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(filepath)
        
        pred = prediction_func(file.filename)
        treat=""
        
        if(pred==diseases[0]):
            treat = treatments[0]
        elif(pred==diseases[1]):
            treat=treatments[1]
        else:
            treat = treatments[2]
        
        # return jsonify({'message': 'File uploaded successfully '+pred}), 200
        return jsonify({'prediction': pred, 'treatment':treat}), 200



