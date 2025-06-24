class ClientHomepage
{
    constructor()
    {
        this.ButtonInputs = {};

    };

    DetectButtonInput()
    {
        for (var Index = 0; Index < document.getElementsByClassName("button").length; Index++)
        {
            document.getElementsByClassName("button")[Index].addEventListener('click',function(){
                console.log("Dude this button has been pressed within the index"+Index);
            })
        }
    }
}