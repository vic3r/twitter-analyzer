import tweepy
import os
import csv
import pandas as pd
import re
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__),'../' ,'.env')
load_dotenv(dotenv_path)

consumer_key=os.getenv("TWITTER_CONSUMER_KEY")
consumer_secret=os.getenv("TWITTER_CONSUMER_SECRET")
access_token=os.getenv("TWITTER_ACCESS_TOKEN_KEY")
access_secret=os.getenv("TWITTER_ACCESS_TOKEN_SECRET")

def remove_emoji(string):
	NON_BMP_RE = re.compile(u"[^\U00000000-\U0000d7ff\U0000e000-\U0000ffff]", flags=re.UNICODE)
	return NON_BMP_RE.sub(u'', string)

def get_tweets(username):
		auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
		auth.set_access_token(access_token, access_secret)
		api = tweepy.API(auth)

		number_of_tweets=1
		tweets = api.user_timeline(screen_name=username)

		tweets_for_csv = [remove_emoji(tweet.text.encode('utf-8')) for tweet in tweets]
    # for tweet in tweets_for_csv:
		data_frame = pd.DataFrame(tweets_for_csv)

		data_frame.to_csv('output.csv', index=False, header=False)

if __name__ == '__main__':
  print('Enter your name: ')
  screen_name = input()
  get_tweets(screen_name)
		# put your screen name in the following way: 'username'
