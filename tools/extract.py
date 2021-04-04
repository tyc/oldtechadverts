#!/usr/bin/python
import os
import subprocess
import fnmatch
from datetime import date

# extract each page of the pdf to its own individual page.
# pdftk does the heaving lifting.
#
filelist = os.listdir("./")
for filein in filelist:
	if filein.endswith('.pdf'):
		basename = os.path.splitext(filein)
		print("processing "+basename[0])
		command = "pdftk "+str(filein)+" burst output "+basename[0]+"_pg%02d.pdf"
		# print(command)
		os.system(command)

reference_filename = basename[0]

# convert each of the page to png
filelist = fnmatch.filter(os.listdir("./"), reference_filename+"_pg*.pdf")
for filein in filelist:
	if filein.endswith('.pdf'):

		basename = os.path.splitext(filein)
		command = "pdftoppm -png -rx 300 -ry 300 "+str(filein)+" Screenshot_"+str(date.today())+"_"+basename[0]
		print(command)
		os.system(command)
		os.system("rm "+str(filein))
