
#import tkinter
#tkinter._test()

import turtle
import math

bob = turtle.Turtle() #bob is a object
#print(bob)
turtle.mainloop()

def square(t):
    for i in range(4):
        t.fd(100)
        t.lt(90)

square(bob)

def square(t, length):
    for i in range(4):
        t.fd(length)
        t.lt(90)

def polygon(t, n, length):
    angle = 360/n
    for i in range(n):
        t.fd(length)
        t.lt(angle)

# A circle function
def circle(t, r):
    circumference = 2 * math.pi * r
    #n = 50
    n = int(circumference / 3) + 3
    length = circumference / n
    polygon(t, n, length)

def arc(t, r, angle):
    arc_length = 2 * math.pi * r * angle / 360
    n = int(arc_length / 3) + 1
    step_length = arc_length / n
    step_angle = angle / n 

    for i in range(n):
        t.fd(step_length)
        t.lt(step_angle)

def polyline(t, n, length, angle):
    #below is a docstring
    """Draws n line segments with the given length and 
    angle (in degrees) between them.t is a turtle.
    
    """
    for i in range(n):
        t.fd(length)
        t.lt(angle)

def polygon(t, n, length):
    angle = 360.0 / n
    polyline(t, n, length,angle) 

def arc(t, r, angle):
    arc_length = 2 * math.pi * r * angle / 360
    n = int(arc_length / 3) + 1
    step_length = arc_length / n
    step_angle = float(angle) / n
    polyline(t, n, step_length, step_angle)       

def circle(t, r):
    arc(t, r, 360)

square(bob, 80)
square(bob, 120)

polygon(bob, 6, 100)
polygon(bob, n = 6, length = 100)

alice = turtle.Turtle()
square(alice)



