import moment from 'moment'

export function dateFormat(value: string, format: string = 'YYYY-MM-DD HH:mm:ss') {
    return moment(value).format(format)
}