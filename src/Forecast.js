import React, { Component } from 'react';
import api from './API/api';
import utils from './helpers.js';
var queryString = require('query-string');
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;
var DayItem = require('./DayItem');
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
    forecastContainer: {
        display: 'flex',
        direction: 'row',
        wrap: 'wrap',
        width: 1200,
        margin: '50px auto'
    }
};

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecastData: [],
            test2: {sys: {
                
            }},
            loading: true
        }
        this.makeRequest = this.makeRequest.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.city = queryString.parse(this.props.location.search).city;
        this.makeRequest(this.city);
    }
    componentWillReceiveProps(nextProps) {
        this.city = queryString.parse(nextProps.location.search).city;
        this.makeRequest(this.city);
    }
    makeRequest(city) {
        this.setState(function () {
            return {
                loading: true
            }
        })

        api.getForecast(city)
            .then(function (res) {
                this.setState(function () {
                    return {
                        loading: false,
                        forecastData: res,
                    }
                })
            }.bind(this))
        this.test(city);

    }
    handleClick(city) {
        city.city = this.city;
        this.props.history.push({
            pathname: '/details/' + this.city,
            state: city,
        })
    }

    test(city) {
        this.setState(function () {
            return {
                loading: true
            }
        })

        api.getCurrentWeather(city)
            .then(function (res) {
                console.log(res);
                this.setState(function () {
                    return {
                        loading: false,
                        test2: res,
                    }
                })
            }.bind(this))
    }
    render() {
        return this.state.loading === true
            ? <h1 className='forecast-header'> Loading </h1>
            : <div>
                <Card>
                    <CardHeader title={this.state.test2.name} subheader={this.state.test2.sys.country}>
                    </CardHeader>

                    <CardContent>
                        <div className='forecast-container'>
                            {this.state.forecastData.list.map(function (listItem, i) {
                                return (
                                    <div key={i}>
                                        <DayItem day={listItem} />
                                        <div className='description-container'>
                                            <Typography color="textSecondary">
                                                {listItem.weather[0].description}
                                            </Typography>
                                            <Typography color="textSecondary">
                                                min temp: {convertTemp(listItem.temp.min)} degrees
                                            </Typography>
                                            <Typography color="textSecondary">
                                                max temp: {convertTemp(listItem.temp.max)} degrees
                                            </Typography>
                                            <Typography color="textSecondary">
                                                humidity: {listItem.humidity}
                                            </Typography>
                                        </div>
                                    </div>
                                )
                            }, this)}
                        </div>

                    </CardContent>
                </Card>

            </div>
    }
}
export default withStyles(styles)(Forecast);