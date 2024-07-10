# About

## Datasets

I used a combination of two datasets from Kaggle, [Hand Sign Images](https://www.kaggle.com/datasets/ash2703/handsignimages) and the images for "space" from [Synthetic ASL Alphabet](https://www.kaggle.com/datasets/lexset/synthetic-asl-alphabet)

## Model

I used a template from [codebasics](https://github.com/codebasics/potato-disease-classification/blob/main/training/potato-disease-classification-model.ipynb) to set up my CNN training model

## Setup Python Virtual Environment and Dependencies

1. Install the virtual environment `python3.11 -m venv .env`
2. Activate the environment in your shell `source .env/bin/activate`
3. Verify the python version `python3 --version`
4. Install dependencies `pip3 install -r backend/requirements.txt`
5. Select the python interpreter for the virtual environment and select it in the jupyter notebook (top right side)

## Getting Started with React App

### Setup

1. Initialize react by running `npx create-react-app frontend --use-npm`
2. cd into the frontend directory
3. Start the development server by running `npm start`
4. To bundle the app for production run `npm run build`

### Changing the website title

Install react-helmet by running `npm install --save react-helmet`
