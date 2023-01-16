"""importing appManager"""
from src import appManager

"""function to save score to file"""
def save(data):
    """Save score to score file"""
    try:
        print("")
        print("1) save score")
        print("Enter to return to main menu")

        choice = input("--> ")

        if (choice == "1"):
            while True:
                playerName = input("Enter your name to save to highscore: ")
                if(playerName in ('',' ')):
                    print("Error empty name not allowed!!")
                else:
                    with open("src/save/score.txt", "a") as filehandle:
                        filehandle.write(playerName + ": " + data + "\n")
                        print("saved!")
                        appManager.clearScreen()
                        break
        else:
            appManager.clearScreen()
    except FileNotFoundError as e:
        print(e)
