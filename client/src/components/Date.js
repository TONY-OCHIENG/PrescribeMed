
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