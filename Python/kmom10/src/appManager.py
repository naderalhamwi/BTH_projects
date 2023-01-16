"""import modul"""
import os
import time
from src.save.saveManager import save

"""Function to read from file"""
def read_file(return_data_type, filname):
    """Read file and return content by wnted type with return_sata_type"""
    try:
        if(return_data_type == "list"):
            with open(filname) as filehandle:
                content = filehandle.readlines()
        else:
            with open(filname) as filehandle:
                content = filehandle.read()
        return content
    except FileNotFoundError as e:
        print("No such file! " + filname)
        return e
        
"""Function to clear screen"""
def clearScreen():
    """Clearing screen dependent om system!"""
    # Clearing the Screen
    # posix is os name for Linux or mac
    if(os.name == 'posix'):
        os.system('clear')
    # else screen will be cleared for windows
    else:
        os.system('cls')

"""Function to begain train by chosen level"""
def train(level):
    """Begain train by chosen level"""
    path = f'src/typing/{level}.txt'
    content = read_file("list", path)
    contentChar = read_file("", path)

    contentCharNoSpaces = []
    for k in contentChar:
        if (k.strip('\n') != '' ):
            contentCharNoSpaces.append(k)

    filedChar = []
    start = time.time() # Save train start time
    for word in content:
        clearScreen()
        inputChar = []
        wordChar = []
        print(word.rstrip())  # Remove \n from word
        userInput = input()

        for char in userInput:
            inputChar.append(char)

        for char in word.rstrip():
            wordChar.append(char)

        if(len(wordChar) == len(inputChar)):
            for index,value in enumerate(wordChar):
                if(inputChar[index] != wordChar[index]):
                    filedChar.append(value)
        else:
            g = len(wordChar)-len(inputChar)

            for num in range(g):
                inputChar.insert(len(inputChar) +num, '')

            for index,value in enumerate(wordChar):
                if(inputChar[index] != wordChar[index]):
                    filedChar.append(value)

    if(filedChar):
        procent = (len(filedChar) / len(contentCharNoSpaces)) * 100
    else:
        procent = 0

    score = len(content) * (100 - round(procent))
    end = time.time() # Save train end time
    clearScreen()

    myDic = {}
    for n in set(filedChar):
        myDic[n] = filedChar.count(n)

    newDict = sorted(myDic.items(), key = lambda x: x[1], reverse = True)

    print("Congrats! You finish the training on level:",level)
    print("Fel tecken  \n" + str(newDict))
    print("procentuellt fel " + str(round(procent)) + "%")
    print("total tid: " + str(round(end - start, 1))+"s")
    print("Score: " + str(score))
    print("WPM: " + str(round((len(content) * 100) / (end - start))))
    ednResult = "Score: " + str(score) + ". Fel i procent: " + str(round(procent)) + "%. " + "Level: " + level 
    save(ednResult)
    