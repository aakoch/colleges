# Colleges

React app with PostgreSQL backend

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
git add src/index.js
git commit -m "db setup"
git push -u origin main

# I uninstalled but was still having issues
npm uninstall -g create-react-app
yarn global remove create-react-app

# I was getting errors saying I needed to uninstall create-react-app globablly but I tried to and I still got the error. I resorted to appended the version.
npx create-react-app@5.0.0 client
```

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

## Links

### Tools
* [Express](https://expressjs.com/)
* [Create React App](https://create-react-app.dev/)
* [React](https://reactjs.org/) - the thing that grabs recruiters' attention
* [PostgreSQL](https://www.postgresql.org/)
* [node-postgres](https://node-postgres.com/)
* [csvkit on Hombrew](https://formulae.brew.sh/formula/csvkit)
* [Airtable](https://airtable.com/) - where I started documenting my college search
* [FreeMapTools](https://www.freemaptools.com/how-far-is-it-between.htm) - for getting distances

### Articles
* [How to Create a React App with a Node Backend: The Complete Guide](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/)
* [Node.js PostgreSQL Connection](https://help.scalegrid.io/docs/postgresql-connecting-to-nodejs-driver)
* [How to Use Node Environment Variables with a DotEnv File for Node.js and npm](https://www.freecodecamp.org/news/how-to-use-node-environment-variables-with-a-dotenv-file-for-node-js-and-npm/)

### College Information
* [US News and World Report](https://www.usnews.com/best-colleges)
* [Niche](https://www.niche.com/graduate-schools/search/best-psychology-graduate-programs/) 
* [GradSchools.com](https://www.gradschools.com/programs/psychology)
* [BestValueSchools](https://www.bestvalueschools.com/psychology/masters-degree-programs/)
* [US Department of Education](https://collegescorecard.ed.gov/)

## Miscellaneous
### Airtable
I like Airtable, I just hit my max number of records in the base I was using. 