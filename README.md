# Colleges

React app with Postgresql backend

## Setup I Did

```
brew install csvkit

npm init
npm i pg
npm i c8 --save-dev # not used yet
npm i tap --save-dev # not used yet
npm i express
npm i dotenv

git init
git add .gitignore
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/aakoch/colleges.git
git add .gitignore
git add src/index.js
git commit -m "db setup"
git push -u origin main

# I uninstalled but was still having issues
npm uninstall -g create-react-app
yarn global remove create-react-app

# I was getting errors saying I needed to uninstall create-react-app globablly but I tried to and I still got the error. I resorted to appended the version.
npx create-react-app@5.0.0 client
cd client
npm start

## Starting the App

Start the DB endpoint:

```shell
node src/index.js
```

Start the React app:

```shell
cd client
npm start
```

## Tools Used (Besides NPM packages)

### csvsql

Installed with homebrew.

Used to pull my stuff off of Airtable. I copied to a local .tsv file and converted to SQL inserts.

https://stackoverflow.com/questions/36449406/how-to-let-csvkit-csvsql-generate-insert-statements-for-csv-file

Example:
```shell
csvsql -t --db=sqlite:///test.db --insert locations.tsv
echo ".dump locations" | sqlite3 test.db > locations.sql
```