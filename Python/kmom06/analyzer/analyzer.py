"""import modul"""
import re

filname = "phil.txt"

"""function docs"""
def readfile(return_data_type):
    """function docs"""
    try:
        if(return_data_type == "list"):
            with open(filname) as filehandle:
                content = filehandle.readlines()
        else:
            with open(filname) as filehandle:
                content = filehandle.read()
        return content
    except FileNotFoundError:
        print("No such file! " + filname)
        return ""

# count lines
"""function docs"""
def count_lines():
    """function docs"""
    print(len(readfile("list")))
    return len(readfile("list"))

# count letters
"""function docs"""
def count_letters():
    """function docs"""
    letters_count = ""
    for k in readfile(""):
        if (k.strip('\n') and k.strip(',') and k.strip('.') and k.strip(' ') and k.strip('-') != '' ):
            letters_count += k
    print(len(letters_count))
    return len(letters_count)

# count words
"""function docs"""
def count_words():
    """function docs"""
    words_list = list(readfile("").strip().split())
    print(len(words_list))
    return len(words_list)

# count words_frequency
"""function docs"""
def count_words_frequency():
    """function docs"""
    words = readfile("").lower().split()
    result =""
    procent = 0
    uniques = []
    for word in words:
        new_word = re.sub("[,.-]","",word)
        if new_word not in uniques:
            uniques.append(new_word)

    counts = []
    for unique in uniques:
        count = 0              
        for word in words:     
            new_word = re.sub("[,.-]","",word)
            if new_word == unique:   
                count += 1         
        counts.append((count, unique))

    counts.sort()         
    counts.reverse()         
    for i in range(min(7, len(counts))):
        count, word = counts[i]
        procent = count / len(words) * 100
        result += str(word) + ": " + str(count) + " | " + str(round(procent, 1)) + "%\n"
    print(result.rstrip()) # rstrip() to remove last \n
    return result

# count letter_frequency
"""function docs"""
def count_letters_frequency():
    """function docs"""
    letters = ""
    for k in readfile("").lower():
        if (k.strip('\n') and k.strip(',') and k.strip('.') and k.strip(' ') and k.strip('-') != '' ):
            letters += k
    result =""
    procent = 0
    uniques = []
    for letter in letters:
        new_word = letter.replace("," or "." or "-","")
        if new_word not in uniques:
            uniques.append(new_word)

    counts = []
    for unique in uniques:
        count = 0              
        for letter in letters:     
            new_word = letter.replace("," or "." or "-","")
            if new_word == unique:   
                count += 1         
        counts.append((count, unique))

    counts.sort()         
    counts.reverse()         
    for i in range(min(7, len(counts))):
        count, letter = counts[i]
        procent = count / len(letters) * 100
        result += str(letter) + ": " + str(count) + " | " + str(round(procent, 1)) + "%\n"
    result[-1].replace("\n","")
    print(result.rstrip()) # rstrip() to remove last \n
    return result
