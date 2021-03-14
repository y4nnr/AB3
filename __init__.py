from flask import Flask, render_template, request
import flask_resize
import redis
import time
import os
import boto3

boto3.set_stream_logger('botocore', level='DEBUG')

w = redis.Redis(host='oktank-cluster.wraqgj.0001.usw2.cache.amazonaws.com', port=6379, db=0, charset="utf-8", decode_responses=True)
r = redis.Redis(host='oktank-cluster.wraqgj.0001.usw2.cache.amazonaws.com', port=6379, db=0, charset="utf-8", decode_responses=True)
dynamodb = boto3.resource('dynamodb', region_name='us-west-2')
table = dynamodb.Table('oktank-Books')


def get_hit_count():
    retries = 5
    while True:
        try:
            return w.incr("foo")
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)


#TOP 10 All Time North America

def show_top10_NA():
    retries = 5
    while True:
        try:
            phones_table = r.zrevrange("TopBooks:NorthAmerica:AllTime", 0, 9, withscores=True)
            return phones_table
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

#Match Product ID to Product Name
def show_NA_DDB():
    retries = 5
    while True:
        try:
            list1 = r.zrevrange("TopBooks:NorthAmerica:AllTime", 0, 9)
            return list1
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

def show_NA_DDB2():
    NA_DDB = show_NA_DDB()
    NA_DDB_list = [i.replace('"', '') for i in NA_DDB]
    i = 0
    list_NA_DDB2 = []
    while i < len(NA_DDB):
        resp = table.get_item(Key={"id": (NA_DDB_list[i])}, AttributesToGet=["name"])
        list_NA_DDB2.append(resp['Item'])
        i = i + 1
        if i == len(NA_DDB):
            return list_NA_DDB2


#TOP 10 All Time Europe
def show_top10_EU():
    retries = 5
    while True:
        try:
            tablets_table = r.zrevrange("TopBooks:Europe:AllTime", 0, 9, withscores=True)
            return tablets_table
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

#Match Product ID to Product Name
def show_EU_DDB():
    retries = 5
    while True:
        try:
            list1 = r.zrevrange("TopBooks:Europe:AllTime", 0, 9)
            return list1
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

def show_EU_DDB2():
    EU_DDB = show_EU_DDB()
    EU_DDB_list = [i.replace('"', '') for i in EU_DDB]
    i = 0
    list_EU_DDB2 = []
    while i < len(EU_DDB):
        resp = table.get_item(Key={"id": (EU_DDB_list[i])}, AttributesToGet=["name"])
        list_EU_DDB2.append(resp['Item'])
        i = i + 1
        if i == len(EU_DDB):
            return list_EU_DDB2


#TOP 10 All Time Global
def show_top10_all():
    retries = 5
    while True:
        try:
            #w.zunionstore('top10:all', ['top10:phones', 'top10:tablets'])
            all_table = r.zrevrange("TopBooks:AllTime", 0, 9, withscores=True)
            return all_table
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

#Match Product ID to Product Name
def show_ALL_DDB():
    retries = 5
    while True:
        try:
            list1 = r.zrevrange("TopBooks:AllTime", 0, 9)
            return list1
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

def show_ALL_DDB2():
    ALL_DDB = show_ALL_DDB()
    ALL_DDB_list = [i.replace('"', '') for i in ALL_DDB]
    i = 0
    list_ALL_DDB2 = []
    while i < len(ALL_DDB):
        resp = table.get_item(Key={"id": (ALL_DDB_list[i])}, AttributesToGet=["name"])
        list_ALL_DDB2.append(resp['Item'])
        i = i + 1
        if i == len(ALL_DDB):
            return list_ALL_DDB2


#TOP 10Today North America
def show_today_NA():
    retries = 5
    while True:
        try:
            today_NA_table = r.zrevrange("TopBooks:NorthAmerica:Today", 0, 9, withscores=True)
            return today_NA_table
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

#Match Product ID to Product Name
def show_NA_TODAY_DDB():
    retries = 5
    while True:
        try:
            list1 = r.zrevrange("TopBooks:NorthAmerica:Today", 0, 9)
            return list1
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

def show_NA_TODAY_DDB2():
    NA_TODAY_DDB = show_NA_TODAY_DDB()
    NA_TODAY_DDB_list = [i.replace('"', '') for i in NA_TODAY_DDB]
    i = 0
    list_NA_TODAY_DDB2 = []
    while i < len(NA_TODAY_DDB):
        resp = table.get_item(Key={"id": (NA_TODAY_DDB_list[i])}, AttributesToGet=["name"])
        list_NA_TODAY_DDB2.append(resp['Item'])
        i = i + 1
        if i == len(NA_TODAY_DDB):
            return list_NA_TODAY_DDB2


#TOP 10 Today Europe
def show_today_EU():
    retries = 5
    while True:
        try:
            today_EU_table = r.zrevrange("TopBooks:Europe:Today", 0, 9, withscores=True)
            return today_EU_table
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

