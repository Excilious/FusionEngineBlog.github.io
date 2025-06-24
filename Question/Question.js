import { initializeApp } from "../Dependancies/@firebase"
import { getDatabase, onValue, ref } from "firebase/database"

class Questions
{
    constructor()
    {
        this.ProgramConfigurations = {
            apiKey: "AIzaSyCQ8PLntnFsrzJSnGkvXaV1HiYOQwgC7zo",
            authDomain: "multiplayertest-f547e.firebaseapp.com",
            databaseURL: "https://multiplayertest-f547e-default-rtdb.firebaseio.com",
            projectId: "multiplayertest-f547e",
            storageBucket: "multiplayertest-f547e.appspot.com",
            messagingSenderId: "793716243310",
            appId: "1:793716243310:web:ba7d651e6b01f9e027df7f"
        }
        this.TextFormatDictionary = {
            "bolditatlic":/(?:\*|_){3}(.+?)(?:\*|_){3}/g,
            'bold':/(?:\*|_){2}(.+?)(?:\*|_){2}/g,
            'italic':/(?:\*|_){1}(.+?)(?:\*|_){1}/g,
            'code':/^`{3}(?:\s|\n)/g,
            'blockquote': /^(>)\s/g,
        }
        this.LocalQuestionDatabase = {};
        this.LocalQuestionIndex = 0;
    };

    ReformatQuestionText(Input,ReformatType)
    {
        //Soure has been inspired by the program https://github.com/patleeman/quill-markdown-shortcuts/blob/master/src/index.js
        //The source would have been rewritten to be able to fit this problem.
        switch (ReformatType)
        {
            case "bolditalic":
                NewMatch = this.TextFormatDictionary[ReformatType].exec(Input);
                
        }
    }

    FetchQuestionArrayFromDatabase(DatabaseKey)
    {
        //NewData would relate towards a dictionary list. A basic dictionary list that would have most of the database.
        //We could create the database once then update when the users would want 
        this.Application = initializeApp(this.ProgramConfigurations);
        this.NewDatabase = getDatabase();
        this.NewReference = ref(this.NewDatabase,DatabaseKey);
        onValue(
            this.NewReference,(NewShapshot)=> {
                NewData = NewShapshot.val();
        });
        this.LocalQuestionDatabase = this.NewData;

        // DATABASE SHOULD ALSO BE DISPLAYED AS SUCH
        // [INDEX]: {
        //     [QUESTIONID]: ID,
        //     [QUESTIONCONTENTS]: QUESTION,
        //     [QUESTIONMARKCS]: INT,
        //     [ANSWER] : {

        //     },
        //     [CORRECTANSWER]: CORRECTANSWER
        // }
    }

    GenerateAnswerChiplets()
    {
        
    }

    DisplayQuestionFromDatabase()
    {
        //We need to get the data once (So we dont have to overload the database).
        //Just check if the data would exist in the client side.
        //TODO: DO THE UI THINGS FOR THE DATA SYSTEM
        document.getElementById("QuestionClassID").textContent = this.LocalQuestionDatabase[this.LocalQuestionIndex].Question;
        document.getElementById("QuestionID").textContent = this.LocalQuestionDatabase[this.LocalQuestionIndex].QuestionIndex;
        
    }
}