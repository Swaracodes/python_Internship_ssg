def add():
    a=int(input("Enter Value 1: "));
    b=int(input("Enter Value 2: "));
    add=a+b
    print("Addition:",add)
def sub():
    a=int(input("Enter Value 1: "));
    b=int(input("Enter Value 2: "));
    sub=a-b
    print("Subtraction:",sub)
def mul():
    a=int(input("Enter Value 1: "));
    b=int(input("Enter Value 2: "));
    mul=a*b
    print("Multiplication:",mul)
def div():
    a=int(input("Enter Value 1: "));
    b=int(input("Enter Value 2: "));
    div=a/b
    print("Division:",div)
def mod():
    a=int(input("Enter Value 1: "));
    b=int(input("Enter Value 2: "));
    mod=a%b
    print("Modulas:",mod)

while True:
    print("*******Menu For Calculator*******")
    print("1.Addition ")
    print("2.Subtraction ")
    print("3.Multiplication ")
    print("4.Division ")
    print("5.Modulus ")
    print("6.Exit")
    ch=int(input("Enter your Choice: "))

    if(ch==1):
        add()
    elif(ch==2):
        sub()
    elif(ch==3):
        mul()
    elif(ch==4):
        div()
    elif(ch==5):
        mod()
    elif(ch==6):
        print("Thanks for using our Calculator.")
        break
    else:
        print("invalid input");

