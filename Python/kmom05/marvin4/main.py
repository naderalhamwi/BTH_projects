
"""function docs"""
import marvin1 
import marvin2
import inventory
import emission_functions

"""function docs"""
def main():
    """function docs"""
    marvin_image = r"""                                                
                            ▒▒▒▒▒▒▒▒▒▒▒▒▒▒                          
                        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                      
                        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                    
                    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                  
                    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                
                ████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒████████████              
                ██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██            
                ██▒▒▒▒██  ▒▒▒▒▒▒██████████▒▒▒▒▒▒██  ▒▒▒▒██            
                ██▒▒▒▒████▒▒▒▒▒▒██▒▒▒▒▒▒██▒▒▒▒▒▒████▒▒▒▒██            
                ██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██            
                ████████████▒▒▒▒██▒▒██▒▒▒▒████████████              
                    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒██████▒▒▒▒▒▒▒▒▒▒▒▒▒▒                
                ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒              
                ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒            
                ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒            
                ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒              
                        ▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒                    
                                ▒▒▒▒▒▒                              
    """

    """
    Its an eternal loop, until q is pressed.
    It should check the choice done by the user and call a appropriate
    function.
    """
    player_inventory = []

    while True:
        print(chr(27) + "[2J" + chr(27) + "[;H")
        print(marvin_image)
        print("Hi,I'm Marvin. I know it all. What can I do you for?")
        print("1) Present yourself to Marvin.")
        print("2) Convert from celsius to fahrenhite.")
        print("3) Repeat any word you say!, many time you want!.")
        print("4) Let me do the math.")
        print("5) Repeat letter in word.")
        print("6) Isogram.")
        print("7) Is smaller. bigger, equal?.")
        print("8) Rövspråket.")
        print("9) randomize string.")
        print("10) get acronym.")
        print("11) mask string.")
        print("12) find all indexes.")
        print("13) search cuntry.")
        print("14) show emission change for a cuntry.")
        print("15) show all data for a cuntry.")
        print("a1) Is characters equals?.")
        print("q) Quit.")

        choice = input("--> ")

        if choice == "q":
            print("Bye, bye - and welcome back anytime!")
            break
        elif choice == "1":
            marvin1.greet()
        elif choice == "2":
            marvin1.celcius_to_farenheit()
        elif choice == "3":
            marvin1.word_manipulation()
        elif choice == "4":
            marvin1.sum_and_average()
        elif choice == "5":
            marvin1.hyphen_string()
        elif choice == "6":
            marvin1.is_isogram()
        elif choice == "7":
            marvin1.compare_numbers()
        elif choice == "8":
            marvin1.robber_language()
        elif choice == "9":
            user_input = input("your input: ")
            marvin2.randomize_string(user_input)
        elif choice == "10":
            user_input = input("your input: ")
            marvin2.get_acronym(user_input) 
        elif choice == "11":
            user_input = input("your input: ")
            marvin2.mask_string(user_input)
        elif choice == "12":
            user_input1 = input("your input: ")
            user_input2 = input("your input: ")
            marvin2.find_all_indexes(user_input1, user_input2)
        elif choice == "a1":
            marvin1.exercise_a1()
        elif choice == "inv":
            inventory.inventory(player_inventory)

        elif "inv pick" in choice:
            user_input = list(choice.strip().split())

            if len(user_input) == 4:
                inventory.pick(player_inventory,user_input[2], user_input[3])
            else:
                inventory.pick(player_inventory,user_input[2])

        elif "inv drop" in choice:
            user_input = list(choice.strip().split())
            inventory.drop(player_inventory, user_input[2])
        elif "inv swap" in choice:
            user_input = list(choice.strip().split())
            inventory.swap(player_inventory, user_input[2],user_input[3]) 
        elif choice == "13":
            user_input = input("chose a cuntry: ")
            try:
                emission_functions.search_country(user_input)
                break
            except ValueError as e:
                print(str(e))
        elif choice == "14":
            user_input = list(input("input: ").strip().split(','))
            try:
                if len(user_input) == 3:
                    emission_functions.get_country_change_for_years(user_input[0],user_input[1],user_input[2])
                elif len(user_input) == 2:
                    emission_functions.get_country_year_data_megaton(user_input[0],user_input[1])
                else:
                    print("You need to input full information: (sweden,1990,2017) or (sweden,1990)")
                break
            except ValueError as e:
                print(str(e))
        elif choice == "15":
            user_input = input("input: ")
            data = emission_functions.get_country_data(user_input)
            emission_functions.print_country_data(data)
        else:
            print("That is not a valid choice. You can only choose from the menu.")

        input("\nPress enter to continue...")

if __name__ == "__main__":
    main()
