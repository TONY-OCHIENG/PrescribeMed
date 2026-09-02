
export const formatDate = (date) => {
    const newDate = new Date(date)
    const formatted = newDate.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
        });

    return formatted

}

export const formatDates = (date) => {
   const newdate = new Date(date);

    const yyyy = newdate.getUTCFullYear();
    const mm = String(newdate.getUTCMonth() + 1).padStart(2, '0');
    const d = newdate.getUTCDate();

    const hh = String(newdate.getUTCHours()).padStart(2, '0');
    const min = String(newdate.getUTCMinutes()).padStart(2, '0');
    const ss = String(newdate.getUTCSeconds()).padStart(2, '0');

    const formatted = `${yyyy}-${mm}-${d} ${hh}:${min}:${ss}`;
    return formatted
}