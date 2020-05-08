from sklearn import linear_model
# import statsmodels.api as sm
import numpy as np
import pandas as pd
# import pymongo

# # MongoDB
# myclient = pymongo.MongoClient("mongodb://localhost:27017/")
# mydb = myclient["mydatabase"]
# mycol = mydb["customers"]

# preparing data
df = pd.read_csv('cewit.csv')

# row and column
X = df[['Soil_Moisture (from Rainfall, annual inch)', 'Temperature (F)', 'Humidity (percent)', 'UV Index']] 
Y = df['Crop_Yield (kg / acre)']
 
regr = linear_model.LinearRegression()
regr.fit(X, Y)

newSoilMoisture = 30
newTemperature = 50
newHumidity = 60
newUV = 5
newCropYield = regr.predict([[newSoilMoisture, newTemperature, newHumidity, newUV]])


