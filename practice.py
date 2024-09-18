# right_justify definition function, not a method
def right_justify(s):
    print(' ' * (70 - len(s)) + s)
    
# right_justify callback
right_justify('monty')
right_justify('peter')

def do_twice(f):
    f()
    f()

def print_spam():
    print('spam')

do_twice(print_spam)