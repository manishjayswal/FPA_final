1. Download the code folders/files
2. Open the code in VS code

3. To Run the Backend
   3.1. Open Bash Terminal(note: this is different than powershell terminal, you can choose it from dropdown there)
   3.2. Change the directory to FPA_final/backend
   3.3. To create virtual environment, run this command in Bash terminal: py -m venv .venv
   3.4. To activate the virtual environment, run this command in Bash terminal: source .venv/Scripts/activate
   3.5. Once the virtual environment is activate, you can see "(.venv)" just on the left of the terminal in current line
   3.6. To install all the required libraries, run: pip install -r requirements.txt
   3.7. Now your Backend is ready, you can start the flask app by the command: flask run
   3.8. To browser your backend: http://localhost:5000/calcm
 
4. To run the Frontend:
   4.1. Open the powershell terminal
   4.2. Change the directory to FPA_final
   4.3. To install node module, run the command: npm install
   4.4. To run frontend server, run the command: npm start
   4.5. Now your frontend is ready, you can browse frontend at: http://localhost:3000/

5. In case you want to stop the backend or frontend server: press "Ctrl + c" in the respective terminal