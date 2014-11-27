#!/usr/bin/python
#encoding: utf8
import csv
import json
import pprint

reader = csv.reader(file("cbs1.csv"))
headers = reader.next()
headers = [ header.decode('utf8') for header in headers ]
out = {}
for line in reader:
  line = dict(zip(headers,line))
  key = line[u'סמל הרשות 2012']
  try:
    xvalue = float(line[u'אחוז בני 29-20 באוכלוסייה בסוף 2012'])
    xvalue = xvalue + float(line[u'אחוז בני 44-30  באוכלוסייה בסוף 2012'])
    yvalue = float(line[u'סה"כ  אוכלוסייה בסוף 2012 (אלפים)'])
    out[key] = {'x':xvalue, 'y':yvalue, 'name':line[u'שם  הרשות 1'].decode('utf8')}
  except:
    pass

reader = csv.reader(file("cbs2.csv"))
headers = reader.next()
headers = [ header.decode('utf8') for header in headers ]
for line in reader:
  line = dict(zip(headers,line))
  key = line[u'סמל הרשות 2012']
  try:
    value = int(line[u'סך כולל הכנסות של הרשות (אלפי ש\"ח) 2012'].replace(",",""))
    out[key]['y'] = value / out[key]['y']
  except:
    pass

out = out.values()

json.dump(out,file('cbs.json','w'),indent=2)
