from zeep import Client

client = Client('http://www.dneonline.com/calculator.asmx?WSDL')

result = client.service.Add(5, 3)

print("O resultado da adição é: ", result)
