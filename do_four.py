def print_twice(bruce):
    print(bruce)
    print(bruce)

#f --> func, x --> arg
def do_twice(f, x):
    f(x)
    f(x)

def do_four(f, x):
    """ Run a function four times.
    func: fucntion object
    arg: argument passed to the function
    """
    do_twice(f, x)
    do_twice(f, x)

do_twice(print_twice, 'spam')
print('')
do_four(print, 'peter')