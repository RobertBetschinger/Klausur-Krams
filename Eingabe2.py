import struct
import os

padding = 'A'

i=0

while i<=800:
        payload = padding*i
        os.system("echo " + payload+"> payload.txt")
        os.system("./hallo < payload.txt")
        print(str(i),'times A')
        i += 100