from flask import Flask, request, jsonify, render_template
import subprocess
import os

# initialize flask app
app = Flask(__name__,
           static_folder='frontend/static',
           template_folder='frontend/templates'
)

@app.route('/')
def index():
    return render_template('html/index.html')

@app.route('/getgitlabinfo')
def get_gitlab_info():
    return render_template('html/getgitlabinfo.html')

@app.route('/getgithubinfo')
def get_github_info():
    return render_template('html/getgithubinfo.html')

@app.route('/getinfo')
def getinfo():
    return render_template('html/getinfo.html')

@app.route('/api')
def api():
    return jsonify({'message': 'Welcome to the Repo Info API'})

@app.route('/api/pinfo', methods=['POST'])
def api_pinfo():
    try:
        data = request.get_json()
        username = data.get('username')
        repo_name = data.get('repo_name')
        
        # Run the Node.js script
        node_process = subprocess.run([
            'node', 
            'main.js', 
            username, 
            repo_name
        ], capture_output=True, text=True)
        
        # Check if the process was successful
        if node_process.returncode == 0:
            # Try to parse the output as JSON
            return jsonify({
                'success': True,
                'data': node_process.stdout
            })
        else:
            return jsonify({
                'success': False,
                'error': node_process.stderr
            }), 500
            
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True)

