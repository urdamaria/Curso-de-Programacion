
numero1 = input ("dame un numero")
numero2 = input ("dame un segundo numero")
if numero1 == numero2:

    print(f"{numero1} es igual a {numero2}.")
elif numero1 != numero2:
    print(f"{numero1} es diferente de {numero2}.")  
elif numero1 > numero2:
    print(f"{numero1} es mayor que {numero2}.")
elif numero1 < numero2: 
   print(f"{numero1} es menor que {numero2}.")

else:
    print ("No aplica")

numero11 = input ("dame un numero")
numero22 = input ("dame un segundo numero")
numero3 = input ("dame un tercer numero")
if (numero11 > numero22 and numero11 < numero3) or (numero22 < numero3):
    print(f"{numero1} es mayor que {numero2} y menor que {numero3}, y {numero2} es menor que {numero3}.")

nombre = input("¿Cuál es tu nombre? ")
edad = input("¿Cuántos años tienes? ")
pais = input ("¿Cual es tu pais de origen?")

print(f"Hola, {nombre}! Tienes {edad} años y eres de {pais}.")

suma = 345 + 20 


nota = input ("¿Cual es tu calificación?")
calificacion = int(nota)

if calificacion >= 90 and calificacion <= 100 : 
    print ("Obtuviste una A")
if calificacion >= 80 and calificacion <= 89 : 
    print ("Obtuviste una B")
if calificacion >= 70 and calificacion <= 79 : 
    print ("Obtuviste una C")
if calificacion >= 60 and calificacion <= 69 : 
    print ("Obtuviste una D")
if calificacion >= 0 and calificacion <= 59 : 
    print ("Obtuviste una F")
