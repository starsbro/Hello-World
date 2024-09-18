# print('+ ' + '- ' * 4 + '+','- ' * 4 + '+')
# print('| ' + '  ' * 4 + '|','  ' * 4 + '|')
# print('| ' + '  ' * 4 + '|','  ' * 4 + '|')
# print('| ' + '  ' * 4 + '|','  ' * 4 + '|')
# print('| ' + '  ' * 4 + '|','  ' * 4 + '|')
# print('+ ' + '- ' * 4 + '+','- ' * 4 + '+')
# print('| ' + '  ' * 4 + '|','  ' * 4 + '|')
# print('| ' + '  ' * 4 + '|','  ' * 4 + '|')
# print('| ' + '  ' * 4 + '|','  ' * 4 + '|')
# print('| ' + '  ' * 4 + '|','  ' * 4 + '|')
# print('+ ' + '- ' * 4 + '+','- ' * 4 + '+')

# devide and conquer, 
# how to devide a thing to a small unit?

# find out the repeated unit 
def do_twice(f):
    f()
    f()

def do_four(f):
    do_twice(f)
    do_twice(f)

def print_beam():
    print('+ - - - -', end = ' ')

def print_post():
    print('|        ', end = ' ')

def print_beams():
    do_twice(print_beam)
    print('+')

def print_posts():
    do_twice(print_post)
    print('|')

def print_row():
    print_beams()
    do_four(print_posts)

def print_grid():
    do_twice(print_row)
    print_beams()

print_grid()

# draw a similar grid with four rows and four columns
def print_four_beams():
    do_four(print_beam)
    print('+')

def print_four_posts():
    do_four(print_post)
    print('|')

def print_four_row():
    print_four_beams()
    do_four(print_four_posts)

def print_four_grid():
    do_four(print_four_row)
    print_four_beams()

print_four_grid()

# Another founction: draw a similar grid with four rows and four columns

# basic items
def one_four_one(f, g, h):
    f()
    do_four(g)
    h()

def print_plus():
    print('+', end = ' ')

def print_dash():
    print('-', end = ' ')

def print_bar():
    print('|', end = ' ')

def print_space():
    print(' ', end = ' ')

def print_end():
    print()

def nothing():
    "do nothing"

#Composed basic function
def print1beam():
    one_four_one(nothing, print_dash, print_plus)

def print1post():
    one_four_one(nothing, print_space, print_bar)

def print4beams():
    one_four_one(print_plus, print1beam, print_end)

def print4posts():
    one_four_one(print_bar, print1post, print_end)

def print_row():
    one_four_one(nothing, print4posts, print4beams)

def print_new_four_grid():
    one_four_one(print4beams, print_row, nothing)

print_new_four_grid()

comment = """
After writing a draft of the 4x4 grid, 
I noticed that many of the function had the same structure: they would do something, 
do something else four times, and then do something else once.

So I wrote one_four_one, which takes three functions as arguments; it call the first 
one once, then uses do_four to call the second one four times, then calls the third.

Then I rewrote print1beam, print1post,print4beams, print4posts, print_row, and print_row
and print_grid using one_four_one.

Programming is an exploratory process. Writing a draft of a program often gives you 
insight into the problem, which might lead you to rewrite the code to reflect the structure
of the solution.

---Allen
"""

print(comment)
