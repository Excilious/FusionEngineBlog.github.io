class TriviaSystem
{
    constructor()
    {
        this.CurrentFrames = {};

        //Indexs start at 0 not 1!
        //A universal function that handles transitions.
        //FIXME: This could be improved no? I mean you are labelling random indexes (Essentially hardcoding the buttons)
        this.ButtonFunctions = {
            "Homepage":
            {
                0: function()
                {
                    console.log("Homepage")
                },
                1: function()
                {
                    console.log("Leaderboard");
                },
                2: function()
                {
                    console.log("Questions");
                },
                3: function()
                {
                    console.log("Profile");
                },
            },
        }

        //Just generate all the frames we want to use (almost like a cache)
        this.GenerateAllFrames("Homepage/Homepage.html","Homepage");
        document.body.appendChild(this.CurrentFrames["Homepage"]);

        this.DetectButtonTransitionalInputs("Homepage");
    };

    GenerateAllFrames(Source,IndexName)
    {
        //FIXME: Cant we try another way? According to mdn docs, this is RAM INTENSIVE!!!
        //Indexname would make it easier to search rather than using indexs
        var NewDocument = document.createElement("iframe");
        NewDocument.width = "100%";
        NewDocument.height = "100%";
        NewDocument.src = Source;
        NewDocument.frameBorder = 0;
        NewDocument.allowFullscreen = true;
        this.CurrentFrames[IndexName] = NewDocument;
    }
};

var NewTriviaSystem = new TriviaSystem();