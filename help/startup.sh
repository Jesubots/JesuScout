#STARTING APP

cd jesuscout/server				# change to server directory
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

# TODO
# run node as service
# http://stackoverflow.com/a/28542093/1161948