#Match Product ID to Product Name
def show_EU_TODAY_DDB():
    retries = 5
    while True:
        try:
            list1 = r.zrevrange("TopBooks:Europe:Today", 0, 9)
            return list1
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

def show_EU_TODAY_DDB2():
    EU_TODAY_DDB = show_EU_TODAY_DDB()
    EU_TODAY_DDB_list = [i.replace('"', '') for i in EU_TODAY_DDB]
    i = 0
    list_EU_TODAY_DDB2 = []
    while i < len(EU_TODAY_DDB):
        resp = table.get_item(Key={"id": (EU_TODAY_DDB_list[i])}, AttributesToGet=["name"])
        list_EU_TODAY_DDB2.append(resp['Item'])
        i = i + 1
        if i == len(EU_TODAY_DDB):
            return list_EU_TODAY_DDB2

#TOP 10 Today Global
def show_today_all():
    retries = 5
    while True:
        try:
            today_all_table = r.zrevrange("TopBooks:Today", 0, 9, withscores=True)
            return today_all_table
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

#Match Product ID to Product Name
def show_ALL_TODAY_DDB():
    retries = 5
    while True:
        try:
            list1 = r.zrevrange("TopBooks:Today", 0, 9)
            return list1
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

def show_ALL_TODAY_DDB2():
    ALL_TODAY_DDB = show_ALL_TODAY_DDB()
    ALL_TODAY_DDB_list = [i.replace('"', '') for i in ALL_TODAY_DDB]
    i = 0
    list_ALL_TODAY_DDB2 = []
    while i < len(ALL_TODAY_DDB):
        resp = table.get_item(Key={"id": (ALL_TODAY_DDB_list[i])}, AttributesToGet=["name"])
        list_ALL_TODAY_DDB2.append(resp['Item'])
        i = i + 1
        if i == len(ALL_TODAY_DDB):
            return list_ALL_TODAY_DDB2


app = Flask(__name__)
@app.route("/")
@app.route("/index")
def index():
    count = get_hit_count()
    top10_EU = show_top10_EU()
    top10_NA = show_top10_NA()
    top10_all = show_top10_all()

    today_NA = show_today_NA()
    today_EU = show_today_EU()
    today_all = show_today_all()

    NA_DDB = show_NA_DDB()
    NA_DDB2 = show_NA_DDB2()

    EU_DDB = show_EU_DDB()
    EU_DDB2 = show_EU_DDB2()

    ALL_DDB2 = show_ALL_DDB2()

    NA_TODAY_DDB2 = show_NA_TODAY_DDB2()
    EU_TODAY_DDB2 = show_EU_TODAY_DDB2()
    ALL_TODAY_DDB2 = show_ALL_TODAY_DDB2()


    return render_template("index.html", title="Dashboard", count=count,top10_EU=top10_EU, NA_DDB=NA_DDB, ALL_DDB2=ALL_DDB2, EU_DDB=EU_DDB, EU_DDB2 = EU_DDB2, top10_NA=top10_NA, top10_all=top10_all, today_NA=today_NA, today_EU=today_EU, NA_TODAY_DDB2=NA_TODAY_DDB2, ALL_TODAY_DDB2=ALL_TODAY_DDB2, EU_TODAY_DDB2=EU_TODAY_DDB2, today_all=today_all, NA_DDB2=NA_DDB2, len_NA=len(top10_NA), len_EU=len(top10_EU), len_NA_DDB=len(NA_DDB), len_EU_DDB=len(EU_DDB), len_NA_DDB2=len(NA_DDB2), len_EU_DDB2=len(EU_DDB2), len_all=len(top10_all), len_today_NA=len(today_NA), len_today_EU=len(today_EU), len_today_all=len(today_all),)

@app.after_request
def add_header(response):
    response.cache_control.max_age = 300
    return response


@app.route("/input")
def input():
    return render_template("input.html", title="Dashboard")


@app.route("/save", methods=['POST'])
def save():
    field = request.form['field']
    value = request.form['value']
    ret = w.zincrby('TopBooks:AllTime', field, value)
    app.logger.debug(ret)
    new_value = r.zscore('TopBooks:AllTime', value)
    return render_template('output.html', saved=1, phone=value, value=new_value,)

@app.route("/save_tablet", methods=['POST'])
def save_tablet():
    field_tablet = request.form['TopBooks:Europe:AllTime']
    value_tablet = request.form['TopBooks:Europe:AllTime']
    ret = w.zincrby('top10:tablets', field_tablet, value_tablet)
    app.logger.debug(ret)
    new_value_tablet = r.zscore('TopBooks:AllTime', value_tablet)
    return render_template('output.html', saved_tablet=1, tablet=value_tablet, value_tablet=new_value_tablet,)


@app.route("/get", methods=['POST'])
def get():
    field = request.form['field']
    value = r.get(field)
    if value is None:
        return render_template('output.html', field=field, value="Not defined yet")
    return render_template('output.html', field=field, value=value)

if __name__ == "__main__":
    app.run(host= '0.0.0.0', debug=True)
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0



