import "./ExpenseDate.css"

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="expence-date">
            <div className="expence-item_month">{month}</div>
            <div className="expence-item_day">{day}</div>
            <div className="expence-item_year">{year}</div>
        </div>
    );
}

export default ExpenseDate;