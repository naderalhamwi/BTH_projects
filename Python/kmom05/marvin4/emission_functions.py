"""emission_data.country_data['key'][key]/[index of value]"""
import emission_data

"""function head"""
def search_country(search_word):
    """function body"""
    res = [string for string in emission_data.country_data if search_word.lower() in string.lower()]
    if(res):
        print(res)
        return res
        
    raise ValueError("Country does not exist!")
    
        
"""function head"""
def get_country_year_data_megaton(country, year):
    """function body"""
    chosen_country_id = emission_data.country_data[country]['id']
    try:
        if year == "1990":
            chosen_country_id_data = emission_data.emission_1990[chosen_country_id]
        elif year == "2005":
            chosen_country_id_data = emission_data.emission_2005[chosen_country_id]
        elif year == "2017":
            chosen_country_id_data = emission_data.emission_2017[chosen_country_id]
        return chosen_country_id_data * 1000000
    except:
        raise ValueError("Wrong year!") from None


"""function head"""
def get_country_change_for_years(country, year1, year2):
    """function body"""
    year1_megaton = get_country_year_data_megaton(country,year1)
    year2_megaton = get_country_year_data_megaton(country,year2)
    if(year1_megaton and year2_megaton):
        x = year1_megaton - year2_megaton
        m = x/year1_megaton 
        print(country +":" + str(-round(m * 100,2))+"%")
        return -round(m * 100,2)
        
    raise ValueError("Wrong year!")


"""Function head"""
def get_country_data(country_name):
    """function  body"""
    emission_1990 = emission_data.emission_1990[emission_data.country_data[country_name]['id']] * 1000000
    population_1990 = emission_data.country_data[country_name]['population']
    
    emission_2005 = emission_data.emission_2005[emission_data.country_data[country_name]['id']] * 1000000
    population_2005 = emission_data.country_data[country_name]['population']

    emission_2017 = emission_data.emission_2017[emission_data.country_data[country_name]['id']] * 1000000
    population_2017 = emission_data.country_data[country_name]['population']

    value_1990 = None
    value_2005 = None
    value_2017 = None

    if(population_2017 or population_2017 or population_2017 != []):
        value_1990 = population_1990[0]
        value_2005 = population_2005[1]
        value_2017 = population_2017[2]

    my_dict = {}
    my_dict['name'] = country_name
    my_dict['1990'] = {
            'emission': emission_1990,
            'population': value_1990
        }
    my_dict['2005'] = {
            'emission': emission_2005,
            'population': value_2005
        }

    my_dict['2017'] = {
            'emission': emission_2017,
            'population': value_2017
        }
    my_dict['emission_change'] = (
            get_country_change_for_years(country_name,'1990','2005'),
            get_country_change_for_years(country_name,'2005','2017')
    )
    return my_dict

"""Function head"""
def print_country_data(data):
    """function  body"""
    if(data['1990']['population'] is None):
        v_1990 = "Missing population data!"
        v_2005 = "Missing population data!"
        v_2017 = "Missing population data!"
    else:
        v_1990 = str(data['1990']['population'])
        v_2005 = str(data['2005']['population'])
        v_2017 = str(data['2017']['population'])

    print(
        "name: " + str(data['name'])+
        ", 1990: " + str(data['1990']['emission'])+
        ", 1990: " + v_1990+

        ", 2005: " + str(data['2005']['emission'])+
        ", 2005: " + v_2005+

        ", 2017: " + str(data['2017']['emission'])+
        ", 2017: " + v_2017+

        ", 1990-2005: " + str(data['emission_change'][0])+"%"+
        ", 2005-2017: " + str(data['emission_change'][1])+"%"
        
        )
    return data
