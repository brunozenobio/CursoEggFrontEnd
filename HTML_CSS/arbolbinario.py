class Nodo:
    def __init__(self,dato):
        self.dato = dato # Valor del nodo
        self.izq = None # Nodo a la izquierda
        self.der = None  # Nodo a la derecha
        
    def insertarVal(self,dato):
        if dato < self.dato: # genero una condicion para
                            # insertar a la izquierda o derecha
            if self.izq == None:
                self.izq=Nodo(dato) # si a la izquierda no hay nodo seteo
            else:
                self.izq.insertarVal(dato) # si si hay me muevo a ese nodo y ahi isnerto(recurividad)
        elif dato > self.dato:
            if self.der == None:
                self.der=Nodo(dato)
            else:
                self.der.insertarVal(dato)
        else:
            print("El valor es repetido")
            
            
                
            