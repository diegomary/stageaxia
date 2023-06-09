from waitress import serve
from flask import Flask, send_from_directory, jsonify, render_template, request
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


if __name__ == "__main__":   
    serve(app, host='0.0.0.0', port=5000)  # Prod mode using more performant  waitress

     
    

