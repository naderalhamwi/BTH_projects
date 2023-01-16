"""function docs"""
def greet():
    """function docs"""
    name = input("What is your name? ")
    print("\nMarvin says:\n")
    print('Hello ' + name + '- your awesomeness!')
    print("What can I do you for?!")

"""function docs"""
def celcius_to_farenheit():
    """function docs"""
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

"""function docs"""
def word_manipulation():
    """function docs"""
    user_word = input("input your word: ")
    user_counter = input("input counter: ")
    y = 0
    while y < int(user_counter):
        print(user_word)
        y+=1

"""function docs"""
def sum_and_average():
    """function docs"""
    counter = 0
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

"""function docs"""
def hyphen_string():
    """function docs"""
    user_input = input("input your word: ")
    m = 0
    result = ""
    arr = [] * len(user_input)
    for char in user_input:
        arr.append(char)
        result += "-"+ arr[m]
        for _ in range(m):
            result += arr[m]
        m+=1
        
    print(result[1 : : ])

"""function docs"""
def is_isogram():
    """function docs"""
    user_input = input("input your word: ")
    if(len(user_input) == len(set(user_input.lower()))):
        print("Match!")
    else:
        print("No match!")

"""function docs"""
def compare_numbers():
    """function docs"""
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

"""function docs"""
def robber_language():
    """function docs"""
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

"""function docs"""
def exercise_a1():
    """function docs"""
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
