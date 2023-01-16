#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Marvin with a simple menu to start up with.
Marvin doesnt do anything, just presents a menu with some choices.
You should add functinoality to Marvin.
"""
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
    print("a1) Is characters equals?.")
    print("q) Quit.")

    choice = input("--> ")

    if choice == "q":
        print("Bye, bye - and welcome back anytime!")
        break

    elif choice == "1":
        name = input("What is your name? ")
        print("\nMarvin says:\n")
        print("Hello {name} - your awesomeness!")
        print("What can I do you for?!")

    elif choice == "2":
        """Create a function to check type of user input"""
        def check_user_input(i):
            """try to convert the user input to the proper type to return proper result"""
            try:
                return int(i)
            except ValueError:
                try:
                    return float(i)
                except ValueError:
                    return 0
        celsius_Value = input("input your celsius value: ")
        fahrenheit_Value = check_user_input(celsius_Value) * 9 / 5 + 32
        print(str(celsius_Value) + " celsius = " + str(round(fahrenheit_Value, 2)) + " fahrenhite" )

    elif choice == "3":
        user_word = input("input your word: ")
        user_counter = input("input counter: ")
        y = 0
        while y < int(user_counter):
            print(user_word)
            y+=1

    elif choice == "4":
        counter = 0
        result = 0
        saved_number = []
        while True:
            """Create a function to check type of user input"""
            def check_user_input(i):
                """try to convert the user input to the proper type to return proper result"""
                try:
                    return int(i)
                except ValueError:
                    try:
                        return float(i)
                    except ValueError:
                        try:
                            return str(i)
                        except ValueError:
                            return 0
            user_input = input("input: ")
            if saved_number:
                if(isinstance(check_user_input(user_input), (float, int))):
                    numbers = check_user_input(user_input)
                    print(numbers)
                    saved_number.append(numbers)
                    print(sum(saved_number))
                    counter+=1
                    print(counter)
                elif(isinstance(check_user_input(user_input), str)):
                    if(user_input == "done"):
                        if(sum(saved_number) != 0):
                            print(sum(saved_number))
                            print(counter)
                            print("the sum is: ", sum(saved_number), ", and the " + 
                                    "average  is", round(sum(saved_number)/counter, 2))
                            break
                        else:
                            print("division by zero not Allowed, your input", 0)
                            break
                    print("String Not Allowed!!")
            else:
                saved_number.append(check_user_input(user_input))
                counter+=1
                
    elif choice == "5":
        user_input = input("input your word: ")
        m = 0
        x = 0
        result = ""
        arr = [] * len(user_input)
        for char in user_input:
            arr.append(char)
            result += "-"+ arr[m]
            for x in range(m):
                result += arr[m]
            m+=1
            
        print(result[1 : : ])

    elif choice == "6":
        user_input = input("input your word: ")
        if(len(user_input) == len(set(user_input.lower()))):
            print("Match!")
        else:
            print("No match!")

    elif choice == "7":
        saved_num = None
        while True:
            """Create a function to check type of user input"""
            def check_user_input(i):
                """try to convert the user input to the proper type to return proper result"""
                try:
                    return int(i)
                except ValueError:
                    try:
                        return str(i)
                    except ValueError:
                        return 0
                    
            user_input = input("input: ")
            if(saved_num is None):
                saved_num = check_user_input(user_input)
            elif(saved_num is not None):
                if(isinstance(check_user_input(user_input), int)):
                    if(saved_num > check_user_input(user_input)):
                        print("smaller!")
                    elif(saved_num < check_user_input(user_input)):
                        print("larger!")
                    elif(saved_num == check_user_input(user_input)):
                        print("same!")
                    saved_num = check_user_input(user_input)
                elif(isinstance(check_user_input(user_input), str)):
                    if(user_input == "done"):
                        break
                    print("not a number!")
    elif choice == "8":
        user_input = input("input ")
        arr = [] * len(user_input)
        v_arr = ["a", "e", "i", "o", "u","y","å", "ä", "ö"]
        new_str = ""

        for char in user_input:
            arr.append(char)
            
        for m in user_input:
            if(m not in v_arr):
                new_str += m + "o" + m
            else:
                new_str += m
        print(new_str)

    elif choice == "a1":
        user_input1 = input("input1 ")
        user_input2 = input("input2 ")
        result="Not match!"

        arr1 = [] * len(user_input1)
        arr2 = [] * len(user_input2)

        for w in user_input1:
            arr1.append(w)

        for s in user_input2:
            arr2.append(s)
            
        for h in user_input1:
            if(h in arr2):
                result = "Match!"
            elif(h not in arr2):
                result = "Not match!"

        print(result)   
    else:
        print("That is not a valid choice. You can only choose from the menu.")

    input("\nPress enter to continue...")
