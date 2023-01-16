"""Function"""
def pick(player_inventory, taken_obj, index=0):
    """function body"""
    if(index == 0):
        try:
            player_inventory.insert(len(player_inventory),taken_obj)
            print(str(taken_obj) + " was added in inventory at index "+ str(index) + str(player_inventory))
            return player_inventory
        except Exception:
            print("Error list out of range" + str(player_inventory) + " " + str(index))
            return player_inventory
    else:
        try:
            player_inventory[int(index)] = player_inventory[int(index)]
            player_inventory.insert(int(index),taken_obj)
            print(str(taken_obj) + " was added in inventory at index "+ str(index) + str(player_inventory))
            return player_inventory
        except Exception:
            print("Error list out of range" + str(player_inventory) + " " + str(index))
            return player_inventory


"""remove element from inventory"""
def drop(player_inventory, drop_obj):
    """function body"""
    if drop_obj in player_inventory:
        player_inventory.remove(drop_obj)
        print(str(drop_obj) + " Was removed from list")
        return player_inventory

    print("Error " + str(drop_obj) + " dont exext in list: " )
    return player_inventory

"""swaping betwen tow element in inventory"""
def swap(player_inventory, obj1, obj2):
    """function body"""
    try:
        obj1_ndex = player_inventory.index(obj1)
        obj2_ndex = player_inventory.index(obj2)
        
        if obj1_ndex == obj2_ndex:
            print("Error "+str(obj1) + " and " + str(obj2) + " is equal")
        else:
            player_inventory[obj1_ndex],player_inventory[obj2_ndex]=\
                    player_inventory[obj2_ndex],player_inventory[obj1_ndex]
            print("swap " + str(obj1) + " with " + str(obj2))
        
        return player_inventory
    except Exception:
        print("Error " + str(obj1) + " or " + str(obj2) + " or " +  str(player_inventory)+ " not exist in list") 
        return player_inventory

"""function to get current inventory"""
def inventory(player_inventory):
    """printing the current inventory"""
    print(player_inventory)
    print(len(player_inventory))
