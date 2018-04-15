var React = require('react');
var utils = require('./helpers');
var getDate = utils.getDate;
import Typography from 'material-ui/Typography';

function DayItem(props) {
  var date = getDate(props.day.dt);
  return (
    <div onClick={props.onClick} className='dayContainer'>
      <Typography className='subheader' variant="headline" component="h2">
        {date}
      </Typography>
    </div>
  )
}

module.exports = DayItem;