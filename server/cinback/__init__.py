from flask import Flask, request, render_template, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

from cinback import cinna_api
