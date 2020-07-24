import moment from 'moment';

const formatDate = (date: Date): string => moment(date).format('DD/MM/YYYY');
export default formatDate;

// 2020-07-19T05:17:49.654Z
