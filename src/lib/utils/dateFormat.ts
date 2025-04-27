export function formatDate(date: string) {
    const [year, month] = date.split('-');

    return `${month}/${year}`;
}