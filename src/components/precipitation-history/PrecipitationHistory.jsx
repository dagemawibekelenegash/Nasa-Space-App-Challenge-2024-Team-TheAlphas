import React, { useState, useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './PrecipitationHistory.css';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ITEMS_PER_PAGE = 5;

const PrecipitationHistory = ({ locations }) => {
    const [selectedLocation, setSelectedLocation] = useState('Gojjam, Ethiopia');
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{ label: 'Precipitation (mm)', data: [] }]
    });
    const [currentPage, setCurrentPage] = useState(0);
    const [currentData, setCurrentData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);

    const chartRef = useRef(null);

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const year = dateString.substring(0, 4);
        const month = dateString.substring(4, 6);
        const day = dateString.substring(6, 8);
        return `${day}-${month}-${year}`;
    };

    const analyzeRainfall = (precipitation) => {
        if (precipitation === -999) return 'No Data';
        if (precipitation === 0) return 'No Rain';
        if (precipitation < 5) return 'Light Rain';
        if (precipitation < 20) return 'Moderate Rain';
        return 'Heavy Rain';
    };

    const prepareChartData = (data) => {
        const labels = Object.keys(data).map(formatDate);
        const values = Object.values(data).map(precipitation => (precipitation === -999 ? 0 : precipitation));

        setChartData({
            labels: labels,
            datasets: [{
                label: 'Precipitation (mm)',
                data: values,
                backgroundColor: '#6A74CC',
                borderColor: '#4B56D2',
                borderWidth: 2,
            }],
        });
    };

    useEffect(() => {
        const selectedData = locations[selectedLocation];
        prepareChartData(selectedData);
        setCurrentData(selectedData);
    }, [selectedLocation, locations]);

    const filteredData = selectedDate
        ? { [selectedDate]: currentData[selectedDate] }
        : currentData;

    const totalPages = Math.ceil(Object.keys(filteredData).length / ITEMS_PER_PAGE);
    const pageData = Object.entries(filteredData).slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

    const prepareChartForCurrentPage = () => {
        const pageLabels = pageData.map(([date]) => formatDate(date));
        const pageValues = pageData.map(([, precipitation]) => (precipitation === -999 ? 0 : precipitation));

        setChartData({
            labels: pageLabels,
            datasets: [{
                label: 'Precipitation (mm)',
                data: pageValues,
                backgroundColor: '#6A74CC',
                borderColor: '#4B56D2',
                borderWidth: 2,
            }],
        });
    };

    useEffect(() => {
        prepareChartForCurrentPage();
    }, [currentPage, filteredData]);


    const calculateMonthlyStats = () => {
        if (!selectedMonth) return { total: 0, average: 0, rainyDays: 0, extremeDays: [], cumulative: 0 };

        const month = selectedMonth.getMonth() + 1;
        const year = selectedMonth.getFullYear();
        const monthData = Object.entries(currentData).filter(([date]) => {
            const dateObj = new Date(date.slice(0, 4), date.slice(4, 6) - 1, date.slice(6, 8));
            return dateObj.getMonth() + 1 === month && dateObj.getFullYear() === year;
        });

        const total = monthData.reduce((sum, [, precipitation]) => (precipitation !== -999 ? sum + precipitation : sum), 0);
        const rainyDays = monthData.filter(([, precipitation]) => precipitation > 0).length;
        const average = rainyDays > 0 ? (total / rainyDays).toFixed(2) : 0;

        const extremeDays = monthData.filter(([, precipitation]) => precipitation >= 20).map(([date]) => formatDate(date));
        const cumulative = monthData.reduce((sum, [, precipitation]) => (precipitation !== -999 ? sum + precipitation : sum), 0);

        return { total, average, rainyDays, extremeDays, cumulative };
    };

    const { total, average, rainyDays, extremeDays, cumulative } = calculateMonthlyStats();


    return (
        <div className="precipitation-history">
            <h2>Past Precipitation Data</h2>

            <div className="search-container">
                <select onChange={(e) => setSelectedLocation(e.target.value)} value={selectedLocation}>
                    {Object.keys(locations).map(location => (
                        <option key={location} value={location}>{location}</option>
                    ))}
                </select>
                <DatePicker
                    selected={selectedDate ? new Date(selectedDate.slice(0, 4), selectedDate.slice(4, 6) - 1, selectedDate.slice(6, 8)) : null}
                    onChange={date => setSelectedDate(date ? date.toISOString().slice(0, 10).replace(/-/g, '') : null)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select a date"
                    className="date-picker"
                />
            </div>

            {chartData.labels.length > 0 && (
                <div className="chart-container">
                    <Bar
                        ref={chartRef}
                        data={chartData}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            animations: {
                                tension: {
                                    duration: 100,
                                    easing: 'linear',
                                    from: 1,
                                    to: 0,
                                    loop: false
                                },
                                x: false,
                                y: false,
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                },
                                x: {
                                    grid: {
                                        display: false,
                                    },
                                },
                            },
                        }}
                    />
                </div>
            )}

            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Precipitation (mm/day)</th>
                        <th>Rainfall Analysis</th>
                    </tr>
                </thead>
                <tbody>
                    {pageData.length > 0 ? (
                        pageData.map(([date, precipitation]) => (
                            <tr key={date}>
                                <td>{formatDate(date)}</td>
                                <td>{precipitation !== -999 ? precipitation : 'No Data'}</td>
                                <td>{analyzeRainfall(precipitation)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No data found for this date.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="pagination">
                <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))} disabled={currentPage === 0}>Previous</button>
                <span>{currentPage + 1} / {totalPages}</span>
                <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))} disabled={currentPage === totalPages - 1}>Next</button>
            </div>

            <div className="summary">
                <h3>Monthly Summary</h3>
                <div>
                    <label htmlFor="month-picker">Select Month:</label>
                    <DatePicker
                        selected={selectedMonth}
                        onChange={date => setSelectedMonth(date)}
                        showMonthYearPicker
                        dateFormat="MMMM yyyy"
                        placeholderText="Select month"
                        className="month-picker"
                    />
                </div>
                {selectedMonth && (
                    <div className="summary-stats">
                        <p>Total Precipitation: {total.toFixed(2)} mm</p>
                        <p>Average Precipitation: {average} mm/day</p>
                        <p>Rainy Days: {rainyDays}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PrecipitationHistory;
