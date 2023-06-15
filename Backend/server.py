from waitress import serve
import requests
from collections import namedtuple
import json
from flask import Flask, send_from_directory, jsonify, render_template, request
import urllib

class BearerAuth(requests.auth.AuthBase):
    def __init__(self, token):
        self.token = token
    def __call__(self, r):
        r.headers["authorization"] = "Bearer " + self.token
        return r

def token_utils(jsontoken):
    return namedtuple('X', jsontoken.keys())(*jsontoken.values())

app = Flask(__name__, static_url_path='', static_folder='production')

@app.route("/", defaults={'path':''})
def defaulting(path):    
    return send_from_directory(app.static_folder,'index.html')


@app.route("/api/get_my_ip", methods=["GET"])
def get_my_ip():
    if request.environ.get('HTTP_X_FORWARDED_FOR') is None:
     return jsonify({'ip': request.environ['REMOTE_ADDR']}), 200      
    else:     
     return jsonify({'ip': request.environ['HTTP_X_FORWARDED_FOR']}), 200


@app.route("/api/getconsume", methods=["GET"])
def testapi():
    post_data = {'username': 'vp4i_root', 'password': 'pwd_x23975Y@1723'}
    responseToken = requests.post('https://vpp4i.nevergoback.cloud:81/api/formentera/login',
                                  headers={'Content-Type': 'application/json'},
                                  json=post_data)
    token = (json.loads(responseToken.content.decode('utf8'), object_hook=token_utils)).value
    response1 = requests.get('https://vpp4i.nevergoback.cloud:81/api/Formentera/GetFormenteraSM?shellyname=formentera_12', auth=BearerAuth(token))
    response = app.response_class(
        response=response1,
        status=200,
        mimetype='application/json'
    )
    return response

if __name__ == "__main__":   
    serve(app, host='0.0.0.0', port=5000)  # Prod mode using more performant  waitress

     
    

