"""import modul"""
from src.appManager import train, read_file

"""function docs"""
def main():
    """Main code"""
    while True:
        print("1)train esay")
        print("2)train medium")
        print("3)train hard")
        print("4)see high score")
        print("q) Quit.")

        choice = input("--> ")
    
        if (choice == "q"):
            print("Ok bye")
            break
        elif (choice == "1"):
            train("easy")
        elif (choice == "2"):
            train("medium")
        elif (choice == "3"):
            train("hard")
        elif (choice == "4"):
            print(read_file("","src/save/score.txt"))
        else:
            print("That is not a valid choice. You can only choose from the menu.")

if __name__ == "__main__":
    main()
