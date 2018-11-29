# Twitter Analyzer

App which analyzes twits from every user with NLP

## Getting Started

These instructions will only allow you to run the local implementation

### Prerequisites
```
Node => 8.11
```
Node be can installed using NVM running 
`nvm install 8.11`

```
yarn
```

yarn can be installed using brew
`brew install yarn`

```
python 3
```

yarn can be installed using brew
`brew install python3`


### Installing
Install dependencies

```
yarn install
```
or 
```
npm install
```
For python
```
pip install tweepy

pip install pandas

pip install spacy

pip install gensim

pip install nltk
```

Download spacy english package from `https://spacy.io/usage/models`

then run :
```
python -m spacy download en
```


This will install all the required dependencies
### Run
1st impl.

suggested:
```
nodemon
```
or
```
npm start
```
```
yarn start
```

Add `.env` file and `TOKEN ENV VARIABLES`

From command line execute:

`curl http://<HOST>:<PORT>/status?screen_name=<USERNAME>`

2nd impl.
```
python twittpy/main
```
```
python process/main
```


## Built With

* [Nodejs](https://nodejs.org/en/) - server
* [Python](https://www.python.org) - nlp and tweepy

## Authors

* **Daniel Risso** - *Developer* - [@rissel](https://github.com/rissel)
* **Memo Garcia** - *Developer* - [@memogcia](https://github.com/Memogcia)
* **Denis Kingston** - *Developer* - [@dkingstong](https://github.com/dkingstong)
* **Victor Garcia** - *Developer* - [@vic3r](https://github.com/vic3r)
* **Dafne Medina** - *Developer* - [@dafnesabrina1](https://github.com/dafnesabrina1)
