Case class 

c match {
    Case Complex(a, 0) if a > 0 => 
    Case Complex(a, 0) => neg real(a)
    Case Complex(0, t) => imag(b)
    Case _ => Complex (a, t)
}