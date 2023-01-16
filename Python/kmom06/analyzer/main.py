"""import modul"""
import analyzer

"""function docs"""
def main():
    """function docs"""

    while True:
        print("lines) count lines")
        print("words) count words")
        print("letters) count letters")
        print("word_frequncy) find 7 most used words")
        print("letter_frequncy) find 7 most used letters")
        print("all) do evrything")
        print("change) change file")
        print("read) change file")
        print("q) Quit.")

        choice = input("--> ")

        if choice == "q":
            print("Bye, bye - and welcome back anytime!")
            break
        elif choice == "lines":
            try:
                analyzer.count_lines()
            except FileNotFoundError:
                print("Somthing rowng!!!")
        elif choice == "words":
            try:
                analyzer.count_words()
            except FileNotFoundError:
                print("Somthing rowng!!!")
        elif choice == "letters":
            try:
                analyzer.count_letters()
            except FileNotFoundError:
                print("Somthing rowng!!!")
        elif choice == "word_frequency":
            try:
                analyzer.count_words_frequency()
            except FileNotFoundError:
                print("Somthing rowng!!!")
        elif choice == "letter_frequency":
            try:
                analyzer.count_letters_frequency()
            except FileNotFoundError:
                print("Somthing rowng!!!")
        elif choice == "all":
            try:
                analyzer.count_lines()
                analyzer.count_words()
                analyzer.count_letters()
                analyzer.count_words_frequency()
                analyzer.count_letters_frequency()
            except FileNotFoundError:
                print("Somthing rowng!!!")
        elif choice == "change":
            analyzer.filname = input("input new file name: ")
        else:
            print("That is not a valid choice. You can only choose from the menu.")
if __name__ == "__main__":
    main()
