# MONGO SHELL

help							# show command options

show dbs						# show existing DBs
show collections					# show collections in current DB

db							# display database you're using
use jesuscout					# switch to database jesuscout

db.collection.drop()				# remove collection
db.createCollection('')				# create collection

db.collection.insert({name:'val'})		# insert to collection
db.collection.find()				# list collection contents
db.collection.find().pretty()				# pretty object view

db.collection.remove({})			# remove all documents in a collection
db.collection.remove({type:"x"})		# remove documents with specific type

~/.dbshell					# access command history


# EXPORTING MONGO DATA i.e. downloading the database
mongoexport --db jesuscout --collection HeartlandMatches --out matches.json --pretty    # get the entire Heartland Collection
mongoexport --db jesuscout --collection HeartlandMatches --query '{"scoutName": "max"}' --out matches.json --pretty #only get specified query from Heartland Collection