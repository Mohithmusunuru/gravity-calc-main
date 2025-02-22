print("Hello Dude")
wanna=input("Wanna calculate force of attraction between you and earth (""yes"" or ""no""):  ")
if wanna == "yes":
    print("ok")
    mass=float(input("what is your mass in kg\n mass is same as number weighting machine show you:  "))
    force = mass * 9.80665
    print("force of attraction between earth and you is approx", round(force),"N \n 1 N = 1kg/ms^2")
elif wanna == "no":
    print("You made me sad :( \n bye")
else:
    print("Check what you have type, type in all small case")

