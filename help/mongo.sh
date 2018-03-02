# MONGO SHELL

help							# show command options

show dbs						# show existing DBs
show collections				# show collections in current DB

db								# display database you're using
use jesuscout					# switch to database jesuscout

db.collection.drop()			# remove collection
db.createCollection('')			# create collection

db.collection.insert({name:'val'})	# insert to collection
db.collection.find()				#list collection contents

~/.dbshell						# access command history