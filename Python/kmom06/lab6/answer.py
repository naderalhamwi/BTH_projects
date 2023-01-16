#!/usr/bin/env python3

"""
cc44acc0c1c610f9455e23dd3c1c517c
python
lab6
v4
moae22
2022-10-13 14:06:36
v4.0.0 (2019-03-05)

Generated 2022-10-18 22:49:25 by dbwebb lab-utility v4.0.0 (2019-03-05).
https://github.com/dbwebb-se/lab
"""

from dbwebb import Dbwebb


# pylint: disable=invalid-name

dbwebb = Dbwebb()
dbwebb.ready_to_begin()



# ==========================================================================
# Lab 6 - python
#
# During these exercises we train on reading, writing and appending data to
# text file's.
#



# --------------------------------------------------------------------------
# Section 1. Files
#
#
#



# """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.1 (1 points)
#
# Read the `quotes.txt` -file in UTF-8 encoding and store the content into a
# variable. Answer with the number of characters in the file.
#
# Write your code below and put the answer into the variable ANSWER.
#

"""function docs"""
def readfile():
    """function docs"""
    with open("quotes.txt") as quotes_filehandle:
        quotes_content = quotes_filehandle.readlines()
    return quotes_content

content_string = "".join(readfile())

ANSWER = len(content_string)

# I will now test your answer - change false to true to get a hint.
dbwebb.assert_equal("1.1", ANSWER, False)

# """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.2 (1 points)
#
# Use your variable from the exercise above and answer with the contents on
# line number 3.
#
# Write your code below and put the answer into the variable ANSWER.
#


res = []
for sub in readfile():
    res.append(sub.replace("\n", ""))

ANSWER = res[2]

# I will now test your answer - change false to true to get a hint.
dbwebb.assert_equal("1.2", ANSWER, True)

# """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.3 (1 points)
#
# First, read the content inside of quotes.txt and remove the 5 last rows.
# Then replace line number 6 with the new string "I am replaced".
# Then, create a new file called `newQuotes.txt` where you save the new
# changes. Replace `newQuotes.txt` if it already exists.
#
# Answer with the new content inside `newQuotes.txt`. Don't have a "\n" on
# the last line.
#
# Write your code below and put the answer into the variable ANSWER.
#

content = readfile()

"""function docs"""
def write_to_file(input_content, mode):
    """function docs"""
    with open("newQuotes.txt", mode) as newQuotes_filehandle:
        newQuotes_filehandle.write(input_content)

content_string = ""

content[5] = "I am replaced" +"\n"
content[9] = content[9].replace("\n","")

for i in content[:-5]:
    content_string += i

write_to_file(content_string, "w")

########
new_filename = "newQuotes.txt"
new_readfile = open(new_filename)
new_content = new_readfile.readlines()

res_string = "".join(new_content)

ANSWER = res_string
# I will now test your answer - change false to true to get a hint.
dbwebb.assert_equal("1.3", ANSWER, False)

# """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.4 (1 points)
#
# Append the following sentence on a new line at the end of newQuotes.txt and
# answer with the content.
#
# *"Luck is where preparation meets opportunity."*
#
# Write your code below and put the answer into the variable ANSWER.
#

filename = "newQuotes.txt"
readfile = open(filename)
content = readfile.readlines()

content_string = "\n"+"Luck is where preparation meets opportunity."

write_to_file(content_string, "a")

########
new_filename = "newQuotes.txt"
new_readfile = open(new_filename)
new_content = new_readfile.readlines()

res_string = "".join(new_content)

ANSWER = res_string

# I will now test your answer - change false to true to get a hint.
dbwebb.assert_equal("1.4", ANSWER, False)

# """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.5 (1 points)
#
# Store the number of empty lines that `passwords.txt` has and create a new
# file called `newPasswords.txt` containing the lines that are not empty.
#
# Answer with the following:
#
# *passwords.txt has X empty lines and contains: Y*
#
# Replace `X` with the number of empty lines and `Y` with the new files
# content.
#
# Write your code below and put the answer into the variable ANSWER.
#

filename = "passwords.txt"
readfile = open(filename)
passwords_content = readfile.readlines()

x = 0
y = ""

for k in passwords_content:
    if (k.strip('\n') != ''):
        y += k
    else:
        x+=1

ANSWER = "passwords.txt has " + str(x) + " empty lines and contains: " + y

# I will now test your answer - change false to true to get a hint.
dbwebb.assert_equal("1.5", ANSWER, False)

# """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.6 (3 points)
#
# Write the content of line numbers 3, 4 and 5 from `quotes.txt` to a new
# file that you create called `extraQuotes.txt`. Replace `extraQuotes.txt` if
# it already exists.
# Save the total number of characters and the 9 first characters of the
# second line into variables.
#
# Answer with the following string:
# "The file has X characters and the 9 first of the second row are: Y"
#
# **Example**:
# *"The file has 220 characters and the 9 first of the second row are: - Jon
# Doe"*
#
# Do not include newlines when you count the number of characters.
#
# Write your code below and put the answer into the variable ANSWER.
#

filename = "quotes.txt"
readfile = open(filename)
content = readfile.readlines()

res_string = ""
content[4] = content[4].replace("\n","")

for i in content[2:5]:
    res_string += i

total_char = 0
char_in_line = ""
content_string = ""

try:
    with open("extraQuotes.txt", "w") as filehandle:
        filehandle.write(res_string)
except FileNotFoundError as e:
    print(e)

filename = "extraQuotes.txt"
readfile = open(filename)
content_lines = readfile.readlines()

char_in_line = content_lines[1][:9]

for i in content_lines:
    content_string += i

total_char = len(content_string.replace("\n",""))

ANSWER = "The file has " + str(total_char) + " characters and the 9 first of the second row are: " + str(char_in_line)

# I will now test your answer - change false to true to get a hint.
dbwebb.assert_equal("1.6", ANSWER, False)


dbwebb.exit_with_summary()
