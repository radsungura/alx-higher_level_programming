#!/usr/bin/python3
def print_reversed_list_integer(my_list=[]):
    if my_list:
        list = my_list.reverse()
        for i in range(len(list)):
            print("{:d}".format(list[i]))
