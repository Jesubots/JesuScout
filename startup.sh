#STARTING APP

cd 2018-scouting-system/server	# change to server directory
brew services start mongodb		# start mongodb database
sudo node server				# fresh start of server

#WORKING WITH DB

brew services start mongodb		# start mongodb database
cd /bin							# change to /bin directory to enable mongo shell
mongo							# start mongo

#SHUTDOWN APP

brew services stop mongodb		# shutdown mongo

#UTILITIES

brew services list				# list running instances of brew

#MONGO SHELL

help							# show command options

show dbs						# show existing DBs
show collections				# show collections in current DB

db								# display database you're using
use jesuscout					# switch to database jesuscout

db.winLoss.insertOne( { wins:1 } );		# insert data to collection winLoss

~/.dbshell						# access command history

# TODO
# run node as service
# http://stackoverflow.com/a/28542093/1161948