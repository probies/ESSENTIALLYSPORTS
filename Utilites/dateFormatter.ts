export const handleDateFormat = (strDate: string) => {
    if (strDate?.includes('/')) return strDate;
    const DD = new Date(strDate).getDate();
    const MM = new Date(strDate).getMonth() + 1;
    const YYYY = new Date(strDate).getFullYear();
    return DD + '/' + MM + '/' + YYYY;
}