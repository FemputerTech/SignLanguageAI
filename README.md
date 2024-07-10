# About

## Datasets

I used a datasets from Kaggle [Synthetic ASL Alphabet](https://www.kaggle.com/datasets/lexset/synthetic-asl-alphabet)

## Icons

I purchased these icons fron [TheHatchedCottage](https://www.etsy.com/listing/1104909056/asl-alphabet-svg-american-sign-language?click_key=2ae604896a150ace2e9f598b41724f667c08e43d%3A1104909056&click_sum=f62eab80&ga_search_query=asl&ref=shop_items_search_1&crt=1) on Etsy.

## Model

I used a template from [codebasics](https://github.com/codebasics/potato-disease-classification/blob/main/training/potato-disease-classification-model.ipynb) to set up my CNN training model

## Setup Python Virtual Environment and Dependencies

1. Install the virtual environment `python3.11 -m venv .env`
2. Activate the environment in your shell `source .env/bin/activate`
3. Verify the python version `python3 --version`
4. Install dependencies `pip3 install -r requirements.txt`
5. Select the python interpreter for the virtual environment and select it in the jupyter notebook (top right side)

## Setup Kaggle

1. Go to [Kaggle](https://www.kaggle.com/)
2. Click on your account in the right hand corner and go to settings
3. Scroll down to API and select Create New Token, this will download a kaggle.json file
4. mv the kaggle.json to the `.kaggle` directory that was created

## Getting Started with React App

### Setup

1. Initialize react by running `npx create-react-app frontend --use-npm`
2. cd into the frontend directory
3. Iif you need to reinstall the dependencies run `npm install` or `npm i`
4. Start the development server by running `npm start`
5. To bundle the app for production run `npm run build`

### Changing the website title

Install react-helmet by running `npm install --save react-helmet`
