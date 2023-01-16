"""importing stuff"""
import random

"""function docs"""
def randomize_string(user_input):
    """function docs"""
    print( user_input + " --> " + ''.join(random.sample(user_input,len(user_input))))
    return user_input + " --> " + ''.join(random.sample(user_input,len(user_input)))
"""function docs"""
def get_acronym(user_input):
    """function docs"""
    new_str = ""

    for char in user_input:
        if(char.isupper()):
            new_str += char
            
    print(new_str)  
    return new_str  
"""function docs"""
def multiply_str(arg1,arg2):
    """function docs"""
    new_str = ""
    for _ in range(arg2):
        new_str += arg1
    return new_str
"""function docs"""
def mask_string(user_input):
    """function docs"""
    new_str = ""
    new_str += multiply_str("#", len(user_input[:-4]))
    
    print(new_str + str(user_input[-4:]))
    return new_str + str(user_input[-4:])
"""function docs"""    
def find_all_indexes(arg1,arg2):
    """function docs"""    
    try:    
        new_str = ""
        index_list = [index for index in range(len(arg1)) if arg1.startswith(arg2, index)]
        for i in index_list:
            new_str += str(i) + ","
        print(new_str[0:-1])
        return new_str[0:-1]
    except ValueError:
        return "No such character available in string {arg1}"
